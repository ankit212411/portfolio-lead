import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { homepageHighlights, siteConfig } from "@/lib/site";

const skills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "SFCC", "SFRA"];

const services = [
  {
    title: "Commerce Architecture Ownership",
    description: "SFCC, SFRA, headless storefronts, checkout flows, Page Designer modules, and migration paths that reduce delivery risk."
  },
  {
    title: "React + Next.js Delivery Systems",
    description: "Typed App Router foundations, reusable commerce components, API boundaries, auth flows, and maintainable frontend standards."
  },
  {
    title: "Performance + Conversion Execution",
    description: "Core Web Vitals, GTM, OneTrust, script governance, checkout UX, and analytics-ready customer journeys."
  }
];

function WorkVisual({ label, index }: { label: string; index: number }) {
  const snippets = [
    "const storefront = composeSFRA(routes);",
    "await shopperApi.cart.addItem(product);",
    "trackConsent({ gtm, oneTrust });",
    "export const revalidate = 3600;"
  ];

  return (
    <div className="relative min-h-56 overflow-hidden rounded-xl border border-line bg-deep shadow-soft">
      <div className="absolute -right-14 top-8 h-44 w-44 rounded-full border-[18px] border-accent" />
      <div className="absolute left-8 top-8 text-5xl font-semibold text-accent">&lt;</div>
      <div className="absolute bottom-8 right-8 text-5xl font-semibold text-accent">&gt;</div>
      <div className="relative m-6 rounded-lg border border-onInk-line bg-onInk-surface p-5 pl-10 font-mono text-xs leading-6 text-deep-ink sm:pl-12">
        <p className="text-accent">{label}</p>
        <p className="mt-4 text-deep-muted">{"// commerce frontend"}</p>
        <p>{snippets[index % snippets.length]}</p>
        <p className="text-deep-muted">render(priorityRoutes);</p>
        <p className="text-deep-muted">measureCoreWebVitals();</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pb-24">
      <Container className="pt-10 md:pt-16">
        <section className="grid min-h-[34rem] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-24 bg-accent" />
              <Badge>US Remote Frontend Architecture</Badge>
            </div>
            <div className="space-y-4">
              <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Hello<span className="text-accent">.</span>
              </p>
              <h1 className="max-w-5xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
                I lead scalable ecommerce frontends that improve speed, conversion, and delivery confidence
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                Frontend architecture lead with 13+ years shipping React, Next.js, SFCC, and SFRA storefronts. I help commerce teams modernize platforms, reduce release friction, and turn performance work into measurable customer impact.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ className: "justify-center" })}>
                Discuss a contract engagement
              </Link>
              <Link
                href="/case-studies"
                className={buttonVariants({ variant: "secondary", className: "justify-center" })}
              >
                Review business outcomes
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-4 rounded-full border-[22px] border-accent shadow-[0_0_80px_rgba(255,113,95,0.32)]" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,113,95,0.22),transparent_48%)]" />
            <div className="relative h-full overflow-hidden rounded-[48%] border border-line bg-surface shadow-soft">
              <Image
                src="/images/ankit-hero.png"
                alt="Ankit Suman, senior frontend technical lead"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover object-[62%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,19,26,0.42)] via-transparent to-transparent" />
            </div>
            <span className="absolute left-2 top-1/3 font-display text-6xl text-accent">&lt;</span>
            <span className="absolute bottom-1/4 right-0 font-display text-6xl text-accent">&gt;</span>
          </div>
        </section>
      </Container>

      <div className="border-y border-line bg-surface py-5">
        <Container>
          <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-muted sm:grid-cols-4 lg:grid-cols-8">
            {skills.map((skill) => (
              <span key={skill} className="text-contained text-center">
                {skill}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <Container className="pt-20">
        <section className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-6 border-l border-accent pl-8">
              {services.map((service) => (
                <div key={service.title} className="relative">
                  <span className="absolute -left-[2.42rem] top-2 h-3 w-3 rounded-full bg-accent" />
                  <p className="font-display text-xl tracking-tight text-ink">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
              <Image
                src="/images/ankit-portrait.png"
                alt="Black and white portrait of Ankit Suman"
                fill
                sizes="(min-width: 1024px) 22rem, 90vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,19,26,0.76)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Frontend Leadership</p>
                <p className="mt-2 text-sm leading-6 text-deep-ink">
                  Architecture ownership, delivery planning, mentoring, and hands-on implementation for commerce teams.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">About me</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Frontend systems leadership for teams that need architecture and execution
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-muted md:text-base">
                I own the frontend layer from system design through production delivery: storefront architecture, component strategy, commerce API integration, performance budgets, analytics readiness, and cross-functional alignment with product, design, backend, QA, and business stakeholders.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {homepageHighlights.map((highlight) => (
                <div key={highlight.value} className="border-l border-line pl-5">
                  <p className="font-display text-4xl font-semibold tracking-tight text-ink">
                    {highlight.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <Container className="pt-24">
        <section className="space-y-14">
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Business impact case studies</h2>
            <div className="mx-auto mt-6 h-14 w-px bg-accent" />
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="grid gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <WorkVisual label={study.industry} index={index} />
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {study.stack.slice(0, 5).map((item) => (
                      <span key={item} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-contained font-display text-3xl font-semibold tracking-tight text-ink">
                    {study.title}
                  </h3>
                  <p className="text-contained text-sm leading-7 text-muted">{study.summary}</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {study.results.map((result) => (
                      <div key={result.label} className="border-l border-line pl-4">
                        <p className="font-display text-2xl font-semibold text-ink">{result.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-ink transition hover:text-accent-strong"
                  >
                    View case study
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-24">
        <section className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Projects</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Selected systems and builds</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-ink">
              All projects <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug} className="flex min-w-0 flex-col gap-5 bg-surface p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-contained font-display text-2xl font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="text-contained text-sm leading-7 text-muted">{project.summary}</p>
                  <p className="text-contained text-sm leading-7 text-muted">
                    <span className="font-semibold text-ink">Outcome:</span> {project.outcome}
                  </p>
                </div>
                <Link href={project.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent-strong">
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pt-24">
        <section className="grid gap-8 border-y border-line py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-24 bg-accent" />
              <p className="text-sm text-muted">Contacts</p>
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Need senior frontend leadership?
              <br />
              Let&apos;s scope the work.
            </h2>
            <Link href="/contact" className={buttonVariants({ className: "mt-2" })}>
              Start a focused conversation
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-muted">
            <div className="border-b border-line pb-3">SFCC / SFRA modernization and storefront delivery</div>
            <div className="border-b border-line pb-3">React and Next.js architecture for commerce teams</div>
            <div className="border-b border-line pb-3">Performance, analytics, checkout UX, and release quality</div>
            <p className="pt-2">{siteConfig.location}</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
