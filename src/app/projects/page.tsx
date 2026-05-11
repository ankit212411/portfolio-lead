import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected Ankit Suman frontend projects spanning SFCC, SFRA, React, Next.js, ecommerce, analytics, and performance."
};

export default function ProjectsPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="space-y-10">
        <SectionIntro
          eyebrow="Projects"
          title="Selected frontend work across commerce platforms and customer-facing applications"
          description="A concise project layer for recruiters, founders, and engineering leaders who want to scan SFCC, SFRA, React, Next.js, analytics, consent, and delivery leadership experience quickly."
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
