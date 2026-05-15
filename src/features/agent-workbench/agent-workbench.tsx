"use client";

import { useMemo, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { analyzeTicket, createWorkflowSteps } from "./workflow";
import type { AgentAnalysisResult, AgentPlan, LlmProvider, TicketInput, WorkflowStep } from "./types";

const initialTicket: TicketInput = {
  ticketKey: "ECOM-482",
  title: "Add saved delivery address selection to checkout",
  description:
    "Customer should be able to choose a saved address during checkout. If no saved address exists, the checkout should continue to show the manual shipping form. API may need to return saved addresses for authenticated shoppers.",
  acceptanceCriteria:
    "Given an authenticated shopper with saved addresses, show a selectable address list. When an address is selected, populate checkout shipping details. If the API fails, show a recoverable error and keep manual entry available."
};

const roleStyles = {
  frontend: "border-accent bg-accent-soft",
  backend: "border-accent bg-accent-soft",
  reviewer: "border-line bg-surface",
  qa: "border-line bg-surface",
  deployment: "border-line bg-surface"
} as const;

function Field({
  label,
  value,
  onChange,
  multiline = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={5}
          className="resize-y rounded-lg border border-line bg-sand px-4 py-3 text-sm font-normal leading-6 text-ink outline-none transition focus:border-accent"
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="rounded-lg border border-line bg-sand px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-accent"
        />
      )}
    </label>
  );
}

function StepStatus({ step }: { step: WorkflowStep }) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        step.status === "complete" && "bg-accent text-[#101820]",
        step.status === "active" && "bg-sand text-ink",
        step.status === "pending" && "bg-sand text-muted",
        step.status === "blocked" && "bg-accent-soft text-ink"
      )}
    >
      {step.status}
    </span>
  );
}

