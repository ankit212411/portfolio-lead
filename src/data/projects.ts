import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-assisted-engineering-delivery",
    title: "AI-Assisted Engineering Delivery System",
    summary:
      "Productized multi-agent workflow for turning Jira-style requirements into scoped frontend, backend, review, QA, and human approval stages.",
    role: "Product Architect / Frontend Lead",
    outcome:
      "Reframes AI research into a practical delivery system for sprint planning, risk control, reviewer workflows, and QA coordination.",
    href: "/research/multi-agent-delivery",
    tags: ["AI Workflow", "Delivery Systems", "QA"]
  },
  {
    slug: "demo-store",
    title: "Production-Style Demo Storefront",
    summary:
      "Next.js App Router ecommerce demo with static product routes, reusable commerce components, persisted cart state, recommendations, checkout, and order placement.",
    role: "Principal IC / Builder",
    outcome:
      "Demonstrates how I structure commerce frontends for performance-focused rendering, clear client boundaries, and scalable feature ownership.",
    href: "/demo-store",
    tags: ["Next.js", "TypeScript", "App Router"]
  },
  {
    slug: "sfra-migration-solutions",
    title: "SFRA Migration Solutions",
    summary:
      "Migration from static AEM commerce journeys to Salesforce Commerce Cloud SFRA for an education provider with subscription checkout complexity.",
    role: "Technical Lead / SFCC Frontend Engineer",
    outcome:
      "Reduced migration complexity, improved merchant control, lowered manual order review, and supported number-one Google visibility for SFRA migration solutions.",
    href: "/case-studies/sfra-migration-solutions",
    tags: ["SFCC", "SFRA", "Migration"]
  },
  {
    slug: "headless-sfcc-nextjs",
    title: "Headless SFCC + Next.js Storefront",
    summary:
      "React and Next.js storefront on Salesforce Commerce Cloud with SLAS authentication, Shopper API integration, reusable UI, and typed commerce patterns.",
    role: "Technical Lead",
    outcome:
      "Created a scalable frontend foundation for authenticated shopper flows, product discovery, cart, checkout, and SFCC data integration.",
    href: "/case-studies/headless-sfcc-nextjs-storefront",
    tags: ["Next.js", "React", "Headless Commerce"]
  },
  {
    slug: "global-commerce-platform",
    title: "Global Commerce Experience Platform",
    summary:
      "Multi-locale SFCC storefront work spanning React UI components, Page Designer modules, GTM analytics, OneTrust consent, and performance-aware delivery.",
    role: "Technical Lead",
    outcome:
      "Improved campaign velocity, merchant control, analytics readiness, privacy compliance, and storefront scalability across global commerce experiences.",
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
      "Delivered product discovery, promotional messaging, wallet workflows, checkout improvements, and production support for education commerce peaks.",
    href: "/case-studies/sfra-migration-solutions",
    tags: ["SFRA", "Education", "Checkout"]
  }
];
