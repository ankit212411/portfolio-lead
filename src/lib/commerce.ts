import { products } from "@/data/products";

export async function getProducts() {
  return products;
}

export async function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export async function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export async function getRecommendations(slug: string) {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return [];
  }

  return product.recommendations
    .map((recommendedSlug) => products.find((item) => item.slug === recommendedSlug))
    .filter((item): item is (typeof products)[number] => Boolean(item));
}
