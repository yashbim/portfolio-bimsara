export interface Project {
  title: string;
  tech: string[];
  desc: string;
  img: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Analytics Dashboard",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    desc: "Interactive analytics with role-based access and custom reports.",
    img: "/window.svg",
  },
  {
    title: "Realtime Collaboration",
    tech: ["React", "Node.js", "WebSocket"],
    desc: "Collaborative editor with presence and conflict resolution.",
    img: "/globe.svg",
  },
  {
    title: "E‑commerce Platform",
    tech: ["Next.js", "Prisma", "Stripe"],
    desc: "Headless storefront with performant product search.",
    img: "/file.svg",
  },
];
