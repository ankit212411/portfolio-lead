import type { Metadata } from "next";

import { CheckoutPageClient } from "@/components/store/checkout-page-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Demo checkout flow with client-side validation and mock order placement."
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
