"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useCart } from "@/context/cart-context";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-deep backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="space-y-0.5">
              <p className="font-display text-sm font-semibold tracking-tight text-deep-ink">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-deep-muted">Commerce Frontend Architect</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface p-1 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-ink",
                    isActive && "bg-surface text-ink shadow-crisp"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={openCart}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink shadow-crisp transition hover:border-accent"
            >
              Cart
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-accent px-2 py-0.5 text-xs text-[#101820]">
                {itemCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="text-lg leading-none">{isMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-xl border border-line bg-surface p-3 shadow-soft md:hidden">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium text-muted transition hover:bg-sand hover:text-ink",
                    isActive && "bg-sand text-ink"
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
