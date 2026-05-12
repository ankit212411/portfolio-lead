"use client";

import Link from "next/link";

import { OrderSummary } from "@/components/store/order-summary";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/format";

export function CartPageClient() {
  const { items, addItem, decrementItem, removeItem, isHydrated } = useCart();

  if (!isHydrated) {
    return (
      <Container className="pb-24 pt-12">
        <div className="rounded-xl border border-line bg-surface p-8 text-muted shadow-soft">Loading cart...</div>
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="pb-24 pt-12 md:pt-16">
        <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Cart</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">Your cart is empty</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Add products from the demo store to review a full cart, checkout, and mock order placement flow.
          </p>
          <Link href="/demo-store" className={buttonVariants({ className: "mt-7" })}>
            Explore demo store
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-start">
        <section className="rounded-xl border border-line bg-surface p-6 shadow-soft md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Cart</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">Review your cart</h1>
          <div className="mt-8 divide-y divide-line">
            {items.map((item) => (
              <div key={item.product.slug} className="grid gap-5 py-6 md:grid-cols-[1fr_auto]">
                <div className="space-y-2">
                  <p className="font-display text-2xl tracking-tight text-ink">{item.product.name}</p>
                  <p className="text-sm text-muted">{item.product.category}</p>
                  <p className="max-w-xl text-sm leading-6 text-muted">{item.product.description}</p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.product.slug)}
                    className="text-sm font-semibold text-accent-strong"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between gap-5 md:block md:text-right">
                  <p className="font-semibold text-ink">{formatCurrency(item.product.price * item.quantity)}</p>
                  <div className="mt-0 inline-flex items-center gap-2 rounded-full border border-line bg-sand p-1 md:mt-4">
                    <button
                      type="button"
                      onClick={() => decrementItem(item.product.slug)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink"
                      aria-label={`Decrease ${item.product.name} quantity`}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-ink">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => addItem(item.product)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink"
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <OrderSummary items={items} ctaHref="/demo-store/checkout" ctaLabel="Continue to checkout" />
      </div>
    </Container>
  );
}
