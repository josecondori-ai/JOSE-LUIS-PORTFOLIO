"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Smartphone,
  Shield,
  Users,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { LanguageSelector } from "@/components/language-selector"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCertification, setSelectedCertification] = useState<{name: string, org: string, image: string} | null>(null)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "certifications", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header
        className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg"
        style={{ backgroundColor: `rgba(255, 255, 255, ${Math.max(0.95, headerOpacity.get() * 0.95)})` }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gray-900"
            >
              José Luis Condori
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { key: "nav.home", id: "home" },
                { key: "nav.about", id: "about" },
                { key: "nav.skills", id: "skills" },
                { key: "nav.experience", id: "experience" },
                { key: "nav.projects", id: "projects" },
                { key: "nav.certifications", id: "certifications" },
                { key: "nav.contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
            <LanguageSelector />
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fondo.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-90 h-90 rounded-full overflow-hidden shadow-2xl"
                >
                  <img
                    src="/perfil.jpg"
                    alt="José Luis - Full Stack Developer"
                    className="w-full h-full object-cover filter grayscale"
                  />
                </motion.div>
                {/* Floating Animation Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-indigo-500 rounded-full opacity-60"
                />
              </div>
            </motion.div>

            {/* Enhanced Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left bg-black/50 p-8 rounded-lg backdrop-blur-sm"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                {t("hero.title")}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white mb-4 drop-shadow-xl"
              >
                {t("hero.subtitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-lg"
              >
                {t("hero.description")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer shadow-lg"
                >
                  {t("hero.viewProjects")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 border-white cursor-pointer shadow-lg backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  {t("hero.downloadCV")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("about.title")}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center"
                >
                  <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-24 h-24 text-primary" />
                  </div>
                </motion.div>
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("about.description1")}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description2")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("skills.title")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  categoryKey: "skills.frontend",
                  icon: <Smartphone className="w-6 h-6" />,
                  skills: [
                    { name: "HTML5", color: "bg-orange-500", icon: "🌐" },
                    { name: "CSS3", color: "bg-blue-500", icon: "🎨" },
                    { name: "JavaScript", color: "bg-yellow-500", icon: "⚡" },
                    { name: "React", color: "bg-cyan-500", icon: "⚛️" },
                    { name: "Next.js", color: "bg-black", icon: "▲" },
                    { name: "Angular", color: "bg-red-500", icon: "🅰️" },
                    { name: "Tailwind", color: "bg-teal-500", icon: "💨" },
                    { name: "Bootstrap", color: "bg-purple-500", icon: "🅱️" },
                  ],
                },
                {
                  categoryKey: "skills.backend",
                  icon: <Server className="w-6 h-6" />,
                  skills: [
                    { name: "Node.js", color: "bg-green-600", icon: "🟢" },
                    { name: "Express", color: "bg-gray-600", icon: "🚀" },
                    { name: "NestJS", color: "bg-red-600", icon: "🏠" },
                    { name: "REST API", color: "bg-blue-600", icon: "🔗" },
                    { name: "GraphQL", color: "bg-pink-500", icon: "📊" },
                  ],
                },
                {
                  categoryKey: "skills.databases",
                  icon: <Database className="w-6 h-6" />,
                  skills: [
                    { name: "MySQL", color: "bg-orange-600", icon: "🐬" },
                    { name: "PostgreSQL", color: "bg-blue-700", icon: "🐘" },
                    { name: "MongoDB", color: "bg-green-500", icon: "🍃" },
                    { name: "Prisma", color: "bg-indigo-600", icon: "💎" },
                    { name: "Sequelize", color: "bg-blue-500", icon: "📋" },
                  ],
                },
                {
                  categoryKey: "skills.dataScience",
                  icon: <Code className="w-6 h-6" />,
                  skills: [
                    { name: "Python", color: "bg-yellow-600", icon: "🐍" },
                    { name: "Pandas", color: "bg-purple-600", icon: "🐼" },
                    { name: "NumPy", color: "bg-blue-600", icon: "🔢" },
                    { name: "Matplotlib", color: "bg-red-500", icon: "📈" },
                    { name: "scikit-learn", color: "bg-orange-500", icon: "🤖" },
                  ],
                },
                {
                  categoryKey: "skills.tools",
                  icon: <Briefcase className="w-6 h-6" />,
                  skills: [
                    { name: "Git", color: "bg-orange-600", icon: "📝" },
                    { name: "GitHub", color: "bg-gray-800", icon: "🐙" },
                    { name: "GitLab", color: "bg-orange-500", icon: "🦊" },
                    { name: "VS Code", color: "bg-blue-600", icon: "💻" },
                    { name: "Docker", color: "bg-blue-500", icon: "🐳" },
                  ],
                },
                {
                  categoryKey: "skills.security",
                  icon: <Shield className="w-6 h-6" />,
                  skills: [
                    { name: "OWASP", color: "bg-red-600", icon: "🛡️" },
                    { name: "JWT", color: "bg-purple-600", icon: "🔐" },
                    { name: "OAuth", color: "bg-green-600", icon: "🔑" },
                    { name: "HTTPS", color: "bg-green-500", icon: "🔒" },
                    { name: "Encryption", color: "bg-gray-600", icon: "🔐" },
                  ],
                },
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.categoryKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {skillGroup.icon}
                        {t(skillGroup.categoryKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Updated Skills Display */}
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`text-xs text-white ${skill.color} skill-badge cursor-pointer flex items-center gap-1`}
                            >
                              <span>{skill.icon}</span>
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("experience.title")}</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>
                {[
                  {
                    roleKey: "experience.role1",
                    companyKey: "experience.company1",
                    periodKey: "experience.period1",
                    descriptionKey: "experience.desc1",
                  },
                  {
                    roleKey: "experience.role2",
                    companyKey: "experience.company2",
                    periodKey: "experience.period2",
                    descriptionKey: "experience.desc2",
                  },
                  {
                    roleKey: "experience.role3",
                    companyKey: "experience.company3",
                    periodKey: "experience.period3",
                    descriptionKey: "experience.desc3",
                  },
                  {
                    roleKey: "experience.role4",
                    companyKey: "experience.company4",
                    periodKey: "experience.period4",
                    descriptionKey: "experience.desc4",
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 pb-8"
                  >
                    <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {t(job.roleKey)}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {t(job.companyKey)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {t(job.periodKey)}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{t(job.descriptionKey)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("projects.title")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  titleKey: "projects.ecommerce.title",
                  descriptionKey: "projects.ecommerce.desc",
                  tech: ["React", "Node.js", "MySQL", "Stripe"],
                  image: "/modern-ecommerce-interface.png",
                },
                {
                  titleKey: "projects.analytics.title",
                  descriptionKey: "projects.analytics.desc",
                  tech: ["Python", "Pandas", "React", "D3.js"],
                  image: "/data-analytics-dashboard.png",
                },
                {
                  titleKey: "projects.auth.title",
                  descriptionKey: "projects.auth.desc",
                  tech: ["Node.js", "JWT", "OAuth", "MongoDB"],
                  image: "/placeholder-o7tmv.png",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{t(project.titleKey)}</CardTitle>
                      <CardDescription>{t(project.descriptionKey)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-1 bg-transparent cursor-pointer hover:bg-muted"
                        >
                          <Github className="w-4 h-4" />
                          {t("projects.code")}
                        </Button>
                        <Button size="sm" className="flex items-center gap-1 cursor-pointer">
                          <ExternalLink className="w-4 h-4" />
                          {t("projects.demo")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="cursor-pointer hover:bg-muted bg-transparent">
                  {t("projects.viewMore")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("certifications.title")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { name: "FreeCodeCamp JavaScript", org: "FreeCodeCamp", image: "/imagen2.png" },
                { name: "React Developer", org: "FreeCodeCamp", image: "/imagen2.png" },
                { name: "Data Analysis with Python", org: "FreeCodeCamp", image: "/imagen2.png" },
                { name: "Google Machine Learning", org: "Google", image: "/imagen2.png" },
                { name: "MongoDB University", org: "MongoDB", image: "/imagen2.png" },
                { name: "OWASP Security", org: "OWASP", image: "/imagen2.png" },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="text-center hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => setSelectedCertification(cert)}
                  >
                    <CardHeader>
                      <div className="w-full h-52 bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.org}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/certifications">
                <Button variant="outline" size="lg" className="cursor-pointer hover:bg-muted bg-transparent">
                  {t("certifications.viewAll")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("contact.title")}</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t("contact.subtitle")}</h3>
                <p className="text-muted-foreground mb-8">{t("contact.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>jose.luis@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span>linkedin.com/in/jose-luis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-primary" />
                    <span>github.com/jose-luis</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.form.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder={t("contact.form.name")} />
                  </div>
                  <div>
                    <Input type="email" placeholder={t("contact.form.email")} />
                  </div>
                  <div>
                    <Textarea placeholder={t("contact.form.message")} rows={4} />
                  </div>
                  <Button className="w-full cursor-pointer">{t("contact.form.send")}</Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal para certificaciones */}
      {selectedCertification && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertification(null)}
        >
                      <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="relative">
              <button
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedCertification.image}
                alt={selectedCertification.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedCertification.name}</h3>
                <p className="text-gray-600">{selectedCertification.org}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>{t("footer.rights")}</p>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary-foreground/80 transition-colors cursor-pointer"
              >
                {t("footer.home")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary-foreground/80 transition-colors cursor-pointer"
              >
                {t("footer.projects")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary-foreground/80 transition-colors cursor-pointer"
              >
                {t("footer.contact")}
              </button>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Github className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
