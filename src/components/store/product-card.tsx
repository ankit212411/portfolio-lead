import Link from "next/link";

import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types";

import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { ProductPoster } from "@/components/store/product-poster";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/85 shadow-soft">
      <Link href={`/demo-store/${product.slug}`} className="block">
        <ProductPoster product={product} className="h-72 rounded-none border-0" />
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{product.category}</p>
            <Link href={`/demo-store/${product.slug}`} className="font-display text-2xl tracking-tight text-ink">
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted">Rating {product.rating}</p>
            <p className="font-medium text-ink">{formatCurrency(product.price)}</p>
          </div>
        </div>
        <p className="text-sm leading-6 text-muted">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.highlights.slice(0, 3).map((highlight) => (
            <span key={highlight} className="rounded-full bg-sand/40 px-3 py-1 text-xs text-muted">
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/demo-store/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-ink transition hover:bg-sand/30"
          >
            View details
          </Link>
          <AddToCartButton product={product} variant="secondary" />
        </div>
      </div>
    </article>
  );
}
