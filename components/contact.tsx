"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Send, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })
  const { t } = useI18n()

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:stakioai@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")

    // Animate the form out
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setSubmitted(true)
        },
      })
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headingRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-primary">
            {t("contact.tag")}
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            {t("contact.subtitle")}
          </p>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl"
        >
          {!submitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  {t("contact.nameLabel")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("contact.namePlaceholder")}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {t("contact.emailLabel")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t("contact.emailPlaceholder")}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("contact.messagePlaceholder")}
                  className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
              >
                {t("contact.send")}
                <Send size={16} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="text-primary" size={28} />
              </div>
              <h3 className="font-mono text-xl font-bold text-foreground">
                {t("contact.sent")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.thanks")}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: "", email: "", message: "" })
                }}
                className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {t("contact.another")}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
