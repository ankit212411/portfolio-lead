import Link from "next/link";

import { siteConfig } from "@/lib/site";

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl tracking-tight text-ink">{siteConfig.title}</p>
          <p className="max-w-2xl text-sm leading-6 text-muted">
            Built to showcase portfolio storytelling, clean frontend architecture, and a pragmatic ecommerce experience.
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
