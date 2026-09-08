export interface Translations {
  nav: {
    profile: string;
    experience: string;
    recommendations: string;
    education: string;
    skills: string;
    projects: string;
    certifications: string;
    searchPlaceholder: string;
    pdfButton: string;
  };
  profile: {
    downloadPdf: string;
    stats: {
      yearsExperience: string;
      companies: string;
      projectsDelivered: string;
      coreSkills: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    present: string;
    keyAchievements: string;
    keyTechnologies: string;
  };
  recommendations: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewOnLinkedin: string;
  };
  education: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterPersonal: string;
    filterEnterprise: string;
    enterpriseTitle: string;
    enterpriseSubtitle: string;
    architectureHighlights: string;
    keyAchievements: string;
    visitSite: string;
    expandScreenshot: string;
    closePreview: string;
    noPreview: string;
    prevScreenshot: string;
    nextScreenshot: string;
  };
  certifications: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    languagesTitle: string;
    verifyCredential: string;
  };
  printable: {
    profile: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
    certifications: string;
    languages: string;
    recommendations: string;
    present: string;
    tech: string;
    personalAppBadge: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<'en' | 'es', Translations> = {
  en: {
    nav: {
      profile: 'Profile',
      experience: 'Experience',
      recommendations: 'Recommendations',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      searchPlaceholder: 'Search...',
      pdfButton: 'PDF',
    },
    profile: {
      downloadPdf: 'Download PDF',
      stats: {
        yearsExperience: 'Years Experience',
        companies: 'Companies',
        projectsDelivered: 'Projects Delivered',
        coreSkills: 'Core Skills',
      },
    },
    experience: {
      eyebrow: 'Career path',
      title: 'Work',
      titleHighlight: 'Experience',
      subtitle: 'Professional journey and leadership achievements',
      present: 'Present',
      keyAchievements: 'Key Achievements',
      keyTechnologies: 'Technologies',
    },
    recommendations: {
      eyebrow: 'Endorsements',
      title: 'What Colleagues',
      titleHighlight: 'Say',
      subtitle: 'Recommendations from managers, peers, and engineering collaborators',
      viewOnLinkedin: 'View on LinkedIn',
    },
    education: {
      eyebrow: 'Academic background',
      title: 'Education &',
      titleHighlight: 'Qualifications',
      subtitle: 'Degrees, academic accomplishments, and foundations',
    },
    skills: {
      eyebrow: 'Core competencies',
      title: 'Skills &',
      titleHighlight: 'Expertise',
      subtitle: 'Technical capabilities, architectural proficiencies, and tools',
    },
    projects: {
      eyebrow: 'Featured Work & Applications',
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle: 'Flagship personal web apps in production with modern architectures, and high-impact enterprise solutions.',
      filterAll: 'All Projects',
      filterPersonal: 'Flagship Personal Apps',
      filterEnterprise: 'Enterprise Projects',
      enterpriseTitle: 'Enterprise & Client Projects',
      enterpriseSubtitle: 'Corporate platforms, cloud migrations, and mission-critical client architectures',
      architectureHighlights: 'Architecture & Engineering Highlights',
      keyAchievements: 'Key Highlights',
      visitSite: 'Visit Site',
      expandScreenshot: 'Expand Screenshot',
      closePreview: 'Close preview',
      noPreview: 'No preview available',
      prevScreenshot: 'Previous screenshot',
      nextScreenshot: 'Next screenshot',
    },
    certifications: {
      eyebrow: 'Credentials & Lingual',
      title: 'Certifications &',
      titleHighlight: 'Languages',
      subtitle: 'Professional certifications and language proficiencies',
      languagesTitle: 'Language Proficiency',
      verifyCredential: 'Verify Credential',
    },
    printable: {
      profile: 'Profile',
      experience: 'Professional Experience',
      education: 'Education',
      projects: 'Projects & Flagship Applications',
      skills: 'Skills & Competencies',
      certifications: 'Certifications',
      languages: 'Languages',
      recommendations: 'Recommendations',
      present: 'Present',
      tech: 'Tech:',
      personalAppBadge: 'Personal App · Live',
    },
    footer: {
      copyright: 'Built with React, TypeScript, Tailwind CSS & Framer Motion.',
    },
  },
  es: {
    nav: {
      profile: 'Perfil',
      experience: 'Experiencia',
      recommendations: 'Recomendaciones',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      searchPlaceholder: 'Buscar...',
      pdfButton: 'PDF',
    },
    profile: {
      downloadPdf: 'Descargar PDF',
      stats: {
        yearsExperience: 'Años de Experiencia',
        companies: 'Empresas',
        projectsDelivered: 'Proyectos Realizados',
        coreSkills: 'Habilidades Clave',
      },
    },
    experience: {
      eyebrow: 'Trayectoria profesional',
      title: 'Experiencia',
      titleHighlight: 'Laboral',
      subtitle: 'Trayectoria profesional y logros de liderazgo técnico',
      present: 'Presente',
      keyAchievements: 'Logros Clave',
      keyTechnologies: 'Tecnologías',
    },
    recommendations: {
      eyebrow: 'Recomendaciones',
      title: 'Lo Que Dicen Mis',
      titleHighlight: 'Compañeros',
      subtitle: 'Valoraciones de managers, compañeros de equipo y colaboradores técnicos',
      viewOnLinkedin: 'Ver en LinkedIn',
    },
    education: {
      eyebrow: 'Formación académica',
      title: 'Educación &',
      titleHighlight: 'Titulaciones',
      subtitle: 'Estudios universitarios, formación continua y trayectoria académica',
    },
    skills: {
      eyebrow: 'Competencias clave',
      title: 'Habilidades &',
      titleHighlight: 'Especialidades',
      subtitle: 'Capacidades técnicas, arquitectura de software y herramientas',
    },
    projects: {
      eyebrow: 'Proyectos & Aplicaciones',
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      subtitle: 'Aplicaciones personales en producción con arquitecturas modernas y proyectos enterprise de alto impacto.',
      filterAll: 'Todos los Proyectos',
      filterPersonal: 'Apps Personales en Producción',
      filterEnterprise: 'Proyectos Enterprise',
      enterpriseTitle: 'Proyectos Enterprise & Clientes',
      enterpriseSubtitle: 'Sistemas corporativos, migraciones cloud y arquitecturas críticas para clientes',
      architectureHighlights: 'Aspectos Clave de Arquitectura & Ingeniería',
      keyAchievements: 'Logros Destacados',
      visitSite: 'Visitar Web',
      expandScreenshot: 'Ampliar Captura',
      closePreview: 'Cerrar vista',
      noPreview: 'Sin captura disponible',
      prevScreenshot: 'Captura anterior',
      nextScreenshot: 'Siguiente captura',
    },
    certifications: {
      eyebrow: 'Acreditaciones e Idiomas',
      title: 'Certificaciones &',
      titleHighlight: 'Idiomas',
      subtitle: 'Certificaciones oficiales y nivel de competencia en idiomas',
      languagesTitle: 'Dominio de Idiomas',
      verifyCredential: 'Verificar Credencial',
    },
    printable: {
      profile: 'Perfil Profesional',
      experience: 'Experiencia Profesional',
      education: 'Educación y Formación',
      projects: 'Proyectos & Aplicaciones Destacadas',
      skills: 'Habilidades y Competencias',
      certifications: 'Certificaciones',
      languages: 'Idiomas',
      recommendations: 'Recomendaciones',
      present: 'Presente',
      tech: 'Tecnologías:',
      personalAppBadge: 'App Personal · Live',
    },
    footer: {
      copyright: 'Desarrollado con React, TypeScript, Tailwind CSS & Framer Motion.',
    },
  },
};
