import type { Metadata } from "next";
import { Suspense } from "react";

import { OrderConfirmationClient } from "@/components/store/order-confirmation-client";

export const metadata: Metadata = {
  title: "Order Confirmation",
  description: "Confirmation page for a mock demo-store order."
};

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <OrderConfirmationClient />
    </Suspense>
  );
}
