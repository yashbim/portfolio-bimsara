export interface Award {
  name: string;
  type: string;
  icon: string;
}

export interface AwardCategory {
  title: string;
  awards: Award[];
}

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    title: "AIESEC Leadership",
    awards: [
      { name: "President", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png" },
      { name: "Vice President (Marketing & Public relations)", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png" },
      { name: "International Relations & Campaigns Manager - AIESEC in IIT", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png" },
      { name: "Organising Comittee Vice President - National Leadership Development Seminar 2025", type: "AIESEC in Sri Lanka", icon: "/awards/AIESEC-Human-Blue.png" },
    ]
  },
  {
    title: "IEEE",
    awards: [
      { name: "Organizing Committee - Codesprint 7", type: "IEEE IIT", icon: "/awards/IEEE-logo.png" },
    ]
  },
  
  {
    title: "Rotaract",
    awards: [
      { name: "Director of Community Service (term 24.25)", type: "Rotaract Club of Gampaha", icon: "/awards/rac-logo.png" },
      { name: "Treasurer (term 25.26)", type: "Rotaract Club of Gampaha", icon: "/awards/rac-logo.png" },
    ]
  },
  {
    title: "IIT Events",
    awards: [
      { name: "Organizing Committee Lead- Cutting Edge 2025 (IIT)", type: "Informatics Institute of Technology", icon: "/awards/CE-Logo.png" },
      { name: "Organizing Committee - Cutting Edge 2023 (IIT)", type: "Informatics Institute of Technology", icon: "/awards/ce23-logo.png.png" },
    ]
  },
  {
    title: "Music",
    awards: [
      { name: "Level 5 Pianist", type: "ABRSM", icon: "/awards/ABRSM_logo.png" },
      { name: "Piano Solo All Island Finalist (2016) ", type: "Sri Lanka Festival of Music, Dance & Speech", icon: "/awards/SLIMDS-logo.jpg" },
      { name: "Clarinetist (5 years) – Western Band, ", type: "Lyceum International School Gampaha", icon: "/awards/LIS-logo.jpg" },
    ]
  },
  {
    title: "Sports",
    awards: [
      { name: "Badminton Player (2015-2019)", type: "Lyceum International School Gampaha", icon: "/awards/LIS-logo.jpg" },
    ]
  }
];