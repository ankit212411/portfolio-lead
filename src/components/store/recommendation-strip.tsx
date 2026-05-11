import type { Product } from "@/types";

import { ProductCard } from "@/components/store/product-card";
import { SectionIntro } from "@/components/shared/section-intro";

type RecommendationStripProps = {
  products: Product[];
  title?: string;
  description?: string;
};

export function RecommendationStrip({
  products,
  title = "Recommended pairings",
  description = "Focused recommendation modules help surface higher-value add-ons without overwhelming the main buying path."
}: RecommendationStripProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <SectionIntro title={title} description={description} />
      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
