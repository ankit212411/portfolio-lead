import type { Metadata } from "next";

import { RecommendationStrip } from "@/components/store/recommendation-strip";
import { ProductCard } from "@/components/store/product-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { getFeaturedProducts, getProducts } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Demo Store",
  description: "Production-style ecommerce frontend with static-friendly product routes, cart state, and focused recommendations."
};

export const revalidate = 3600;

export default async function DemoStorePage() {
  const [products, featuredProducts] = await Promise.all([getProducts(), getFeaturedProducts()]);

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <Badge>Demo Ecommerce Frontend</Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl tracking-tight text-ink md:text-6xl">Clean commerce UX with performance-minded architecture</h1>
              <p className="text-lg leading-8 text-muted">
                This storefront demo is intentionally compact: product listing, static detail pages, cart persistence, and recommendation modules that reflect real ecommerce frontend priorities.
              </p>
            </div>
          </div>
          <div className="grid gap-3 rounded-lg bg-sand p-5 text-sm text-muted md:min-w-[18rem]">
            <p>Static-friendly product routes with `revalidate` support.</p>
            <p>Client-side cart interactions isolated to focused boundaries.</p>
            <p>Reusable product cards and data-driven merchandising content.</p>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="pt-20">
        <RecommendationStrip
          products={featuredProducts}
          title="Featured products"
          description="Merchandising blocks like this are useful for campaign landings, collection pages, and post-PDP browsing flows."
        />
      </section>
    </Container>
  );
}
