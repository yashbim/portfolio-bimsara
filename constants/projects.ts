export interface Project {
  title: string;
  tech: string[];
  desc: string;
  img: string;
  github: string;
  demo?: string; 
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Smart Batik Design Assistant (VasthraAI)",
    tech: ["Python", "FastAPI", "React.js"],
    desc: "VasthraAI empowers cultural fashion designers by refining their designs and elevating their creations with a subtle infusion of artificial intelligence.",
    img: "/project_images/VasthraAI_Logo.png",
    github: "https://github.com/yashbim/VasthraAI_IMPL.git",
    demo: "https://youtu.be/KBr93vnbiHU", 
  },

  {
    title: "NLDS Website & Merch Store ",
    tech: ["Typescript", "PostgreSQL", "Next.js", "YubaByte", "Grafana"],
    desc: "Built the official website of the National Leadership Development Seminar 2025 by AIESEC in Sri Lanka. Includes a merch store, and processes orders via a Yugabyte AEON postgresql DB and views sales stats via a Grafana Dashboard.",
    img: "/project_images/nlds-2025-logo.png",
    github: "https://github.com/yashbim/nlds-2025.git",
    website : "https://nlds-2025.vercel.app/", 
  },
  
  {
    title: "Mood Based Music Recommendation App (MoodSpire)",
    tech: ["Python", "Flutter"],
    desc: "Mobile app that scans the user's face, detects mood, and recommends a personalized list of music.",
    img: "/project_images/moodspire-logo.png",
    github: "https://github.com/navichrishen/moodspire.git",
  },
  {
    title: "Anonymous Feedback Platform",
    tech: ["Kotlin", "PostgreSQL", "SpringBoot", "NextJS", "TailwindCSS"],
    desc: "Lecture feedback system where lecturers can create links and students can submit feedback anonymously.",
    img: "/project_images/e-sugarcubes_logo.png",
    github: "https://github.com/yashbim/e-sugarcubes.git",
  },
  {
    title: "Bicycle Renting App (CityCycle)",
    tech: ["Kotlin", "Java", "SQLite"],
    desc: "Android app for a nationwide bicycle rental service with login, reservations, account management, rental history, promotions, and integrated maps for station locations.",
    img: "/project_images/city-cycles-logo.png",
    github: "https://github.com/yashbim/City-Cycle-App.git",
  },
  {
    title: "Dice Rolling Game (Dice Dominator)",
    tech: ["Kotlin"],
    desc: "Dice game against the computer with rerolls, difficulty modes, high score tracking, and a five-dice play system.",
    img: "/project_images/dice-dominator-logo.png",
    github: "https://github.com/yashbim/Dice-Dominator.git",
  },
  {
    title: "Hotel Booking App (LuxeVista)",
    tech: ["Java", "SQLite"],
    desc: "Room and service booking app for a hotel called LuxeVista",
    img: "/project_images/luxevista-logo.png",
    github: "https://github.com/yashbim/LuxeVista-App",
  },
  {
    title: "Sports Shop Website (SportsExpress)",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Interactive website for a sports shop with product listings and engaging UI.",
    img: "/project_images/sportsxpress-logo.png",
    github: "https://github.com/yashbim/SportsExpress.git",
  }
];
