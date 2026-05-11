import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "aurora-performance-jacket",
    name: "Aurora Performance Jacket",
    category: "Outerwear",
    price: 168,
    description: "Lightweight shell built for travel days, cool-weather commutes, and elevated everyday wear.",
    longDescription:
      "The Aurora Performance Jacket blends technical utility with a cleaner retail silhouette. It is designed as the kind of hero product a modern DTC storefront would lead with: versatile, premium, and easy to merchandise across campaigns.",
    highlights: ["Water-resistant finish", "Packable hood", "Two-way zipper", "Breathable lining"],
    rating: 4.8,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Recycled nylon blend" },
      { label: "Fit", value: "Regular fit" },
      { label: "Weight", value: "520g" },
      { label: "Care", value: "Machine wash cold" }
    ],
    useCases: ["Travel capsule wardrobe", "Commute layering", "All-season transitional outerwear"],
    recommendations: ["atlas-knit-polo", "summit-trail-pack"],
    accent: { from: "#1a5f58", to: "#9fd7c9", ink: "#e7fff8" },
    featured: true
  },
  {
    slug: "atlas-knit-polo",
    name: "Atlas Knit Polo",
    category: "Tops",
    price: 84,
    description: "Refined knit polo with enough structure for meetings and enough comfort for everyday rotation.",
    longDescription:
      "The Atlas Knit Polo is styled for a premium basics category. The product storytelling emphasizes versatility, texture, and a polished silhouette without overcomplicating the buying decision.",
    highlights: ["Soft stretch knit", "Structured collar", "Clean placket", "Wrinkle-resistant"],
    rating: 4.7,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Cotton-modal blend" },
      { label: "Fit", value: "Tailored fit" },
      { label: "Origin", value: "Responsibly sourced" },
      { label: "Care", value: "Machine wash gentle" }
    ],
    useCases: ["Smart casual wardrobe", "Layering piece", "Day-to-night styling"],
    recommendations: ["harbor-tapered-chino", "aurora-performance-jacket"],
    accent: { from: "#8b4f2d", to: "#f1c8a1", ink: "#fff4e7" },
    featured: true
  },
  {
    slug: "harbor-tapered-chino",
    name: "Harbor Tapered Chino",
    category: "Bottoms",
    price: 98,
    description: "Modern everyday chino with just enough stretch and a cleaner ankle line for contemporary styling.",
    longDescription:
      "Harbor is positioned as a foundational wardrobe builder. The detail page leans on fit, fabric, and repeat-wear confidence, mirroring the kind of PDP structure that works well for conversion-focused apparel brands.",
    highlights: ["Four-way stretch", "Garment-dyed finish", "Secure media pocket", "Soft brushed interior"],
    rating: 4.6,
    inventoryStatus: "Low stock",
    specifications: [
      { label: "Material", value: "Cotton twill with stretch" },
      { label: "Rise", value: "Mid rise" },
      { label: "Leg", value: "Tapered" },
      { label: "Care", value: "Machine wash cold" }
    ],
    useCases: ["Daily uniform", "Travel packing", "Hybrid office wear"],
    recommendations: ["atlas-knit-polo", "ridge-everyday-tee"],
    accent: { from: "#2f4a74", to: "#a9c2ef", ink: "#eef5ff" },
    featured: true
  },
  {
    slug: "summit-trail-pack",
    name: "Summit Trail Pack",
    category: "Accessories",
    price: 132,
    description: "Compact carry system with premium organization details for short trips and daily movement.",
    longDescription:
      "A high-margin accessories product that complements outerwear and travel capsules. It is designed to support recommendation modules and higher cart value scenarios.",
    highlights: ["16L capacity", "Laptop sleeve", "Quick-access pocket", "Weather-resistant base"],
    rating: 4.9,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Volume", value: "16 liters" },
      { label: "Material", value: "Technical canvas" },
      { label: "Laptop", value: "Fits up to 14-inch" },
      { label: "Warranty", value: "2 years" }
    ],
    useCases: ["Daily commute", "Weekend city trip", "Personal item carry"],
    recommendations: ["aurora-performance-jacket", "ridge-everyday-tee"],
    accent: { from: "#334b2c", to: "#b7d7aa", ink: "#f2ffec" }
  },
  {
    slug: "ridge-everyday-tee",
    name: "Ridge Everyday Tee",
    category: "Basics",
    price: 42,
    description: "Heavyweight tee with a premium drape and durable collar retention for repeat wear.",
    longDescription:
      "A strong entry-price product that supports bundle-building and recommendation logic. The content structure highlights value and consistency rather than novelty.",
    highlights: ["Heavyweight jersey", "Relaxed silhouette", "Pre-shrunk finish", "Reinforced collar"],
    rating: 4.5,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "100% combed cotton" },
      { label: "Weight", value: "240 GSM" },
      { label: "Fit", value: "Relaxed" },
      { label: "Care", value: "Machine wash cold" }
    ],
    useCases: ["Core basics", "Layering piece", "Multi-buy staple"],
    recommendations: ["harbor-tapered-chino", "summit-trail-pack"],
    accent: { from: "#5b4e62", to: "#d7c6e2", ink: "#fbf5ff" }
  },
  {
    slug: "field-day-cap",
    name: "Field Day Cap",
    category: "Accessories",
    price: 36,
    description: "Minimal six-panel cap with a soft structure and tonal detailing.",
    longDescription:
      "A low-friction add-on item intended to demonstrate quick-cart behaviors and simple recommendation pathways within the storefront.",
    highlights: ["Washed twill", "Adjustable back strap", "Light structure", "Tonal embroidery"],
    rating: 4.4,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Washed cotton twill" },
      { label: "Profile", value: "Low profile" },
      { label: "Adjustment", value: "Metal strapback" },
      { label: "Care", value: "Spot clean" }
    ],
    useCases: ["Everyday accessory", "Travel styling", "Impulse add-on"],
    recommendations: ["ridge-everyday-tee", "summit-trail-pack"],
    accent: { from: "#74443d", to: "#f0bda9", ink: "#fff1eb" }
  }
];
