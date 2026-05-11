import type { Metadata } from "next";
import Link from "next/link";

import { SectionIntro } from "@/components/shared/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page for US-based remote contract frontend lead opportunities."
};

const engagementPoints = [
  "Frontend architecture for ecommerce and SaaS platforms",
  "Next.js migrations, App Router adoption, and performance programs",
  "Design system strategy and hands-on delivery for product teams",
  "Short-term contract engagements with senior IC leadership"
];

export default function ContactPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2.5rem] border border-black/5 bg-white/85 p-8 shadow-soft">
          <SectionIntro
            eyebrow="Contact"
            title="Available for US-based remote contract work"
            description="Best fit for teams that need a senior frontend lead who can own architecture decisions, unblock product delivery, and still ship production code."
          />
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>
              <span className="font-medium text-ink">Email:</span>{" "}
              <Link href={`mailto:${siteConfig.email}`} className="text-accent-strong">
                {siteConfig.email}
              </Link>
            </p>
            <p>
              <span className="font-medium text-ink">LinkedIn:</span>{" "}
              <Link
                href={siteConfig.social.linkedin}
                className="text-accent-strong"
                target="_blank"
                rel="noreferrer"
              >
                View profile
              </Link>
            </p>
            <p>
              <span className="font-medium text-ink">GitHub:</span>{" "}
              <Link
                href={siteConfig.social.github}
                className="text-accent-strong"
                target="_blank"
                rel="noreferrer"
              >
                Review code
              </Link>
            </p>
            <p>
              <span className="font-medium text-ink">Availability:</span> {siteConfig.location}
            </p>
          </div>
          <Link href={`mailto:${siteConfig.email}`} className={buttonVariants({ className: "mt-8" })}>
            Start the conversation
          </Link>
        </section>

        <section className="rounded-[2.5rem] border border-black/5 bg-[#fff7ef] p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">How I can help</p>
          <div className="mt-6 grid gap-4">
            {engagementPoints.map((point) => (
              <div key={point} className="rounded-[1.75rem] bg-white/85 p-5">
                <p className="font-medium text-ink">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-black/5 bg-white/80 p-6">
            <p className="font-display text-2xl tracking-tight text-ink">Ideal brief</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Include team size, product context, current frontend challenges, and what success looks like in the next 60-90 days. That is usually enough to scope a useful first conversation.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
