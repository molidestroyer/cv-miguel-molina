import { CVData } from '../types/cv';

export const cvDataEs: CVData = {
  profile: {
    name: "Miguel Molina Montilla",
    title: "Engineering Manager / C# Team Lead",
    summary: "Engineering Manager y Senior Software Engineer con amplia trayectoria en desarrollo full-stack, arquitectura cloud (AWS/Azure), liderazgo de equipos de ingeniería y Site Reliability Engineering (SRE). Historial contrastado en la dirección de equipos internacionales, migración de aplicaciones críticas a la nube e implantación de procesos de CI/CD. Apasionado por la construcción de sistemas escalables, la mentoría técnica y la mejora continua de procesos. Actualmente muy enfocado en la innovación con Inteligencia Artificial: ingeniería de prompts, instrucciones personalizadas y Model Context Protocols (MCPs) para simplificar procesos y automatizar flujos de trabajo.",
    contact: {
      email: "miguel.molina.montilla@gmail.com",
      phone: "Disponible por email o LinkedIn DM",
      location: "Canovelles, Barcelona, España",
      linkedin: "linkedin.com/in/miguel-molina-montilla-792441a",
      github: "github.com/molidestroyer",
    }
  },
  experience: [
    {
      id: "exp-1",
      company: "Sage",
      position: "Engineering Team Lead Payroll ESP",
      location: "Barcelona, Cataluña, España (Híbrido)",
      startDate: "2024-11",
      endDate: "2025-11",
      current: true,
      description: "Team Lead gestionando un equipo multidisciplinar de 11 profesionales (desarrolladores, QA, BAs), liderando la transición hacia la nube del producto de nóminas. Impulso de la reducción de deuda técnica y la integración de capacidades de Inteligencia Artificial en los procesos integrales de nóminas, incluyendo control horario y fichajes (Timesheets).",
      achievements: [
        "Gestión y liderazgo de un equipo de 11 profesionales (desarrolladores, QA, BAs) para producto cloud crítico de nóminas",
        "Liderazgo de la modernización técnica y migración de sistemas de nóminas a la nube",
        "Colaboración estrecha con Product Owners, Project Managers y Product Designers para asegurar entregas a tiempo",
        "Dirección de iniciativas estratégicas para la reducción de deuda técnica",
        "Integración de capacidades de IA en procesos integrales de nóminas, incluyendo módulos de control horario (Timesheets)",
        "Inversión activa en innovación con IA: ingeniería de prompts, instrucciones personalizadas y Model Context Protocols (MCPs) para automatizar flujos",
        "Definición y soporte de bases arquitectónicas para múltiples localizaciones internacionales",
        "Conducción de revisiones de desempeño, fijación de OKRs y planes de desarrollo profesional (PIPs)"
      ],
      technologies: ["Angular 20", ".NET Core 9", "Azure DevOps", "AI Integration", "Prompt Engineering", "MCPs", "Cloud Migration", "Payroll Systems"]
    },
    {
      id: "exp-2",
      company: "Sage",
      position: "C# Engineering/Site Reliability Team Lead Accounting South Africa",
      location: "Barcelona, Cataluña, España",
      startDate: "2022-05",
      endDate: "2024-11",
      current: false,
      description: "Engineering Manager gestionando las capacidades de DBA, QA y DEV con foco en desarrollo profesional, optimización de procesos e ingeniería de fiabilidad del sitio (SRE) con monitorización continua.",
      achievements: [
        "Gestión de equipo internacional de DBA, QA y desarrolladores orientado al crecimiento profesional",
        "Implementación de optimizaciones en los procesos de entrega y revisiones periódicas de rendimiento",
        "Mejora continua del rendimiento del aplicativo y monitorización con New Relic en rol de Site Reliability Engineer",
        "Liderazgo de equipo remoto internacional compuesto por 5 desarrolladores senior, 2 especialistas de QA y 1 DBA",
        "Diseño y ejecución de un plan de particionamiento con mínimo downtime para una tabla crítica de base de datos de ~4.000 millones de filas: particionamiento y migración de datos calientes con cutover automatizado en menos de 12 horas, con scripts de validación, estrategia de rollback y ajuste de rendimiento post-migración (reducción de contención y latencia de consultas)",
        "Fortalecimiento del compromiso del equipo con la cultura y los valores corporativos",
        "Garantía de alta disponibilidad soportando picos de más de 150.000 peticiones por minuto (rpm)",
        "Asunción de liderazgo formal y Team Lead interino; guía técnica del equipo, establecimiento de prioridades, entrevistas técnicas y resolución de bloqueos",
        "Mejora integral de pipelines de CI/CD y papel fundamental en la migración a AWS; refactorización hacia Inyección de Dependencias",
        "Desarrollo de habilidades de liderazgo manteniendo la responsabilidad técnica; resolución de problemas críticos de estabilidad que incrementaron la resiliencia y redujeron los costes de hosting",
        "Equilibrio entre gestión y liderazgo técnico manos a la masa: desarrollo de iniciativas complejas mejorando la comunicación interdisciplinar y coordinación de recursos",
        "Desarrollo de iniciativas de automatización y estabilidad incluyendo generación de scripts de BD, automatización de despliegues de servidores BD, gateway API y dockerización/estabilización de servicios en segundo plano",
        "Planificación y ejecución de particionamiento en producción con validación robusta y medidas de reversión"
      ],
      technologies: ["C#", ".NET Framework", "AWS", "New Relic", "Microservices", "ASP.NET Web API", "DevOps", "Site Reliability Engineering", "Scrumban", "Quality Assurance"]
    },
    {
      id: "exp-3",
      company: "Sage",
      position: "Senior Software Engineer",
      location: "Barcelona, Cataluña, España (Remoto)",
      startDate: "2021-05",
      endDate: "2022-04",
      current: false,
      description: "Liderazgo en la estabilización de aplicación crítica carente de procesos de CI/CD, resolución de una caída del servicio de 3 semanas y migración integral de aplicativos a la nube de AWS. Gestión de equipo internacional remoto definiendo líneas de trabajo.",
      achievements: [
        "Liderazgo en la migración completa de varias aplicaciones a la infraestructura cloud de AWS (basadas en IIS, microservicios, servicios de Windows)",
        "Migración de todos los sitios y workers de on-premise a AWS, automatización de pipelines (CI/CD), gestión de despliegue en EC2 y balanceo de carga con escalado en horas punta y configuración completa de fiabilidad",
        "Rápida integración y formación en AWS, asumiendo la autoría de múltiples funcionalidades clave y demostrando sólidas competencias operativas en cloud",
        "Integración efectiva con un equipo geográficamente distribuido y propuesta proactiva de mejoras de producto con los tech leads",
        "Rápida incorporación al equipo e introducción de soluciones stateless para mejorar la escalabilidad y simplificar despliegues",
        "Contribución activa en la migración a AWS, entregando funcionalidades críticas y optimizaciones operativas bajo plazos ajustados",
        "Revitalización de la fiabilidad del aplicativo tras un incidente crítico de parada de 3 semanas",
        "Colaboración en la optimización del aplicativo para soportar 150.000 peticiones por minuto",
        "Implantación de procesos de CI/CD y maximización de la automatización para conseguir máxima eficiencia operativa"
      ],
      technologies: ["C#", ".NET", "AWS", "IIS", "Microservices", "Windows Services", "CI/CD", "DevOps", "Unit Testing", "Continuous Integration"]
    },
    {
      id: "exp-4",
      company: "CholloLocura",
      position: "Company Owner",
      location: "Granollers, España",
      startDate: "2018-11",
      endDate: "2025-11",
      current: true,
      description: "Fundador y propietario de www.cholloLocura.es, responsable del desarrollo cloud en Microsoft Azure, gestión de marketing, analítica y estrategia de negocio.",
      achievements: [
        "Fundación y gestión de la plataforma de chollos y comercio electrónico",
        "Desarrollo integral de la infraestructura cloud sobre Microsoft Azure",
        "Gestión de campañas de marketing y operaciones empresariales",
        "Arquitectura orientada a microservicios para alta escalabilidad"
      ],
      technologies: ["Microsoft Azure", "Cloud Computing", "Microservices", "Front-end Development", "CI/CD", "Unit Testing"]
    },
    {
      id: "exp-5",
      company: "ERNI",
      position: "Senior Developer",
      location: "Barcelona, España",
      startDate: "2014-02",
      endDate: "2021-05",
      current: false,
      description: "Senior Developer y Scrum Master liderando un equipo de ~5 personas en múltiples proyectos, incluyendo sistemas de control de accesos, apps móviles Xamarin, aplicaciones Angular y pruebas de carga sobre Kubernetes.",
      achievements: [
        "Liderazgo como Scrum Master dinamizando dailies, planning, reviews y retrospectivas",
        "Comunicación directa con Product Owners para la definición de alcance y prioridades",
        "Desarrollo de aplicación web de gestión de control de accesos para cliente suizo",
        "Arquitectura de app móvil multiplataforma Xamarin para empresa internacional de Healthcare",
        "Implantación de integración continua en App Center",
        "Ejecución de pruebas de carga en Kubernetes con kube-monkey, heapster, grafana e influx-db",
        "Comunicación fluida en inglés con equipos internacionales"
      ],
      technologies: ["C#", "ASP.NET MVC 5", "KendoUI", "KnockoutJS", "TypeScript", "SignalR", "Angular 5", "Node.js", "NFC", "Mifare Classic 4K", "Xamarin", "Caliburn.Micro", "RestSharp", "Kubernetes", "Git", "TFS", "Azure DevOps"]
    },
    {
      id: "exp-6",
      company: "ERNI",
      position: "Fullstack Developer - UI Kiit LabCore UI Phase",
      location: "Barcelona, España",
      startDate: "2020-01",
      endDate: "2020-04",
      current: false,
      description: "Migración de los módulos de UserMessage y Notificaciones de LabCore a Angular y .NET Core para el sector farmacéutico.",
      achievements: [
        "Diseño de arquitectura de microservicios backend en .NET Core 3.0",
        "Colaboración con el equipo de frontend en el diseño de componentes Angular",
        "Creación del pipeline completo de integración continua en Azure DevOps",
        "Superado el 95% de cobertura de código en frontend y backend"
      ],
      technologies: ["Angular 9", ".NET Core 3", "SignalR", "Microservices", "RxJS", "Jasmine", "Karma", "Azure DevOps", "Unit Testing"]
    },
    {
      id: "exp-7",
      company: "ERNI",
      position: "Senior Angular 6 Frontend - CIM",
      location: "Barcelona, España",
      startDate: "2019-03",
      endDate: "2019-12",
      current: false,
      description: "Diseño y desarrollo del Sistema Central de Gestión de Identidad (CIM) para el sector sanitario con Angular 6, .NET Core, Docker, RabbitMQ, MongoDB, OAuth y OpenID.",
      achievements: [
        "Liderazgo en el diseño de la arquitectura modular en Angular",
        "Implantación de buenas prácticas de desarrollo Angular de nivel senior",
        "Creación de proceso integral de pruebas de carga con Gatling",
        "Integración de IdentityServer para autenticación y autorización segura"
      ],
      technologies: ["Angular 6", "C#", ".NET Core 2.2", "MongoDB", "IdentityServer", "Docker", "OAuth", "OpenID", "RabbitMQ", "Karma", "SonarQube", "Postman"]
    },
    {
      id: "exp-8",
      company: "ERNI",
      position: "Senior Developer - HIV Monitor",
      location: "Barcelona, España",
      startDate: "2018-03",
      endDate: "2018-11",
      current: false,
      description: "Desarrollo del sistema de seguimiento de VIH para Sudáfrica con Roche Diagnostics. Microservicios (.NET Core 2.1) y app móvil Xamarin para Android e iOS con lectura de códigos de barras y soporte offline.",
      achievements: [
        "Arquitectura de app móvil multiplataforma Xamarin Forms para Android e iOS",
        "Desarrollo de microservicios autenticados con IdentityServer",
        "Automatización del despliegue con AppCenter (Hockey App)",
        "Implementación de escaneo de códigos de barras, persistencia offline y detección de estado de red",
        "Despliegue de microservicios sobre contenedores Linux en Azure"
      ],
      technologies: ["Xamarin Forms", ".NET Core 2", "IdentityServer", "Azure", "Android", "iOS", "Microservices", "AppCenter"]
    },
    {
      id: "exp-9",
      company: "ERNI",
      position: "Senior Developer - Smart Water System",
      location: "Barcelona, España",
      startDate: "2017-11",
      endDate: "2018-02",
      current: false,
      description: "Desarrollo full-stack de software de inteligencia energética para compañía de aguas de EE.UU. para la gestión y monitorización de instalaciones en tiempo real.",
      achievements: [
        "Desarrollo de 3 microservicios backend en Node.js con Express y Auth0",
        "Creación de portal Angular 4 con gráficos interactivos D3 y Bootstrap",
        "Implementación de visualización de datos de consumo energético en tiempo real",
        "Construcción de sistema seguro de informes y telemetría multisede"
      ],
      technologies: ["Angular 4", "Node.js", "MongoDB", "Express.js", "Auth0", "D3.js", "Bootstrap", "Mongoose"]
    },
    {
      id: "exp-10",
      company: "ERNI",
      position: "Senior Developer - Smart Documents APP",
      location: "Barcelona, España",
      startDate: "2017-10",
      endDate: "2018-02",
      current: false,
      description: "Desarrollo de solución de autenticación de documentos mediante sellos NFC para cliente estadounidense, digitalizando instancias físicas con integración en blockchain.",
      achievements: [
        "Integración NFC Mifare Classic 4K con el SDK de FeigReader",
        "Creación de servicio HTTPS local con instalador WiX y gestión de certificados",
        "Construcción de portal Angular 4 con PrimeNG para la gestión digital de documentos",
        "Integración de blockchain para verificación y validación de documentos"
      ],
      technologies: ["Angular 4", "NFC", "MIFARE DESFire", "Bootstrap 4", "PrimeNG", "C#", "FeigReader SDK"]
    },
    {
      id: "exp-11",
      company: "ERNI",
      position: "Professional MVC-HTML-5 Developer - Security System",
      location: "Barcelona, España",
      startDate: "2014-02",
      endDate: "2017-10",
      current: false,
      description: "Desarrollo de suite interna para el ámbito de llaves electrónicas y seguridad corporativa (visitas, contratistas, empleados y autoservicio). Liderazgo como Scrum Master y Tech Lead.",
      achievements: [
        "Arquitectura de 4 portales web compartiendo una infraestructura técnica común",
        "Desarrollo de servicio web para lectura de pasaportes con integración del SDK de 3M",
        "Liderazgo de ceremonias Scrum (Daily, Retro, Grooming, Review, Planning)",
        "Reuniones de toma de requisitos, estimación de esfuerzo y soporte al cliente",
        "Tech Lead responsable de las decisiones de diseño y arquitectura de software"
      ],
      technologies: ["ASP.NET MVC", "TypeScript", "KendoUI", "SignalR", "KnockoutJS", "HTML5", "C#", "SQL Server"]
    },
    {
      id: "exp-12",
      company: "ERNI",
      position: "Professional Developer - Meeting Scheduling System",
      location: "Barcelona, España",
      startDate: "2015-04",
      endDate: "2015-07",
      current: false,
      description: "Sistema de programación y reserva de salas con integración de Exchange, conversión desatendida de documentos Office a PDF y sincronización con app en iPad para el sector ferroviario.",
      achievements: [
        "Creación de sitio web ASP.NET MVC HTML5 integrado con Exchange Web Services",
        "Desarrollo de servicio Windows para conversión de Office a PDF mediante Office Interop API",
        "Construcción de sincronizador de Windows entre Exchange y base de datos",
        "Creación de Add-in para Outlook para gestión de ficheros de reuniones",
        "Desarrollo de Web API para el consumo de datos desde la app de iPad"
      ],
      technologies: ["ASP.NET MVC", "Web API", "Exchange Web Services", "MS SQL Server 2012", "Windows Services", "Outlook Add-Ins", "LightInject", "Quartz.Net", "Office Interop"]
    },
    {
      id: "exp-13",
      company: "Raona",
      position: "Software Engineer",
      location: "Barcelona, España",
      startDate: "2012-02",
      endDate: "2014-02",
      current: false,
      description: "Ingeniero de software desarrollando soluciones en Silverlight, WPF y C# para clientes como Carburos Metálicos y Linde. Gestión avanzada de bases de datos y SQL Server 2008.",
      achievements: [
        "Desarrollo de aplicaciones en Silverlight y WPF",
        "Gestión y optimización avanzada de bases de datos SQL Server 2008",
        "Trabajo con Team Foundation Server (TFS)",
        "Entrega de soluciones empresariales para clientes del sector industrial"
      ],
      technologies: ["Silverlight 4.0", "WPF", "C#", "MS SQL Server 2008", "MS Visual Studio 2012", "TFS", ".NET Framework"]
    },
    {
      id: "exp-14",
      company: "Raona",
      position: "Senior ASP.NET MVC Developer - Airline Company",
      location: "Barcelona, España",
      startDate: "2013-11",
      endDate: "2014-02",
      current: false,
      description: "Desarrollo backend para aerolínea utilizando ASP.NET MVC 3, aplicando principios SOLID, patrones IoC y arquitectura MVC.",
      achievements: [
        "Desarrollo de componentes backend siguiendo buenas prácticas SOLID",
        "Implementación de patrones de Inversión de Control (IoC)",
        "Uso y configuración de componentes GUI de Telerik"
      ],
      technologies: ["ASP.NET MVC 3", "C#", "Telerik", "SOLID", "IoC"]
    },
    {
      id: "exp-15",
      company: "Raona",
      position: "Junior WPF Developer - Healthcare",
      location: "Barcelona, España",
      startDate: "2013-05",
      endDate: "2013-11",
      current: false,
      description: "Desarrollo de aplicación desktop sobre framework WPF para sector sanitario con procedimientos almacenados y funciones en SQL Server 2012.",
      achievements: [
        "Desarrollo de funcionalidades desktop en entorno WPF",
        "Creación de stored procedures y funciones en SQL Server 2012",
        "Trabajo con componentes Telerik y control de código en TFS"
      ],
      technologies: ["WPF", "C#", "Telerik", "MS SQL Server 2008", "MS Visual Studio 2012", "TFS"]
    },
    {
      id: "exp-16",
      company: "Videogame2all",
      position: "Software Developer - Windows Phone 8",
      location: "Barcelona, España",
      startDate: "2013-11",
      endDate: "2013-11",
      current: false,
      description: "Desarrollo freelance de app para Windows Phone 8, migrando aplicación nativa existente de Android a la plataforma Windows Phone.",
      achievements: [
        "Portabilidad y migración de app de Android a Windows Phone 8",
        "Publicación y gestión en la Windows Phone Store",
        "Desarrollo, empaquetado y despliegue autónomo"
      ],
      technologies: ["Windows Phone 8", "C#", ".NET Framework"]
    },
    {
      id: "exp-17",
      company: "films2all",
      position: "Android Developer (Freelance)",
      location: "Barcelona, España",
      startDate: "2013-07",
      endDate: "2013-07",
      current: false,
      description: "Desarrollo freelance de app nativa Android con integración de Google Play Services, Facebook API, SQLite y diseño UX. Publicada en Google Play Store.",
      achievements: [
        "Desarrollo y publicación de la app films2all en Google Play Store",
        "Integración de la API de Facebook y Google Play Services",
        "Gestión de almacenamiento local y bases de datos SQLite",
        "Creación de versiones estándar y lite"
      ],
      technologies: ["Android", "Android SDK", "SQL-Lite", "Facebook API", "Google Play Services"]
    },
    {
      id: "exp-18",
      company: "Videogame2all",
      position: "Android Developer (Freelance)",
      location: "Barcelona, España",
      startDate: "2013-04",
      endDate: "2013-04",
      current: false,
      description: "Desarrollo freelance de app Android con Google Play Services, Facebook, base de datos local y experiencia de usuario optimizada. Publicada en Google Play.",
      achievements: [
        "Desarrollo y lanzamiento de Videogame2all en Google Play Store",
        "Creación de versiones gratuita y pro",
        "Integración de Facebook API y Google Play Services",
        "Gestión de persistencia de datos con SQLite"
      ],
      technologies: ["Android", "Android SDK", "SQL-Lite", "Facebook API", "Google Play Services"]
    },
    {
      id: "exp-19",
      company: "Universitat Autònoma de Barcelona",
      position: "Software Engineer",
      location: "Barcelona, España",
      startDate: "2009-09",
      endDate: "2012-02",
      current: false,
      description: "Desarrollo de aplicaciones web utilizando tecnologías Java, HTML5, JavaScript, CSS y jQuery para el entorno universitario.",
      achievements: [
        "Desarrollo de aplicaciones web para proyectos universitarios",
        "Trabajo con Java, HTML5, JavaScript, CSS y jQuery",
        "Construcción de soluciones full-stack frontend y backend"
      ],
      technologies: ["Java", "HTML5", "JavaScript", "CSS", "jQuery"]
    },
    {
      id: "exp-20",
      company: "SEVIBE CELLS",
      position: "IT Manager",
      location: "Barcelona, España",
      startDate: "2008-12",
      endDate: "2009-09",
      current: false,
      description: "Gestión del equipo de TI de 20 personas, coordinación de proyectos de sistemas, soporte a usuarios y cumplimiento de normativas. Administración de servidores y red.",
      achievements: [
        "Gestión de equipo de sistemas de 20 profesionales",
        "Coordinación de proyectos transversales del departamento de TI",
        "Administración de servidores Windows e infraestructura de red",
        "Mantenimiento de la seguridad informática corporativa (Fortigate, VPN)",
        "Asignación de recursos y aprovisionamiento de usuarios",
        "Mantenimiento de la documentación técnica de los sistemas de información"
      ],
      technologies: ["Windows Server", "Fortigate", "VPN", "Network Infrastructure"]
    },
    {
      id: "exp-21",
      company: "UNIT4 Agresso ES",
      position: "Software Engineer",
      location: "Barcelona, España",
      startDate: "2007-11",
      endDate: "2008-07",
      current: false,
      description: "Desarrollo del proyecto final de carrera utilizando el framework propietario de la empresa (Karat) en VB6 y Java.",
      achievements: [
        "Desarrollo de soluciones de gestión sobre el framework Karat",
        "Programación en VB6 y Java",
        "Superación y entrega del proyecto fin de carrera"
      ],
      technologies: ["VB6", "Java", "Karat Framework"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Universitat Autònoma de Barcelona",
      degree: "Ingeniería Técnica en Informática de Gestión",
      field: "Informática",
      location: "Barcelona, España",
      startDate: "2005-09",
      endDate: "2009-06",
      description: "Ingeniería Técnica en Informática de Gestión especializada en sistemas de información empresarial, desarrollo de software y bases de datos"
    },
    {
      id: "edu-2",
      institution: "Microsoft",
      degree: "Certificación Microsoft",
      field: "70-513 Windows Communication Foundation Development with .NET Framework 4",
      location: "Online",
      startDate: "2012-12",
      endDate: "2012-12",
      description: "Certificado oficial Microsoft en desarrollo de servicios distribuidos con WCF y .NET Framework 4"
    },
    {
      id: "edu-3",
      institution: "Microsoft",
      degree: "Certificación Microsoft",
      field: "70-461 Querying Microsoft SQL Server 2012",
      location: "Online",
      startDate: "2013-03",
      endDate: "2013-03",
      description: "Certificado oficial Microsoft en consultas avanzadas y optimización SQL Server 2012"
    },
    {
      id: "edu-4",
      institution: "Microsoft",
      degree: "Certificación Microsoft",
      field: "70-511 Windows Applications Development with .NET Framework 4",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-12",
      description: "Certificado oficial Microsoft en desarrollo de aplicaciones Windows con WPF y .NET Framework 4"
    },
    {
      id: "edu-5",
      institution: "Microsoft",
      degree: "Certificación Microsoft",
      field: "70-632 Microsoft Office Project 2007, Managing Projects",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-01",
      description: "Certificado oficial Microsoft en gestión de proyectos con MS Project"
    },
    {
      id: "edu-6",
      institution: "Microsoft",
      degree: "Certificación Microsoft",
      field: "AI-900: Microsoft Certified Azure AI Fundamentals",
      location: "Online",
      startDate: "2023-01",
      endDate: "2023-12",
      description: "Certificado oficial Microsoft en fundamentos de Inteligencia Artificial en Azure"
    }
  ],
  skills: [
    // Lenguajes de Programación
    { name: "C#", category: "Lenguajes de Programación", level: 95 },
    { name: "TypeScript", category: "Lenguajes de Programación", level: 90 },
    { name: "JavaScript", category: "Lenguajes de Programación", level: 90 },
    { name: "SQL", category: "Lenguajes de Programación", level: 90 },
    { name: "Python", category: "Lenguajes de Programación", level: 30 },
    { name: "PowerShell", category: "Lenguajes de Programación", level: 90 },
    
    // Frameworks & Librerías
    { name: ".NET Core", category: "Frameworks & Librerías", level: 95 },
    { name: ".NET Framework", category: "Frameworks & Librerías", level: 95 },
    { name: "Angular", category: "Frameworks & Librerías", level: 60 },
    { name: "ASP.NET MVC", category: "Frameworks & Librerías", level: 93 },
    { name: "ASP.NET Web API", category: "Frameworks & Librerías", level: 92 },
    { name: "SignalR", category: "Frameworks & Librerías", level: 85 },
    { name: "WPF", category: "Frameworks & Librerías", level: 75 },
    { name: "Xamarin Forms", category: "Frameworks & Librerías", level: 85 },
    { name: "Node.js", category: "Frameworks & Librerías", level: 60 },
    { name: "Express.js", category: "Frameworks & Librerías", level: 75 },
    { name: "KnockoutJS", category: "Frameworks & Librerías", level: 75 },
    { name: "RxJS", category: "Frameworks & Librerías", level: 85 },
    
    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", level: 90 },
    { name: "Azure", category: "Cloud & DevOps", level: 88 },
    { name: "Docker", category: "Cloud & DevOps", level: 80 },
    { name: "Kubernetes", category: "Cloud & DevOps", level: 70 },
    { name: "CI/CD", category: "Cloud & DevOps", level: 95 },
    { name: "DevOps", category: "Cloud & DevOps", level: 100 },
    { name: "Azure DevOps", category: "Cloud & DevOps", level: 87 },
    { name: "New Relic", category: "Cloud & DevOps", level: 90 },
    { name: "Site Reliability Engineering", category: "Cloud & DevOps", level: 95 },
    
    // Bases de Datos
    { name: "MS SQL Server", category: "Bases de Datos", level: 90 },
    { name: "MongoDB", category: "Bases de Datos", level: 50 },
    { name: "SQL-Lite", category: "Bases de Datos", level: 50 },
    
    // Arquitectura & Patrones
    { name: "Microservicios", category: "Arquitectura", level: 92 },
    { name: "REST APIs", category: "Arquitectura", level: 100 },
    { name: "Principios SOLID", category: "Arquitectura", level: 95 },
    { name: "POO", category: "Arquitectura", level: 95 },
    { name: "IdentityServer", category: "Arquitectura", level: 80 },
    { name: "OAuth/OpenID", category: "Arquitectura", level: 85 },
    
    // Testing & Calidad
    { name: "Unit Testing", category: "Testing & Calidad", level: 90 },
    { name: "Karma", category: "Testing & Calidad", level: 60 },
    { name: "Jasmine", category: "Testing & Calidad", level: 60 },
    { name: "SonarQube", category: "Testing & Calidad", level: 75 },
    { name: "Quality Assurance", category: "Testing & Calidad", level: 85 },
    
    // Herramientas & Otros
    { name: "MS Visual Studio", category: "Herramientas", level: 95 },
    { name: "Git", category: "Herramientas", level: 90 },
    { name: "TFS", category: "Herramientas", level: 50 },
    { name: "Postman", category: "Herramientas", level: 85 },
    { name: "Telerik", category: "Herramientas", level: 80 },
    { name: "KendoUI", category: "Herramientas", level: 82 },
    { name: "PrimeNG", category: "Herramientas", level: 78 },
    
    // Metodologías
    { name: "Scrum", category: "Metodologías", level: 100 },
    { name: "Scrumban", category: "Metodologías", level: 100 },
    { name: "Agile", category: "Metodologías", level: 100 },
    { name: "Gestión de Equipos", category: "Metodologías", level: 100 },
    { name: "Análisis de Requisitos", category: "Metodologías", level: 100 }
  ],
  projects: [
    {
      id: "proj-personal-chollolocura",
      name: "CholloLocura.es",
      category: "personal",
      badge: "Flagship · En Producción",
      tagline: "Ecosistema automatizado de inteligencia de precios, agregador de ofertas y comunidad (+50K usuarios)",
      description: "Plataforma de alta escala para detección, comparación y difusión automática de ofertas y chollos en tiempo real. Integra arquitectura de microservicios con .NET Aspire, agentes autónomos de Inteligencia Artificial para curación de contenido y generación de copys/imágenes, scrapers multitienda (Amazon PA-API, AWIN, feeds CSV), bot interactivo de Telegram con canales temáticos, y panel analítico avanzado de clics y conversiones.",
      technologies: [".NET Aspire", ".NET 10", "C#", "Blazor SSR", "Entity Framework Core", "Python (Flask & Telethon)", "AI Agents", "Azure App Service Linux", "Azure Functions", "SQL Server", "Tailwind CSS"],
      highlights: [
        "Orquestación de microservicios centralizada con .NET Aspire (Admin Web, User Web, REST API, AI Dashboard y Workers en segundo plano)",
        "Canal de difusión masiva y bot interactivo de Telegram conectado a comunidad activa de más de 50.000 usuarios",
        "Pipeline inteligente de precios con detección de mínimos históricos y sincronización continua de feeds de afiliados",
        "Agentes autónomos de IA para curación de ofertas y generación de textos promocionales y creatividades optimizadas",
        "Módulo de analítica y trazabilidad de enlaces con filtrado de bots, clasificación por dispositivo y atribución de conversiones"
      ],
      link: "https://www.chollolocura.es",
      date: "2023-01",
      screenshots: [
        {
          url: "/projects/chollolocura-home.png",
          title: "Portal Principal & Buscador",
          caption: "Buscador en tiempo real, categorías de chollos destacados y barra de sincronización con canales de Telegram."
        },
        {
          url: "/projects/chollolocura-links.png",
          title: "Hub de Enlaces & Chollos Top",
          caption: "Página 'Link in bio' optimizada con enlaces directos, imprescindibles del día y analítica de clicks."
        }
      ]
    },
    {
      id: "proj-personal-neogeoaesplus",
      name: "NeoGeo AES+",
      category: "personal",
      badge: "En Producción · Retro Hub",
      tagline: "E-commerce, catálogo histórico y monitor de cotizaciones para coleccionistas de SNK Neo Geo AES",
      description: "Portal especializado y plataforma e-commerce para aficionados y coleccionistas del sistema de 24 bits SNK Neo Geo AES. Arquitectura híbrida en ASP.NET Core con Blazor Server (Static SSR de alto rendimiento) e islas interactivas en Blazor WebAssembly (incluyendo el minijuego retro METAL JACK ejecutable en cliente). Soporta internacionalización completa en 5 idiomas (ES, EN, FR, DE, IT), monitor de precios de segunda mano con cálculo estadístico de percentiles (p25, mediana, p75) y galería colaborativa de verificación de autenticidad de cartuchos y placas con pre-moderación.",
      technologies: ["ASP.NET Core 10", "Blazor SSR & WASM", "C#", "FluentMigrator", "Tailwind CSS", "ImageSharp", "Auth0", "Azure Blob Storage", "Azure App Service", "SQLite"],
      highlights: [
        "Internacionalización nativa en 5 idiomas (ES, EN, FR, DE, IT) con slugs localizados y metaetiquetas SEO hreflang dinámicas",
        "Arquitectura híbrida Blazor: Blazor Server Static SSR para carga instantánea combinada con islas interactivas WebAssembly",
        "Motor de cotización de mercado retro con cálculo de mediana y percentiles (p25/p75) sobre ventana móvil de 12 meses",
        "Galería colaborativa de autenticidad con pre-moderación, subida a Azure Blob Storage y procesamiento WebP con ImageSharp",
        "Estética arcade inmersiva con scanlines estilo CRT y diseño retro pixel-perfect desarrollado con Tailwind CSS"
      ],
      link: "https://www.neogeoaesplus.com",
      date: "2024-05",
      screenshots: [
        {
          url: "/projects/neogeo-catalog.png",
          title: "Catálogo Clásico SNK",
          caption: "Archivo histórico completo de cartuchos domésticos (1990–2004) con indicadores de rareza y especificaciones técnicas."
        },
        {
          url: "/projects/neogeo-games.png",
          title: "Catálogo de Reediciones AES+",
          caption: "Explorador de títulos con filtros por género, fichas técnicas y enlaces de reserva/compra."
        },
        {
          url: "/projects/neogeo-home.png",
          title: "Portada & Cuenta Atrás",
          caption: "Banner arcade con cuenta atrás en vivo de lanzamientos y ofertas dinámicas sincronizadas con CholloLocura."
        }
      ]
    },
    {
      id: "proj-personal-evercadeplus",
      name: "Evercade+",
      category: "personal",
      badge: "En Producción · Hardware Tracker",
      tagline: "Catálogo completo y monitor de precios horario automatizado para el ecosistema retro Evercade",
      description: "Plataforma integral de seguimiento y catálogo de referencia para el universo Evercade (consolas portátiles como EXP/Super Pocket, consolas de sobremesa como VS y más de 80 cartuchos oficiales). Basado en un modelo relacional de 3 niveles (Consola -> Cartucho -> Juego) con navegación bidireccional. Incluye un worker en segundo plano (PriceSyncService) que sincroniza precios cada hora desde principales tiendas (Amazon, Wakkap) registrando históricos, reporte colaborativo de falta de stock y localización en 5 idiomas.",
      technologies: ["ASP.NET Core 10", "Blazor Server SSR", "C#", "FluentMigrator", "Tailwind CSS", "Auth0", ".NET BackgroundServices", "REST API", "Azure App Service", "SQLite"],
      highlights: [
        "Modelo relacional de 3 niveles estructurado (Hardware -> Cartuchos -> Juegos) indexando 80+ cartuchos y cientos de juegos",
        "Servicio en segundo plano (PriceSyncService) con sincronización horaria de precios y registro de curvas históricas",
        "Integración bidireccional con API de CholloLocura para caducidad y verificación automática de ofertas",
        "Reporte colaborativo de falta de stock con protección por rate-limiting y retroalimentación en cola de verificación",
        "Localización completa en 5 idiomas (ES, EN, FR, DE, IT) con páginas ultrarrápidas renderizadas vía Static SSR"
      ],
      link: "https://evercadeplus.com",
      date: "2025-01",
      screenshots: [
        {
          url: "/projects/evercade-cartridges.png",
          title: "Colección Completa de Cartuchos",
          caption: "Parrilla visual con más de 80 cartuchos clasificados por Consola, Arcade y Home Computer con cotización en vivo."
        },
        {
          url: "/projects/evercade-consoles.png",
          title: "Hardware & Consolas",
          caption: "Catálogo de consolas portátiles y sobremesa con stock en tiempo real y comparativa entre tiendas."
        },
        {
          url: "/projects/evercade-home.png",
          title: "Portada Oficial",
          caption: "Diseño adaptativo con acceso rápido a las colecciones, buscador global y ofertas destacadas."
        }
      ]
    },
    {
      id: "proj-1",
      name: "Sage Cloud Migration & Stabilization",
      category: "enterprise",
      description: "Migración completa a la nube de AWS de aplicaciones críticas de contabilidad desde entornos on-premise, incluyendo aplicaciones basadas en IIS, microservicios y servicios de Windows. Estabilización integral de la plataforma tras una parada crítica de 3 semanas.",
      technologies: ["C#", ".NET Framework", "AWS", "IIS", "Microservices", "Windows Services", "CI/CD", "New Relic"],
      highlights: [
        "Migración de múltiples aplicativos a infraestructura en la nube de AWS",
        "Resolución de incidencias críticas de estabilidad y recuperación tras parada de 3 semanas",
        "Implementación de automatización y procesos continuos de CI/CD",
        "Escalado para soportar más de 150.000 peticiones por minuto",
        "Liderazgo de equipo internacional de 5 desarrolladores, 2 QA y 1 DBA"
      ],
      date: "2021-05"
    },
    {
      id: "proj-2",
      name: "Central Identity Management (CIM)",
      category: "enterprise",
      description: "Sistema centralizado de gestión de identidad para el sector sanitario con autenticación OAuth/OpenID mediante .NET Core, Docker, RabbitMQ, MongoDB y Angular 6.",
      technologies: ["Angular 6", "C#", ".NET Core 2.2", "MongoDB", "IdentityServer", "Docker", "RabbitMQ", "OAuth", "OpenID"],
      highlights: [
        "Diseño de arquitectura de autenticación centralizada y de alta seguridad",
        "Definición de estructura modular en Angular",
        "Automatización de pruebas de carga con Gatling",
        "Integración con múltiples sistemas y registros sanitarios"
      ],
      date: "2019-03"
    },
    {
      id: "proj-3",
      name: "HIV Monitor Tracking System",
      category: "enterprise",
      description: "Sistema de monitorización y seguimiento de VIH para Sudáfrica con Roche Diagnostics. Aplicación móvil Xamarin con microservicios backend, escaneo de códigos de barras y soporte offline.",
      technologies: ["Xamarin Forms", ".NET Core 2.1", "IdentityServer", "Azure", "Android", "iOS", "AppCenter"],
      highlights: [
        "Arquitectura de aplicación móvil multiplataforma",
        "Implementación de lectura de códigos de barras y sincronización offline",
        "Automatización de despliegues móviles con AppCenter",
        "Construcción de arquitectura de microservicios autenticada",
        "Despliegue sobre contenedores Linux en Azure"
      ],
      date: "2018-03"
    },
    {
      id: "proj-4",
      name: "Smart Water Energy Intelligence Software",
      category: "enterprise",
      description: "Plataforma integral de inteligencia energética para compañía de aguas de EE.UU. con monitorización en tiempo real, informes detallados y paneles ejecutivos.",
      technologies: ["Angular 4", "Node.js", "MongoDB", "Express.js", "Auth0", "D3.js", "Bootstrap"],
      highlights: [
        "Desarrollo de 3 microservicios backend en Node.js",
        "Visualizaciones en tiempo real del consumo energético",
        "Portal seguro de informes para múltiples instalaciones",
        "Seguimiento granular de puntos de medición y telemetría"
      ],
      date: "2017-11"
    },
    {
      id: "proj-5",
      name: "NFC Document Authentication System",
      category: "enterprise",
      description: "Solución de autenticación documental mediante precintos NFC y tecnología blockchain, convirtiendo documentos físicos en instancias digitales verificadas.",
      technologies: ["Angular 4", "C#", "NFC", "MIFARE DESFire", "Bootstrap 4", "PrimeNG", "Blockchain"],
      highlights: [
        "Integración de chips NFC Mifare Classic 4K con SDK de FeigReader",
        "Desarrollo de servicio local HTTPS con instalador WiX",
        "Construcción de portal de gestión documental digital",
        "Verificación e inmutabilidad en blockchain"
      ],
      date: "2017-10"
    },
    {
      id: "proj-6",
      name: "Electronic Keys Security Suite",
      category: "enterprise",
      description: "Suite interna de seguridad corporativa compuesta por 4 portales (gestión de visitas, contratistas, empleados y autoservicio). Incluye integración de lectura de pasaportes con hardware dedicado.",
      technologies: ["ASP.NET MVC", "TypeScript", "KendoUI", "SignalR", "KnockoutJS", "HTML5", "SQL Server"],
      highlights: [
        "Arquitectura de plataforma compartida para 4 portales web",
        "Desarrollo de servicio web para lectura de pasaportes con SDK de 3M",
        "Liderazgo como Scrum Master y Tech Lead",
        "Implementación integral de sistema de gestión de seguridad física"
      ],
      date: "2014-02"
    },
    {
      id: "proj-7",
      name: "Exchange Meeting Scheduler with Office Integration",
      category: "enterprise",
      description: "Sistema de reserva de reuniones con sincronización de Exchange, conversión de documentos Office a PDF, add-in de Outlook e integración con app para iPad.",
      technologies: ["ASP.NET MVC", "Web API", "Exchange Web Services", "Windows Services", "Outlook Add-Ins", "Office Interop", "Quartz.Net"],
      highlights: [
        "Integración con Exchange Web Services para sincronización de reuniones",
        "Servicio de Windows para conversión desatendida de documentos Office",
        "Creación de Add-in de Outlook para gestión de ficheros en servidor",
        "Desarrollo de API Web a medida para app de iPad"
      ],
      date: "2015-04"
    },
    {
      id: "proj-8",
      name: "LabCore UI Migration",
      category: "enterprise",
      description: "Migración de los módulos de UserMessage y Notificaciones de LabCore desde tecnologías heredadas hacia microservicios en Angular y .NET Core para entorno farmacéutico.",
      technologies: ["Angular 9", ".NET Core 3", "SignalR", "Microservices", "RxJS", "Azure DevOps", "Jasmine", "Karma"],
      highlights: [
        "Diseño de arquitectura de microservicios desacoplada",
        "Superado el 95% de cobertura de código en tests automatizados",
        "Pipeline completo de integración continua en Azure DevOps",
        "Modernización de sistema crítico en el sector farmacéutico"
      ],
      date: "2020-01"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023-05",
      link: "https://www.credly.com/badges/5454317b-73c6-4bcf-b8f5-24b80284069d"
    },
    {
      id: "cert-2",
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2021-04",
      link: "https://www.credly.com/badges/cae0f74c-450c-4402-8e7a-61b77f0fe3e7"
    },
    {
      id: "cert-3",
      name: "70-461 Querying Microsoft SQL Server 2012",
      issuer: "Microsoft",
      date: "2013-03"
    },
    {
      id: "cert-4",
      name: "70-632 Microsoft Office Project 2007, Managing Projects",
      issuer: "Microsoft",
      date: "2013-01"
    },
    {
      id: "cert-5",
      name: "70-513 Windows Communication Foundation Development with Microsoft .NET Framework 4",
      issuer: "Microsoft",
      date: "2012-12"
    },
    {
      id: "cert-6",
      name: "70-511 Windows Applications Development with Microsoft .NET Framework 4",
      issuer: "Microsoft",
      date: "2013-01"
    }
  ],
  recommendations: [
    {
      id: "rec-1",
      name: "Conan Patrick Mercer, PhD",
      relationship: "Colaborador en múltiples proyectos complejos",
      text: "Miguel es un líder técnico sobresaliente. Además de estar altamente cualificado en muchas áreas del software moderno, tiene un talento natural para sacar lo mejor de las personas e impulsar eficazmente el progreso de los proyectos guiando y desarrollando a los miembros del equipo. Lo que verdaderamente distingue a Miguel es su energía inagotable. Hemos colaborado en varios proyectos complejos durante el último año, y su entusiasmo fue clave para alcanzar el éxito. Miguel es también una persona con excelentes valores, y tengo total confianza al recomendarlo para liderar proyectos de software complejos y exigentes.",
      source: "Recomendación en LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/conanmercer/"
    },
    {
      id: "rec-2",
      name: "Alberto Paulo",
      relationship: "Trabajó con Miguel como Development Tech Lead",
      text: "He tenido el privilegio de trabajar estrechamente con Miguel como nuestro Development Tech Lead, y lo recomiendo firmemente. Miguel es siempre puntual, dedicado y tiene un agudo sentido para mejorar nuestras aplicaciones e infraestructura. Su buen nivel de inglés nos permite comunicarnos eficazmente y crea un ambiente de trabajo muy positivo con su actitud de apoyo constante. Las habilidades técnicas y el liderazgo de Miguel lo convierten en un miembro de equipo sumamente valioso.",
      source: "Recomendación en LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/albertopaulo/"
    },
    {
      id: "rec-3",
      name: "Mert Koldamca",
      relationship: "QA Team Lead en Sage — Miguel gestionó a Mert",
      text: "He tenido el placer de trabajar con Miguel Molina Montilla y puedo afirmar con seguridad que es un líder excepcional que crea sistemáticamente un entorno donde las personas tienen éxito y crecen. Miguel aúna visión técnica, pensamiento estratégico y un respaldo genuino a su equipo. Fomenta la colaboración, promueve la comunicación abierta y siempre está disponible para ayudar a superar cualquier obstáculo. Lo que más valoro es su capacidad de confiar en su equipo mientras brinda la orientación precisa para alcanzar resultados de alta calidad. Como responsable, fomenta el aprendizaje continuo, el desarrollo profesional y la cultura de responsabilidad. Su estilo de liderazgo empodera a las personas para apropiarse de su trabajo, ganar confianza y rendir al máximo. Estoy muy agradecido por la oportunidad de haber trabajado con él y lo recomendaría a cualquier organización que busque un líder que invierta tanto en el éxito del negocio como en el crecimiento de las personas.",
      source: "Recomendación en LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/mert-koldamca/"
    }
  ],
  languages: [
    { language: "Español", proficiency: "Nativo (L1)" },
    { language: "Catalán", proficiency: "Nativo (L1)" },
    { language: "Inglés", proficiency: "Avanzado / Profesional (C1)" }
  ]
};
