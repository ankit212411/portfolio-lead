import Link from "next/link";

export function ResearchDemoLauncher() {
  return (
    <Link
      href="/research/multi-agent-delivery"
      className="fixed bottom-5 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong"
      aria-label="Open AI-assisted engineering delivery research demo"
      title="AI delivery system"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M4.2 7.5l2.6 1.5" />
        <path d="M17.2 15l2.6 1.5" />
        <path d="M19.8 7.5l-2.6 1.5" />
        <path d="M6.8 15l-2.6 1.5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M10.4 11.2h3.2" />
        <path d="M10.4 12.8h3.2" />
      </svg>
    </Link>
  );
}
