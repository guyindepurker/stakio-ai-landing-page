"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Shield, Users, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Tech Stacks" },
]

const values = [
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description:
      "Rapid development cycles with agile methodology. We ship fast without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security built into every layer — from authentication to data encryption.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work as an extension of your team, aligning every decision with your business goals.",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description:
      "Leveraging cutting-edge technologies and AI to give you a competitive advantage.",
  },
]

export function About() {
  const headingRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headingRef.current) {
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
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      )
    }
  }, [])

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-primary">
            Why stakio.ai
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Smart Tech. Simple Flows.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            We combine deep technical expertise with a design-first mindset to
            deliver digital solutions that actually work — for your users and
            your bottom line.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center opacity-0"
            >
              <span className="font-mono text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-4 rounded-xl border border-border bg-card p-6"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <value.icon size={20} />
      </div>
      <div>
        <h3 className="mb-1 font-mono text-base font-semibold text-foreground">
          {value.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {value.description}
        </p>
      </div>
    </motion.div>
  )
}
