import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Detailed case studies covering SFCC, SFRA migration, headless commerce, React, Next.js, analytics, and performance."
};

export default function CaseStudiesPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="space-y-10">
        <SectionIntro
          eyebrow="Case Studies"
          title="Commerce case studies grounded in real SFCC and frontend delivery"
          description="Structured for fast review: migration context, technical approach, implementation decisions, and credible results from enterprise ecommerce work."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </Container>
  );
}
