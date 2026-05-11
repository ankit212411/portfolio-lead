import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "commerce-platform",
    title: "Composable Commerce Platform",
    summary:
      "Platform foundation for a multi-market storefront with reusable merchandising sections, typed content models, and predictable rendering patterns.",
    role: "Frontend Lead",
    outcome: "Enabled faster launches while improving consistency across product, campaign, and editorial pages.",
    href: "/case-studies/ecommerce-storefront-scaling",
    tags: ["Next.js", "Architecture", "Ecommerce"]
  },
  {
    slug: "design-system-foundation",
    title: "Design System Foundation",
    summary:
      "Built a lean UI foundation that balanced composability, governance, and product team autonomy across several SaaS surfaces.",
    role: "Frontend Architect",
    outcome: "Reduced one-off component drift and sped up onboarding for engineers joining the product org.",
    href: "/case-studies/frontend-architecture-design",
    tags: ["Design System", "React", "Platform"]
  },
  {
    slug: "performance-program",
    title: "Performance Recovery Program",
    summary:
      "Cross-functional performance initiative spanning bundle optimization, route strategy, and UX simplification across mobile-first funnels.",
    role: "Frontend Lead",
    outcome: "Delivered measurable conversion and Core Web Vitals gains with maintainable code changes.",
    href: "/case-studies/performance-optimization",
    tags: ["Web Vitals", "Optimization", "Conversion"]
  },
  {
    slug: "demo-store",
    title: "Demo Ecommerce Frontend",
    summary:
      "This project includes a production-style store demo with static product pages, a persistent cart, and focused recommendation patterns.",
    role: "Principal IC / Builder",
    outcome: "Shows how product UX, architecture, and performance thinking come together in a compact deliverable.",
    href: "/demo-store",
    tags: ["Next.js", "SSR", "App Router"]
  }
];
