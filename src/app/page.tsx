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
      <Container className="pt-12 md:pt-20">
        <section className="grid gap-10 border-b border-line pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            <Badge>US Remote Contract Focus</Badge>
            <div className="space-y-6">
              <h1 className="max-w-5xl font-display text-5xl tracking-tight text-ink sm:text-6xl md:text-7xl">
                Senior Technical Lead building React, Next.js &amp; SFCC ecommerce storefronts
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted">
                I am Ankit Suman, a frontend technical lead with 13+ years of experience across Salesforce Commerce Cloud, SFRA, React, Next.js, TypeScript, analytics, privacy tooling, and enterprise ecommerce delivery.
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

          <div className="grid gap-3 rounded-xl border border-line bg-ink p-3 text-onInk shadow-soft">
            {homepageHighlights.map((highlight) => (
              <div key={highlight.value} className="rounded-lg border border-onInk-line bg-onInk-surface p-5">
                <p className="font-display text-3xl tracking-tight text-onInk">{highlight.value}</p>
                <p className="mt-3 text-sm leading-6 text-onInk-muted">{highlight.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-16">
        <section className="grid gap-px overflow-hidden rounded-xl border border-line bg-line shadow-crisp lg:grid-cols-3">
          <div className="space-y-3 bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Working Style</p>
            <h2 className="font-display text-3xl tracking-tight text-ink">Commerce architecture that makes delivery easier</h2>
          </div>
          <div className="bg-surface p-7">
            <p className="font-medium text-ink">SFCC and headless storefronts</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Build SFRA, Page Designer, and React/Next.js frontend foundations that support enterprise commerce teams.
            </p>
          </div>
          <div className="bg-surface p-7">
            <p className="font-medium text-ink">Analytics, consent, and conversion</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Connect storefront performance, GTM tracking, OneTrust consent, and checkout UX to measurable business outcomes.
            </p>
          </div>
        </section>
      </Container>

      <Container className="pt-20">
        <section className="space-y-8">
          <SectionIntro
            eyebrow="Case Studies"
            title="Real ecommerce work across SFRA, headless commerce, and global storefronts"
            description="These case studies translate enterprise delivery experience into problem framing, implementation choices, and outcomes that hiring managers and clients can evaluate quickly."
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
            title="Selected work from enterprise commerce and frontend delivery"
            description="A focused view of SFCC, SFRA, React, Next.js, analytics, consent, checkout, and campaign enablement work across ecommerce brands."
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
        <section className="rounded-xl border border-line bg-ink px-8 py-10 text-onInk shadow-soft md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-onInk-muted">Availability</p>
              <h2 className="font-display text-4xl tracking-tight">
                {siteConfig.location}
              </h2>
              <p className="text-base leading-7 text-onInk-muted">
                Best fit for commerce teams needing a senior frontend lead who can own architecture, mentor engineers, partner with stakeholders, and still stay close to production code.
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
