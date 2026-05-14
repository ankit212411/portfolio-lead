import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "AI-Assisted Engineering Delivery System",
  description:
    "A practical multi-agent delivery workflow for converting Jira-style requirements into scoped implementation, code review, QA, and human approval stages."
};

const workflowStages = [
  {
    title: "Requirement intake",
    description:
      "Capture Jira ticket context, acceptance criteria, platform constraints, risk areas, and definition of done before any implementation starts."
  },
  {
    title: "Scope classification",
    description:
      "Classify the work as frontend, backend, full-stack, QA-heavy, or architecture-sensitive so only the relevant specialist agents are activated."
  },
  {
    title: "Parallel execution plan",
    description:
      "Split implementation into owned workstreams with explicit boundaries, expected file areas, review criteria, and rollback considerations."
  },
  {
    title: "Review and QA gates",
    description:
      "Route changes through reviewer and QA agents for code quality, acceptance criteria coverage, regression checks, and release notes."
  },
  {
    title: "Human approval",
    description:
      "Keep final approval with the engineering lead so AI improves delivery speed without bypassing risk management or accountability."
  }
];

const architectureBlocks = [
  {
    title: "LLM orchestrator",
    detail:
      "Analyzes the ticket, identifies work type, selects agents, creates the execution plan, and explains the reasoning before implementation begins."
  },
  {
    title: "Role-specific agents",
    detail:
      "Frontend, backend, reviewer, and QA agents operate with separate responsibilities so parallel work does not blur ownership."
  },
  {
    title: "Approval ledger",
    detail:
      "Human checkpoints capture scope approval, review approval, QA readiness, and release approval for enterprise auditability."
  }
];

const outcomes = [
  {
    value: "25-35%",
    label: "Planning time reduction",
    detail: "Expected reduction in ticket breakdown effort once acceptance criteria and agent routing are standardized."
  },
  {
    value: "2x",
    label: "Review coverage",
    detail: "Reviewer and QA stages are explicit, making acceptance criteria, edge cases, and regression checks harder to skip."
  },
  {
    value: "Lower risk",
    label: "Human-controlled release",
    detail: "AI assists planning and verification, while final merge and deployment approval stays with the engineering lead."
  }
];

export default function MultiAgentDeliveryPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="space-y-10">
        <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
          <div className="flex flex-wrap gap-3">
            <Badge>AI-Assisted Delivery</Badge>
            <Badge>Engineering Workflow</Badge>
            <Badge>Human Approval</Badge>
          </div>
          <div className="mt-6 max-w-4xl space-y-4">
            <h1 className="font-display text-4xl tracking-tight text-ink md:text-6xl">
              Multi-agent workflow for turning requirements into safer engineering delivery
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">
              This is a product-oriented delivery system, not an academic AI experiment. It models how a technical lead could use role-specific agents to analyze Jira work, split frontend and backend scope, coordinate review and QA, and keep final approval with a human owner.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className={buttonVariants({ variant: "secondary", className: "justify-center" })}>
              Back to projects
            </Link>
            <Link href="/contact" className={buttonVariants({ className: "justify-center" })}>
              Discuss implementation use cases
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.label} className="rounded-lg border border-line bg-surface p-6 shadow-crisp">
              <p className="font-display text-4xl tracking-tight text-ink">{outcome.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                {outcome.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{outcome.detail}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-line bg-deep p-8 text-deep-ink shadow-soft">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-deep-muted">Operating model</p>
            <h2 className="font-display text-3xl tracking-tight text-deep-ink">
              Designed for engineering productivity, review quality, and controlled modernization
            </h2>
            <p className="text-sm leading-7 text-deep-muted">
              The system is intended for teams modernizing ecommerce or SaaS codebases where tickets often touch multiple layers, context is distributed, and release risk needs visible checkpoints.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {workflowStages.map((stage) => (
              <article key={stage.title} className="rounded-md border border-onInk-line bg-onInk-surface p-5">
                <h3 className="font-display text-xl tracking-tight text-deep-ink">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-deep-muted">{stage.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-line bg-surface p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
              Architecture summary
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
              A portable layer that can sit beside an existing codebase
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The long-term direction is a reusable package that can be added to different repositories, read project context, ingest Jira tickets, and coordinate agent work without forcing the host application to change its product code.
            </p>
          </div>
          <div className="grid gap-4">
            {architectureBlocks.map((block) => (
              <article key={block.title} className="rounded-lg border border-line bg-surface p-6 shadow-crisp">
                <h3 className="font-display text-2xl tracking-tight text-ink">{block.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{block.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
