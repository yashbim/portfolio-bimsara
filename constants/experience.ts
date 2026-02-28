export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  icon: string;
  summary: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    role: "Trainee Software Engineer",
    company: "hSenid Mobile Solutions",
    period: "June 2023 - August 2024",
    icon:"/companies/hsenid.png",
    summary:
    "",
      // "Worked on integrating office suite tools, and creating reporting dashboards using Grafana for telecommunication API management.",
  },
  {
    role: "Associate Business Analyst",
    company: "hSenid Mobile Solutions",
    period: "August 2025 - Present",
    icon:"/companies/hsenid.png",
    summary:
      "",
  },
  {
    role: "Tech Lead",
    company: "DevTeam - AIESEC in Sri Lanka",
    period: "January 2026 - Present",
    icon:"/companies/AIESEC-Human-Blue.png",
    summary:
      "",
  },
  {
    role: "Developer",
    company: "Maverick Intelligence",
    period: "June 2025 - October 2025 - (Part Time)" ,
    icon:"/companies/maverick.png",
    summary:
    "",
      // "Built stock market prediction applications, and worked on ERP systems for real estate industries.",
  },
];
