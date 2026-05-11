import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study"
    };
  }

  return {
    title: study.title,
    description: study.summary
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="space-y-10">
        <div className="space-y-6 rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
          <div className="flex flex-wrap gap-3">
            <Badge>{study.industry}</Badge>
            <Badge>{study.timeline}</Badge>
            <Badge>{study.role}</Badge>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl font-display text-4xl tracking-tight text-ink md:text-6xl">{study.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">{study.summary}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {study.results.map((result) => (
              <div key={result.label} className="rounded-md bg-sand p-5">
                <p className="font-display text-4xl tracking-tight text-ink">{result.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{result.label}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{result.context}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border border-line bg-surface p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Problem</p>
            <div className="mt-5 space-y-4">
              {study.problem.map((entry) => (
                <p key={entry} className="text-sm leading-7 text-muted">
                  {entry}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-line bg-surface p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Approach</p>
            <div className="mt-5 space-y-4">
              {study.approach.map((entry) => (
                <p key={entry} className="text-sm leading-7 text-muted">
                  {entry}
                </p>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-line bg-ink p-8 text-onInk shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-onInk-muted">Technical Decisions</p>
              <h2 className="font-display text-3xl tracking-tight text-onInk">Why the implementation choices mattered</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span key={item} className="rounded-full border border-onInk-line bg-onInk-surface px-3 py-1 text-xs uppercase tracking-[0.16em] text-onInk-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {study.technicalDecisions.map((decision) => (
              <article key={decision.title} className="rounded-md border border-onInk-line bg-onInk-surface p-5">
                <h3 className="font-display text-2xl tracking-tight text-onInk">{decision.title}</h3>
                <p className="mt-3 text-sm leading-7 text-onInk-muted">{decision.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex justify-start">
          <Link href="/contact" className={buttonVariants({})}>
            Discuss a similar project
          </Link>
        </div>
      </div>
    </Container>
  );
}
