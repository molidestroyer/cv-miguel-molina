import { CVData } from '../types/cv';

// Based on the CV PDF structure, this data can be easily replaced or loaded from an external source
export const cvData: CVData = {
  profile: {
    name: "Miguel Molina Montilla",
    title: "Engineering Manager / C# Team Lead",
    summary: "Experienced Engineering Manager and Software Engineer with extensive expertise in full-stack development, cloud architecture (AWS/Azure), team leadership, and Site Reliability Engineering. Proven track record in leading international teams, migrating applications to cloud, and implementing CI/CD processes. Passionate about building scalable solutions, mentoring developers, and driving process improvements.",
    contact: {
      email: "miguel.molina@example.com",
      phone: "+34 XXX XXX XXX",
      location: "Barcelona, Cataluña, España",
      linkedin: "linkedin.com/in/miguelmolina",
      github: "github.com/molidestroyer",
    }
  },
  experience: [
    {
      id: "exp-1",
      company: "Sage",
      position: "Engineering Manager / C# Team/People Lead Engineer",
      location: "Barcelona, Cataluña, España",
      startDate: "2022-05",
      endDate: "2025-11",
      current: true,
      description: "Managing DBA, QA, and DEV team capabilities focusing on professional growth, process improvements, and site reliability engineering with continuous monitoring.",
      achievements: [
        "Managed international team of DBA, QA, and DEV specialists focusing on professional development",
        "Implemented process improvements and conducted performance reviews",
        "Enhanced application performance and continuous monitoring with New Relic as Site Reliability Engineer",
        "Improved company engagement with values and culture",
        "Ensured seamless user experience supporting 150,000 requests per minute (rpm)"
      ],
      technologies: ["C#", ".NET Framework", "AWS", "New Relic", "Microservices", "ASP.NET Web API", "DevOps", "Site Reliability Engineering", "Scrumban", "Quality Assurance"]
    },
    {
      id: "exp-2",
      company: "Sage",
      position: "Senior Software Engineer – Team Leader",
      location: "Barcelona, Cataluña, España",
      startDate: "2021-05",
      endDate: "2022-04",
      current: false,
      description: "Led team to stabilize critical application lacking CI/CD processes, resolved 3-week downtime, and migrated applications to AWS cloud. Managed international remote team defining workpaths.",
      achievements: [
        "Led international remote team of 5 senior developers, 2 QA specialists, and 1 DBA",
        "Spearheaded full migration of several applications to AWS cloud (IIS based, microservices, windows services)",
        "Revitalized application reliability after critical 3-week downtime event",
        "Collaborated on application improvements to support 150,000 requests per minute",
        "Established CI/CD processes and maximized automation for operational efficiency"
      ],
      technologies: ["C#", ".NET", "AWS", "IIS", "Microservices", "Windows Services", "CI/CD", "DevOps", "Unit Testing", "Continuous Integration"]
    },
    {
      id: "exp-3",
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
      id: "exp-4",
      company: "ERNI",
      position: "Senior Angular Frontend - CIM",
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
      id: "exp-5",
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
      id: "exp-6",
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
      id: "exp-7",
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
      id: "exp-8",
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
      id: "exp-9",
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
      id: "exp-10",
      company: "ERNI",
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
      id: "exp-11",
      company: "ERNI",
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
      id: "exp-12",
      company: "Private/Freelance",
      position: "Android Developer",
      location: "Barcelona, España",
      startDate: "2013-05",
      endDate: "2013-05",
      current: false,
      description: "Private Android app development with Facebook integration, SQLite database, and Google Play Services. Published multiple apps on Google Play Store.",
      achievements: [
        "Published 3 apps on Google Play Store",
        "Integrated Facebook API and Google Play Services",
        "Implemented SQLite database management"
      ],
      technologies: ["Android", "Android SDK", "SQL-Lite", "Facebook API", "Google Play Services"]
    },
    {
      id: "exp-13",
      company: "ERNI",
      position: "Junior Silverlight Developer - Healthcare",
      location: "Barcelona, España",
      startDate: "2012-02",
      endDate: "2013-05",
      current: false,
      description: "Silverlight application development for healthcare-related project.",
      achievements: [
        "Developed Silverlight 4.0 application features",
        "Worked on healthcare-related software for over a year"
      ],
      technologies: ["Silverlight 4.0", "MS SQL Server", "MS Visual Studio 2012", "C#"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-513 Windows Communication Foundation Development with .NET Framework 4",
      location: "Online",
      startDate: "2014-01",
      endDate: "2014-12",
      description: "Microsoft certified in Windows Communication Foundation development"
    },
    {
      id: "edu-2",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-461 Querying Microsoft SQL Server 2012",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-12",
      description: "Microsoft certified in SQL Server 2012 querying"
    },
    {
      id: "edu-3",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-511 Windows Applications Development with .NET Framework 4",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-12",
      description: "Microsoft certified in Windows applications development"
    },
    {
      id: "edu-4",
      institution: "Microsoft",
      degree: "Microsoft Certification",
      field: "70-632 Microsoft Office Project 2007, Managing Projects",
      location: "Online",
      startDate: "2013-01",
      endDate: "2013-12",
      description: "Microsoft certified in project management with MS Project"
    },
    {
      id: "edu-5",
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
    
    // Frameworks & Libraries
    { name: ".NET Core", category: "Frameworks", level: 95 },
    { name: ".NET Framework", category: "Frameworks", level: 95 },
    { name: "Angular", category: "Frameworks", level: 92 },
    { name: "ASP.NET MVC", category: "Frameworks", level: 93 },
    { name: "ASP.NET Web API", category: "Frameworks", level: 92 },
    { name: "SignalR", category: "Frameworks", level: 85 },
    { name: "WPF", category: "Frameworks", level: 80 },
    { name: "Xamarin Forms", category: "Frameworks", level: 85 },
    { name: "Node.js", category: "Frameworks", level: 82 },
    { name: "Express.js", category: "Frameworks", level: 80 },
    { name: "KnockoutJS", category: "Frameworks", level: 75 },
    { name: "RxJS", category: "Frameworks", level: 85 },
    
    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", level: 90 },
    { name: "Azure", category: "Cloud & DevOps", level: 88 },
    { name: "Docker", category: "Cloud & DevOps", level: 85 },
    { name: "CI/CD", category: "Cloud & DevOps", level: 90 },
    { name: "DevOps", category: "Cloud & DevOps", level: 88 },
    { name: "Azure DevOps", category: "Cloud & DevOps", level: 87 },
    { name: "New Relic", category: "Cloud & DevOps", level: 85 },
    { name: "Site Reliability Engineering", category: "Cloud & DevOps", level: 85 },
    
    // Databases
    { name: "MS SQL Server", category: "Databases", level: 92 },
    { name: "MongoDB", category: "Databases", level: 85 },
    { name: "SQL-Lite", category: "Databases", level: 75 },
    
    // Architecture & Patterns
    { name: "Microservices", category: "Architecture", level: 92 },
    { name: "REST APIs", category: "Architecture", level: 93 },
    { name: "SOLID Principles", category: "Architecture", level: 92 },
    { name: "OOP", category: "Architecture", level: 93 },
    { name: "IdentityServer", category: "Architecture", level: 88 },
    { name: "OAuth/OpenID", category: "Architecture", level: 85 },
    
    // Testing & Quality
    { name: "Unit Testing", category: "Testing & Quality", level: 90 },
    { name: "Karma", category: "Testing & Quality", level: 85 },
    { name: "Jasmine", category: "Testing & Quality", level: 85 },
    { name: "SonarQube", category: "Testing & Quality", level: 80 },
    { name: "Quality Assurance", category: "Testing & Quality", level: 85 },
    
    // Tools & Others
    { name: "MS Visual Studio", category: "Tools", level: 95 },
    { name: "Git", category: "Tools", level: 90 },
    { name: "TFS", category: "Tools", level: 80 },
    { name: "Postman", category: "Tools", level: 85 },
    { name: "Telerik", category: "Tools", level: 80 },
    { name: "KendoUI", category: "Tools", level: 82 },
    { name: "PrimeNG", category: "Tools", level: 78 },
    
    // Methodologies
    { name: "Scrum", category: "Methodologies", level: 90 },
    { name: "Scrumban", category: "Methodologies", level: 88 },
    { name: "Agile", category: "Methodologies", level: 90 },
    { name: "Team Management", category: "Methodologies", level: 92 },
    { name: "Requirements Analysis", category: "Methodologies", level: 88 }
  ],
  projects: [
    {
      id: "proj-1",
      name: "Sage Cloud Migration & Stabilization",
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
      name: "AI-900: Microsoft Certified Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023-01"
    },
    {
      id: "cert-2",
      name: "70-513 Windows Communication Foundation Development with Microsoft .NET Framework 4",
      issuer: "Microsoft",
      date: "2014-01"
    },
    {
      id: "cert-3",
      name: "70-461 Querying Microsoft SQL Server 2012",
      issuer: "Microsoft",
      date: "2013-01"
    },
    {
      id: "cert-4",
      name: "70-511 Windows Applications Development with Microsoft .NET Framework 4",
      issuer: "Microsoft",
      date: "2013-01"
    },
    {
      id: "cert-5",
      name: "70-632 Microsoft Office Project 2007, Managing Projects",
      issuer: "Microsoft",
      date: "2013-01"
    }
  ],
  languages: [
    { language: "Spanish", proficiency: "Native (L1)" },
    { language: "Catalan", proficiency: "Native (L1)" },
    { language: "English", proficiency: "Advanced (C1)" }
  ]
};
