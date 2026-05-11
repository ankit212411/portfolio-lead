import Link from "next/link";

import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-crisp transition duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="border-b border-line p-5">
        <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
              className="text-contained rounded-full border border-line bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
          >
            {tag}
          </span>
        ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-2">
          <h3 className="text-contained font-display text-2xl tracking-tight text-ink">{project.title}</h3>
          <p className="text-contained text-sm leading-6 text-muted">{project.summary}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line text-sm">
          <div className="grid gap-1 bg-sand p-4 sm:grid-cols-[6rem_1fr]">
            <span className="font-semibold text-ink">Role</span>
            <span className="text-contained leading-6 text-muted">{project.role}</span>
          </div>
          <div className="grid gap-1 bg-sand p-4 sm:grid-cols-[6rem_1fr]">
            <span className="font-semibold text-ink">Outcome</span>
            <span className="text-contained leading-6 text-muted">{project.outcome}</span>
          </div>
        </div>

        <Link href={project.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent-strong">
          Explore project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
