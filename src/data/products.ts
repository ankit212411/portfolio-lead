import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "aurora-performance-jacket",
    name: "Aurora Belted Performance Jacket",
    category: "Outerwear",
    image: {
      src: "/images/products/aurora-performance-jacket.webp",
      alt: "Black belted performance jacket with high collar and sleeve pocket"
    },
    price: 168,
    description: "Black insulated shell with a structured collar, belted waist, and polished cold-weather profile.",
    longDescription:
      "The Aurora Belted Performance Jacket blends technical protection with a clean retail silhouette. It is designed as the kind of hero outerwear product a modern DTC storefront would lead with: premium, seasonal, and easy to merchandise across cold-weather campaigns.",
    highlights: ["Water-resistant shell", "Belted waist", "High collar", "Sleeve utility pocket"],
    rating: 4.8,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Technical nylon shell" },
      { label: "Fit", value: "Structured regular fit" },
      { label: "Closure", value: "Hidden front zip" },
      { label: "Care", value: "Machine wash cold" }
    ],
    useCases: ["Cold-weather commute", "Travel outerwear", "Premium winter campaign hero"],
    recommendations: ["atlas-knit-polo", "summit-trail-pack"],
    accent: { from: "#111111", to: "#4f5558", ink: "#f8fbfb" },
    featured: true
  },
  {
    slug: "atlas-knit-polo",
    name: "Atlas Textured Knit Polo",
    category: "Tops",
    image: {
      src: "/images/products/atlas-knit-polo.jpg",
      alt: "Tan textured short sleeve knit polo shirt"
    },
    price: 84,
    description: "Textured tan knit polo with a refined open collar and structured rib trim.",
    longDescription:
      "The Atlas Textured Knit Polo is styled for a premium basics category. The product storytelling emphasizes knit texture, color versatility, and a polished silhouette without overcomplicating the buying decision.",
    highlights: ["Textured knit", "Open collar", "Ribbed hem", "Soft cotton feel"],
    rating: 4.7,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Cotton knit blend" },
      { label: "Fit", value: "Tailored fit" },
      { label: "Color", value: "Warm taupe" },
      { label: "Care", value: "Machine wash gentle" }
    ],
    useCases: ["Smart casual wardrobe", "Layering piece", "Day-to-night styling"],
    recommendations: ["harbor-tapered-chino", "aurora-performance-jacket"],
    accent: { from: "#2b241f", to: "#9d8b78", ink: "#fff8ef" },
    featured: true
  },
  {
    slug: "harbor-tapered-chino",
    name: "Harbor Khaki Tapered Chino",
    category: "Bottoms",
    image: {
      src: "/images/products/harbor-tapered-chino.jpg",
      alt: "Folded khaki tapered chino with back pocket detail"
    },
    price: 98,
    description: "Khaki tapered chino with a clean folded presentation, stretch comfort, and everyday polish.",
    longDescription:
      "Harbor is positioned as a foundational wardrobe builder. The detail page leans on fit, fabric, and repeat-wear confidence, mirroring the kind of PDP structure that works well for conversion-focused apparel brands.",
    highlights: ["Stretch twill", "Tapered leg", "Khaki finish", "Back welt pocket"],
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
    accent: { from: "#4a4439", to: "#b6a482", ink: "#fff8ef" },
    featured: true
  },
  {
    slug: "summit-trail-pack",
    name: "Summit Bungee Trail Pack",
    category: "Accessories",
    image: {
      src: "/images/products/summit-trail-pack.webp",
      alt: "White and gray trail backpack with front bungee cord"
    },
    price: 132,
    description: "White and gray backpack with bungee storage, compact organization, and light trail utility.",
    longDescription:
      "A high-margin accessories product that complements outerwear and travel capsules. It is designed to support recommendation modules, bundle logic, and higher cart value scenarios.",
    highlights: ["16L capacity", "Bungee storage", "Front zip pocket", "Lightweight shell"],
    rating: 4.9,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Volume", value: "16 liters" },
      { label: "Material", value: "Ripstop polyester" },
      { label: "Laptop", value: "Fits up to 14-inch" },
      { label: "Warranty", value: "2 years" }
    ],
    useCases: ["Daily commute", "Weekend city trip", "Personal item carry"],
    recommendations: ["aurora-performance-jacket", "ridge-everyday-tee"],
    accent: { from: "#dfe5e8", to: "#6f7d87", ink: "#f8fbfb" }
  },
  {
    slug: "ridge-everyday-tee",
    name: "Ridge Graphic Everyday Tee",
    category: "Basics",
    image: {
      src: "/images/products/ridge-everyday-tee.webp",
      alt: "Black graphic t-shirt with white mountain artwork on the back"
    },
    price: 42,
    description: "Black heavyweight graphic tee with a bold mountain back print and everyday structure.",
    longDescription:
      "A strong entry-price product that supports bundle-building and recommendation logic. The content structure highlights graphic detail, repeat-wear value, and easy add-to-cart confidence.",
    highlights: ["Heavyweight jersey", "Back graphic", "Relaxed fit", "Reinforced collar"],
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
    accent: { from: "#26232a", to: "#8c8794", ink: "#fbf7ff" }
  },
  {
    slug: "field-day-cap",
    name: "Field Day Trucker Cap",
    category: "Accessories",
    image: {
      src: "/images/products/field-day-cap.webp",
      alt: "Gray and white mesh trucker cap with field day patch"
    },
    price: 36,
    description: "Gray and white trucker cap with mesh panels, rope trim, and a field-day patch.",
    longDescription:
      "A low-friction add-on item intended to demonstrate quick-cart behaviors and simple recommendation pathways within the storefront.",
    highlights: ["Mesh back", "Patch detail", "Rope trim", "Adjustable strap"],
    rating: 4.4,
    inventoryStatus: "In stock",
    specifications: [
      { label: "Material", value: "Cotton twill and mesh" },
      { label: "Profile", value: "Structured mid profile" },
      { label: "Adjustment", value: "Snapback" },
      { label: "Care", value: "Spot clean" }
    ],
    useCases: ["Everyday accessory", "Travel styling", "Impulse add-on"],
    recommendations: ["ridge-everyday-tee", "summit-trail-pack"],
    accent: { from: "#223449", to: "#aeb6bd", ink: "#f8fbfb" }
  }
];
