import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Multi-Agent Parallel Systems Research",
  description:
    "Research brief by Ankit Suman on multi-agent AI systems, architecture patterns, enterprise adoption, risks, and use cases for product and services organizations."
};

const architecturePatterns = [
  {
    title: "Orchestrator-worker",
    fit: "Research, pre-sales discovery, audits, incident triage, and delivery planning.",
    strength: "Clear control layer, scoped delegation, and easier auditability.",
    constraint: "The orchestrator can become a bottleneck if planning quality is weak."
  },
  {
    title: "Peer agents with shared state",
    fit: "Large refactors, migrations, code modernization, test generation, and documentation backfills.",
    strength: "High throughput when agents work against git, CI, or a shared artifact store.",
    constraint: "Requires conflict control, task ownership, merge discipline, and external tests."
  },
  {
    title: "Hierarchical specialist teams",
    fit: "Product, engineering, QA, cloud operations, security, and client delivery workflows.",
    strength: "Maps naturally to cross-functional enterprise delivery structures.",
    constraint: "Needs stronger observability, governance, and role boundaries."
  },
  {
    title: "Reviewer-executor loops",
    fit: "Quality-sensitive code, compliance, security recommendations, and customer-facing deliverables.",
    strength: "Improves quality through critique, tests, verification, and review gates.",
    constraint: "Adds latency and cost, so it should be used for medium and high-risk outputs."
  }
];

const useCases = [
  "Legacy-to-modern migration planning",
  "Large codebase refactoring",
  "RFP and RFI response generation",
  "Incident triage and postmortems",
  "Knowledge base upkeep",
  "QA acceleration and regression investigation"
];

const phases = [
  {
    title: "Phase 1",
    label: "Internal pilots",
    detail:
      "Start with low-risk, high-measurement workflows such as repository analysis, documentation synthesis, release-readiness reviews, or incident summaries."
  },
  {
    title: "Phase 2",
    label: "Engineering integration",
    detail:
      "Connect the strongest patterns to git, CI/CD, ticketing, and internal knowledge systems with reviewer agents and human approval gates."
  },
  {
    title: "Phase 3",
    label: "Cross-functional expansion",
    detail:
      "Extend into product, support, and consulting operations with role-specific agent teams, reusable templates, access controls, and observability."
  }
];

export default function MultiAgentResearchPage() {
  return (
    <div className="pb-24">
      <Container className="pt-12 md:pt-20">
        <section className="grid gap-10 border-b border-line pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-3">
              <Badge>AI Systems Research</Badge>
              <Badge>Enterprise Delivery</Badge>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-5xl font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
                Multi-agent parallel systems for complex enterprise work
              </h1>
              <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">
                A practical research brief on how multiple AI agents can work concurrently through orchestrators, shared repositories, reviewer loops, and tool-centered workflows to improve engineering and knowledge work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#architecture" className={buttonVariants({ className: "justify-center" })}>
                Review architectures
              </Link>
              <Link href="/projects" className={buttonVariants({ variant: "secondary", className: "justify-center" })}>
                Back to projects
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-deep p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Research conclusion</p>
            <p className="mt-5 font-display text-3xl font-semibold tracking-tight text-deep-ink">
              Multi-agent systems work best when the work is parallelizable, evidence-based, and validated by external checks.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-onInk-line bg-onInk-line">
              {["Clear task decomposition", "Shared source of truth", "Reviewer and test gates", "Human approval for risk"].map((item) => (
                <div key={item} className="bg-onInk-surface p-4 text-sm font-medium text-deep-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <Container className="pt-16">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Executive Summary</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              A new operating model for work that can be decomposed
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted md:text-base">
            <p>
              Multi-agent parallel systems use several LLM-based agents working concurrently on a shared objective instead of relying on one model session to complete an entire task end to end.
            </p>
            <p>
              The strongest business case is not simply “more AI.” It is a workflow model for high-effort engineering and knowledge work: large refactors, platform migrations, incident analysis, RFP responses, QA acceleration, documentation generation, and delivery planning.
            </p>
            <p>
              The practical recommendation is selective adoption through bounded internal pilots with clear inputs, measurable outputs, and human oversight gates.
            </p>
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section id="architecture" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Architecture patterns</h2>
            <div className="mx-auto mt-6 h-14 w-px bg-accent" />
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {architecturePatterns.map((pattern) => (
              <article key={pattern.title} className="min-w-0 bg-surface p-6">
                <h3 className="text-contained font-display text-2xl font-semibold tracking-tight text-ink">
                  {pattern.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                  <p>
                    <span className="font-semibold text-ink">Best fit:</span> {pattern.fit}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Strength:</span> {pattern.strength}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Constraint:</span> {pattern.constraint}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Enterprise Impact</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Where the model can create real leverage
            </h2>
            <p className="text-sm leading-7 text-muted">
              The best early candidates are workflows that already have structured inputs like repositories, tickets, logs, test suites, design docs, runbooks, or knowledge bases.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="rounded-lg border border-line bg-surface p-5 shadow-crisp">
                <p className="font-medium text-ink">{useCase}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="rounded-xl border border-line bg-deep p-8 text-deep-ink shadow-soft md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Risks and Constraints</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                More agents do not automatically mean better outcomes
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-deep-muted">
              <p>
                Multi-agent coordination helps most on parallelizable workloads and can degrade performance on sequential tasks. Architecture selection matters.
              </p>
              <p>
                The system needs task design, output contracts, observability, access controls, and review gates because failures can emerge from coordination overhead rather than model quality alone.
              </p>
              <p>
                Token cost, latency, data permissions, and enterprise auditability must be measured through pilots instead of assumed from generic AI productivity claims.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Recommended Rollout</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Phased adoption plan</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {phases.map((phase) => (
              <article key={phase.title} className="rounded-xl border border-line bg-surface p-6 shadow-crisp">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">{phase.title}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">{phase.label}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{phase.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
