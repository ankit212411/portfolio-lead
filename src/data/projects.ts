import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sfra-migration-solutions",
    title: "SFRA Migration Solutions",
    summary:
      "Public ecommerce case study covering migration from static AEM journeys to Salesforce Commerce Cloud SFRA for an education provider.",
    role: "Technical Lead / SFCC Frontend Engineer",
    outcome:
      "Supported a thought-leadership niche around SFRA migration solutions, including number-one Google ranking for 3 of the past 10 weeks.",
    href: "/case-studies/sfra-migration-solutions",
    tags: ["SFCC", "SFRA", "Migration"]
  },
  {
    slug: "headless-sfcc-nextjs",
    title: "Headless SFCC + Next.js Storefront",
    summary:
      "React and Next.js storefront on Salesforce Commerce Cloud with SLAS authentication, Shopper API integration, reusable UI, and Tailwind CSS.",
    role: "Technical Lead",
    outcome:
      "Established a scalable frontend foundation for authenticated shopper flows, product discovery, cart, checkout, and SFCC data integration.",
    href: "/case-studies/headless-sfcc-nextjs-storefront",
    tags: ["Next.js", "React", "Headless Commerce"]
  },
  {
    slug: "global-commerce-platform",
    title: "Global Commerce Experience Platform",
    summary:
      "Multi-locale SFCC storefront work spanning React UI components, Page Designer modules, GTM analytics, OneTrust consent, and performance improvements.",
    role: "Technical Lead",
    outcome:
      "Improved campaign flexibility, analytics readiness, privacy compliance, and storefront performance across global commerce experiences.",
    href: "/case-studies/global-commerce-experience-platform",
    tags: ["React", "Page Designer", "GTM"]
  },
  {
    slug: "scholastic-commerce-programs",
    title: "Scholastic Commerce Programs",
    summary:
      "SFRA storefront features for Dollar Catalog, Wallet, and Book Fair commerce workflows supporting schools, teachers, parents, and seasonal campaigns.",
    role: "Technical Lead",
    outcome:
      "Delivered product discovery, promotional messaging, wallet workflows, checkout improvements, and production support for high-traffic education commerce.",
    href: "/case-studies/sfra-migration-solutions",
    tags: ["SFRA", "Education", "Checkout"]
  },
  {
    slug: "demo-store",
    title: "Demo Ecommerce Frontend",
    summary:
      "Portfolio demo showing a production-style storefront with static product routes, persistent cart state, recommendations, and component-driven UI.",
    role: "Principal IC / Builder",
    outcome:
      "Demonstrates modern Next.js App Router implementation style for ecommerce frontend architecture and conversion-focused UI patterns.",
    href: "/demo-store",
    tags: ["Next.js", "TypeScript", "App Router"]
  }
];
