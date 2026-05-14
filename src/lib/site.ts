import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Ankit Suman",
  title: "Frontend architecture lead for scalable React, Next.js, and SFCC commerce systems",
  description:
    "Portfolio for a senior frontend architecture lead helping ecommerce and SaaS teams ship scalable React, Next.js, SFCC, and SFRA systems with better performance, cleaner delivery, and stronger conversion paths.",
  email: "ankitsumance@gmail.com",
  location: "Available for US remote contract roles with practical timezone overlap",
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
    label: "Years leading enterprise storefronts, SaaS applications, and customer-facing frontend systems"
  },
  {
    value: "30-40%",
    label: "Typical release friction reduction through reusable frontend patterns, clearer ownership, and typed contracts"
  },
  {
    value: "Core Web Vitals",
    label: "Performance, checkout UX, analytics, and conversion paths treated as architecture concerns"
  }
];
