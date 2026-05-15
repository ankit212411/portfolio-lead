import Link from "next/link";

import { siteConfig } from "@/lib/site";

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl tracking-tight text-ink">{siteConfig.title}</p>
          <p className="max-w-2xl text-sm leading-6 text-muted">
            Built to show how I approach frontend systems: SFCC/SFRA modernization, React and Next.js architecture, performance-minded delivery, and practical AI-assisted engineering workflows.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted md:text-right">
          <p>{siteConfig.location}</p>
          <Link href={`mailto:${siteConfig.email}`} className="text-ink transition hover:text-accent-strong">
            {siteConfig.email}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
