import { NextResponse } from "next/server";

import { analyzeTicket } from "@/features/agent-workbench/workflow";
import type { AgentAssignment, AgentPlan, AgentRole, TicketInput } from "@/features/agent-workbench/types";

type Provider = "groq" | "openai";

type AnalyzeRequest = {
  provider?: Provider;
  ticket?: TicketInput;
};

type ProviderConfig = {
  apiKey?: string;
  endpoint: string;
  model: string;
};

const validRoles = new Set<AgentRole>(["frontend", "backend", "reviewer", "qa", "deployment"]);
const validClassifications = new Set<AgentPlan["classification"]>([
  "frontend",
  "backend",
  "full-stack",
  "delivery"
]);
const validRisks = new Set<AgentPlan["riskLevel"]>(["low", "medium", "high"]);

function getProviderConfig(provider: Provider): ProviderConfig {
  if (provider === "openai") {
    return {
      apiKey: process.env.OPENAI_API_KEY,
      endpoint: "https://api.openai.com/v1/chat/completions",
      model: process.env.OPENAI_MODEL ?? "gpt-5.4-mini"
    };
  }

  return {
    apiKey: process.env.GROQ_API_KEY,
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile"
  };
}

function isTicketInput(value: unknown): value is TicketInput {
  if (!value || typeof value !== "object") {
    return false;
  }

  const ticket = value as Record<string, unknown>;

  return (
    typeof ticket.ticketKey === "string" &&
    typeof ticket.title === "string" &&
    typeof ticket.description === "string" &&
    typeof ticket.acceptanceCriteria === "string"
  );
}

function normalizeStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  const normalized = value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);

  return normalized.length > 0 ? normalized : fallback;
}

function normalizeAssignment(value: unknown, fallback?: AgentAssignment): AgentAssignment | null {
  if (!value || typeof value !== "object") {
    return fallback ?? null;
  }

  const assignment = value as Record<string, unknown>;
  const role = typeof assignment.role === "string" && validRoles.has(assignment.role as AgentRole)
    ? (assignment.role as AgentRole)
    : fallback?.role;

  if (!role) {
    return null;
  }

  return {
    role,
    title:
      typeof assignment.title === "string" && assignment.title.trim().length > 0
        ? assignment.title
        : fallback?.title ?? `${role} agent`,
    reason:
      typeof assignment.reason === "string" && assignment.reason.trim().length > 0
        ? assignment.reason
        : fallback?.reason ?? "Selected by the orchestrator for this Jira story.",
    scope: normalizeStringArray(assignment.scope, fallback?.scope ?? ["Analyze and execute the assigned scope."])
  };
}

function normalizePlan(value: unknown, fallback: AgentPlan): AgentPlan {
  if (!value || typeof value !== "object") {
    return fallback;
  }

  const plan = value as Record<string, unknown>;
  const rawAssignments = Array.isArray(plan.assignments) ? plan.assignments : [];
  const normalizedAssignments = rawAssignments
    .map((assignment) => normalizeAssignment(assignment))
    .filter((assignment): assignment is AgentAssignment => Boolean(assignment));

  const assignments = normalizedAssignments.length > 0 ? normalizedAssignments : fallback.assignments;
  const roles = new Set(assignments.map((assignment) => assignment.role));

  for (const requiredRole of ["reviewer", "qa"] satisfies AgentRole[]) {
    if (!roles.has(requiredRole)) {
      const fallbackAssignment = fallback.assignments.find((assignment) => assignment.role === requiredRole);

      if (fallbackAssignment) {
        assignments.push(fallbackAssignment);
      }
    }
  }

  return {
    classification:
      typeof plan.classification === "string" &&
      validClassifications.has(plan.classification as AgentPlan["classification"])
        ? (plan.classification as AgentPlan["classification"])
        : fallback.classification,
    riskLevel:
      typeof plan.riskLevel === "string" && validRisks.has(plan.riskLevel as AgentPlan["riskLevel"])
        ? (plan.riskLevel as AgentPlan["riskLevel"])
        : fallback.riskLevel,
    summary:
      typeof plan.summary === "string" && plan.summary.trim().length > 0 ? plan.summary : fallback.summary,
    assumptions: normalizeStringArray(plan.assumptions, fallback.assumptions),
    assignments
  };
}

function buildPrompt(ticket: TicketInput) {
  return `Analyze this Jira story and return only valid JSON.

Ticket key: ${ticket.ticketKey}
Title: ${ticket.title}
Description:
${ticket.description}

Acceptance criteria:
${ticket.acceptanceCriteria}

Return this exact JSON shape:
{
  "classification": "frontend" | "backend" | "full-stack" | "delivery",
  "riskLevel": "low" | "medium" | "high",
  "summary": "short orchestrator summary",
  "assumptions": ["assumption 1"],
  "assignments": [
    {
      "role": "frontend" | "backend" | "reviewer" | "qa" | "deployment",
      "title": "agent title",
      "reason": "why this agent is needed",
      "scope": ["specific responsibility"]
    }
  ]
}

Rules:
- Include frontend only if UI, client, browser, React, page, component, form, layout, accessibility, or frontend state work is needed.
- Include backend only if API, database, server, auth, schema, service, webhook, queue, cache, or backend validation work is needed.
- Include both frontend and backend for full-stack stories.
- Always include reviewer and QA.
- Include deployment only when release, deployment, CI/CD, environment, or rollout work is mentioned.
- Keep the plan practical for a software delivery team.
- Do not include markdown.`;
}

async function requestLlmPlan(provider: Provider, ticket: TicketInput) {
  const config = getProviderConfig(provider);

  if (!config.apiKey) {
    return {
      plan: analyzeTicket(ticket),
      provider,
      model: config.model,
      source: "deterministic-fallback" as const,
      warning: `${provider === "groq" ? "GROQ_API_KEY" : "OPENAI_API_KEY"} is not configured. Showing deterministic fallback analysis.`
    };
  }

  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      model: config.model,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a software delivery orchestrator for a role-specific multi-agent engineering team. You produce concise, valid JSON only."
        },
        {
          role: "user",
          content: buildPrompt(ticket)
        }
      ]
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Provider request failed with ${response.status}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Provider returned an empty response.");
  }

  const parsed = JSON.parse(content) as unknown;
  const fallback = analyzeTicket(ticket);

  return {
    plan: normalizePlan(parsed, fallback),
    provider,
    model: config.model,
    source: "llm" as const
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AnalyzeRequest;
    const provider = body.provider === "openai" ? "openai" : "groq";

    if (!isTicketInput(body.ticket)) {
      return NextResponse.json({ error: "Invalid ticket payload." }, { status: 400 });
    }

    const result = await requestLlmPlan(provider, body.ticket);

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to analyze ticket.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
