"use client"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    // } else if (theme === "dark") {
    //   setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={cycleTheme} className="text-foreground hover:text-primary">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 data-[theme=system]:rotate-45 data-[theme=system]:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[theme=system]:rotate-45 data-[theme=system]:scale-0" />
      <Monitor className="absolute h-4 w-4 rotate-45 scale-0 transition-all data-[theme=system]:rotate-0 data-[theme=system]:scale-100" />
      <span className="sr-only">Toggle theme (Light/Dark/System)</span>
    </Button>
  )
}
