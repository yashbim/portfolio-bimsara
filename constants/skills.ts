export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL", "Prisma"],
  },
  {
    title: "Other",
    skills: ["Systems Design", "Data Analytics", "Product Strategy", "Agile"],
  },
];
