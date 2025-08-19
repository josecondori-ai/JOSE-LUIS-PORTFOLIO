"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function LanguageSelector() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("es")}
        className="flex items-center gap-1 cursor-pointer"
      >
        🇪🇸 ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="flex items-center gap-1 cursor-pointer"
      >
        🇬🇧 EN
      </Button>
    </div>
  )
}
