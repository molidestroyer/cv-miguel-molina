/**
 * CV Data Template
 * 
 * This file provides a template and guide for updating your CV data.
 * Copy the structure below and fill in with your information.
 */

import { CVData } from '../types/cv';

/**
 * INSTRUCTIONS:
 * 
 * 1. Profile Section:
 *    - Update your name, title, and professional summary
 *    - Add your contact information and social links
 * 
 * 2. Experience Section:
 *    - List jobs in reverse chronological order (most recent first)
 *    - Use unique IDs for each entry (e.g., "exp-1", "exp-2")
 *    - Set current: true for your current position
 *    - Include 3-5 key achievements per role
 *    - List relevant technologies
 * 
 * 3. Education Section:
 *    - List education in reverse chronological order
 *    - Include institution, degree, field, and location
 * 
 * 4. Skills Section:
 *    - Group skills by category
 *    - Use level: 1-100 to indicate proficiency
 *    - Suggested levels:
 *      * 90-100: Expert level
 *      * 75-89: Advanced
 *      * 60-74: Intermediate
 *      * Below 60: Basic knowledge
 * 
 * 5. Projects Section:
 *    - Showcase 3-5 notable projects
 *    - Include technologies used and key highlights
 *    - Add links if available
 * 
 * 6. Certifications:
 *    - List relevant certifications
 *    - Include issuer and date
 *    - Add verification links if available
 * 
 * 7. Languages:
 *    - List language proficiencies
 *    - Use standard proficiency levels:
 *      * Native / Native Speaker
 *      * Professional Working Proficiency
 *      * Limited Working Proficiency
 *      * Elementary Proficiency
 */

export const cvDataTemplate: CVData = {
  profile: {
    name: "Your Full Name",
    title: "Your Professional Title",
    summary: "A compelling 2-3 sentence summary of your professional background, expertise, and what you're passionate about. Highlight your key strengths and what makes you unique.",
    contact: {
      email: "your.email@example.com",
      phone: "+XX XXX XXX XXX",
      location: "City, Country",
      linkedin: "linkedin.com/in/yourprofile", // Optional
      github: "github.com/yourusername", // Optional
      website: "yourwebsite.com" // Optional
    }
  },

  experience: [
    {
      id: "exp-1",
      company: "Company Name",
      position: "Job Title",
      location: "City, Country",
      startDate: "YYYY-MM", // Format: "2020-01"
      endDate: "YYYY-MM", // Use same format or leave empty if current
      current: false, // Set to true if this is your current position
      description: "Brief description of your role and responsibilities in 1-2 sentences.",
      achievements: [
        "Quantifiable achievement with metrics (e.g., Increased performance by 40%)",
        "Major project or initiative you led",
        "Process improvement or innovation",
        "Team leadership or mentoring accomplishment"
      ],
      technologies: [
        "Technology 1",
        "Technology 2",
        "Framework",
        "Tool"
      ]
    }
    // Add more experience entries following the same pattern
  ],

  education: [
    {
      id: "edu-1",
      institution: "University Name",
      degree: "Degree Type", // e.g., "Bachelor's Degree", "Master's Degree"
      field: "Field of Study", // e.g., "Computer Science"
      location: "City, Country",
      startDate: "YYYY-MM",
      endDate: "YYYY-MM",
      description: "Optional: Specialization, honors, or notable coursework"
    }
    // Add more education entries
  ],

  skills: [
    // Programming Languages
    {
      name: "JavaScript",
      category: "Programming Languages",
      level: 85 // 1-100
    },
    {
      name: "Python",
      category: "Programming Languages",
      level: 75
    },

    // Frameworks & Libraries
    {
      name: "React",
      category: "Frameworks",
      level: 90
    },

    // Cloud & DevOps
    {
      name: "AWS",
      category: "Cloud & DevOps",
      level: 80
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "Databases",
      level: 85
    },

    // Architecture & Patterns
    {
      name: "Microservices",
      category: "Architecture",
      level: 80
    }
    // Add more skills
  ],

  projects: [
    {
      id: "proj-1",
      name: "Project Name",
      description: "Detailed description of the project, its purpose, and your role in it.",
      technologies: [
        "Tech 1",
        "Tech 2",
        "Framework"
      ],
      highlights: [
        "Key achievement or metric",
        "Technical challenge solved",
        "Impact or outcome"
      ],
      link: "https://project-link.com", // Optional
      date: "YYYY-MM" // Project completion or start date
    }
    // Add more projects
  ],

  certifications: [
    {
      id: "cert-1",
      name: "Certification Name",
      issuer: "Issuing Organization",
      date: "YYYY-MM",
      link: "https://verification-link.com" // Optional
    }
    // Add more certifications
  ],

  languages: [
    {
      language: "English",
      proficiency: "Native"
    },
    {
      language: "Spanish",
      proficiency: "Professional Working Proficiency"
    }
    // Add more languages
  ]
};

/**
 * TIPS FOR WRITING EFFECTIVE CV CONTENT:
 * 
 * 1. Use Action Verbs:
 *    - Led, Developed, Implemented, Designed, Architected
 *    - Optimized, Improved, Streamlined, Enhanced
 *    - Managed, Coordinated, Collaborated
 * 
 * 2. Quantify Achievements:
 *    - Include numbers, percentages, and metrics
 *    - Example: "Reduced load time by 40%" vs "Improved performance"
 * 
 * 3. Be Specific:
 *    - Mention specific technologies and tools
 *    - Include team size if you managed people
 *    - Specify project scale (users, transactions, data size)
 * 
 * 4. Show Impact:
 *    - How did your work benefit the company?
 *    - What problems did you solve?
 *    - What value did you create?
 * 
 * 5. Keep It Current:
 *    - Update regularly as you gain new skills
 *    - Remove outdated technologies
 *    - Highlight recent achievements
 * 
 * 6. Tailor Content:
 *    - Emphasize skills relevant to your target roles
 *    - Adjust summary for different positions
 *    - Prioritize most relevant experience
 */

/**
 * DATE FORMAT:
 * Always use "YYYY-MM" format for dates
 * Examples:
 * - "2020-01" for January 2020
 * - "2023-12" for December 2023
 */

/**
 * CATEGORY SUGGESTIONS FOR SKILLS:
 * - Programming Languages
 * - Frameworks
 * - Cloud & DevOps
 * - Databases
 * - Architecture
 * - Tools & Technologies
 * - Soft Skills
 * - Mobile Development
 * - Data Science
 * - Security
 */
