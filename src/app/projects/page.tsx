import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend architecture projects spanning SFCC, SFRA, React, Next.js, ecommerce systems, AI-assisted delivery, analytics, and performance."
};

export default function ProjectsPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="space-y-10">
        <SectionIntro
          eyebrow="Projects"
          title="Selected systems across commerce, frontend architecture, and delivery automation"
          description="A concise project layer for founders and engineering leaders who want to scan production storefront experience, scalable React patterns, AI-assisted delivery thinking, and business-aware technical leadership."
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
