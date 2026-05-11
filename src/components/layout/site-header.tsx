"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useCart } from "@/context/cart-context";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[rgba(247,243,236,0.82)] backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="space-y-0.5">
              <p className="font-display text-sm font-semibold tracking-tight text-ink">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Portfolio + Commerce Demo</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/80 hover:text-ink",
                    isActive && "bg-white text-ink shadow-soft"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-sand/40"
            >
              Cart
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-ink px-2 py-0.5 text-xs text-white">
                {itemCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink md:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="text-lg leading-none">{isMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-3xl border border-black/5 bg-white p-3 md:hidden">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-sand/40 hover:text-ink",
                    isActive && "bg-sand/50 text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
