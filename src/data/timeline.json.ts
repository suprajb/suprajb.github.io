export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  summary: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "Feb 2026 — Present",
    title: "AI SWE — Amari AI",
    organization: "San Francisco",
    summary: "Building AI agents for global logistics.",
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Extern Researcher —  Google",
    organization: "Remote",
    summary: "Worked with Google's Gemini 2.0 team on long-context LLM evaluation and scalable scoring tools.",
  },
  {
    period: "Jan 2024 — Dec 2025 (expected)",
    title: "M.S., Computer Science",
    organization: "University of Massachusetts, Amherst",
    summary: "Grad school focused on ML & distributed systems.",
  },
  {
    period: "Jun 2021 — Aug 2023",
    title: "Fullstack Software Engineer",
    organization: "Salesforce — Remote",
    summary: "Engineered high-throughput APIs and optimized frontend rendering for Financial Services Cloud, supporting enterprise-scale traffic.",
  },
  {
    period: "May 2020 — Jul 2020",
    title: "Software Engineer Intern",
    organization: "Salesforce — Remote",
    summary: "Shippped a Dockerized Rete-based rule engine and cut processing time by ~30%.",
  },
  {
    period: "Aug 2017 — May 2021",
    title: "B.Tech, Computer Science",
    organization: "Indian Institute of Technology, Hyderabad",
    summary: "Undergrad in CS with projects across systems, algorithms, and tooling.",
  },
];
