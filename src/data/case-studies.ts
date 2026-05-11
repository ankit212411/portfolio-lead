import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-storefront-scaling",
    title: "Ecommerce Storefront Scaling",
    summary:
      "Re-architected a multi-brand storefront to handle peak traffic, merchandising complexity, and faster release cycles without compromising Core Web Vitals.",
    client: "DTC Retail Group",
    industry: "Ecommerce",
    timeline: "6 months",
    role: "Frontend Lead / Architect",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Contentful", "Vercel"],
    problem: [
      "The storefront had grown into a tightly coupled codebase where every campaign launch touched shared templates and increased regression risk.",
      "Traffic spikes during seasonal drops caused slow category pages, hydration bottlenecks, and unstable UX on mobile devices.",
      "Merchandising teams needed faster landing page assembly, but the current implementation required engineering involvement for minor content changes."
    ],
    approach: [
      "Split the storefront into modular route segments and domain-driven UI slices so listing, product, and editorial surfaces could evolve independently.",
      "Introduced typed content contracts and shared section primitives to reduce branching logic between brands and campaign variants.",
      "Focused on cache strategy, route-level static generation, and selective client interactivity to keep the default experience server-first."
    ],
    technicalDecisions: [
      {
        title: "Server-first composition",
        detail:
          "Moved merchandising layouts and product listing assembly into server components so the client only hydrated the parts that genuinely required interaction."
      },
      {
        title: "Segmented UI ownership",
        detail:
          "Established shared foundations for cards, pricing, badges, and grid layouts while keeping domain-specific modules isolated to avoid platform-wide regressions."
      },
      {
        title: "Progressive enhancement for conversion UI",
        detail:
          "Kept add-to-cart, recommendations, and promo logic behind focused client boundaries rather than hydrating full templates."
      }
    ],
    results: [
      {
        label: "Mobile LCP",
        value: "-34%",
        context: "Improved average mobile largest contentful paint across high-traffic category pages."
      },
      {
        label: "Release throughput",
        value: "+45%",
        context: "Reduced engineering effort for campaign launches through reusable merchandising sections."
      },
      {
        label: "Conversion uplift",
        value: "+11%",
        context: "Improved add-to-cart rate after simplifying listing interactions and reducing layout shifts."
      }
    ]
  },
  {
    slug: "frontend-architecture-design",
    title: "Frontend Architecture Design",
    summary:
      "Defined a scalable frontend architecture for a SaaS platform spanning admin tools, customer workflows, and embedded partner experiences.",
    client: "B2B SaaS Platform",
    industry: "SaaS",
    timeline: "4 months",
    role: "Frontend Lead / Platform Owner",
    stack: ["Next.js", "React", "TypeScript", "Storybook", "TanStack Query", "Node.js"],
    problem: [
      "Teams were shipping features quickly, but the product surface had inconsistent state patterns, duplicated UI logic, and weak boundaries between app domains.",
      "Onboarding new engineers was slow because architecture decisions lived in tribal knowledge rather than code structure and conventions.",
      "Design system adoption stalled because teams were forced into either rigid components or one-off local implementations."
    ],
    approach: [
      "Created a layered architecture with clear separation between app routes, feature modules, shared UI foundations, and service adapters.",
      "Defined a pragmatic composition model: server-rendered data shells, colocated feature logic, and narrowly scoped client interactivity.",
      "Documented conventions through examples, starter modules, and review checklists so engineering quality became teachable and repeatable."
    ],
    technicalDecisions: [
      {
        title: "Feature-sliced ownership",
        detail:
          "Organized product areas around business capabilities rather than file types, which improved discoverability and reduced cross-team collisions."
      },
      {
        title: "Design system as a foundation layer",
        detail:
          "Kept primitives intentionally small, with typed variants and composition hooks, so teams could move quickly without forking the visual system."
      },
      {
        title: "Operational quality baked in",
        detail:
          "Added linting standards, route-level metadata patterns, and data-loading conventions early to prevent entropy as teams scaled."
      }
    ],
    results: [
      {
        label: "Onboarding time",
        value: "-40%",
        context: "New frontend engineers reached productive contribution faster through clearer structure and examples."
      },
      {
        label: "Shared UI reuse",
        value: "68%",
        context: "Measured increase in shared component adoption across high-frequency workflow surfaces."
      },
      {
        label: "Delivery confidence",
        value: "+30%",
        context: "Teams reported fewer late-stage regressions after moving to clearer boundaries and ownership."
      }
    ]
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    summary:
      "Led a focused performance program for a mature web application where conversion was being constrained by heavy client bundles and interaction latency.",
    client: "Subscription Commerce Brand",
    industry: "Growth / Performance",
    timeline: "10 weeks",
    role: "Frontend Lead",
    stack: ["Next.js", "React", "TypeScript", "Webpack", "Analytics", "A/B Testing"],
    problem: [
      "The product had strong acquisition, but conversion dropped sharply on mobile due to slow startup, unnecessary JavaScript, and unstable rendering during checkout entry points.",
      "Performance discussions were reactive because there was no shared measurement framework connecting engineering work to business impact.",
      "Teams were hesitant to refactor because previous performance efforts traded maintainability for marginal gains."
    ],
    approach: [
      "Started with measurement: bundle analysis, route timings, interaction delays, and user funnel drop-offs tied to specific templates.",
      "Prioritized the highest-impact wins first, including route-level code splitting, image strategy changes, and a stricter server-client boundary.",
      "Introduced lightweight performance budgets and review prompts so gains would persist after the initial optimization project."
    ],
    technicalDecisions: [
      {
        title: "Client bundle containment",
        detail:
          "Moved non-critical widgets behind dynamic imports and reduced shared bundle bloat by isolating feature-specific dependencies."
      },
      {
        title: "Render-path simplification",
        detail:
          "Collapsed redundant providers and memo-heavy abstractions that added complexity while still causing broad rerenders."
      },
      {
        title: "Performance as a product metric",
        detail:
          "Aligned performance work with commercial pages and funnel stages so teams could prioritize based on customer impact, not just Lighthouse deltas."
      }
    ],
    results: [
      {
        label: "Initial JS payload",
        value: "-28%",
        context: "Reduced JavaScript shipped to key landing and PDP routes."
      },
      {
        label: "Mobile conversion",
        value: "+8.6%",
        context: "Lift in sessions reaching checkout after faster route startup and cleaner interaction flows."
      },
      {
        label: "INP",
        value: "-37%",
        context: "Improved interaction responsiveness on mobile merchandising pages."
      }
    ]
  }
];
