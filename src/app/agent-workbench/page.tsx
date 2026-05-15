import type { Metadata } from "next";

import { AgentWorkbench } from "@/features/agent-workbench";

export const metadata: Metadata = {
  title: "Multi-Agent Delivery Console",
  description:
    "A portable demo workbench for Jira-driven software delivery using role-specific frontend, backend, reviewer, QA, deployment, and human approval gates."
};

export default function AgentWorkbenchPage() {
  return <AgentWorkbench />;
}
