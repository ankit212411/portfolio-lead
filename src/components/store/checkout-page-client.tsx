"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { OrderSummary } from "@/components/store/order-summary";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useCart } from "@/context/cart-context";
import { buildDemoOrder, saveDemoOrder } from "@/lib/orders";
import type { CheckoutDetails } from "@/types";

const initialForm: CheckoutDetails = {
  email: "",
  fullName: "",
  address: "",
  city: "",
  region: "",
  postalCode: "",
  deliveryMethod: "standard"
};

export function CheckoutPageClient() {
  const router = useRouter();
  const { items, isHydrated, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutDetails>(initialForm);
  const [error, setError] = useState("");

  function updateField<Key extends keyof CheckoutDetails>(key: Key, value: CheckoutDetails[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFields: Array<keyof CheckoutDetails> = [
      "email",
      "fullName",
      "address",
      "city",
      "region",
      "postalCode"
    ];
    const hasMissingField = requiredFields.some((field) => form[field].trim().length === 0);

    if (hasMissingField) {
      setError("Please complete all checkout fields before placing the demo order.");
      return;
    }

    if (items.length === 0) {
      router.push("/demo-store/cart");
      return;
    }

    const order = buildDemoOrder({ items, customer: form });
    saveDemoOrder(order);
    clearCart();
    router.push(`/demo-store/order-confirmation?orderId=${order.id}`);
  }

  if (!isHydrated) {
    return (
      <Container className="pb-24 pt-12">
        <div className="rounded-xl border border-line bg-surface p-8 text-muted shadow-soft">Loading checkout...</div>
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="pb-24 pt-12 md:pt-16">
        <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Checkout</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">No items to checkout</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Your cart is empty. Add a product before starting the demo checkout flow.
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
      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-start">
        <section className="rounded-xl border border-line bg-surface p-6 shadow-soft md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Checkout</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">Demo checkout</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            This form simulates a production checkout flow. No payment is collected and no backend order is created.
          </p>

          {error ? (
            <div className="mt-6 rounded-lg border border-accent bg-accent-soft p-4 text-sm font-medium text-ink">
              {error}
            </div>
          ) : null}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Full name
              <input
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink md:col-span-2">
              Shipping address
              <input
                value={form.address}
                onChange={(event) => updateField("address", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              City
              <input
                value={form.city}
                onChange={(event) => updateField("city", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              State / region
              <input
                value={form.region}
                onChange={(event) => updateField("region", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              ZIP / postal code
              <input
                value={form.postalCode}
                onChange={(event) => updateField("postalCode", event.target.value)}
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Delivery method
              <select
                value={form.deliveryMethod}
                onChange={(event) =>
                  updateField("deliveryMethod", event.target.value as CheckoutDetails["deliveryMethod"])
                }
                className="rounded-lg border border-line bg-sand px-4 py-3 text-ink outline-none transition focus:border-accent"
              >
                <option value="standard">Standard delivery - Free</option>
                <option value="express">Express delivery - $18</option>
              </select>
            </label>
          </div>

          <div className="mt-8 rounded-xl border border-line bg-sand p-5">
            <p className="font-display text-2xl tracking-tight text-ink">Mock payment</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Payment is intentionally simulated for this frontend portfolio demo. In a production storefront this step would integrate with a PCI-compliant payment provider.
            </p>
          </div>
        </section>

        <div>
          <OrderSummary items={items} deliveryMethod={form.deliveryMethod} />
          <button type="submit" className={buttonVariants({ className: "mt-5 w-full" })}>
            Place demo order
          </button>
        </div>
      </form>
    </Container>
  );
}
