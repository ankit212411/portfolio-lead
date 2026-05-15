import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { getEstimatedTax, getShippingCost } from "@/lib/orders";
import type { CartItem, CheckoutDetails } from "@/types";

type OrderSummaryProps = {
  items: CartItem[];
  deliveryMethod?: CheckoutDetails["deliveryMethod"];
  ctaHref?: string;
  ctaLabel?: string;
};

export function OrderSummary({
  items,
  deliveryMethod = "standard",
  ctaHref,
  ctaLabel
}: OrderSummaryProps) {
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = getShippingCost(deliveryMethod);
  const tax = getEstimatedTax(subtotal);
  const total = subtotal + shipping + tax;

  return (
    <aside className="rounded-xl border border-line bg-surface p-6 shadow-soft">
      <p className="font-display text-2xl tracking-tight text-ink">Order summary</p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.product.slug} className="flex items-start justify-between gap-4 text-sm">
            <div>
              <p className="font-medium text-ink">{item.product.name}</p>
              <p className="text-muted">Qty {item.quantity}</p>
            </div>
            <p className="font-medium text-ink">{formatCurrency(item.product.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3 border-t border-line pt-5 text-sm text-muted">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-ink">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium text-ink">{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated tax</span>
          <span className="font-medium text-ink">{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between border-t border-line pt-4 text-base text-ink">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">{formatCurrency(total)}</span>
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
        Demo checkout. No payment is processed.
      </p>

      {ctaHref && ctaLabel ? (
        <Link href={ctaHref} className={buttonVariants({ className: "mt-5 w-full" })}>
          {ctaLabel}
        </Link>
      ) : null}
    </aside>
  );
}
