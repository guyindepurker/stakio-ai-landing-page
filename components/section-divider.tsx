"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      }
    )
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div
        ref={ref}
        className="h-px origin-left bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </div>
  )
}
