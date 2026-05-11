import Link from "next/link";

import type { CaseStudy } from "@/types";

import { Badge } from "@/components/ui/badge";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="group rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-black/10">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{study.industry}</Badge>
        <span className="text-xs uppercase tracking-[0.2em] text-muted">{study.timeline}</span>
      </div>
      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-display text-2xl tracking-tight text-ink">{study.title}</h3>
          <p className="text-sm leading-6 text-muted">{study.summary}</p>
        </div>
        <div className="grid gap-3 rounded-[1.5rem] bg-sand/30 p-4 sm:grid-cols-3">
          {study.results.map((result) => (
            <div key={result.label} className="space-y-1">
              <p className="font-display text-2xl tracking-tight text-ink">{result.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{result.label}</p>
            </div>
          ))}
        </div>
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent-strong"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
