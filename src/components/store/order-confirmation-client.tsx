"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/format";
import { getDemoOrder } from "@/lib/orders";
import type { DemoOrder } from "@/types";

export function OrderConfirmationClient() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<DemoOrder | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!orderId) {
      setIsLoaded(true);
      return;
    }

    setOrder(getDemoOrder(orderId));
    setIsLoaded(true);
  }, [orderId]);

  if (!isLoaded) {
    return (
      <Container className="pb-24 pt-12">
        <div className="rounded-xl border border-line bg-surface p-8 text-muted shadow-soft">Loading order...</div>
      </Container>
    );
  }

  if (!order) {
    return (
      <Container className="pb-24 pt-12 md:pt-16">
        <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Order confirmation</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">Order not found</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            This mock order may have been cleared from local browser storage. You can place another demo order from the store.
          </p>
          <Link href="/demo-store" className={buttonVariants({ className: "mt-7" })}>
            Return to demo store
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Order placed</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Thanks, {order.customer.fullName.split(" ")[0] || "shopper"}.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Your demo order has been placed. This confirmation is stored locally in your browser and is intended to demonstrate frontend order-state handling.
            </p>
            <div className="mt-8 rounded-xl border border-line bg-sand p-5">
              <p className="text-sm text-muted">Order number</p>
              <p className="mt-1 font-display text-3xl tracking-tight text-ink">{order.id}</p>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-deep p-6 text-deep-ink">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Next steps</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-deep-muted">
              <p>No real payment was processed.</p>
              <p>No inventory was reserved.</p>
              <p>The order is saved only in local browser storage.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="divide-y divide-line rounded-xl border border-line">
            {order.items.map((item) => (
              <div key={item.product.slug} className="flex items-start justify-between gap-4 p-5 text-sm">
                <div>
                  <p className="font-semibold text-ink">{item.product.name}</p>
                  <p className="mt-1 text-muted">Qty {item.quantity}</p>
                </div>
                <p className="font-semibold text-ink">{formatCurrency(item.product.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-ink">{formatCurrency(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium text-ink">{order.shipping === 0 ? "Free" : formatCurrency(order.shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated tax</span>
              <span className="font-medium text-ink">{formatCurrency(order.tax)}</span>
            </div>
            <div className="flex justify-between border-t border-line pt-4 text-base text-ink">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{formatCurrency(order.total)}</span>
            </div>
            <Link href="/demo-store" className={buttonVariants({ variant: "secondary", className: "mt-5 w-full" })}>
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
