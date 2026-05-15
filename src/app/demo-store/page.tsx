import type { Metadata } from "next";

import { RecommendationStrip } from "@/components/store/recommendation-strip";
import { ProductCard } from "@/components/store/product-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { getFeaturedProducts, getProducts } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Demo Store",
  description: "Production-style ecommerce frontend with App Router rendering, reusable commerce components, cart state, checkout, and recommendations."
};

export const revalidate = 3600;

export default async function DemoStorePage() {
  const [products, featuredProducts] = await Promise.all([getProducts(), getFeaturedProducts()]);

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <section className="rounded-xl border border-line bg-surface p-8 shadow-soft md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <Badge>Production-Style Demo Storefront</Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl tracking-tight text-ink md:text-6xl">A compact ecommerce frontend built like a real storefront system</h1>
              <p className="text-lg leading-8 text-muted">
                This demo shows how I structure commerce UI for production work: static-friendly product pages, scoped client state, persistent cart interactions, checkout flow, recommendation modules, and reusable product primitives.
              </p>
            </div>
          </div>
          <div className="grid gap-3 rounded-lg bg-sand p-5 text-sm text-muted md:min-w-[18rem]">
            <p>App Router pages with static generation and `revalidate` support.</p>
            <p>Client-side cart and checkout state isolated behind focused boundaries.</p>
            <p>Reusable product, pricing, recommendation, and merchandising components.</p>
            <p>Data-driven structure that can be replaced with Shopify, SFCC, or custom APIs.</p>
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
          description="A production storefront would drive this from merchandising rules, shopper behavior, inventory, and campaign context."
        />
      </section>
    </Container>
  );
}
