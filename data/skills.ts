import { SkillCategory, EngineeringPractice } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    iconName: "Code",
    badgeCount: 6,
    skills: ["Java", "JavaScript (ES6+)", "Python", "C / C++", "SQL"],
  },
  {
    id: "databases",
    title: "Databases",
    iconName: "Database",
    badgeCount: 3,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Development",
    iconName: "Layers",
    badgeCount: 12,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux / Redux Toolkit",
      "HTML5 & CSS3",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Spring Security",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    iconName: "Wrench",
    badgeCount: 5,
    skills: [
      "Git / GitHub",
      "Postman",
      "VS Code",
      "Maven",
    ],
  },
];

export const engineeringPractices: EngineeringPractice[] = [
  {
    id: "rest-arch",
    title: "RESTful Architecture",
    description: "Clean API design & HTTP methods",
  },
  {
    id: "auth-authz",
    title: "Authentication & Authorization",
    description: "JWT & role-based access control",
  },
  {
    id: "db-design",
    title: "Database Design",
    description: "Normalization & indexing",
  },
  {
    id: "oop-dsa",
    title: "OOP & Data Structures",
    description: "SOLID principles & problem solving",
  },
];
