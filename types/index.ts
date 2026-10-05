export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  availability: string;
  shortBio: string;
  aboutBio1: string;
  aboutBio2: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  photoUrl: string;
  stats: StatItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  badge: string;
  description: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  badgeCount?: number;
  skills: string[];
}

export interface EngineeringPractice {
  id: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  overview: string;
  liveSystemsLabel?: string;
  liveSystems?: string[];
  keyContributions: string[];
  technologies: string[];
  certificateUrl?: string;
  certificatePreview?: string;
  isPdfCertificate?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyWork: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  previewUrl: string;
  fileUrl: string;
  isPdf: boolean;
}

export interface NavItem {
  name: string;
  href: string;
}
