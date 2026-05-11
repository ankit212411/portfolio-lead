import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sfra-migration-solutions",
    title: "SFRA Migration Solutions for an Education Commerce Platform",
    summary:
      "Migrated static AEM commerce journeys to Salesforce Commerce Cloud SFRA, adding configurable subscription terms, upsell recommendations, checkout improvements, and partially automated order processing.",
    client: "Global Publishing & Education Provider",
    industry: "Education Ecommerce",
    timeline: "Enterprise SFRA migration",
    role: "Technical Lead / SFCC Frontend Engineer",
    stack: ["SFCC", "SFRA", "Business Manager", "JavaScript", "TypeScript", "jQuery", "Git"],
    problem: [
      "The education business relied on static AEM pages that made product configuration, dynamic content, and enhancements slow because many updates required code changes.",
      "Subscription ordering needed stronger ecommerce capabilities, including configurable print and digital terms, clearer order data, and fewer manual customer-care steps.",
      "The business needed a future-ready SFCC/SFRA storefront that could support promotions, recommendations, checkout options, and operational transparency."
    ],
    approach: [
      "Implemented SFRA storefront journeys that preserved the customer path while moving commerce management into Salesforce Commerce Cloud.",
      "Built custom cart and checkout functionality for full and half subscription terms, single or multi-item shipping, and improved promotional visibility.",
      "Added intermediate upsell logic and recommendation patterns so merchandising could improve discovery without creating friction in the buying path."
    ],
    technicalDecisions: [
      {
        title: "SFRA as the commerce foundation",
        detail:
          "Used Salesforce Storefront Reference Architecture to replace static AEM experiences with configurable commerce capabilities and stronger merchant control."
      },
      {
        title: "Custom subscription checkout",
        detail:
          "Extended cart and checkout behavior to support education-specific subscription terms, shipment scenarios, teacher data, and school information."
      },
      {
        title: "Operational automation",
        detail:
          "Reduced manual order verification by locating existing teacher and school records and allowing eligible single-shipment orders to move forward automatically."
      }
    ],
    results: [
      {
        label: "Search visibility",
        value: "#1",
        context:
          "The published SFRA migration case study ranked number one on Google for 3 of the past 10 weeks for SFRA migration solutions."
      },
      {
        label: "Top 10 presence",
        value: "9/10 weeks",
        context:
          "The case study stayed in the top 10 for 9 of the past 10 weeks, supporting thought leadership around SFRA migration solutions."
      },
      {
        label: "Order operations",
        value: "Partially automated",
        context:
          "Reduced customer-care burden by automating valid single-shipment order flows and making order data easier to review."
      }
    ]
  },
  {
    slug: "headless-sfcc-nextjs-storefront",
    title: "Headless SFCC Storefront with React and Next.js",
    summary:
      "Led frontend delivery for a headless ecommerce storefront on Salesforce Commerce Cloud, combining Next.js, React, Tailwind CSS, SLAS authentication, Shopper APIs, and reusable UI architecture.",
    client: "Auvira Storefront",
    industry: "Headless Commerce",
    timeline: "Nov 2025 - Jan 2026",
    role: "Technical Lead",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SFCC", "SLAS", "Shopper APIs", "Jest"],
    problem: [
      "The storefront needed a modern headless frontend on top of SFCC while preserving core commerce behavior for product discovery, pricing, promotions, cart, and checkout.",
      "Authenticated shopper flows required secure login, logout, profile navigation, token handling, session persistence, and strong edge-case behavior.",
      "The team needed maintainable engineering standards so multiple developers could ship against SFCC data contracts without creating inconsistent frontend patterns."
    ],
    approach: [
      "Built the frontend with React, Next.js, TypeScript, and Tailwind CSS, emphasizing reusable components, typed patterns, and predictable route structure.",
      "Integrated SFCC Shopper Login and API Access Service for authenticated user flows, token persistence, and profile menu interactions.",
      "Aligned with SFCC backend and OCAPI teams on catalog, pricing, promotion, inventory, customer, cart, and checkout data contracts."
    ],
    technicalDecisions: [
      {
        title: "Typed component architecture",
        detail:
          "Established reusable components, hooks, utilities, folder conventions, and TypeScript patterns to keep the storefront scalable and easier to onboard."
      },
      {
        title: "Focused auth boundaries",
        detail:
          "Isolated authenticated UI and SLAS token handling so shopper session concerns did not leak across unrelated storefront components."
      },
      {
        title: "Commerce API resilience",
        detail:
          "Handled expired sessions, token refresh, partial API failures, empty states, and shopper edge cases to protect the buying journey."
      }
    ],
    results: [
      {
        label: "Architecture",
        value: "Headless",
        context:
          "Delivered a React and Next.js storefront architecture on SFCC with reusable UI foundations and commerce API integration."
      },
      {
        label: "Auth flows",
        value: "SLAS-ready",
        context:
          "Implemented secure authenticated shopper experiences with token handling, session persistence, and profile navigation."
      },
      {
        label: "Team quality",
        value: "Standards set",
        context:
          "Defined linting, TypeScript, folder, hook, and utility conventions to improve code quality and onboarding speed."
      }
    ]
  },
  {
    slug: "global-commerce-experience-platform",
    title: "Global Commerce Experience Platform",
    summary:
      "Built and optimized SFCC storefront experiences across multi-locale ecommerce, Page Designer, analytics, privacy consent, and campaign-driven marketing modules.",
    client: "MCM Worldwide",
    industry: "Luxury Ecommerce",
    timeline: "Oct 2024 - Present",
    role: "Technical Lead",
    stack: ["React", "JavaScript", "SFRA", "Page Designer", "GTM", "OneTrust", "HTML5", "CSS3"],
    problem: [
      "Global storefront teams needed reusable promotional widgets, product display modules, and dynamic marketing content that could support multi-locale ecommerce operations.",
      "Analytics and privacy requirements had to be implemented without degrading storefront performance or slowing campaign delivery.",
      "Business users needed more control over marketing pages and promotional content without requiring developers for every content update."
    ],
    approach: [
      "Developed React-based UI components and SFCC Page Designer components for promotional widgets, product modules, and dynamic marketing experiences.",
      "Implemented localization features across countries, languages, and currencies while coordinating with commerce APIs and third-party services.",
      "Integrated Google Tag Manager and OneTrust consent management to support analytics, campaign tracking, and privacy compliance across regions."
    ],
    technicalDecisions: [
      {
        title: "Business-editable modules",
        detail:
          "Built Page Designer components so business teams could assemble dynamic marketing pages and promotional content without developer intervention."
      },
      {
        title: "Analytics with consent control",
        detail:
          "Implemented GTM and OneTrust together so user behavior tracking and campaign measurement respected cookie consent requirements."
      },
      {
        title: "Performance-aware rendering",
        detail:
          "Improved page load behavior through efficient component rendering, script management, and careful integration of marketing tools."
      }
    ],
    results: [
      {
        label: "Markets",
        value: "Multi-locale",
        context:
          "Supported storefront experiences across different countries, languages, currencies, and regional business requirements."
      },
      {
        label: "Marketing velocity",
        value: "Improved",
        context:
          "Enabled business teams to publish dynamic campaign and promotional pages through reusable Page Designer components."
      },
      {
        label: "Compliance",
        value: "GTM + OneTrust",
        context:
          "Connected analytics and consent management so campaign tracking could operate with stronger privacy controls."
      }
    ]
  }
];
