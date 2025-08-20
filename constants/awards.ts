export interface Award {
  name: string;
  type: string;
  icon: string;
  term?: string; // 👈 New field for time/term
}

export interface AwardCategory {
  title: string;
  awards: Award[];
}

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    title: "AIESEC Leadership",
    awards: [
      { name: "President", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png", term: "Term 25.26" },
      { name: "Vice President (Marketing & Public Relations)", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png", term: "Term 24.25" },
      { name: "International Relations & Campaigns Manager", type: "AIESEC in IIT", icon: "/awards/AIESEC-Human-Blue.png", term: "Winter Leadership Body - term 23.24" },
      { name: "Organising Committee Vice President - National Leadership Development Seminar", type: "AIESEC in Sri Lanka", icon: "/awards/AIESEC-Human-Blue.png", term: "2025" },
    ]
  },
  {
    title: "IEEE",
    awards: [
      { name: "Organizing Committee - Codesprint 7", type: "IEEE IIT", icon: "/awards/IEEE-logo.png", term: "2023" },
    ]
  },
  {
    title: "Rotaract",
    awards: [
      { name: "Director of Community Service", type: "Rotaract Club of Gampaha", icon: "/awards/rac-logo.png", term: "Term 24.25" },
      { name: "Treasurer", type: "Rotaract Club of Gampaha", icon: "/awards/rac-logo.png", term: "Term 25.26" },
    ]
  },
  {
    title: "IIT Events",
    awards: [
      { name: "Organizing Committee Lead - Cutting Edge", type: "Informatics Institute of Technology", icon: "/awards/CE-Logo.png", term: "2025" },
      { name: "Organizing Committee - Cutting Edge", type: "Informatics Institute of Technology", icon: "/awards/ce23-logo.png.png", term: "2023" },
    ]
  },
  {
    title: "Music",
    awards: [
      { name: "Level 5 Pianist", type: "ABRSM", icon: "/awards/ABRSM_logo.png" },
      { name: "Piano Solo All Island Finalist", type: "Sri Lanka Festival of Music, Dance & Speech", icon: "/awards/SLIMDS-logo.jpg", term: "2016" },
      { name: "Clarinetist – Western Band", type: "Lyceum International School Gampaha", icon: "/awards/LIS-logo.jpg", term: "2017-2021" },
    ]
  },
  {
    title: "Sports",
    awards: [
      { name: "Badminton Player", type: "Lyceum International School Gampaha", icon: "/awards/LIS-logo.jpg", term: "2015–2019" },
    ]
  }
];
