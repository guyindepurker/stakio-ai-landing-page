"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Bot,
  Smartphone,
  Globe,
  Palette,
  Brain,
  Cloud,
  Server,
  Code2,
  ShoppingCart,
  Search,
} from "lucide-react"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

function ServiceCard({
  service,
  index,
}: {
  service: { icon: React.ElementType; title: string; description: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
          <service.icon size={20} />
        </div>
        <h3 className="mb-2 font-mono text-base font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  const services = [
    { icon: Bot, title: t("services.automationBots"), description: t("services.automationBotsDesc") },
    { icon: Palette, title: t("services.uiux"), description: t("services.uiuxDesc") },
    { icon: Globe, title: t("services.webApps"), description: t("services.webAppsDesc") },
    { icon: Smartphone, title: t("services.nativeApps"), description: t("services.nativeAppsDesc") },
    { icon: Brain, title: t("services.ai"), description: t("services.aiDesc") },
    { icon: Cloud, title: t("services.cloud"), description: t("services.cloudDesc") },
    { icon: Server, title: t("services.devops"), description: t("services.devopsDesc") },
    { icon: Code2, title: t("services.landing"), description: t("services.landingDesc") },
    { icon: ShoppingCart, title: t("services.ecommerce"), description: t("services.ecommerceDesc") },
    { icon: Search, title: t("services.seo"), description: t("services.seoDesc") },
  ]

  useEffect(() => {
    if (!headingRef.current) return

    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      }
    )
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headingRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-primary">
            {t("services.tag")}
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {t("services.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
