import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sfra-migration-solutions",
    title: "SFRA Migration Solutions for an Education Commerce Platform",
    summary:
      "Moved static AEM purchase journeys into Salesforce Commerce Cloud SFRA so merchandising, checkout, subscription terms, and order operations could scale without constant engineering dependency.",
    client: "Global Publishing & Education Provider",
    industry: "Education Ecommerce",
    timeline: "Enterprise SFRA migration",
    role: "Technical Lead / SFCC Frontend Engineer",
    stack: ["SFCC", "SFRA", "Business Manager", "JavaScript", "TypeScript", "jQuery", "Git"],
    problem: [
      "The education business was running commerce journeys through static AEM pages, which slowed product updates, merchandising tests, and subscription changes.",
      "Subscription ordering required more flexible term selection, better school and teacher data capture, and fewer manual customer-care checks after checkout.",
      "The platform needed an SFCC/SFRA foundation that could support promotions, recommendations, operational visibility, and future storefront releases."
    ],
    approach: [
      "Rebuilt the core buying journey in SFRA while preserving the familiar customer path and moving commerce control into Salesforce Commerce Cloud.",
      "Implemented configurable full and half subscription terms, single and multi-item shipping paths, promotional visibility, and structured order data.",
      "Added recommendation and upsell touchpoints that gave merchandising more control without interrupting checkout momentum."
    ],
    technicalDecisions: [
      {
        title: "SFRA as the commerce foundation",
        detail:
          "Used Salesforce Storefront Reference Architecture to replace static purchase pages with configurable commerce behavior, merchant-owned content, and a safer extension model."
      },
      {
        title: "Custom subscription checkout",
        detail:
          "Extended cart and checkout behavior around education-specific subscription terms, shipment scenarios, teacher records, school information, and clearer order review."
      },
      {
        title: "Operational load reduction",
        detail:
          "Reduced manual order verification by locating existing teacher and school records and allowing eligible single-shipment orders to move through cleaner fulfillment paths."
      }
    ],
    results: [
      {
        label: "SEO leadership",
        value: "#1",
        context:
          "The published SFRA migration case study ranked number one on Google for 3 of the past 10 weeks for SFRA migration solutions."
      },
      {
        label: "Search durability",
        value: "9/10 weeks",
        context:
          "The case study stayed in the top 10 for 9 of the past 10 weeks, strengthening thought leadership around SFRA migration solutions."
      },
      {
        label: "Order operations",
        value: "~30% fewer checks",
        context:
          "Reduced manual review pressure for eligible single-shipment orders through better record lookup, cleaner checkout data, and automated handoff paths."
      }
    ]
  },
  {
    slug: "headless-sfcc-nextjs-storefront",
    title: "Headless SFCC Storefront with React and Next.js",
    summary:
      "Led the frontend foundation for a headless SFCC storefront with Next.js, React, TypeScript, SLAS authentication, Shopper APIs, and reusable commerce UI patterns.",
    client: "Auvira Storefront",
    industry: "Headless Commerce",
    timeline: "Nov 2025 - Jan 2026",
    role: "Technical Lead",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SFCC", "SLAS", "Shopper APIs", "Jest"],
    problem: [
      "The team needed a modern headless frontend on top of SFCC without weakening core commerce behavior for discovery, pricing, promotions, cart, and checkout.",
      "Authenticated shopper journeys required reliable login, logout, profile navigation, token handling, session persistence, and failure-state behavior.",
      "Multiple developers needed to ship against SFCC data contracts without creating inconsistent components, duplicated API logic, or fragile route patterns."
    ],
    approach: [
      "Built the storefront with React, Next.js, TypeScript, and Tailwind CSS, emphasizing typed commerce contracts, reusable components, and predictable route structure.",
      "Integrated SFCC Shopper Login and API Access Service for authenticated user flows, token persistence, profile menus, and session boundaries.",
      "Partnered with SFCC backend and OCAPI teams on catalog, pricing, promotion, inventory, customer, cart, and checkout contracts before scaling feature work."
    ],
    technicalDecisions: [
      {
        title: "Typed commerce architecture",
        detail:
          "Established reusable components, hooks, utilities, route conventions, and TypeScript models so SFCC data contracts stayed explicit across the UI."
      },
      {
        title: "Focused auth boundaries",
        detail:
          "Isolated authenticated UI and SLAS token handling so shopper session concerns did not leak into unrelated product, cart, or merchandising components."
      },
      {
        title: "Commerce API resilience",
        detail:
          "Designed for expired sessions, token refresh, partial API failures, empty states, and shopper edge cases before they became production defects."
      }
    ],
    results: [
      {
        label: "Frontend domains",
        value: "6 mapped",
        context:
          "Mapped product, auth, customer, cart, checkout, and merchandising concerns into clear frontend ownership boundaries."
      },
      {
        label: "Auth readiness",
        value: "4 key flows",
        context:
          "Implemented login, logout, profile navigation, and persisted session behavior with SLAS token handling."
      },
      {
        label: "Delivery speed",
        value: "~35% faster setup",
        context:
          "Reduced new feature setup time with reusable UI patterns, typed utilities, linting, folder conventions, and shared hooks."
      }
    ]
  },
  {
    slug: "global-commerce-experience-platform",
    title: "Global Commerce Experience Platform",
    summary:
      "Built scalable SFCC storefront modules for a global luxury commerce experience across Page Designer, localization, analytics, consent, and campaign delivery.",
    client: "MCM Worldwide",
    industry: "Luxury Ecommerce",
    timeline: "Oct 2024 - Present",
    role: "Technical Lead",
    stack: ["React", "JavaScript", "SFRA", "Page Designer", "GTM", "OneTrust", "HTML5", "CSS3"],
    problem: [
      "Global storefront teams needed reusable promotional widgets, product modules, and campaign content that could support multiple locales without one-off engineering work.",
      "Analytics and privacy requirements had to be implemented without slowing storefront performance, campaign measurement, or regional compliance work.",
      "Business users needed more control over marketing pages while engineering kept the storefront stable, reusable, and production-ready."
    ],
    approach: [
      "Delivered React-based UI components and SFCC Page Designer modules for promotional widgets, product displays, and dynamic marketing experiences.",
      "Implemented localization features across countries, languages, and currencies while coordinating with commerce APIs and third-party services.",
      "Integrated Google Tag Manager and OneTrust consent management with performance-aware script governance."
    ],
    technicalDecisions: [
      {
        title: "Business-editable modules",
        detail:
          "Built Page Designer components so business teams could assemble campaign pages and promotional content without waiting for custom development."
      },
      {
        title: "Analytics with consent control",
        detail:
          "Implemented GTM and OneTrust together so campaign measurement, behavior tracking, and cookie consent stayed aligned across regions."
      },
      {
        title: "Performance-aware rendering",
        detail:
          "Protected page load behavior through efficient rendering, third-party script discipline, and careful integration of marketing tools."
      }
    ],
    results: [
      {
        label: "Campaign modules",
        value: "8+ reusable",
        context:
          "Enabled repeatable promotional, product, and content modules for faster campaign assembly across global storefronts."
      },
      {
        label: "Marketing velocity",
        value: "~40% faster",
        context:
          "Reduced dependency on engineering for repeat campaign pages through merchant-editable Page Designer components."
      },
      {
        label: "Script governance",
        value: "Consent-aware",
        context:
          "Connected analytics and privacy controls so tracking could operate with stronger consent handling and less storefront risk."
      }
    ]
  }
];
