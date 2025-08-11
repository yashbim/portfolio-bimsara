export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Software Engineer",
    company: "TechNova Labs",
    period: "2023 — Present",
    summary:
      "Built microservices and internal tools, reducing deployment time by 40% and improving reliability.",
  },
  {
    role: "Business Analyst",
    company: "InsightWorks",
    period: "2021 — 2023",
    summary:
      "Led analytics initiatives, defined KPIs, and partnered with engineering to ship data features.",
  },
];
