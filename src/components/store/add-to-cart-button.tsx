"use client";

import { useEffect, useState } from "react";

import { useCart } from "@/context/cart-context";
import type { Product } from "@/types";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AddToCartButtonProps = {
  product: Product;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

export function AddToCartButton({
  product,
  fullWidth = false,
  variant = "primary"
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) {
      return;
    }

    const timeout = window.setTimeout(() => setAdded(false), 1400);

    return () => window.clearTimeout(timeout);
  }, [added]);

  return (
    <Button
      variant={added ? "secondary" : variant}
      onClick={() => {
        addItem(product);
        setAdded(true);
      }}
      className={cn(fullWidth && "w-full")}
    >
      {added ? "Added to cart" : "Add to cart"}
    </Button>
  );
}
