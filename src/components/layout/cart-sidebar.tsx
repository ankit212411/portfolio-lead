"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/format";
import { buttonVariants } from "@/components/ui/button";

export function CartSidebar() {
  const { isOpen, items, subtotal, closeCart, addItem, decrementItem, removeItem } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-[#0b1111]/30 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line bg-surface shadow-soft">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div>
            <p className="font-display text-2xl tracking-tight text-ink">Cart</p>
            <p className="text-sm text-muted">Review items and keep the experience focused.</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-lg text-ink shadow-crisp"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="rounded-lg border border-dashed border-line bg-sand p-6">
              <p className="font-display text-xl tracking-tight text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Add a few products from the demo store to see cart persistence and focused client-side interactions.
              </p>
              <Link href="/demo-store" className={buttonVariants({ variant: "secondary", className: "mt-5" })} onClick={closeCart}>
                Explore the demo store
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.slug} className="rounded-lg border border-line bg-surface p-4 shadow-crisp">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="font-display text-lg tracking-tight text-ink">{item.product.name}</p>
                      <p className="text-sm text-muted">{item.product.category}</p>
                      <p className="text-sm font-medium text-ink">{formatCurrency(item.product.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.slug)}
                      className="text-sm text-muted transition hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-sand p-1">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.product.slug)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-sm text-ink"
                        aria-label={`Decrease ${item.product.name} quantity`}
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addItem(item.product)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-sm text-ink"
                        aria-label={`Increase ${item.product.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-medium text-ink">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-line px-6 py-5">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>Subtotal</span>
            <span className="font-medium text-ink">{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
            Demo only. No checkout backend connected.
          </p>
          <button
            type="button"
            className={buttonVariants({ className: "mt-4 w-full" })}
            disabled={items.length === 0}
          >
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
