"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    href: "mailto:hello@dataengineer.dev",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/dataengineer",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/dataengineer",
    label: "GitHub",
    icon: Github,
  },
]

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { href: "/projects/fake-shop-analytics", label: "Fake Shop Analytics" },
      { href: "/projects/nyc-taxi-optimization", label: "NYC Taxi Optimization" },
      { href: "/projects/financial-lakehouse", label: "Financial Data Lakehouse" },
    ],
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="font-mono text-xl font-semibold text-foreground mb-4 block">
              Renato Perez
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building batch and real-time data pipelines that deliver reliable data for analytics and machine learning.
              Transforming raw events into business-ready insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Button key={social.label} variant="ghost" size="sm" asChild>
                    <Link href={social.href}>
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Renato Perez Portfolio. All rights reserved.
          </p>
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="mt-4 sm:mt-0">
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
