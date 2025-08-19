"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Download,
  ExternalLink,
  GraduationCap,
  Code,
  Database,
  Shield,
  Cloud,
  Users,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { LanguageSelector } from "@/components/language-selector"

const certifications = [
  // Frontend & Full Stack
  {
    name: "Responsive Web Design",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-green-600",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-yellow-600",
  },
  {
    name: "Front End Development Libraries",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-cyan-600",
  },
  {
    name: "React Developer Certification",
    institution: "Meta",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    name: "Advanced React",
    institution: "Meta",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-indigo-600",
  },
  {
    name: "Angular - The Complete Guide",
    institution: "Udemy",
    year: "2022",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-red-600",
  },
  {
    name: "Vue.js Complete Course",
    institution: "Udemy",
    year: "2022",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-green-500",
  },
  {
    name: "TypeScript Fundamentals",
    institution: "Microsoft",
    year: "2023",
    category: "Frontend & Full Stack",
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-700",
  },

  // Backend & Databases
  {
    name: "Back End Development and APIs",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-purple-600",
  },
  {
    name: "Node.js Complete Course",
    institution: "Udemy",
    year: "2022",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-green-700",
  },
  {
    name: "MongoDB University M001",
    institution: "MongoDB",
    year: "2023",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-green-600",
  },
  {
    name: "MySQL Database Administration",
    institution: "Oracle",
    year: "2022",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-orange-600",
  },
  {
    name: "PostgreSQL Administration",
    institution: "PostgreSQL",
    year: "2023",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-blue-800",
  },
  {
    name: "GraphQL Fundamentals",
    institution: "Apollo",
    year: "2023",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-pink-600",
  },
  {
    name: "REST API Design",
    institution: "Postman",
    year: "2022",
    category: "Backend & Bases de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "bg-orange-500",
  },

  // Data Science & AI
  {
    name: "Data Analysis with Python",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-yellow-700",
  },
  {
    name: "Scientific Computing with Python",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    name: "Machine Learning Course",
    institution: "Stanford/Coursera",
    year: "2022",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-700",
  },
  {
    name: "Google Machine Learning Crash Course",
    institution: "Google",
    year: "2023",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-red-500",
  },
  {
    name: "Deep Learning Specialization",
    institution: "DeepLearning.AI",
    year: "2023",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-indigo-700",
  },
  {
    name: "TensorFlow Developer Certificate",
    institution: "Google",
    year: "2023",
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-orange-600",
  },

  // Security
  {
    name: "Information Security",
    institution: "freeCodeCamp",
    year: "2023",
    category: "Seguridad Web",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-red-700",
  },
  {
    name: "OWASP Top 10",
    institution: "OWASP",
    year: "2023",
    category: "Seguridad Web",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-gray-700",
  },
  {
    name: "Web Application Security",
    institution: "PortSwigger",
    year: "2022",
    category: "Seguridad Web",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-orange-700",
  },
  {
    name: "Ethical Hacking",
    institution: "EC-Council",
    year: "2022",
    category: "Seguridad Web",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-black",
  },
  {
    name: "Cybersecurity Fundamentals",
    institution: "IBM",
    year: "2023",
    category: "Seguridad Web",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-blue-800",
  },

  // Cloud & DevOps
  {
    name: "AWS Cloud Practitioner",
    institution: "Amazon",
    year: "2023",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-orange-500",
  },
  {
    name: "Google Cloud Platform Fundamentals",
    institution: "Google",
    year: "2023",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    name: "Docker Mastery",
    institution: "Docker",
    year: "2022",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    name: "Kubernetes Fundamentals",
    institution: "Linux Foundation",
    year: "2023",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-blue-700",
  },
  {
    name: "CI/CD with Jenkins",
    institution: "Jenkins",
    year: "2022",
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-gray-600",
  },

  // Agile & Project Management
  {
    name: "Scrum Master Certified",
    institution: "ScrumStudy",
    year: "2023",
    category: "Agile & Gestión de Proyectos",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-600",
  },
  {
    name: "Agile Project Management",
    institution: "Google",
    year: "2023",
    category: "Agile & Gestión de Proyectos",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    name: "Product Owner Certification",
    institution: "Scrum.org",
    year: "2022",
    category: "Agile & Gestión de Proyectos",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-600",
  },
  {
    name: "Leadership in Technology",
    institution: "MIT",
    year: "2023",
    category: "Agile & Gestión de Proyectos",
    icon: <Users className="w-6 h-6" />,
    color: "bg-red-600",
  },
]

const categoryKeys = [
  "cert.categories.all",
  "cert.categories.frontend",
  "cert.categories.backend",
  "cert.categories.dataScience",
  "cert.categories.security",
  "cert.categories.cloud",
  "cert.categories.agile",
]

const categoryMappings = {
  "cert.categories.all": "Todas",
  "cert.categories.frontend": "Frontend & Full Stack",
  "cert.categories.backend": "Backend & Bases de Datos",
  "cert.categories.dataScience": "Data Science & AI",
  "cert.categories.security": "Seguridad Web",
  "cert.categories.cloud": "Cloud & DevOps",
  "cert.categories.agile": "Agile & Gestión de Proyectos",
}

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("cert.categories.all")
  const { t } = useI18n()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredCertifications = certifications.filter(
    (cert) =>
      activeCategory === "cert.categories.all" ||
      cert.category === categoryMappings[activeCategory as keyof typeof categoryMappings],
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 cursor-pointer hover:bg-muted bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("cert.backToPortfolio")}
              </Button>
            </Link>
            <LanguageSelector />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{t("cert.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">{t("cert.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2 cursor-pointer">
                <Download className="w-4 h-4" />
                {t("cert.downloadPDF")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 cursor-pointer hover:bg-muted bg-transparent"
              >
                <ExternalLink className="w-4 h-4" />
                {t("cert.viewLinkedIn")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-0 z-40 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryKeys.map((categoryKey) => (
              <Button
                key={categoryKey}
                variant={activeCategory === categoryKey ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(categoryKey)}
                className="cursor-pointer"
              >
                {t(categoryKey)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="text-sm">
              {t("cert.showing")} {filteredCertifications.length} {t("cert.certifications")}
            </Badge>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={`${cert.name}-${cert.institution}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                  whileHover={{ y: -3 }}
                  className="transform transition-transform duration-200"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                      >
                        {cert.icon}
                      </div>
                      <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-1">
                        <span className="font-medium">{cert.institution}</span>
                        <span className="text-sm">{cert.year}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="w-full justify-center text-xs">
                        {cert.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t("cert.continuousLearning")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("cert.learningDescription")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="cursor-pointer">
                  {t("cert.workTogether")}
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="cursor-pointer hover:bg-muted bg-transparent">
                  {t("cert.viewProjects")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
