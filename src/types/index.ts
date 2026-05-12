export type NavItem = {
  href: string;
  label: string;
};

export type ResultMetric = {
  label: string;
  value: string;
  context: string;
};

export type Decision = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  stack: string[];
  problem: string[];
  approach: string[];
  technicalDecisions: Decision[];
  results: ResultMetric[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  outcome: string;
  href: string;
  tags: string[];
};

export type ProductAccent = {
  from: string;
  to: string;
  ink: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  highlights: string[];
  rating: number;
  inventoryStatus: string;
  specifications: Array<{
    label: string;
    value: string;
  }>;
  useCases: string[];
  recommendations: string[];
  accent: ProductAccent;
  featured?: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CheckoutDetails = {
  email: string;
  fullName: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  deliveryMethod: "standard" | "express";
};

export type DemoOrder = {
  id: string;
  createdAt: string;
  items: CartItem[];
  customer: CheckoutDetails;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};
