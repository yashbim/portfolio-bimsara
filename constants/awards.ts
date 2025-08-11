export interface Award {
  name: string;
  type: string;
  icon: string;
}

export const AWARDS: Award[] = [
  { name: "Hackathon Winner", type: "tech", icon: "/vercel.svg" },
  { name: "Orchestra Lead", type: "music", icon: "/globe.svg" },
  { name: "University Sports Meet – Silver", type: "sport", icon: "/next.svg" },
];