export function AgentWorkbench() {
  const [ticket, setTicket] = useState<TicketInput>(initialTicket);
  const [provider, setProvider] = useState<LlmProvider>("groq");
  const [plan, setPlan] = useState<AgentPlan | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AgentAnalysisResult | null>(null);
  const [steps, setSteps] = useState<WorkflowStep[]>([]);
  const [isHumanApproved, setIsHumanApproved] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  const canAnalyze = useMemo(
    () =>
      ticket.ticketKey.trim().length > 0 &&
      ticket.title.trim().length > 0 &&
      ticket.description.trim().length > 0 &&
      ticket.acceptanceCriteria.trim().length > 0,
    [ticket]
  );

  function updateTicket<Key extends keyof TicketInput>(key: Key, value: TicketInput[Key]) {
    setTicket((current) => ({ ...current, [key]: value }));
    setPlan(null);
    setAnalysisResult(null);
    setSteps([]);
    setIsHumanApproved(false);
    setAnalysisError("");
  }

  async function handleAnalyze() {
    if (!canAnalyze) {
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError("");
    setSteps([]);
    setIsHumanApproved(false);

    try {
      const response = await fetch("/api/agent-workbench/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ provider, ticket })
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Unable to analyze ticket.");
      }

      const result = (await response.json()) as AgentAnalysisResult;
      setAnalysisResult(result);
      setPlan(result.plan);
    } catch (error) {
      const fallbackPlan = analyzeTicket(ticket);
      const message = error instanceof Error ? error.message : "AI analysis failed.";

      setAnalysisError(`${message} Showing local deterministic fallback so the demo remains usable.`);
      setAnalysisResult({
        plan: fallbackPlan,
        provider,
        model: "local deterministic analyzer",
        source: "local-fallback",
        warning: "The API request failed. This result was generated locally."
      });
      setPlan(fallbackPlan);
    } finally {
      setIsAnalyzing(false);
    }
  }

  function handleApprovePlan() {
    if (!plan) {
      return;
    }

    setSteps(createWorkflowSteps(plan));
    setIsHumanApproved(false);
  }

  function handleHumanApproval() {
    setSteps((current) =>
      current.map((step) =>
        step.id === "human-approval"
          ? { ...step, status: "complete", output: "Human approval captured. The work is ready for merge or deployment handoff." }
          : step
      )
    );
    setIsHumanApproved(true);
  }

  return (
    <div className="pb-24">
      <Container className="pt-12 md:pt-16">
        <section className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
              Multi-Agent Delivery Console
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
              Role-specific AI agent team for Jira-driven software delivery
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-muted md:text-base">
              A portable workbench concept that analyzes a Jira story, classifies frontend/backend scope, proposes agent assignments, runs reviewer and QA gates, and pauses for human approval.
            </p>
          </div>
          {/* <div className="rounded-xl border border-line bg-deep p-6 text-deep-ink shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portable folder model</p>
            <p className="mt-4 text-sm leading-7 text-deep-muted">
              The demo logic lives under <span className="font-mono text-deep-ink">src/features/agent-workbench</span> so it can be extracted into a package or copied into another project with minimal app-shell wiring.
            </p>
          </div> */}
        </section>
      </Container>

      <Container className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <section className="rounded-xl border border-line bg-surface p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-2xl tracking-tight text-ink">Jira story input</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Paste ticket details and acceptance criteria. The orchestrator will decide which agents are needed.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                LLM provider
                <select
                  value={provider}
                  onChange={(event) => {
                    setProvider(event.target.value as LlmProvider);
                    setPlan(null);
                    setAnalysisResult(null);
                    setSteps([]);
                    setIsHumanApproved(false);
                    setAnalysisError("");
                  }}
                  className="rounded-lg border border-line bg-sand px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-accent"
                >
                  <option value="groq">Groq - default</option>
                  <option value="openai">OpenAI</option>
                </select>
              </label>
              <Field label="Ticket key" value={ticket.ticketKey} onChange={(value) => updateTicket("ticketKey", value)} />
              <Field label="Story title" value={ticket.title} onChange={(value) => updateTicket("title", value)} />
              <Field
                label="Requirement details"
                value={ticket.description}
                onChange={(value) => updateTicket("description", value)}
                multiline
              />
              <Field
                label="Acceptance criteria"
                value={ticket.acceptanceCriteria}
                onChange={(value) => updateTicket("acceptanceCriteria", value)}
                multiline
              />
            </div>

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!canAnalyze || isAnalyzing}
              className={buttonVariants({ className: "mt-6 w-full" })}
            >
              {isAnalyzing ? "Analyzing with orchestrator..." : "Analyze ticket"}
            </button>
          </section>

          <section className="space-y-6">
            <div className="rounded-xl border border-line bg-surface p-6 shadow-soft">
              <p className="font-display text-2xl tracking-tight text-ink">Orchestrator plan</p>
              {!plan ? (
                <p className="mt-4 text-sm leading-7 text-muted">
                  Run analysis to see scope classification, risk level, assumptions, and selected agent team.
                </p>
              ) : (
                <div className="mt-5 space-y-6">
                  {analysisResult ? (
                    <div className="grid gap-3 rounded-lg border border-line bg-sand p-4 text-sm text-muted md:grid-cols-3">
                      <p>
                        <span className="font-semibold text-ink">Provider:</span> {analysisResult.provider}
                      </p>
                      <p>
                        <span className="font-semibold text-ink">Model:</span> {analysisResult.model}
                      </p>
                      <p>
                        <span className="font-semibold text-ink">Mode:</span> {analysisResult.source}
                      </p>
                    </div>
                  ) : null}

                  {analysisResult?.warning || analysisError ? (
                    <div className="rounded-lg border border-accent bg-accent-soft p-4 text-sm leading-6 text-ink">
                      {analysisError || analysisResult?.warning}
                    </div>
                  ) : null}

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-line bg-sand p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Classification</p>
                      <p className="mt-2 font-display text-2xl tracking-tight text-ink">{plan.classification}</p>
                    </div>
                    <div className="rounded-lg border border-line bg-sand p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Risk</p>
                      <p className="mt-2 font-display text-2xl tracking-tight text-ink">{plan.riskLevel}</p>
                    </div>
                    <div className="rounded-lg border border-line bg-sand p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Agents</p>
                      <p className="mt-2 font-display text-2xl tracking-tight text-ink">{plan.assignments.length}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-muted">{plan.summary}</p>

                  <div className="space-y-3">
                    {plan.assignments.map((assignment) => (
                      <article
                        key={assignment.role}
                        className={cn("rounded-lg border p-4", roleStyles[assignment.role])}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="font-display text-xl tracking-tight text-ink">{assignment.title}</h3>
                          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                            {assignment.role}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted">{assignment.reason}</p>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                          {assignment.scope.map((scopeItem) => (
                            <li key={scopeItem} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span>{scopeItem}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>

                  <div className="rounded-lg border border-line bg-sand p-4">
                    <p className="font-semibold text-ink">Assumptions</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                      {plan.assumptions.map((assumption) => (
                        <li key={assumption}>- {assumption}</li>
                      ))}
                    </ul>
                  </div>

                  <button type="button" onClick={handleApprovePlan} className={buttonVariants({ className: "w-full" })}>
                    Approve plan and simulate agents
                  </button>
                </div>
              )}
            </div>

            {steps.length > 0 ? (
              <div className="rounded-xl border border-line bg-surface p-6 shadow-soft">
                <p className="font-display text-2xl tracking-tight text-ink">Execution workflow</p>
                <div className="mt-5 space-y-4">
                  {steps.map((step) => (
                    <article key={step.id} className="rounded-lg border border-line bg-sand p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-ink">{step.label}</p>
                          <p className="mt-1 text-sm text-muted">{step.owner}</p>
                        </div>
                        <StepStatus step={step} />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted">{step.output}</p>
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleHumanApproval}
                  disabled={isHumanApproved}
                  className={buttonVariants({ variant: isHumanApproved ? "secondary" : "primary", className: "mt-5 w-full" })}
                >
                  {isHumanApproved ? "Human approval captured" : "Approve for merge/deploy"}
                </button>
              </div>
            ) : null}
          </section>
        </div>
      </Container>
    </div>
  );
}
