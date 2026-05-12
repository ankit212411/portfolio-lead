import type { Metadata } from "next";
import Link from "next/link";

import { SectionIntro } from "@/components/shared/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ankit Suman for remote frontend, React, Next.js, SFCC, and ecommerce technical lead opportunities."
};

const engagementPoints = [
  "SFCC/SFRA storefront development, migration support, and Page Designer implementation",
  "React and Next.js frontend architecture for headless commerce builds",
  "GTM, OneTrust, analytics readiness, privacy consent, and performance-minded script management",
  "Technical leadership, code reviews, mentoring, sprint planning, and stakeholder collaboration"
];

export default function ContactPage() {
  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-xl border border-line bg-surface p-8 shadow-soft">
          <SectionIntro
            eyebrow="Contact"
            title="Available for remote frontend and ecommerce technical lead work"
            description="Best fit for commerce teams that need senior React, Next.js, SFCC, SFRA, analytics, and performance experience from someone who can lead architecture and still ship production code."
          />
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>
              <span className="font-medium text-ink">Email:</span>{" "}
              <Link href={`mailto:${siteConfig.email}`} className="text-accent-strong">
                {siteConfig.email}
              </Link>
            </p>
            {siteConfig.social.linkedin ? (
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
            ) : null}
            {siteConfig.social.github ? (
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
            ) : null}
            <p>
              <span className="font-medium text-ink">Availability:</span> {siteConfig.location}
            </p>
          </div>
          <Link href={`mailto:${siteConfig.email}`} className={buttonVariants({ className: "mt-8" })}>
            Start the conversation
          </Link>
        </section>

        <section className="rounded-xl border border-line bg-deep p-8 text-deep-ink shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-deep-muted">How I can help</p>
          <div className="mt-6 grid gap-4">
            {engagementPoints.map((point) => (
              <div key={point} className="rounded-md border border-onInk-line bg-onInk-surface p-5">
                <p className="font-medium text-deep-ink">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-onInk-line bg-onInk-surface p-6">
            <p className="font-display text-2xl tracking-tight text-deep-ink">Ideal brief</p>
            <p className="mt-3 text-sm leading-7 text-deep-muted">
              Include platform context, storefront architecture, team size, current SFCC or React challenges, and what success looks like in the next 60-90 days. That is usually enough to scope a useful first conversation.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
