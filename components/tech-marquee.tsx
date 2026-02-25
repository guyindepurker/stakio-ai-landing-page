"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n"

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "TailwindCSS",
  "Figma",
  "WordPress",
  "Shopify",
]

export function TechMarquee() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useI18n()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {t("tech.title")}
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="mx-4 flex shrink-0 items-center rounded-full border border-border bg-card px-5 py-2"
            >
              <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
