import Link from "next/link";

function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3v3m0 12v3M5.6 6.8l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M7.5 12h9m-4.5-4.5v9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function AgentWorkbenchLauncher() {
  return (
    <Link
      href="/agent-workbench"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent text-[#101820] shadow-soft transition hover:-translate-y-0.5"
      aria-label="Open multi-agent delivery console"
      title="Open multi-agent delivery console"
    >
      <AgentIcon />
    </Link>
  );
}
