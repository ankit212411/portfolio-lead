import Link from "next/link";

import type { CaseStudy } from "@/types";

import { Badge } from "@/components/ui/badge";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-crisp transition duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap items-center gap-2">
        <Badge>{study.industry}</Badge>
          <span className="text-contained rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {study.timeline}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-3">
          <h3 className="text-contained font-display text-2xl tracking-tight text-ink">{study.title}</h3>
          <p className="text-contained text-sm leading-6 text-muted">{study.summary}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {study.results.map((result) => (
            <div key={result.label} className="min-w-0 space-y-1 bg-sand p-4">
              <p className="text-contained font-display text-xl tracking-tight text-ink">{result.value}</p>
              <p className="text-contained text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent-strong"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
