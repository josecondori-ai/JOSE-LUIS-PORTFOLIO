import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n"
import { ThemeProvider } from "@/components/theme-provider"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export const metadata: Metadata = {
  title: "José Luis - Full Stack Developer | Technical Leader | Instructor",
  description:
    "Portfolio of José Luis, Full Stack Developer with +18 years of experience. Expert in React, Angular, Node.js, and technical leadership.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
          <DarkModeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
