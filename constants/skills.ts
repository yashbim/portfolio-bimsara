export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Kotlin", "Java", "Python", "HTML", "CSS" ,"JavaScript" ,"TypeScript" ,"MySQL" ,"PostgreSQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Next.js", "React.js", "SpringBoot", "Tailwind CSS", "Prometheus", "Grafana", "Docker"],
  },
  {
    title: "Other",
    skills: ["Native Android Development", "Web Development", "Linux", "Agile"],
  },
];
