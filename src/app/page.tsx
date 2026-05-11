import Link from "next/link";

import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIntro } from "@/components/shared/section-intro";
import { ProductCard } from "@/components/store/product-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { getFeaturedProducts } from "@/lib/commerce";
import { homepageHighlights, siteConfig } from "@/lib/site";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="pb-24">
      <Container className="pt-10 md:pt-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-8 rounded-[2.5rem] border border-black/5 bg-white/80 p-8 shadow-soft md:p-10">
            <Badge>US Remote Contract Focus</Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl tracking-tight text-ink sm:text-6xl md:text-7xl">
                Frontend Lead building scalable, high-performance ecommerce &amp; SaaS products
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                Senior frontend leader with 12+ years building storefronts, product platforms, and UI systems that keep shipping velocity high without losing performance, maintainability, or conversion focus.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/case-studies" className={buttonVariants({ className: "justify-center" })}>
                View case studies
              </Link>
              <Link
                href="/demo-store"
                className={buttonVariants({ variant: "secondary", className: "justify-center" })}
              >
                Explore demo store
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {homepageHighlights.map((highlight) => (
              <div key={highlight.value} className="rounded-[2rem] border border-black/5 bg-[#fdf9f3] p-6 shadow-soft">
                <p className="font-display text-3xl tracking-tight text-ink">{highlight.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{highlight.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="grid gap-6 rounded-[2.5rem] border border-black/5 bg-[#fff7ee] p-8 shadow-soft lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Working Style</p>
            <h2 className="font-display text-3xl tracking-tight text-ink">Architecture that makes delivery easier</h2>
          </div>
          <div className="rounded-[2rem] bg-white/70 p-5">
            <p className="font-medium text-ink">Scalable frontend systems</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Build route, feature, and UI boundaries that support multiple teams and evolving product demands.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/70 p-5">
            <p className="font-medium text-ink">Commercial product thinking</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Tie performance and UX improvements to conversion, merchandising velocity, and measurable business outcomes.
            </p>
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="space-y-8">
          <SectionIntro
            eyebrow="Case Studies"
            title="Real-world frontend leadership, structured for fast review"
            description="Each case study is written to show systems thinking, technical judgment, and product impact instead of surface-level feature summaries."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="space-y-8">
          <SectionIntro
            eyebrow="Selected Work"
            title="Portfolio projects with strong architecture narratives"
            description="A mix of platform, design system, performance, and product execution work designed to resonate with engineering leaders and clients."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="space-y-8">
          <SectionIntro
            eyebrow="Demo Commerce App"
            title="A production-style storefront frontend built into the portfolio"
            description="This demo keeps the UI minimal and the implementation intentional: static-friendly product routes, reusable cards, focused client state, and recommendation-driven cart flows."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="rounded-[2.5rem] border border-black/5 bg-ink px-8 py-10 text-white shadow-soft md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Availability</p>
              <h2 className="font-display text-4xl tracking-tight">
                {siteConfig.location}
              </h2>
              <p className="text-base leading-7 text-white/72">
                Ideal for teams needing a senior frontend lead who can own architecture, accelerate delivery, and still stay close to the code.
              </p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
              Start a conversation
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
