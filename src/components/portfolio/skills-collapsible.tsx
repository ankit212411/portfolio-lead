"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type SkillGroup = {
  title: string;
  accent: string;
  skills: string[];
};

type SkillsCollapsibleProps = {
  groups: SkillGroup[];
};

function SkillMarquee({ group, index }: { group: SkillGroup; index: number }) {
  const repeatedSkills = [...group.skills, ...group.skills, ...group.skills];

  return (
    <article className="grid gap-4 border-b border-line py-5 last:border-b-0 md:grid-cols-[16rem_1fr] md:items-center">
      <div className="flex items-center gap-4 px-5 md:px-6">
        <span className="font-display text-3xl font-semibold text-accent">{group.accent}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">Stack</p>
          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">{group.title}</h2>
        </div>
      </div>

      <div className="skill-marquee min-w-0">
        <div className={index % 2 === 0 ? "skill-marquee-track" : "skill-marquee-track skill-marquee-track-reverse"}>
          {repeatedSkills.map((skill, skillIndex) => (
            <span
              key={`${skill}-${skillIndex}`}
              className="text-contained shrink-0 rounded-full border border-line bg-sand px-4 py-2 text-xs font-semibold text-muted shadow-crisp"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function SkillsCollapsible({ groups }: SkillsCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
        aria-expanded={isOpen}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">Capability stack</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
            Explore the full technology stack
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Frontend, backend integration, commerce platforms, and operating systems.
          </p>
        </div>
        <span
          className={cn(
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-sand text-ink transition",
            isOpen && "rotate-180 border-accent"
          )}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line">
            {groups.map((group, index) => (
              <SkillMarquee key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
