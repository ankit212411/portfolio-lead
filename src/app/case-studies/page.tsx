import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Detailed frontend case studies covering ecommerce scaling, architecture, and performance optimization."
};

export default function CaseStudiesPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="space-y-10">
        <SectionIntro
          eyebrow="Case Studies"
          title="Detailed examples of architecture, performance, and product delivery"
          description="These pages are structured the way hiring managers and clients tend to skim: problem framing, solution approach, technical decisions, and credible outcomes."
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
