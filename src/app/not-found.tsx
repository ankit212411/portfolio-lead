import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center py-20">
      <div className="space-y-5 rounded-xl border border-line bg-surface p-10 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">404</p>
        <h1 className="font-display text-4xl tracking-tight text-ink">This page is not here</h1>
        <p className="max-w-xl text-base leading-7 text-muted">
          The route may have changed, or this page was never meant to ship. Head back to the portfolio or explore the demo store.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonVariants({})}>
            Return home
          </Link>
          <Link href="/demo-store" className={buttonVariants({ variant: "secondary" })}>
            Open demo store
          </Link>
        </div>
      </div>
    </Container>
  );
}
