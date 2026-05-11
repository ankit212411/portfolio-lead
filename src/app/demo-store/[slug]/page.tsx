import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RecommendationStrip } from "@/components/store/recommendation-strip";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { ProductPoster } from "@/components/store/product-poster";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/format";
import { getProductBySlug, getProducts, getRecommendations } from "@/lib/commerce";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product"
    };
  }

  return {
    title: product.name,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const recommendations = await getRecommendations(slug);

  return (
    <Container className="pb-24 pt-12 md:pt-16">
      <div className="space-y-20">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductPoster product={product} className="min-h-[28rem]" />

          <div className="space-y-6 rounded-[2.5rem] border border-black/5 bg-white/85 p-8 shadow-soft">
            <div className="flex flex-wrap gap-3">
              <Badge>{product.category}</Badge>
              <Badge>{product.inventoryStatus}</Badge>
            </div>
            <div className="space-y-3">
              <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">{product.name}</h1>
              <p className="text-lg leading-8 text-muted">{product.longDescription}</p>
            </div>
            <div className="flex items-end justify-between gap-4 border-b border-black/5 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted">Price</p>
                <p className="font-display text-4xl tracking-tight text-ink">{formatCurrency(product.price)}</p>
              </div>
              <div className="text-right text-sm text-muted">
                <p>Rating {product.rating}</p>
                <p>{product.inventoryStatus}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {product.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[1.5rem] bg-sand/35 px-4 py-3 text-sm text-ink">
                  {highlight}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AddToCartButton product={product} fullWidth />
              <Link
                href="/demo-store"
                className={buttonVariants({ variant: "secondary", className: "w-full justify-center" })}
              >
                Back to products
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Use cases</p>
            <div className="mt-5 space-y-3">
              {product.useCases.map((entry) => (
                <p key={entry} className="rounded-[1.5rem] bg-sand/35 px-4 py-3 text-sm leading-6 text-muted">
                  {entry}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">Specifications</p>
            <div className="mt-5 divide-y divide-black/5">
              {product.specifications.map((specification) => (
                <div key={specification.label} className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-muted">{specification.label}</span>
                  <span className="font-medium text-ink">{specification.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RecommendationStrip products={recommendations} />
      </div>
    </Container>
  );
}
