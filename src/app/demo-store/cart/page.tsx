import type { Metadata } from "next";

import { CartPageClient } from "@/components/store/cart-page-client";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review items in the demo ecommerce cart before checkout."
};

export default function CartPage() {
  return <CartPageClient />;
}
