import { CVData } from '../types/cv';

// Based on the CV PDF structure, this data can be easily replaced or loaded from an external source
export const cvData: CVData = {
  profile: {
    name: "Miguel Molina Montilla",
    title: "Engineering Manager / C# Team Lead",
    summary: "Experienced Engineering Manager and Software Engineer with extensive expertise in full-stack development, cloud architecture (AWS/Azure), team leadership, and Site Reliability Engineering. Proven track record in leading international teams, migrating applications to cloud, and implementing CI/CD processes. Passionate about building scalable solutions, mentoring developers, and driving process improvements. Currently motivated by AI innovation, investing time in prompts engineering, custom instructions, and Model Context Protocols (MCPs) to simplify processes and automate workflows.",
    contact: {
      email: "miguel.molina.montilla@gmail.com",
      phone: "Available via email or LinkedIn DM",
      location: "Canovelles, Barcelona",
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
      description: "Team Lead managing multidisciplinary team of 11 (developers, QA, BAs), driving cloud payroll product transition. Leading technical debt reduction and AI capabilities integration across end-to-end payroll processes including Timesheets.",
      achievements: [
        "Managed team of 11 professionals (developers, QA, BAs) for critical cloud payroll product",
        "Drove cloud migration and payroll system modernization",
        "Collaborated with Product Owners, Project Managers, and Product Designers for timely deliveries",
        "Led technical debt reduction initiatives",
        "Embedded AI capabilities across end-to-end payroll processes including Timesheets",
        "Invested time in AI innovation: prompts engineering, custom instructions, and Model Context Protocols (MCPs) to simplify processes and automate workflows",
        "Supported multiple localizations' foundations",
        "Led performance reviews, defined OKRs, and managed improvement plans (PIPs)"
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
      description: "Engineering Manager managing delivery of DBA, QA, and DEV team capabilities focusing on professional growth, process improvements, and site reliability engineering with continuous monitoring.",
      achievements: [
        "Managed international team of DBA, QA, and DEV specialists focusing on professional development",
        "Implemented process improvements and conducted performance reviews",
        "Enhanced application performance and continuous monitoring with New Relic as Site Reliability Engineer",
        "Led international remote team of 5 senior developers, 2 QA specialists, and 1 DBA",
        "Designed and executed a minimal-downtime partitioning plan for a critical ~4 billion-row database table — successfully partitioned and migrated hot data with automated cutover in under 12 hours, including validation scripts, rollback strategy, and post-cutover performance tuning (reduced contention and improved query latency)",
        "Improved company engagement with values and culture",
        "Ensured seamless user experience supporting 150,000 requests per minute (rpm)",
        // Consolidated review bullets (2022–2024)
        "Assumed formal leadership responsibilities and acted as interim Team Lead; guided the team technically, set priorities, conducted interviews, and addressed performance issues",
        "Improved build and release pipelines and played a key role in the migration to AWS; refactored large parts of the application to adopt Dependency Injection",
        "Developed leadership skills while maintaining technical ownership; resolved critical stability issues that increased application stability and reduced hosting costs",
        "Balanced management and hands-on engineering: advanced complex technical initiatives while improving team communication, focus, and coordination with other managers to address QA resource constraints",
        "Delivered automation and stability initiatives including DB script generation, DB server deployment automation, API gateway work, and dockerization/stabilization of background services",
        "Planned and executed production-ready partitioning work with robust validation and rollback measures"
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
      description: "Led team to stabilize critical application lacking CI/CD processes, resolved 3-week downtime, and migrated applications to AWS cloud. Managed international remote team defining workpaths.",
      achievements: [
        "Spearheaded full migration of several applications to AWS cloud (IIS based, microservices, windows services)",
        "Moved all sites and workers from on-premise to AWS, automated pipelines (CI/CD), managed EC2 deployment and load balancing including peak-hour scaling and all necessary reliability configurations",
        "Successfully onboarded and trained on AWS, taking ownership of multiple new features and demonstrating strong cloud operational skills",
        "Integrated effectively with a geographically distributed team and proactively proposed product improvements with tech leads",
        // Consolidated 2021 bullets
        "Quickly integrated into the team and introduced stateless solutions to improve scalability and simplify deployments",
        "Actively contributed to the AWS migration effort, delivering key features and operational improvements under tight timelines",
        "Revitalized application reliability after critical 3-week downtime event",
        "Collaborated on application improvements to support 150,000 requests per minute",
        "Established CI/CD processes and maximized automation for operational efficiency"
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
      description: "Company Owner at www.cholloLocura.es, responsible for cloud development on Azure, marketing management, and other business functions.",
      achievements: [
        "Founded and managed e-commerce deals platform",
        "Developed cloud infrastructure on Microsoft Azure",
        "Managed marketing and business operations",
        "Built microservices architecture for scalability"
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
      description: "Senior developer and Scrum Master leading team of ~5 people, working on multiple projects including access control systems, Xamarin mobile apps, Angular applications, and load testing on Kubernetes.",
      achievements: [
        "Led team as Scrum Master organizing dailies, planning, reviews, and retrospectives",
        "Managed direct communication with Product Owners for scope and task decisions",
        "Developed access control web management application for Swiss customer",
        "Architected Xamarin cross-platform app for international Healthcare company",
        "Implemented continuous integration on App Center",
        "Conducted load tests on Kubernetes with kube-monkey, heapster, grafana, influx-db",
        "Communicated fluently in English with international teams"
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
      description: "Migration of LabCore UserMessage/Notification modules to Angular and .NET Core for pharmaceutical domain.",
      achievements: [
        "Designed backend microservices architecture on .NET Core 3.0",
        "Collaborated with frontend team on Angular components design",
        "Created full Azure DevOps continuous integration pipeline",
        "Achieved over 95% code coverage on frontend and backend"
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
      description: "Designed Central Identity Management system for healthcare domain with Angular 6, .NET Core, Docker, RabbitMQ, MongoDB, OAuth, and OpenID.",
      achievements: [
        "Led Angular module architecture design",
        "Implemented senior-level Angular development practices",
        "Created load testing process using Gatling",
        "Integrated IdentityServer for authentication and authorization"
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
      description: "Developed HIV tracking system for South Africa with Roche Diagnostics. Built microservices (.NET Core 2.1) and Xamarin mobile app for Android/iOS with barcode scanning and offline capabilities.",
      achievements: [
        "Architected Xamarin Forms mobile application for Android and iOS",
        "Developed multiple authenticated microservices with IdentityServer",
        "Automated app deployment with AppCenter (Hockey App)",
        "Implemented barcode scanning, offline support, and network detection",
        "Deployed microservices on Azure Linux containers"
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
      description: "Developed full-stack energy intelligence software for USA smart water company to manage and track water facilities with real-time monitoring.",
      achievements: [
        "Developed 3 Node.js backend microservices with Express and Auth0",
        "Created Angular 4 portal with D3 charts and Bootstrap",
        "Implemented real-time data visualization for energy consumption",
        "Built secure multi-facility meter point reporting system"
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
      description: "Developed document authentication solution using NFC seals for American customer, turning offline documents into digital instances with blockchain integration.",
      achievements: [
        "Developed NFC Mifare Classic 4K integration with FeigReader SDK",
        "Created HTTPS local service with WiX installer and certificates",
        "Built Angular 4 site for digital document management with PrimeNG",
        "Integrated blockchain for document verification"
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
      description: "Developed internal tool suite for electronic keys domain including visit management, contractor management, employee management, and self-service tools. Led as Scrum Master and Tech Lead.",
      achievements: [
        "Architected 4 different websites sharing common architecture",
        "Developed custom web service for passport reading with 3M reader integration",
        "Led Scrum ceremonies (Daily, Retro, Grooming, Review, Planning)",
        "Conducted customer meetings, task estimation, and requirement analysis",
        "Tech lead responsible for architecture and design decisions"
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
      description: "Created meeting scheduling system with Exchange integration, Office document conversion to PDF, and iPad app synchronization for railway domain.",
      achievements: [
        "Created ASP.NET MVC HTML5 website with Exchange Web Services integration",
        "Developed Windows service for Office documents to PDF conversion using Office Interop API",
        "Built Windows service synchronizer from Exchange to database",
        "Created Outlook Add-in for meeting file management",
        "Developed custom Web API for iPad app data retrieval"
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
      description: "Software engineer developing Silverlight, WPF, and C# solutions for clients like Carburos Metálicos and Linde. Extensive database management and SQL Server 2008.",
      achievements: [
        "Developed Silverlight and WPF applications",
        "Extensive SQL Server 2008 database management",
        "Worked with Team Foundation Server",
        "Delivered solutions for industrial sector clients"
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
      description: "Backend development for airline company using ASP.NET MVC 3, implementing SOLID methodology, IoC, and MVC patterns.",
      achievements: [
        "Developed backend features using SOLID principles",
        "Implemented Inversion of Control (IoC) patterns",
        "Worked with Telerik GUI components"
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
      description: "WPF framework application development for healthcare company with SQL Server 2012 stored procedures and functions.",
      achievements: [
        "Developed WPF desktop application features",
        "Created stored procedures and functions in SQL Server 2012",
        "Worked with Telerik components and TFS"
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
      description: "Freelance Windows Phone 8 app development, converting existing Android app to Windows Phone platform.",
      achievements: [
        "Converted Android app to Windows Phone 8",
        "Published app on Windows Phone Store",
        "Independent development and deployment"
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
      description: "Freelance Android app development integrating Google Play Services, Facebook, databases, and UX design. Published on Google Play Store.",
      achievements: [
        "Developed and published films2all app on Google Play Store",
        "Integrated Facebook API and Google Play Services",
        "Implemented SQLite database management",
        "Created both standard and lite versions"
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
      description: "Freelance Android app development integrating Google Play Services, Facebook, databases, and UX design. Published on Google Play Store.",
      achievements: [
        "Developed and published Videogame2all app on Google Play Store",
        "Created both free and pro versions",
        "Integrated Facebook API and Google Play Services",
        "Implemented SQLite database management"
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
      description: "Web application development using Java technologies, HTML5, JavaScript, CSS, and jQuery.",
      achievements: [
        "Developed web applications for university projects",
        "Worked with Java, HTML5, JavaScript, CSS, jQuery",
        "Built front-end and back-end solutions"
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
      description: "Managed IT team of 20 people, coordinated IT projects, ensured user support and internal policy compliance. Administered servers and network infrastructure.",
      achievements: [
        "Managed IT team of 20 people",
        "Coordinated IT area projects",
        "Administered Windows servers and network infrastructure",
        "Maintained IT security (Fortigate, VPN)",
        "Managed resource allocation and user provisioning",
        "Maintained technical documentation of information systems"
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
      description: "Developed final degree project using company's proprietary framework (Karat) in VB6 and Java.",
      achievements: [
        "Developed solutions using Karat framework",
        "Worked with VB6 and Java",
        "Completed final degree project"
      ],
      technologies: ["VB6", "Java", "Karat Framework"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Universitat Autònoma de Barcelona",
      degree: "Ingeniería Técnica en Informática de Gestión",
      field: "Informatics",
      location: "Barcelona, España",
      startDate: "2005-09",
      endDate: "2009-06",
      description: "Technical Engineering degree in Computer Science specialized in Management Information Systems"
    },
    {
      id: "edu-2",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-513 Windows Communication Foundation Development with .NET Framework 4",
      location: "Online",
      startDate: "2012-12",
      endDate: "2012-12",
      description: "Microsoft certified in Windows Communication Foundation development"
    },
    {
      id: "edu-3",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-461 Querying Microsoft SQL Server 2012",
      location: "Online",
      startDate: "2013-03",
      endDate: "2013-03",
      description: "Microsoft certified in SQL Server 2012 querying"
    },
    {
      id: "edu-4",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-511 Windows Applications Development with .NET Framework 4",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-12",
      description: "Microsoft certified in Windows applications development"
    },
    {
      id: "edu-5",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-632 Microsoft Office Project 2007, Managing Projects",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-01",
      description: "Microsoft certified in project management with MS Project"
    },
    {
      id: "edu-6",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "AI-900: Microsoft Certified Azure AI Fundamentals",
      location: "Online",
      startDate: "2023-01",
      endDate: "2023-12",
      description: "Microsoft certified in Azure AI fundamentals"
    }
  ],
  skills: [
    // Programming Languages
    { name: "C#", category: "Programming Languages", level: 95 },
    { name: "TypeScript", category: "Programming Languages", level: 90 },
    { name: "JavaScript", category: "Programming Languages", level: 90 },
    { name: "SQL", category: "Programming Languages", level: 90 },
    { name: "Python", category: "Programming Languages", level: 30 },
    { name: "PowerShell", category: "Programming Languages", level: 90 },
    
    // Frameworks & Libraries
    { name: ".NET Core", category: "Frameworks", level: 95 },
    { name: ".NET Framework", category: "Frameworks", level: 95 },
    { name: "Angular", category: "Frameworks", level: 60 },
    { name: "ASP.NET MVC", category: "Frameworks", level: 93 },
    { name: "ASP.NET Web API", category: "Frameworks", level: 92 },
    { name: "SignalR", category: "Frameworks", level: 85 },
  { name: "WPF", category: "Frameworks", level: 75 },
    { name: "Xamarin Forms", category: "Frameworks", level: 85 },
  { name: "Node.js", category: "Frameworks", level: 60 },
  { name: "Express.js", category: "Frameworks", level: 75 },
    { name: "KnockoutJS", category: "Frameworks", level: 75 },
    { name: "RxJS", category: "Frameworks", level: 85 },
    
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
    
    // Databases
  { name: "MS SQL Server", category: "Databases", level: 90 },
  { name: "MongoDB", category: "Databases", level: 50 },
  { name: "SQL-Lite", category: "Databases", level: 50 },
    
    // Architecture & Patterns
  { name: "Microservices", category: "Architecture", level: 92 },
  { name: "REST APIs", category: "Architecture", level: 100 },
  { name: "SOLID Principles", category: "Architecture", level: 95 },
  { name: "OOP", category: "Architecture", level: 95 },
  { name: "IdentityServer", category: "Architecture", level: 80 },
  { name: "OAuth/OpenID", category: "Architecture", level: 85 },
    
    // Testing & Quality
  { name: "Unit Testing", category: "Testing & Quality", level: 90 },
  { name: "Karma", category: "Testing & Quality", level: 60 },
  { name: "Jasmine", category: "Testing & Quality", level: 60 },
  { name: "SonarQube", category: "Testing & Quality", level: 75 },
    { name: "Quality Assurance", category: "Testing & Quality", level: 85 },
    
    // Tools & Others
  { name: "MS Visual Studio", category: "Tools", level: 95 },
  { name: "Git", category: "Tools", level: 90 },
  { name: "TFS", category: "Tools", level: 50 },
    { name: "Postman", category: "Tools", level: 85 },
    { name: "Telerik", category: "Tools", level: 80 },
    { name: "KendoUI", category: "Tools", level: 82 },
    { name: "PrimeNG", category: "Tools", level: 78 },
    
    // Methodologies
    { name: "Scrum", category: "Methodologies", level: 100 },
    { name: "Scrumban", category: "Methodologies", level: 100 },
    { name: "Agile", category: "Methodologies", level: 100 },
    { name: "Team Management", category: "Methodologies", level: 100 },
    { name: "Requirements Analysis", category: "Methodologies", level: 100 }
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
        "Orquestación de microservicios centralizada con .NET Aspire (Admin Web, User Web, API, AI Dashboard y Workers)",
        "Canal de difusión masiva y bot Telegram conectado a comunidad activa de más de 50.000 usuarios",
        "Pipeline inteligente de precios con detección de mínimos históricos y sincronización continua de feeds de afiliados",
        "Generación automatizada de creatividades y fichas de producto mediante agentes de IA",
        "Módulo de analítica de tráfico de alta precisión con clasificación de bots/dispositivos y atribución de conversiones"
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
      description: "Portal especializado y plataforma e-commerce para aficionados y coleccionistas del sistema de 24 bits Neo Geo AES. Arquitectura híbrida en ASP.NET Core con Blazor Server (Static SSR de alto rendimiento) e islas interactivas en Blazor WebAssembly (incluyendo el minijuego retro METAL JACK ejecutable en cliente). Soporta internacionalización completa en 5 idiomas (ES, EN, FR, DE, IT), monitor de precios de segunda mano con cálculo estadístico de percentiles (p25, mediana, p75) y galería colaborativa de verificación de autenticidad de cartuchos y placas con pre-moderación.",
      technologies: ["ASP.NET Core 10", "Blazor SSR & WASM", "C#", "FluentMigrator", "Tailwind CSS", "ImageSharp", "Auth0", "Azure Blob Storage", "Azure App Service", "SQLite"],
      highlights: [
        "Internacionalización nativa en 5 idiomas (ES, EN, FR, DE, IT) con slugs de URL localizados y SEO hreflang dinámico",
        "Arquitectura híbrida Blazor Server Static SSR para máxima velocidad de renderizado con islas WebAssembly cliente",
        "Monitor de mercado retro con algoritmo estadístico de mediana y percentiles (p25/p75) sobre ventana móvil de 12 meses",
        "Galería de autenticidad comunitaria con flujo de pre-moderación, subida de fotos a Azure Blob y procesado WebP con ImageSharp",
        "Diseño inmersivo estilo arcade CRT con estética retro optimizada al milímetro en Tailwind CSS"
      ],
      link: "https://www.neogeoaesplus.com",
      date: "2024-05",
      screenshots: [
        {
          url: "/projects/neogeo-catalog.png",
          title: "Catálogo Clásico SNK",
          caption: "Catálogo histórico completo de cartuchos domésticos 1990-2004 con indicadores de rareza y ficha técnica."
        },
        {
          url: "/projects/neogeo-games.png",
          title: "Catálogo de Reediciones AES+",
          caption: "Explorador de juegos con filtros por género, fichas técnicas y opciones de reserva/compra."
        },
        {
          url: "/projects/neogeo-home.png",
          title: "Portada & Cuenta Atrás",
          caption: "Hero retroarcade con reloj de lanzamiento retro y banner de ofertas dinámicas sincronizado con CholloLocura."
        }
      ]
    },
    {
      id: "proj-personal-evercadeplus",
      name: "Evercade+",
      category: "personal",
      badge: "En Producción · Hardware Tracker",
      tagline: "Catálogo exhaustivo y rastreador horario de precios para todo el ecosistema Evercade",
      description: "Plataforma de seguimiento y catálogo integral de todo el universo Evercade (consolas portátiles como EXP/Super Pocket, sobremesa VS y más de 80 cartuchos oficiales). Modelo de datos relacional de tres niveles (Consola -> Cartucho -> Juego) con navegación bidireccional. Incorpora un motor en segundo plano (PriceSyncService) que sincroniza de forma horaria los precios de tiendas líderes (Amazon, Wakkap) generando históricos y snapshots, sistema colaborativo de reporte de rotura de stock y soporte multilingüe en 5 idiomas.",
      technologies: ["ASP.NET Core 10", "Blazor Server SSR", "C#", "FluentMigrator", "Tailwind CSS", "Auth0", ".NET BackgroundServices", "REST API", "Azure App Service", "SQLite"],
      highlights: [
        "Modelo relacional de 3 niveles estructurado (Hardware -> Cartuchos -> Juegos) con más de 80 cartuchos y cientos de títulos",
        "Worker en segundo plano (PriceSyncService) con sincronización horaria de precios y generación de snapshots históricos",
        "Integración bidireccional con API de CholloLocura para validación y caducidad automática de ofertas",
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
      description: "Complete AWS cloud migration of critical accounting applications from on-premise deployment, including IIS-based apps, microservices, and Windows services. Stabilized application after 3-week downtime.",
      technologies: ["C#", ".NET Framework", "AWS", "IIS", "Microservices", "Windows Services", "CI/CD", "New Relic"],
      highlights: [
        "Migrated multiple applications to AWS cloud infrastructure",
        "Resolved critical stability issues and 3-week downtime event",
        "Implemented CI/CD processes and automation",
        "Scaled to support 150,000 requests per minute",
        "Led international team of 5 developers, 2 QA, 1 DBA"
      ],
      date: "2021-05"
    },
    {
      id: "proj-2",
      name: "Central Identity Management (CIM)",
      category: "enterprise",
      description: "Healthcare identity management system with OAuth/OpenID authentication using .NET Core, Docker, RabbitMQ, MongoDB, and Angular 6.",
      technologies: ["Angular 6", "C#", ".NET Core 2.2", "MongoDB", "IdentityServer", "Docker", "RabbitMQ", "OAuth", "OpenID"],
      highlights: [
        "Designed secure central authentication system",
        "Implemented Angular module architecture",
        "Created load testing process with Gatling",
        "Integrated with multiple healthcare systems"
      ],
      date: "2019-03"
    },
    {
      id: "proj-3",
      name: "HIV Monitor Tracking System",
      category: "enterprise",
      description: "HIV tracking system for South Africa with Roche Diagnostics. Xamarin mobile app for Android/iOS with microservices backend, barcode scanning, and offline capabilities.",
      technologies: ["Xamarin Forms", ".NET Core 2.1", "IdentityServer", "Azure", "Android", "iOS", "AppCenter"],
      highlights: [
        "Architected cross-platform mobile application",
        "Implemented barcode scanning and offline support",
        "Automated deployment with AppCenter",
        "Built authenticated microservices architecture",
        "Deployed on Azure Linux containers"
      ],
      date: "2018-03"
    },
    {
      id: "proj-4",
      name: "Smart Water Energy Intelligence Software",
      category: "enterprise",
      description: "Full-stack energy intelligence system for USA water company with real-time monitoring, detailed reporting, and actionable data dashboards.",
      technologies: ["Angular 4", "Node.js", "MongoDB", "Express.js", "Auth0", "D3.js", "Bootstrap"],
      highlights: [
        "Built 3 Node.js backend microservices",
        "Created real-time energy consumption visualizations",
        "Implemented secure multi-facility reporting portal",
        "Developed granular meter point tracking system"
      ],
      date: "2017-11"
    },
    {
      id: "proj-5",
      name: "NFC Document Authentication System",
      category: "enterprise",
      description: "Document authentication solution using NFC seals with blockchain integration, turning offline documents into verified digital instances.",
      technologies: ["Angular 4", "C#", "NFC", "MIFARE DESFire", "Bootstrap 4", "PrimeNG", "Blockchain"],
      highlights: [
        "Integrated NFC Mifare Classic 4K with FeigReader SDK",
        "Developed HTTPS local service with WiX installer",
        "Built digital document management portal",
        "Implemented blockchain verification"
      ],
      date: "2017-10"
    },
    {
      id: "proj-6",
      name: "Electronic Keys Security Suite",
      category: "enterprise",
      description: "Internal security tool suite with 4 websites for visit management, contractor management, employee management, and self-service tools. Includes passport reading integration.",
      technologies: ["ASP.NET MVC", "TypeScript", "KendoUI", "SignalR", "KnockoutJS", "HTML5", "SQL Server"],
      highlights: [
        "Architected shared platform for 4 different websites",
        "Developed custom passport reader web service with 3M SDK",
        "Led as Scrum Master and Tech Lead",
        "Implemented comprehensive security management system"
      ],
      date: "2014-02"
    },
    {
      id: "proj-7",
      name: "Exchange Meeting Scheduler with Office Integration",
      category: "enterprise",
      description: "Meeting scheduling system with Exchange synchronization, Office-to-PDF conversion, Outlook add-in, and iPad app integration.",
      technologies: ["ASP.NET MVC", "Web API", "Exchange Web Services", "Windows Services", "Outlook Add-Ins", "Office Interop", "Quartz.Net"],
      highlights: [
        "Integrated Exchange Web Services for meeting synchronization",
        "Built Windows service for Office document conversion",
        "Created Outlook Add-in for server file management",
        "Developed custom Web API for iPad app"
      ],
      date: "2015-04"
    },
    {
      id: "proj-8",
      name: "LabCore UI Migration",
      category: "enterprise",
      description: "Migration of pharmaceutical LabCore UserMessage and Notification modules from legacy system to Angular and .NET Core microservices.",
      technologies: ["Angular 9", ".NET Core 3", "SignalR", "Microservices", "RxJS", "Azure DevOps", "Jasmine", "Karma"],
      highlights: [
        "Designed microservices architecture",
        "Achieved 95%+ code coverage",
        "Created full Azure DevOps CI pipeline",
        "Modernized legacy pharmaceutical system"
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
      relationship: "Collaborated on several complex projects",
      text: "Miguel is an outstanding technical lead. Along with being highly skilled in many areas of modern software, he has a natural talent for bringing out the best in people and effectively driving project progress by mentoring and developing individual contributors. What truly sets Miguel apart is his energy. We've collaborated on several complex projects over the past year, and his enthusiasm was instrumental in achieving success. Miguel is also a person of excellent values, and I have full confidence in recommending him to lead complex and challenging software projects.",
      source: "LinkedIn Recommendation",
      linkedinUrl: "https://www.linkedin.com/in/conanmercer/"
    },
    {
      id: "rec-2",
      name: "Alberto Paulo",
      relationship: "Worked with Miguel as Development Tech Lead",
      text: "I've had the privilege of working closely with Miguel as our Development Tech Lead, and I highly recommend him. Miguel is always on time, dedicated, and has a keen eye for improving our applications, and infrastructure. His good English skills help us communicate well, and he creates a positive work environment with his supportive nature. Miguel's technical skills and leadership make him a valuable team member.",
      source: "LinkedIn Recommendation",
      linkedinUrl: "https://www.linkedin.com/in/albertopaulo/"
    },
    {
      id: "rec-3",
      name: "Mert Koldamca",
      relationship: "QA Team Lead at Sage — Miguel managed Mert",
      text: "I have had the pleasure of working with Miguel Molina Montilla, and I can confidently say that he is an exceptional leader who consistently creates an environment where people can succeed and grow. Miguel combines technical understanding, strategic thinking, and genuine support for his team. He encourages collaboration, promotes open communication, and always makes himself available to help remove obstacles when challenges arise. What I particularly appreciate is his ability to trust his team while providing the guidance needed to achieve high-quality results. As a manager, Miguel fosters continuous learning, professional development, and a culture of accountability. His leadership style empowers people to take ownership of their work, build confidence, and deliver their best. I am grateful for the opportunity to work with him and would highly recommend Miguel to any organization looking for a leader who truly invests in both business success and the growth of his people.",
      source: "LinkedIn Recommendation",
      linkedinUrl: "https://www.linkedin.com/in/mert-koldamca/"
    }
  ],
  languages: [
    { language: "Spanish", proficiency: "Native (L1)" },
    { language: "Catalan", proficiency: "Native (L1)" },
    { language: "English", proficiency: "Advanced (C1)" }
  ]
};
