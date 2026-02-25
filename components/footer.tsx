"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Services: [
    "Automation Bots",
    "UI/UX Design",
    "Web Applications",
    "Native Apps",
    "AI Solutions",
  ],
  Company: ["About", "Contact", "Blog", "Careers"],
  Connect: ["WhatsApp", "Telegram", "LinkedIn", "GitHub"],
}

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-card/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-sm font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <span className="font-mono text-lg font-bold tracking-tight text-foreground">
                stakio<span className="text-primary">.ai</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Smart Tech. Simple Flows.
              <br />
              Building digital solutions that transform businesses.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-mono text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} stakio.ai — All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
