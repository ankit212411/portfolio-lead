import type { AgentAssignment, AgentPlan, AgentRole, TicketInput, WorkflowStep } from "./types";

const frontendTerms = [
  "ui",
  "ux",
  "react",
  "component",
  "page",
  "form",
  "button",
  "css",
  "responsive",
  "frontend",
  "client",
  "browser",
  "layout",
  "accessibility"
];

const backendTerms = [
  "api",
  "endpoint",
  "database",
  "db",
  "server",
  "backend",
  "service",
  "schema",
  "auth",
  "token",
  "migration",
  "webhook",
  "queue",
  "cache"
];

const deploymentTerms = ["deploy", "deployment", "release", "vercel", "ci", "cd", "pipeline", "environment"];

function countMatches(text: string, terms: string[]) {
  return terms.reduce((count, term) => (text.includes(term) ? count + 1 : count), 0);
}

function createAssignment(role: AgentRole, reason: string): AgentAssignment {
  const assignmentMap: Record<AgentRole, Omit<AgentAssignment, "role" | "reason">> = {
    frontend: {
      title: "Frontend Implementation Agent",
      scope: [
        "Identify affected routes, components, state, forms, and UI contracts.",
        "Implement the client-facing change behind typed, reusable boundaries.",
        "Cover responsive, accessibility, loading, empty, and error states."
      ]
    },
    backend: {
      title: "Backend Implementation Agent",
      scope: [
        "Identify affected APIs, services, persistence, validation, and auth boundaries.",
        "Implement service changes with typed request and response contracts.",
        "Add migration, logging, and failure-handling notes where required."
      ]
    },
    reviewer: {
      title: "Code Review Agent",
      scope: [
        "Review implementation diffs against the ticket and acceptance criteria.",
        "Check architecture fit, naming, duplication, security, and regression risk.",
        "Produce blocking findings, non-blocking suggestions, and merge readiness."
      ]
    },
    qa: {
      title: "QA Verification Agent",
      scope: [
        "Translate acceptance criteria into verification scenarios.",
        "Identify unit, integration, regression, and exploratory checks.",
        "Produce a pass/fail QA summary and remaining risk notes."
      ]
    },
    deployment: {
      title: "Deployment Readiness Agent",
      scope: [
        "Check release notes, environment variables, rollout order, and rollback path.",
        "Confirm CI status, build output, and deployment risk.",
        "Prepare human approval checklist before production release."
      ]
    }
  };

  return {
    role,
    reason,
    ...assignmentMap[role]
  };
}

export function analyzeTicket(ticket: TicketInput): AgentPlan {
  const combined = `${ticket.ticketKey} ${ticket.title} ${ticket.description} ${ticket.acceptanceCriteria}`.toLowerCase();
  const frontendScore = countMatches(combined, frontendTerms);
  const backendScore = countMatches(combined, backendTerms);
  const deploymentScore = countMatches(combined, deploymentTerms);
  const needsFrontend = frontendScore > 0 || (frontendScore === 0 && backendScore === 0);
  const needsBackend = backendScore > 0;
  const needsDeployment = deploymentScore > 0;
  const assignments: AgentAssignment[] = [];

  if (needsFrontend) {
    assignments.push(
      createAssignment(
        "frontend",
        needsBackend
          ? "Ticket includes UI/client work alongside backend-facing behavior."
          : "Ticket appears primarily client-facing or does not mention backend-owned systems."
      )
    );
  }

  if (needsBackend) {
    assignments.push(
      createAssignment(
        "backend",
        needsFrontend
          ? "Ticket mentions service/API/data concerns that should be isolated from UI implementation."
          : "Ticket appears primarily API, service, data, or server-side focused."
      )
    );
  }

  assignments.push(createAssignment("reviewer", "Every implementation path needs a review gate before QA."));
  assignments.push(createAssignment("qa", "Acceptance criteria must be converted into explicit verification checks."));

  if (needsDeployment) {
    assignments.push(createAssignment("deployment", "Ticket references release or deployment concerns."));
  }

  const classification =
    needsFrontend && needsBackend ? "full-stack" : needsBackend ? "backend" : needsDeployment ? "delivery" : "frontend";

  const riskLevel =
    needsBackend || needsDeployment || combined.includes("payment") || combined.includes("checkout")
      ? "high"
      : combined.includes("auth") || combined.includes("permission")
        ? "medium"
        : "low";

  return {
    classification,
    riskLevel,
    summary:
      "The orchestrator will decompose the Jira story, assign implementation to the required role-specific agents, run review and QA gates, then pause for human approval before release.",
    assumptions: [
      "Agents work from the Jira description and acceptance criteria provided in this console.",
      "Implementation agents should work in isolated branches or patches in a real codebase.",
      "Reviewer and QA agents must use external checks such as tests, build output, screenshots, or API responses where available.",
      "Human approval is required before merge or deployment."
    ],
    assignments
  };
}

export function createWorkflowSteps(plan: AgentPlan): WorkflowStep[] {
  const implementationSteps = plan.assignments
    .filter((assignment) => assignment.role === "frontend" || assignment.role === "backend")
    .map((assignment) => ({
      id: assignment.role,
      label: assignment.title,
      owner: assignment.role === "frontend" ? "Frontend Agent" : "Backend Agent",
      status: "complete" as const,
      output:
        assignment.role === "frontend"
          ? "Prepared UI implementation scope, state boundaries, component impact, and frontend test notes."
          : "Prepared API/service implementation scope, contract impact, persistence concerns, and backend test notes."
    }));

  return [
    ...implementationSteps,
    {
      id: "reviewer",
      label: "Code Review Gate",
      owner: "Reviewer Agent",
      status: "complete",
      output: "Reviewed implementation plan for architecture fit, regression risk, acceptance coverage, and merge readiness."
    },
    {
      id: "qa",
      label: "QA Verification Gate",
      owner: "QA Agent",
      status: "complete",
      output: "Generated verification scenarios from acceptance criteria and identified release confidence checks."
    },
    {
      id: "human-approval",
      label: "Human Approval",
      owner: "Engineering Lead",
      status: "active",
      output: "Awaiting human approval before merge or deployment."
    }
  ];
}
