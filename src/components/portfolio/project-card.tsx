import Link from "next/link";

import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-soft">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-sand/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <div className="space-y-2">
          <h3 className="font-display text-2xl tracking-tight text-ink">{project.title}</h3>
          <p className="text-sm leading-6 text-muted">{project.summary}</p>
        </div>
        <div className="space-y-1 text-sm text-muted">
          <p>
            <span className="font-medium text-ink">Role:</span> {project.role}
          </p>
          <p>
            <span className="font-medium text-ink">Outcome:</span> {project.outcome}
          </p>
        </div>
        <Link href={project.href} className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-strong">
          Explore project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
