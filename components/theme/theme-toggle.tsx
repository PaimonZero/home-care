"use client"

import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  const Icon = isDark ? Sun : Moon

  return (
    <Button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      <Icon className="h-5 w-5" />
    </Button>
  )
}
