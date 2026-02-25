"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const orbs = containerRef.current.querySelectorAll(".orb")
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: `random(-40, 40)`,
        x: `random(-30, 30)`,
        duration: `random(4, 7)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-right orb */}
      <div className="orb absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      {/* Bottom-left orb */}
      <div className="orb absolute bottom-[20%] -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
      {/* Center subtle orb */}
      <div className="orb absolute top-[40%] left-[50%] h-96 w-96 -translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />
    </div>
  )
}
