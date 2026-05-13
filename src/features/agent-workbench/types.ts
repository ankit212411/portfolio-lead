export type AgentRole = "frontend" | "backend" | "reviewer" | "qa" | "deployment";

export type AgentStatus = "pending" | "active" | "complete" | "blocked";

export type TicketInput = {
  ticketKey: string;
  title: string;
  description: string;
  acceptanceCriteria: string;
};

export type AgentAssignment = {
  role: AgentRole;
  title: string;
  reason: string;
  scope: string[];
};

export type AgentPlan = {
  classification: "frontend" | "backend" | "full-stack" | "delivery";
  riskLevel: "low" | "medium" | "high";
  summary: string;
  assumptions: string[];
  assignments: AgentAssignment[];
};

export type WorkflowStep = {
  id: string;
  label: string;
  owner: string;
  status: AgentStatus;
  output: string;
};

export type LlmProvider = "groq" | "openai";

export type AgentAnalysisResult = {
  plan: AgentPlan;
  provider: LlmProvider;
  model: string;
  source: "llm" | "deterministic-fallback" | "local-fallback";
  warning?: string;
};
