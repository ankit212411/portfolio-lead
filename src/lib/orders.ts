import type { CheckoutDetails, DemoOrder, CartItem } from "@/types";

const ORDER_STORAGE_KEY = "frontend-lead-demo-orders";

export function getShippingCost(deliveryMethod: CheckoutDetails["deliveryMethod"]) {
  return deliveryMethod === "express" ? 18 : 0;
}

export function getEstimatedTax(subtotal: number) {
  return Math.round(subtotal * 0.0825);
}

export function createOrderId() {
  return `FL-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

export function buildDemoOrder({
  items,
  customer
}: {
  items: CartItem[];
  customer: CheckoutDetails;
}): DemoOrder {
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = getShippingCost(customer.deliveryMethod);
  const tax = getEstimatedTax(subtotal);

  return {
    id: createOrderId(),
    createdAt: new Date().toISOString(),
    items,
    customer,
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax
  };
}

export function saveDemoOrder(order: DemoOrder) {
  const stored = window.localStorage.getItem(ORDER_STORAGE_KEY);
  const orders = stored ? (JSON.parse(stored) as DemoOrder[]) : [];

  window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify([order, ...orders].slice(0, 5)));
}

export function getDemoOrder(orderId: string) {
  const stored = window.localStorage.getItem(ORDER_STORAGE_KEY);

  if (!stored) {
    return null;
  }

  const orders = JSON.parse(stored) as DemoOrder[];

  return orders.find((order) => order.id === orderId) ?? null;
}
