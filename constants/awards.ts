export interface Award {
  name: string;
  type: string;
  icon: string;
}

export const AWARDS: Award[] = [
  { name: "President", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png" },
  { name: "Vice President (Marketing & Public relations)", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png" },
  { name: "International Relations & Campaigns Manager - AIESEC in IIT", type: "leadership", icon: "/awards/AIESEC-Human-Blue.png" },
  { name: "Organizing Committee - Codesprint 7 (IEEE IIT)", type: "event", icon: "/awards/IEEE-logo.png" },
  { name: "Organizing Committee - Cutting Edge 2023 & 2025 (IIT)", type: "event", icon: "/awards/CE-Logo.png" },
  { name: "Level 5 Pianist (ABRSM)", type: "music", icon: "/awards/ABRSM_logo.png" },
  { name: "Piano Solo All Island Finalist (2016) – SL Festival of Music, Dance & Speech", type: "music", icon: "/awards/SLIMDS-logo.jpg" },
  { name: "Clarinetist (5 years) – Western Band, Lyceum Gampaha", type: "music", icon: "/awards/LIS-logo.jpg" },
  { name: "Badminton Player (2015-2019)", type: "sport", icon: "/awards/LIS-logo.jpg" },
];
