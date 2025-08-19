"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.certifications": "Certificaciones",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "José Luis",
    "hero.subtitle": "Full Stack Developer | Technical Leader | Instructor",
    "hero.description":
      "Construyendo soluciones escalables, liderando equipos y enseñando a la próxima generación de desarrolladores.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.downloadCV": "Descargar CV",

    // About Section
    "about.title": "Sobre mí",
    "about.description1":
      "Full Stack Developer y Líder Técnico con +18 años de experiencia en desarrollo web. Experto en React, Angular, Node.js y MySQL. Con experiencia en startups, entregando soluciones rápidas y enfocadas en el cliente.",
    "about.description2":
      "Instructor en JavaScript, HTML, CSS, React, Node.js, Angular y bases de datos, combinando pasión por la tecnología y la enseñanza. Comprometido con construir soluciones escalables y mentorar a la próxima generación de desarrolladores.",

    // Skills Section
    "skills.title": "Habilidades Técnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Bases de Datos",
    "skills.dataScience": "Data Science",
    "skills.tools": "Herramientas y DevOps",
    "skills.security": "Seguridad",

    // Experience Section
    "experience.title": "Experiencia",
    "experience.role1": "Líder Técnico",
    "experience.company1": "Startup Tecnológica",
    "experience.period1": "2020 - Presente",
    "experience.desc1":
      "Gestionando equipos de desarrollo, administración de servidores, implementando IA para optimización de procesos e impulsando la innovación en múltiples proyectos.",
    "experience.role2": "Senior Full Stack Developer",
    "experience.company2": "Varias Startups",
    "experience.period2": "2015 - 2020",
    "experience.desc2":
      "Construyendo soluciones escalables de frontend y backend, enfocándome en entrega rápida y desarrollo centrado en el cliente en entornos de startup.",
    "experience.role3": "Instructor y Desarrollador",
    "experience.company3": "Instituciones Educativas",
    "experience.period3": "2010 - Presente",
    "experience.desc3":
      "Enseñando JavaScript, HTML, CSS, React, Angular, Node.js y bases de datos con proyectos prácticos. Mentoreando a cientos de estudiantes.",
    "experience.role4": "Full Stack Developer",
    "experience.company4": "Agencia de Desarrollo Web",
    "experience.period4": "2006 - 2015",
    "experience.desc4":
      "Desarrollando aplicaciones web usando varias tecnologías, construyendo experiencia tanto en desarrollo frontend como backend.",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.ecommerce.title": "Plataforma E-Commerce",
    "projects.ecommerce.desc":
      "Solución completa de e-commerce con React, Node.js y MySQL. Incluye autenticación de usuarios, procesamiento de pagos y panel de administración.",
    "projects.analytics.title": "Dashboard de Análisis de Datos",
    "projects.analytics.desc":
      "Dashboard interactivo para visualización de datos usando Python, Pandas y librerías modernas de gráficos. Procesamiento de datos en tiempo real e insights.",
    "projects.auth.title": "Sistema de Autenticación Seguro",
    "projects.auth.desc":
      "Sistema robusto de autenticación y autorización con JWT, OAuth y autenticación multifactor. Construido con mejores prácticas de seguridad.",
    "projects.code": "Código",
    "projects.demo": "Demo en Vivo",
    "projects.viewMore": "Ver Más Proyectos",
    "projects.allProjects": "Todos los Proyectos",
    "projects.allProjectsDesc": "Explora mi portafolio completo de más de 35 proyectos organizados por especialidad.",
    "projects.backToHome": "Volver al Inicio",
    "projects.searchPlaceholder": "Buscar proyectos o tecnologías...",
    "projects.showing": "Mostrando",
    "projects.of": "de",
    "projects.projects": "proyectos",
    "projects.noResults": "No se encontraron proyectos que coincidan con tu búsqueda.",

    // Project Categories
    "projects.categories.all": "Todos",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.categories.datascience": "Data Science & IA",
    "projects.categories.security": "Seguridad Web",
    "projects.categories.cloud": "Cloud & DevOps",

    // Individual Projects
    "projects.portfolio.title": "Sitio Web Portfolio",
    "projects.portfolio.desc": "Portfolio personal moderno con Next.js, animaciones Framer Motion y diseño responsive.",
    "projects.api.title": "API REST Completa",
    "projects.api.desc": "API RESTful robusta con documentación Swagger, autenticación JWT y validación de datos.",
    "projects.ml.title": "Modelo de Machine Learning",
    "projects.ml.desc": "Modelo predictivo usando scikit-learn y TensorFlow para análisis de datos y predicciones.",
    "projects.mobile.title": "Aplicación Móvil",
    "projects.mobile.desc": "App móvil multiplataforma con React Native, integración Firebase y estado Redux.",
    "projects.microservices.title": "Arquitectura de Microservicios",
    "projects.microservices.desc": "Sistema distribuido con Docker, Kubernetes y comunicación entre servicios.",
    "projects.blockchain.title": "Aplicación Blockchain",
    "projects.blockchain.desc": "DApp descentralizada con contratos inteligentes Solidity y interfaz Web3.",
    "projects.chatbot.title": "Chatbot con IA",
    "projects.chatbot.desc": "Chatbot inteligente con procesamiento de lenguaje natural y integración OpenAI.",
    "projects.cms.title": "Sistema de Gestión de Contenido",
    "projects.cms.desc": "CMS headless con Next.js, Strapi y consultas GraphQL para gestión de contenido.",
    "projects.dashboard.title": "Dashboard Administrativo",
    "projects.dashboard.desc": "Panel de control con Vue.js, gráficos interactivos y métricas en tiempo real.",
    "projects.security.title": "Escáner de Seguridad",
    "projects.security.desc": "Herramienta de análisis de vulnerabilidades web con detección automática de amenazas.",
    "projects.devops.title": "Pipeline CI/CD",
    "projects.devops.desc": "Pipeline automatizado con Jenkins, Docker y despliegue en AWS con Terraform.",
    "projects.social.title": "Plataforma Social",
    "projects.social.desc": "Red social con chat en tiempo real, sistema de likes y notificaciones push.",
    "projects.weather.title": "App del Clima",
    "projects.weather.desc": "Aplicación meteorológica PWA con geolocalización y pronósticos detallados.",
    "projects.inventory.title": "Sistema de Inventario",
    "projects.inventory.desc": "Gestión de inventario empresarial con Angular, Spring Boot y reportes avanzados.",
    "projects.blog.title": "Plataforma de Blog",
    "projects.blog.desc": "Blog estático con Gatsby, Markdown y optimización SEO automática.",
    "projects.monitoring.title": "Sistema de Monitoreo",
    "projects.monitoring.desc": "Monitoreo de infraestructura con Prometheus, Grafana y alertas automatizadas.",
    "projects.game.title": "Juego Web",
    "projects.game.desc": "Juego interactivo con JavaScript, Canvas API y gráficos WebGL 3D.",
    "projects.crm.title": "Sistema CRM",
    "projects.crm.desc": "Gestión de relaciones con clientes, seguimiento de ventas y análisis de rendimiento.",
    "projects.iot.title": "Dashboard IoT",
    "projects.iot.desc": "Monitoreo de dispositivos IoT con Raspberry Pi, MQTT y visualización de datos.",
    "projects.vpn.title": "Servidor VPN",
    "projects.vpn.desc": "Servidor VPN seguro con OpenVPN, configuración iptables y contenedores Docker.",
    "projects.kubernetes.title": "Cluster Kubernetes",
    "projects.kubernetes.desc": "Orquestación de contenedores con Kubernetes, Helm charts y configuración YAML.",
    "projects.pwa.title": "Aplicación Web Progresiva",
    "projects.pwa.desc": "PWA con Service Workers, almacenamiento offline y notificaciones push.",
    "projects.graphql.title": "API GraphQL",
    "projects.graphql.desc": "API flexible con GraphQL, Apollo Server y esquemas tipados con TypeScript.",
    "projects.nlp.title": "Analizador de Texto",
    "projects.nlp.desc": "Procesamiento de lenguaje natural con NLTK, análisis de sentimientos y clasificación.",
    "projects.firewall.title": "Configuración de Firewall",
    "projects.firewall.desc": "Sistema de firewall personalizado con iptables, scripts Python y automatización.",
    "projects.serverless.title": "Arquitectura Serverless",
    "projects.serverless.desc": "Aplicación serverless con AWS Lambda, DynamoDB y framework Serverless.",
    "projects.testing.title": "Suite de Testing",
    "projects.testing.desc": "Framework de pruebas completo con Jest, Cypress y testing automatizado.",
    "projects.websocket.title": "Chat en Tiempo Real",
    "projects.websocket.desc": "Sistema de chat con WebSockets, Socket.io y sincronización en tiempo real.",
    "projects.scraper.title": "Web Scraper",
    "projects.scraper.desc": "Extractor de datos web con Python, BeautifulSoup y automatización Selenium.",
    "projects.penetration.title": "Herramientas de Pentesting",
    "projects.penetration.desc": "Suite de herramientas de penetration testing con Kali Linux y Metasploit.",
    "projects.terraform.title": "Infraestructura como Código",
    "projects.terraform.desc": "Gestión de infraestructura AWS con Terraform, Ansible y automatización.",
    "projects.spa.title": "Aplicación de Página Única",
    "projects.spa.desc": "SPA moderna con Vue.js, Vuex para estado y Vue Router para navegación.",

    // Certifications Section
    "certifications.title": "Certificaciones",
    "certifications.viewAll": "Ver Lista Completa de 30+ Certificaciones",
    "certifications.subtitle": "Más de 30 certificaciones en desarrollo web, data science, seguridad, cloud y metodologías ágiles.",
    "certifications.downloadPDF": "Descargar PDF Completo",
    "certifications.viewLinkedIn": "Ver en LinkedIn",
    "certifications.categories.all": "Todas",
    "certifications.categories.frontend": "Frontend & Full Stack",
    "certifications.categories.backend": "Backend & Bases de Datos",
    "certifications.categories.datascience": "Data Science & AI",
    "certifications.categories.security": "Seguridad Web",
    "certifications.categories.cloud": "Cloud & DevOps",
    "certifications.categories.agile": "Agile & Gestión de Proyectos",
    "certifications.learning.title": "Aprendizaje Continuo",
    "certifications.learning.description": "La tecnología evoluciona constantemente, y yo también. Estas certificaciones representan mi compromiso con el aprendizaje continuo y la excelencia técnica.",
    "certifications.cta.title": "Trabajemos Juntos",
    "certifications.cta.viewProjects": "Ver Proyectos",

    // Certifications Page
    "cert.backToPortfolio": "Volver al Portfolio",
    "cert.title": "Certificaciones",
    "cert.description": "Más de 30 certificaciones en desarrollo web, data science, seguridad, cloud y metodologías ágiles.",
    "cert.downloadPDF": "Descargar PDF Completo",
    "cert.viewLinkedIn": "Ver en LinkedIn",
    "cert.categories.all": "Todas",
    "cert.categories.frontend": "Frontend & Full Stack",
    "cert.categories.backend": "Backend & Bases de Datos",
    "cert.categories.dataScience": "Data Science & AI",
    "cert.categories.security": "Seguridad Web",
    "cert.categories.cloud": "Cloud & DevOps",
    "cert.categories.agile": "Agile & Gestión de Proyectos",
    "cert.showing": "Mostrando",
    "cert.certifications": "certificaciones",
    "cert.continuousLearning": "Aprendizaje Continuo",
    "cert.learningDescription": "La tecnología evoluciona constantemente, y yo también. Estas certificaciones representan mi compromiso con el aprendizaje continuo y la excelencia técnica.",
    "cert.workTogether": "Trabajemos Juntos",
    "cert.viewProjects": "Ver Proyectos",

    // Contact Section
    "contact.title": "Trabajemos Juntos",
    "contact.subtitle": "Ponte en Contacto",
    "contact.description": "¿Listo para dar vida a tus ideas? Hablemos sobre cómo podemos trabajar juntos para crear algo increíble. Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.",
    "contact.form.title": "Enviar un Mensaje",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Tu Email",
    "contact.form.message": "Tu mensaje",
    "contact.form.send": "Enviar Mensaje",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "José Luis",
    "hero.subtitle": "Full Stack Developer | Technical Leader | Instructor",
    "hero.description": "Building scalable solutions, leading teams, and teaching the next generation of developers.",
    "hero.viewProjects": "View Projects",
    "hero.downloadCV": "Download CV",

    // About Section
    "about.title": "About Me",
    "about.description1":
      "Full Stack Developer and Technical Leader with +18 years of experience in web development. Expert in React, Angular, Node.js, and MySQL. Experienced in startups, delivering fast, client-focused solutions.",
    "about.description2":
      "Instructor in JavaScript, HTML, CSS, React, Node.js, Angular, and databases, combining passion for technology and teaching. Committed to building scalable solutions and mentoring the next generation of developers.",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.dataScience": "Data Science",
    "skills.tools": "Tools & DevOps",
    "skills.security": "Security",

    // Experience Section
    "experience.title": "Experience",
    "experience.role1": "Technical Lead",
    "experience.company1": "Tech Startup",
    "experience.period1": "2020 - Present",
    "experience.desc1":
      "Managing development teams, server administration, implementing AI for process optimization, and driving innovation across multiple projects.",
    "experience.role2": "Senior Full Stack Developer",
    "experience.company2": "Various Startups",
    "experience.period2": "2015 - 2020",
    "experience.desc2":
      "Building scalable frontend and backend solutions, focusing on fast delivery and client-focused development in startup environments.",
    "experience.role3": "Instructor & Developer",
    "experience.company3": "Educational Institutions",
    "experience.period3": "2010 - Present",
    "experience.desc3":
      "Teaching JavaScript, HTML, CSS, React, Angular, Node.js, and databases with practical projects. Mentoring hundreds of students.",
    "experience.role4": "Full Stack Developer",
    "experience.company4": "Web Development Agency",
    "experience.period4": "2006 - 2015",
    "experience.desc4":
      "Developing web applications using various technologies, building expertise in both frontend and backend development.",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.ecommerce.title": "E-Commerce Platform",
    "projects.ecommerce.desc":
      "Full-stack e-commerce solution with React, Node.js, and MySQL. Features include user authentication, payment processing, and admin dashboard.",
    "projects.analytics.title": "Data Analytics Dashboard",
    "projects.analytics.desc":
      "Interactive dashboard for data visualization using Python, Pandas, and modern charting libraries. Real-time data processing and insights.",
    "projects.auth.title": "Secure Authentication System",
    "projects.auth.desc":
      "Robust authentication and authorization system with JWT, OAuth, and multi-factor authentication. Built with security best practices.",
    "projects.code": "Code",
    "projects.demo": "Live Demo",
    "projects.viewMore": "View More Projects",
    "projects.allProjects": "All Projects",
    "projects.allProjectsDesc": "Explore my complete portfolio of 35+ projects organized by specialty.",
    "projects.backToHome": "Back to Home",
    "projects.searchPlaceholder": "Search projects or technologies...",
    "projects.showing": "Showing",
    "projects.of": "of",
    "projects.projects": "projects",
    "projects.noResults": "No projects found matching your search.",

    // Project Categories
    "projects.categories.all": "All",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.categories.datascience": "Data Science & AI",
    "projects.categories.security": "Web Security",
    "projects.categories.cloud": "Cloud & DevOps",

    // Individual Projects
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.desc":
      "Modern personal portfolio with Next.js, Framer Motion animations and responsive design.",
    "projects.api.title": "Complete REST API",
    "projects.api.desc": "Robust RESTful API with Swagger documentation, JWT authentication and data validation.",
    "projects.ml.title": "Machine Learning Model",
    "projects.ml.desc": "Predictive model using scikit-learn and TensorFlow for data analysis and predictions.",
    "projects.mobile.title": "Mobile Application",
    "projects.mobile.desc": "Cross-platform mobile app with React Native, Firebase integration and Redux state.",
    "projects.microservices.title": "Microservices Architecture",
    "projects.microservices.desc": "Distributed system with Docker, Kubernetes and inter-service communication.",
    "projects.blockchain.title": "Blockchain Application",
    "projects.blockchain.desc": "Decentralized DApp with Solidity smart contracts and Web3 interface.",
    "projects.chatbot.title": "AI Chatbot",
    "projects.chatbot.desc": "Intelligent chatbot with natural language processing and OpenAI integration.",
    "projects.cms.title": "Content Management System",
    "projects.cms.desc": "Headless CMS with Next.js, Strapi and GraphQL queries for content management.",
    "projects.dashboard.title": "Admin Dashboard",
    "projects.dashboard.desc": "Control panel with Vue.js, interactive charts and real-time metrics.",
    "projects.security.title": "Security Scanner",
    "projects.security.desc": "Web vulnerability analysis tool with automatic threat detection.",
    "projects.devops.title": "CI/CD Pipeline",
    "projects.devops.desc": "Automated pipeline with Jenkins, Docker and AWS deployment with Terraform.",
    "projects.social.title": "Social Platform",
    "projects.social.desc": "Social network with real-time chat, like system and push notifications.",
    "projects.weather.title": "Weather App",
    "projects.weather.desc": "PWA weather application with geolocation and detailed forecasts.",
    "projects.inventory.title": "Inventory System",
    "projects.inventory.desc": "Enterprise inventory management with Angular, Spring Boot and advanced reports.",
    "projects.blog.title": "Blog Platform",
    "projects.blog.desc": "Static blog with Gatsby, Markdown and automatic SEO optimization.",
    "projects.monitoring.title": "Monitoring System",
    "projects.monitoring.desc": "Infrastructure monitoring with Prometheus, Grafana and automated alerts.",
    "projects.game.title": "Web Game",
    "projects.game.desc": "Interactive game with JavaScript, Canvas API and 3D WebGL graphics.",
    "projects.crm.title": "CRM System",
    "projects.crm.desc": "Customer relationship management, sales tracking and performance analysis.",
    "projects.iot.title": "IoT Dashboard",
    "projects.iot.desc": "IoT device monitoring with Raspberry Pi, MQTT and data visualization.",
    "projects.vpn.title": "VPN Server",
    "projects.vpn.desc": "Secure VPN server with OpenVPN, iptables configuration and Docker containers.",
    "projects.kubernetes.title": "Kubernetes Cluster",
    "projects.kubernetes.desc": "Container orchestration with Kubernetes, Helm charts and YAML configuration.",
    "projects.pwa.title": "Progressive Web App",
    "projects.pwa.desc": "PWA with Service Workers, offline storage and push notifications.",
    "projects.graphql.title": "GraphQL API",
    "projects.graphql.desc": "Flexible API with GraphQL, Apollo Server and TypeScript typed schemas.",
    "projects.nlp.title": "Text Analyzer",
    "projects.nlp.desc": "Natural language processing with NLTK, sentiment analysis and classification.",
    "projects.firewall.title": "Firewall Configuration",
    "projects.firewall.desc": "Custom firewall system with iptables, Python scripts and automation.",
    "projects.serverless.title": "Serverless Architecture",
    "projects.serverless.desc": "Serverless application with AWS Lambda, DynamoDB and Serverless framework.",
    "projects.testing.title": "Testing Suite",
    "projects.testing.desc": "Complete testing framework with Jest, Cypress and automated testing.",
    "projects.websocket.title": "Real-time Chat",
    "projects.websocket.desc": "Chat system with WebSockets, Socket.io and real-time synchronization.",
    "projects.scraper.title": "Web Scraper",
    "projects.scraper.desc": "Web data extractor with Python, BeautifulSoup and Selenium automation.",
    "projects.penetration.title": "Pentesting Tools",
    "projects.penetration.desc": "Penetration testing tool suite with Kali Linux and Metasploit.",
    "projects.terraform.title": "Infrastructure as Code",
    "projects.terraform.desc": "AWS infrastructure management with Terraform, Ansible and automation.",
    "projects.spa.title": "Single Page Application",
    "projects.spa.desc": "Modern SPA with Vue.js, Vuex for state and Vue Router for navigation.",

    // Certifications Section
    "certifications.title": "Certifications",
    "certifications.viewAll": "View Full List of 30+ Certifications",
    "certifications.subtitle": "Over 30 certifications in web development, data science, security, cloud and agile methodologies.",
    "certifications.downloadPDF": "Download Complete PDF",
    "certifications.viewLinkedIn": "View on LinkedIn",
    "certifications.categories.all": "All",
    "certifications.categories.frontend": "Frontend & Full Stack",
    "certifications.categories.backend": "Backend & Databases",
    "certifications.categories.datascience": "Data Science & AI",
    "certifications.categories.security": "Web Security",
    "certifications.categories.cloud": "Cloud & DevOps",
    "certifications.categories.agile": "Agile & Project Management",
    "certifications.learning.title": "Continuous Learning",
    "certifications.learning.description": "Technology evolves constantly, and so do I. These certifications represent my commitment to continuous learning and technical excellence.",
    "certifications.cta.title": "Let's Work Together",
    "certifications.cta.viewProjects": "View Projects",

    // Certifications Page
    "cert.backToPortfolio": "Back to Portfolio",
    "cert.title": "Certifications",
    "cert.description": "Over 30 certifications in web development, data science, security, cloud and agile methodologies.",
    "cert.downloadPDF": "Download Complete PDF",
    "cert.viewLinkedIn": "View on LinkedIn",
    "cert.categories.all": "All",
    "cert.categories.frontend": "Frontend & Full Stack",
    "cert.categories.backend": "Backend & Databases",
    "cert.categories.dataScience": "Data Science & AI",
    "cert.categories.security": "Web Security",
    "cert.categories.cloud": "Cloud & DevOps",
    "cert.categories.agile": "Agile & Project Management",
    "cert.showing": "Showing",
    "cert.certifications": "certifications",
    "cert.continuousLearning": "Continuous Learning",
    "cert.learningDescription": "Technology evolves constantly, and so do I. These certifications represent my commitment to continuous learning and technical excellence.",
    "cert.workTogether": "Let's Work Together",
    "cert.viewProjects": "View Projects",

    // Contact Section
    "contact.title": "Let's Work Together",
    "contact.subtitle": "Get in Touch",
    "contact.description": "Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing. I'm always open to new opportunities and interesting projects.",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your message",
    "contact.form.send": "Send Message",
  },
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
