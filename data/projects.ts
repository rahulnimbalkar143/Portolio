import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "nodesq-ai",
    title: "NodeSq AI",
    category: "AI & Full-Stack",
    tagline: "AI-Powered Infinite Canvas Conversation Platform",
    description:
      "An AI-powered visual conversation and thought-mapping platform that transforms dialogues into interconnected visual nodes on an interactive canvas.",
    keyWork: [
      "Built an interactive infinite canvas with zooming, panning, and dynamic node connections using React Flow and Redux.",
      "Engineered backend services with Node.js and PostgreSQL to persist node states, conversation history, and custom prompt templates.",
      "Implemented dynamic AI response streaming and markdown rendering across branching dialogue nodes.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "React Flow",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/rahulnimbalkar143",
    featured: true,
  },
  {
    id: "krushee-mart",
    title: "Krushee Mart",
    category: "Full-Stack",
    tagline: "Agricultural Full-Stack E-Commerce Platform",
    description:
      "A farmer-focused agricultural marketplace designed to streamline browsing, purchasing, and managing authentic farming products and equipment.",
    keyWork: [
      "Developed a responsive multi-category catalog with real-time product search, filtering, and cart state management using React.js.",
      "Engineered secure RESTful APIs with Node.js and Express, implementing JWT authentication and role-based user flows.",
      "Designed normalized MySQL database schemas to handle inventory updates, order transactions, and customer records.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    githubUrl: "https://github.com/rahulnimbalkar143",
    featured: true,
  },
  {
    id: "enterprise-inventory",
    title: "Enterprise Inventory Management System",
    category: "Java & Spring Boot",
    tagline: "Role-Based Stock & Audit Tracking Platform",
    description:
      "A full-stack enterprise inventory system developed to automate stock tracking, vendor procurement, product lifecycles, and audit trails.",
    keyWork: [
      "Engineered enterprise REST APIs using Spring Boot, Spring Security, and stateless JWT authentication across multi-tier user privileges.",
      "Designed normalized MySQL database schema with transaction logging, automated low-stock threshold triggers, and audit records.",
      "Built an intuitive React.js dashboard for inventory dispatch tracking, vendor management, and stock movement reports.",
    ],
    technologies: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Maven",
      "REST APIs",
    ],
    githubUrl: "https://github.com/rahulnimbalkar143",
    featured: true,
  },
  {
    id: "online-quiz-app",
    title: "Online Quiz Application",
    category: "Full-Stack Application",
    tagline: "Full-Stack Online Quiz & Assessment Platform",
    description:
      "An interactive assessment platform designed to deliver timed quizzes with randomized question generation, automated grading, and anti-cheat validation.",
    keyWork: [
      "Implemented real-time quiz timers, randomized question selection from categorized question banks, and instant score computation.",
      "Built anti-cheat validation workflows including tab-switch detection and submission time integrity checks.",
      "Developed responsive React.js quiz interfaces and RESTful backend APIs with MySQL for question bank and result management.",
    ],
    technologies: [
      "React.js",
      "Spring Boot",
      "Node.js",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/rahulnimbalkar143",
    featured: true,
  },
];
