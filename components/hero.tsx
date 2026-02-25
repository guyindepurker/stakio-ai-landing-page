"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ArrowDown } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      )
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background */}
      <ParticleBackground />
      <div className="animated-grid absolute inset-0 z-0" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            {t("hero.badge")}
          </span>
        </motion.div>

        <h1
          ref={headingRef}
          className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          {t("hero.titleLine1")}
          <br />
          <span className="text-primary">{t("hero.titleLine2")}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground opacity-0 sm:text-lg md:text-xl text-pretty"
        >
          {t("hero.subtitle")}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            {t("hero.exploreServices")}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
          >
            {t("hero.startProject")}
          </a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <a
            href="#services"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to services"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              {t("hero.discover")}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
