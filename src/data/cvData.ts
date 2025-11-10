import { CVData } from '../types/cv';

// Based on the CV PDF structure, this data can be easily replaced or loaded from an external source
export const cvData: CVData = {
  profile: {
    name: "Miguel Molina",
    title: "Senior Software Engineer / Technical Lead",
    summary: "Experienced software engineer with expertise in full-stack development, cloud architecture, and team leadership. Passionate about building scalable solutions and mentoring developers.",
    contact: {
      email: "miguel.molina@example.com",
      phone: "+34 XXX XXX XXX",
      location: "Madrid, Spain",
      linkedin: "linkedin.com/in/miguelmolina",
      github: "github.com/molidestroyer",
    }
  },
  experience: [
    {
      id: "exp-1",
      company: "Sage Software",
      position: "Senior Software Engineer",
      location: "Madrid, Spain",
      startDate: "2020-01",
      endDate: "2024-06",
      current: false,
      description: "Led development of enterprise financial solutions and cloud-based applications.",
      achievements: [
        "Architected and implemented microservices infrastructure serving 10K+ users",
        "Reduced application load time by 40% through optimization strategies",
        "Mentored team of 5 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["C#", ".NET", "Azure", "React", "TypeScript", "SQL Server", "Docker", "Kubernetes"]
    },
    {
      id: "exp-2",
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      location: "Barcelona, Spain",
      startDate: "2017-06",
      endDate: "2019-12",
      current: false,
      description: "Developed web applications and RESTful APIs for various clients.",
      achievements: [
        "Built responsive web applications using modern frameworks",
        "Integrated third-party APIs and payment gateways",
        "Improved code quality through implementation of testing strategies",
        "Collaborated with cross-functional teams in agile environment"
      ],
      technologies: ["JavaScript", "Node.js", "React", "MongoDB", "Express", "AWS"]
    },
    {
      id: "exp-3",
      company: "Digital Innovations",
      position: "Junior Developer",
      location: "Valencia, Spain",
      startDate: "2015-09",
      endDate: "2017-05",
      current: false,
      description: "Contributed to development of e-commerce platforms and content management systems.",
      achievements: [
        "Developed reusable UI components",
        "Participated in code reviews and pair programming",
        "Learned best practices in software development",
        "Assisted in database design and optimization"
      ],
      technologies: ["PHP", "MySQL", "jQuery", "HTML5", "CSS3", "WordPress"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Universidad Politécnica de Madrid",
      degree: "Master's Degree",
      field: "Software Engineering",
      location: "Madrid, Spain",
      startDate: "2013-09",
      endDate: "2015-06",
      description: "Specialized in distributed systems and cloud computing"
    },
    {
      id: "edu-2",
      institution: "Universidad de Valencia",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      location: "Valencia, Spain",
      startDate: "2009-09",
      endDate: "2013-06",
      description: "Foundation in algorithms, data structures, and software development"
    }
  ],
  skills: [
    // Programming Languages
    { name: "C#", category: "Programming Languages", level: 95 },
    { name: "TypeScript", category: "Programming Languages", level: 90 },
    { name: "JavaScript", category: "Programming Languages", level: 90 },
    { name: "Python", category: "Programming Languages", level: 75 },
    { name: "SQL", category: "Programming Languages", level: 85 },
    
    // Frameworks & Libraries
    { name: ".NET / .NET Core", category: "Frameworks", level: 95 },
    { name: "React", category: "Frameworks", level: 90 },
    { name: "Node.js", category: "Frameworks", level: 85 },
    { name: "ASP.NET", category: "Frameworks", level: 90 },
    { name: "Entity Framework", category: "Frameworks", level: 88 },
    
    // Cloud & DevOps
    { name: "Azure", category: "Cloud & DevOps", level: 85 },
    { name: "Docker", category: "Cloud & DevOps", level: 80 },
    { name: "Kubernetes", category: "Cloud & DevOps", level: 75 },
    { name: "CI/CD", category: "Cloud & DevOps", level: 85 },
    { name: "Git", category: "Cloud & DevOps", level: 90 },
    
    // Databases
    { name: "SQL Server", category: "Databases", level: 90 },
    { name: "MongoDB", category: "Databases", level: 80 },
    { name: "PostgreSQL", category: "Databases", level: 75 },
    { name: "Redis", category: "Databases", level: 70 },
    
    // Architecture & Patterns
    { name: "Microservices", category: "Architecture", level: 85 },
    { name: "REST APIs", category: "Architecture", level: 95 },
    { name: "DDD", category: "Architecture", level: 80 },
    { name: "SOLID Principles", category: "Architecture", level: 90 },
    { name: "Design Patterns", category: "Architecture", level: 88 }
  ],
  projects: [
    {
      id: "proj-1",
      name: "Enterprise Financial Platform",
      description: "Cloud-based financial management system for SMEs with real-time reporting and analytics.",
      technologies: ["C#", ".NET Core", "Azure", "React", "TypeScript", "SQL Server"],
      highlights: [
        "Microservices architecture with 15+ services",
        "Real-time data synchronization across modules",
        "Multi-tenant SaaS solution",
        "Serving 10,000+ active users"
      ],
      date: "2022-01"
    },
    {
      id: "proj-2",
      name: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics platform for e-commerce businesses with predictive insights.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Recharts"],
      highlights: [
        "Real-time data visualization",
        "Predictive analytics using ML models",
        "Custom reporting engine",
        "Export capabilities (PDF, Excel)"
      ],
      date: "2021-06"
    },
    {
      id: "proj-3",
      name: "DevOps Automation Suite",
      description: "Internal tools for automating deployment, monitoring, and incident response.",
      technologies: ["Python", "Docker", "Kubernetes", "Azure DevOps"],
      highlights: [
        "Reduced deployment time by 70%",
        "Automated incident detection and alerting",
        "Infrastructure as Code implementation",
        "Comprehensive logging and monitoring"
      ],
      date: "2020-09"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2022-03",
      link: "https://learn.microsoft.com/certifications/"
    },
    {
      id: "cert-2",
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2021-08"
    },
    {
      id: "cert-3",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021-01"
    }
  ],
  languages: [
    { language: "Spanish", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "French", proficiency: "Elementary Proficiency" }
  ]
};
