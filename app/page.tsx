import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TechMarquee } from "@/components/tech-marquee"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/floating-orbs"
import { SectionDivider } from "@/components/section-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingOrbs />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <TechMarquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
