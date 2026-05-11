"use client";

import dynamic from "next/dynamic";

const CartSidebar = dynamic(
  () => import("@/components/layout/cart-sidebar").then((module) => module.CartSidebar),
  { ssr: false }
);

export function CartSidebarMount() {
  return <CartSidebar />;
}
