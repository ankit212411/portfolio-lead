import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend projects spanning commerce, design systems, architecture, and performance."
};

export default function ProjectsPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="space-y-10">
        <SectionIntro
          eyebrow="Projects"
          title="Senior-level frontend work with clear product and technical outcomes"
          description="A concise project layer for recruiters, founders, and engineering leaders who want to scan capabilities quickly before diving deeper into case studies."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
