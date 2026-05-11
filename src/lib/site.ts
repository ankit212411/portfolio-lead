import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Ankit Suman",
  title: "Senior Technical Lead for React, Next.js & Salesforce Commerce Cloud storefronts",
  description:
    "Portfolio for a senior frontend technical lead with 13+ years building scalable ecommerce storefronts, SFCC/SFRA platforms, React applications, and performance-focused customer experiences.",
  email: "ankit@frontendlead.dev",
  location: "Available for US-based remote frontend and ecommerce contract roles",
  social: {
    github: "",
    linkedin: ""
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
    value: "13+",
    label: "Years building enterprise storefronts, SaaS applications, and frontend platforms"
  },
  {
    value: "React / Next.js / SFCC",
    label: "Hands-on technical leadership across headless commerce, SFRA, and reusable UI systems"
  },
  {
    value: "Commerce + Performance",
    label: "Focused on faster storefronts, cleaner checkout flows, analytics readiness, and business outcomes"
  }
];
