"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Github,
  ExternalLink,
  Search,
  Filter,
  ArrowLeft,
  Code,
  Database,
  Server,
  Smartphone,
  Shield,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

const categories = [
  { key: "all", icon: <Filter className="w-4 h-4" /> },
  { key: "frontend", icon: <Smartphone className="w-4 h-4" /> },
  { key: "backend", icon: <Server className="w-4 h-4" /> },
  { key: "fullstack", icon: <Code className="w-4 h-4" /> },
  { key: "datascience", icon: <Database className="w-4 h-4" /> },
  { key: "security", icon: <Shield className="w-4 h-4" /> },
  { key: "cloud", icon: <Cloud className="w-4 h-4" /> },
]

const projects = [
  {
    id: 1,
    titleKey: "projects.ecommerce.title",
    descriptionKey: "projects.ecommerce.desc",
    tech: ["React", "Node.js", "MySQL", "Stripe", "Express"],
    image: "/modern-ecommerce-interface.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    titleKey: "projects.analytics.title",
    descriptionKey: "projects.analytics.desc",
    tech: ["Python", "Pandas", "React", "D3.js", "NumPy"],
    image: "/data-analytics-dashboard.png",
    category: "datascience",
    github: "https://github.com/jose-luis/analytics",
    demo: "https://analytics-demo.com",
  },
  {
    id: 3,
    titleKey: "projects.auth.title",
    descriptionKey: "projects.auth.desc",
    tech: ["Node.js", "JWT", "OAuth", "MongoDB", "Express"],
    image: "/authentication-system.png",
    category: "security",
    github: "https://github.com/jose-luis/auth-system",
    demo: "https://auth-demo.com",
  },
  {
    id: 4,
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.desc",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    image: "/portfolio-website-showcase.png",
    category: "frontend",
    github: "https://github.com/jose-luis/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    id: 5,
    titleKey: "projects.api.title",
    descriptionKey: "projects.api.desc",
    tech: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    image: "/rest-api-documentation.png",
    category: "backend",
    github: "https://github.com/jose-luis/rest-api",
    demo: "https://api-demo.com",
  },
  {
    id: 6,
    titleKey: "projects.ml.title",
    descriptionKey: "projects.ml.desc",
    tech: ["Python", "scikit-learn", "TensorFlow", "Jupyter"],
    image: "/machine-learning-model.png",
    category: "datascience",
    github: "https://github.com/jose-luis/ml-model",
  },
  {
    id: 7,
    titleKey: "projects.mobile.title",
    descriptionKey: "projects.mobile.desc",
    tech: ["React Native", "Expo", "Firebase", "Redux"],
    image: "/mobile-app-interface.png",
    category: "frontend",
    github: "https://github.com/jose-luis/mobile-app",
    demo: "https://mobile-demo.com",
  },
  {
    id: 8,
    titleKey: "projects.microservices.title",
    descriptionKey: "projects.microservices.desc",
    tech: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
    image: "/microservices-architecture.png",
    category: "cloud",
    github: "https://github.com/jose-luis/microservices",
  },
  {
    id: 9,
    titleKey: "projects.blockchain.title",
    descriptionKey: "projects.blockchain.desc",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    image: "/blockchain-application.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/blockchain-app",
    demo: "https://blockchain-demo.com",
  },
  {
    id: 10,
    titleKey: "projects.chatbot.title",
    descriptionKey: "projects.chatbot.desc",
    tech: ["Python", "NLP", "Flask", "OpenAI"],
    image: "/ai-chatbot-interface.png",
    category: "datascience",
    github: "https://github.com/jose-luis/chatbot",
    demo: "https://chatbot-demo.com",
  },
  // Adding more projects to reach 35+
  {
    id: 11,
    titleKey: "projects.cms.title",
    descriptionKey: "projects.cms.desc",
    tech: ["Next.js", "Strapi", "PostgreSQL", "GraphQL"],
    image: "/content-management-system.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/cms",
    demo: "https://cms-demo.com",
  },
  {
    id: 12,
    titleKey: "projects.dashboard.title",
    descriptionKey: "projects.dashboard.desc",
    tech: ["Vue.js", "Chart.js", "Express", "MySQL"],
    image: "/modern-admin-dashboard.png",
    category: "frontend",
    github: "https://github.com/jose-luis/dashboard",
    demo: "https://dashboard-demo.com",
  },
  {
    id: 13,
    titleKey: "projects.security.title",
    descriptionKey: "projects.security.desc",
    tech: ["Node.js", "bcrypt", "Helmet", "Rate Limiting"],
    image: "/security-scanner-tool.png",
    category: "security",
    github: "https://github.com/jose-luis/security-scanner",
  },
  {
    id: 14,
    titleKey: "projects.devops.title",
    descriptionKey: "projects.devops.desc",
    tech: ["Jenkins", "Docker", "AWS", "Terraform"],
    image: "/ci-cd-pipeline.png",
    category: "cloud",
    github: "https://github.com/jose-luis/devops-pipeline",
  },
  {
    id: 15,
    titleKey: "projects.social.title",
    descriptionKey: "projects.social.desc",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    image: "/social-media-platform.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/social-app",
    demo: "https://social-demo.com",
  },
  // Continue adding more projects...
  {
    id: 16,
    titleKey: "projects.weather.title",
    descriptionKey: "projects.weather.desc",
    tech: ["React", "OpenWeather API", "Chart.js", "PWA"],
    image: "/weather-forecast-app.png",
    category: "frontend",
    github: "https://github.com/jose-luis/weather-app",
    demo: "https://weather-demo.com",
  },
  {
    id: 17,
    titleKey: "projects.inventory.title",
    descriptionKey: "projects.inventory.desc",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
    image: "/inventory-management-system.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/inventory-system",
  },
  {
    id: 18,
    titleKey: "projects.blog.title",
    descriptionKey: "projects.blog.desc",
    tech: ["Gatsby", "Markdown", "GraphQL", "Netlify"],
    image: "/blog-platform.png",
    category: "frontend",
    github: "https://github.com/jose-luis/blog-platform",
    demo: "https://blog-demo.com",
  },
  {
    id: 19,
    titleKey: "projects.monitoring.title",
    descriptionKey: "projects.monitoring.desc",
    tech: ["Prometheus", "Grafana", "Docker", "Node.js"],
    image: "/monitoring-dashboard.png",
    category: "cloud",
    github: "https://github.com/jose-luis/monitoring-system",
  },
  {
    id: 20,
    titleKey: "projects.game.title",
    descriptionKey: "projects.game.desc",
    tech: ["JavaScript", "Canvas API", "WebGL", "Three.js"],
    image: "/web-game-interface.png",
    category: "frontend",
    github: "https://github.com/jose-luis/web-game",
    demo: "https://game-demo.com",
  },
  // Adding final projects to reach 35+
  {
    id: 21,
    titleKey: "projects.crm.title",
    descriptionKey: "projects.crm.desc",
    tech: ["React", "Node.js", "MySQL", "Redis"],
    image: "/crm-system-interface.png",
    category: "fullstack",
    github: "https://github.com/jose-luis/crm-system",
  },
  {
    id: 22,
    titleKey: "projects.iot.title",
    descriptionKey: "projects.iot.desc",
    tech: ["Python", "Raspberry Pi", "MQTT", "InfluxDB"],
    image: "/iot-dashboard.png",
    category: "datascience",
    github: "https://github.com/jose-luis/iot-system",
  },
  {
    id: 23,
    titleKey: "projects.vpn.title",
    descriptionKey: "projects.vpn.desc",
    tech: ["OpenVPN", "Linux", "iptables", "Docker"],
    image: "/placeholder-cvg72.png",
    category: "security",
    github: "https://github.com/jose-luis/vpn-server",
  },
  {
    id: 24,
    titleKey: "projects.kubernetes.title",
    descriptionKey: "projects.kubernetes.desc",
    tech: ["Kubernetes", "Helm", "Docker", "YAML"],
    image: "/kubernetes-cluster-diagram.png",
    category: "cloud",
    github: "https://github.com/jose-luis/k8s-cluster",
  },
  {
    id: 25,
    titleKey: "projects.pwa.title",
    descriptionKey: "projects.pwa.desc",
    tech: ["React", "Service Workers", "IndexedDB", "Workbox"],
    image: "/progressive-web-app.png",
    category: "frontend",
    github: "https://github.com/jose-luis/pwa-app",
    demo: "https://pwa-demo.com",
  },
  {
    id: 26,
    titleKey: "projects.graphql.title",
    descriptionKey: "projects.graphql.desc",
    tech: ["GraphQL", "Apollo", "Node.js", "PostgreSQL"],
    image: "/graphql-api.png",
    category: "backend",
    github: "https://github.com/jose-luis/graphql-api",
  },
  {
    id: 27,
    titleKey: "projects.nlp.title",
    descriptionKey: "projects.nlp.desc",
    tech: ["Python", "NLTK", "spaCy", "Flask"],
    image: "/text-analysis-tool.png",
    category: "datascience",
    github: "https://github.com/jose-luis/nlp-analyzer",
  },
  {
    id: 28,
    titleKey: "projects.firewall.title",
    descriptionKey: "projects.firewall.desc",
    tech: ["iptables", "Python", "Linux", "Bash"],
    image: "/firewall-configuration.png",
    category: "security",
    github: "https://github.com/jose-luis/firewall-config",
  },
  {
    id: 29,
    titleKey: "projects.serverless.title",
    descriptionKey: "projects.serverless.desc",
    tech: ["AWS Lambda", "Serverless", "Node.js", "DynamoDB"],
    image: "/serverless-architecture.png",
    category: "cloud",
    github: "https://github.com/jose-luis/serverless-app",
  },
  {
    id: 30,
    titleKey: "projects.testing.title",
    descriptionKey: "projects.testing.desc",
    tech: ["Jest", "Cypress", "React Testing Library", "Selenium"],
    image: "/testing-framework.png",
    category: "frontend",
    github: "https://github.com/jose-luis/testing-suite",
  },
  {
    id: 31,
    titleKey: "projects.websocket.title",
    descriptionKey: "projects.websocket.desc",
    tech: ["Socket.io", "Node.js", "React", "Redis"],
    image: "/placeholder.svg?height=200&width=300",
    category: "fullstack",
    github: "https://github.com/jose-luis/websocket-chat",
    demo: "https://chat-demo.com",
  },
  {
    id: 32,
    titleKey: "projects.scraper.title",
    descriptionKey: "projects.scraper.desc",
    tech: ["Python", "BeautifulSoup", "Scrapy", "Selenium"],
    image: "/placeholder.svg?height=200&width=300",
    category: "datascience",
    github: "https://github.com/jose-luis/web-scraper",
  },
  {
    id: 33,
    titleKey: "projects.penetration.title",
    descriptionKey: "projects.penetration.desc",
    tech: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite"],
    image: "/placeholder.svg?height=200&width=300",
    category: "security",
    github: "https://github.com/jose-luis/pentest-tools",
  },
  {
    id: 34,
    titleKey: "projects.terraform.title",
    descriptionKey: "projects.terraform.desc",
    tech: ["Terraform", "AWS", "Infrastructure as Code", "Ansible"],
    image: "/placeholder.svg?height=200&width=300",
    category: "cloud",
    github: "https://github.com/jose-luis/terraform-infra",
  },
  {
    id: 35,
    titleKey: "projects.spa.title",
    descriptionKey: "projects.spa.desc",
    tech: ["Vue.js", "Vuex", "Vue Router", "Axios"],
    image: "/placeholder.svg?height=200&width=300",
    category: "frontend",
    github: "https://github.com/jose-luis/vue-spa",
    demo: "https://spa-demo.com",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const { t } = useI18n()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let filtered = projects

    if (activeCategory !== "all") {
      filtered = filtered.filter((project) => project.category === activeCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          t(project.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredProjects(filtered)
  }, [activeCategory, searchTerm, t])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 cursor-pointer hover:bg-white/50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("projects.backToHome")}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("projects.allProjects")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("projects.allProjectsDesc")}</p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={t("projects.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.key)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {category.icon}
                {t(`projects.categories.${category.key}`)}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
          <p className="text-muted-foreground">
            {t("projects.showing")} {filteredProjects.length} {t("projects.of")} {projects.length}{" "}
            {t("projects.projects")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{t(project.titleKey)}</CardTitle>
                  <CardDescription className="text-sm">{t(project.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 bg-transparent cursor-pointer hover:bg-muted"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          {t("projects.code")}
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex items-center gap-1 cursor-pointer" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {t("projects.demo")}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">{t("projects.noResults")}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
