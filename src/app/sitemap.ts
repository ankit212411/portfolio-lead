import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/case-studies";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://frontend-lead-portfolio.vercel.app";

  const staticRoutes = ["", "/case-studies", "/projects", "/contact", "/demo-store"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/demo-store/${product.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...productRoutes];
}
