# Frontend Lead Portfolio + Commerce Demo

Production-style Next.js portfolio and ecommerce demo built with App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  app/             # Routes and metadata
  components/      # Shared UI, portfolio, store, and layout components
  context/         # Client state for cart interactions
  data/            # Typed portfolio and commerce mock data
  lib/             # Utilities, site config, and commerce selectors
  types/           # Shared TypeScript types
```

## Notes

- Portfolio content, contact details, and navigation config live in `src/lib/site.ts`.
- Case studies and projects are data-driven from `src/data`.
- Commerce pages use static generation and revalidation-ready patterns.
- Cart state is client-side and persisted in local storage.
