"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t, locale, setLocale } = useI18n()

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-sm font-bold text-primary-foreground">
              S
            </span>
          </div>
          <span dir="ltr" className="font-mono text-lg font-bold tracking-tight text-foreground">
            stakio<span className="text-primary">.ai</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLocale("en")}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                locale === "en"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary hover:bg-accent"
              }`}
              aria-label="Switch to English"
              title="English"
            >
              <svg width="20" height="14" viewBox="0 0 60 42" className="rounded-sm">
                <rect width="60" height="42" fill="#B22234"/>
                <rect y="3.23" width="60" height="3.23" fill="#fff"/>
                <rect y="9.69" width="60" height="3.23" fill="#fff"/>
                <rect y="16.15" width="60" height="3.23" fill="#fff"/>
                <rect y="22.61" width="60" height="3.23" fill="#fff"/>
                <rect y="29.07" width="60" height="3.23" fill="#fff"/>
                <rect y="35.53" width="60" height="3.23" fill="#fff"/>
                <rect width="24" height="22.61" fill="#3C3B6E"/>
              </svg>
            </button>
            <button
              onClick={() => setLocale("he")}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                locale === "he"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary hover:bg-accent"
              }`}
              aria-label="Switch to Hebrew"
              title="עברית"
            >
              <svg width="20" height="14" viewBox="0 0 60 42" className="rounded-sm">
                <rect width="60" height="42" fill="#fff"/>
                <rect y="0" width="60" height="8" fill="#0038b8"/>
                <rect y="34" width="60" height="8" fill="#0038b8"/>
                <polygon points="30,11 36.5,22.25 23.5,22.25" fill="none" stroke="#0038b8" strokeWidth="1.8"/>
                <polygon points="30,31 23.5,19.75 36.5,19.75" fill="none" stroke="#0038b8" strokeWidth="1.8"/>
              </svg>
            </button>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
          </button>
          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            {t("nav.getInTouch")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Toggle Mobile */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLocale("en")}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                locale === "en"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary"
              }`}
              aria-label="Switch to English"
            >
              <svg width="16" height="11" viewBox="0 0 60 42" className="rounded-sm">
                <rect width="60" height="42" fill="#B22234"/>
                <rect y="3.23" width="60" height="3.23" fill="#fff"/>
                <rect y="9.69" width="60" height="3.23" fill="#fff"/>
                <rect y="16.15" width="60" height="3.23" fill="#fff"/>
                <rect y="22.61" width="60" height="3.23" fill="#fff"/>
                <rect y="29.07" width="60" height="3.23" fill="#fff"/>
                <rect y="35.53" width="60" height="3.23" fill="#fff"/>
                <rect width="24" height="22.61" fill="#3C3B6E"/>
              </svg>
            </button>
            <button
              onClick={() => setLocale("he")}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                locale === "he"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary"
              }`}
              aria-label="Switch to Hebrew"
            >
              <svg width="16" height="11" viewBox="0 0 60 42" className="rounded-sm">
                <rect width="60" height="42" fill="#fff"/>
                <rect y="0" width="60" height="8" fill="#0038b8"/>
                <rect y="34" width="60" height="8" fill="#0038b8"/>
                <polygon points="30,11 36.5,22.25 23.5,22.25" fill="none" stroke="#0038b8" strokeWidth="1.8"/>
                <polygon points="30,31 23.5,19.75 36.5,19.75" fill="none" stroke="#0038b8" strokeWidth="1.8"/>
              </svg>
            </button>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                {t("nav.getInTouch")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
