import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Frontend Lead Portfolio",
  title: "Frontend Lead building scalable, high-performance ecommerce & SaaS products",
  description:
    "Portfolio and demo commerce frontend focused on architecture, performance, and conversion-minded product engineering.",
  email: "ankit@frontendlead.dev",
  location: "Available for US-based remote contract roles",
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle"
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/demo-store", label: "Demo Store" }
  ] satisfies NavItem[]
};

export const homepageHighlights = [
  {
    value: "12+",
    label: "Years leading frontend delivery across ecommerce and SaaS"
  },
  {
    value: "React / Next.js",
    label: "Hands-on architecture, design systems, and app platform work"
  },
  {
    value: "Performance + Conversion",
    label: "Focused on measurable product outcomes, not just component output"
  }
];
