export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 1-100
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  date: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface CVData {
  profile: {
    name: string;
    title: string;
    summary: string;
    contact: ContactInfo;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: {
    language: string;
    proficiency: string;
  }[];
}
