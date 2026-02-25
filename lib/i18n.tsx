"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"

export type Locale = "en" | "he"

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",

    // Hero
    "hero.badge": "Smart Tech. Simple Flows.",
    "hero.titleLine1": "We Build the",
    "hero.titleLine2": "Digital Future",
    "hero.subtitle":
      "From automation bots and AI solutions to full-stack applications and stunning UI/UX — we turn complex technology into simple, powerful workflows.",
    "hero.exploreServices": "Explore Services",
    "hero.startProject": "Start a Project",
    "hero.discover": "Discover",

    // Services
    "services.tag": "What We Do",
    "services.title": "End-to-End Digital Services",
    "services.subtitle":
      "From concept to deployment, we cover every layer of your digital product with precision engineering and thoughtful design.",
    "services.automationBots": "Automation Bots",
    "services.automationBotsDesc":
      "WhatsApp & Telegram bots that streamline your customer interactions, support, and workflows 24/7.",
    "services.uiux": "UI/UX Design",
    "services.uiuxDesc":
      "Human-centered design for SaaS platforms, applications, and digital products that users love.",
    "services.webApps": "Web Applications",
    "services.webAppsDesc":
      "Full-stack web applications built with modern frameworks, optimized for performance and scale.",
    "services.nativeApps": "Native Applications",
    "services.nativeAppsDesc":
      "Cross-platform and native mobile apps for iOS and Android with seamless user experiences.",
    "services.ai": "AI Solutions",
    "services.aiDesc":
      "Connect, integrate, and manage AI services — from custom models to intelligent automation pipelines.",
    "services.cloud": "Cloud & Consulting",
    "services.cloudDesc":
      "Cloud architecture, infrastructure consulting, and strategic tech advisory for growing businesses.",
    "services.devops": "DevOps Services",
    "services.devopsDesc":
      "CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for reliable systems.",
    "services.landing": "Landing Pages",
    "services.landingDesc":
      "High-converting landing pages with stunning animations and pixel-perfect responsive design.",
    "services.ecommerce": "eCommerce Shops",
    "services.ecommerceDesc":
      "Custom WordPress and Shopify stores built to sell — with seamless checkout and inventory management.",
    "services.seo": "Website Building & SEO",
    "services.seoDesc":
      "High-performance websites engineered for search engines — from technical SEO audits to on-page optimization and organic growth.",

    // Tech Marquee
    "tech.title": "Technologies We Work With",

    // About
    "about.tag": "Why stakio.ai",
    "about.title": "Smart Tech. Simple Flows.",
    "about.subtitle":
      "We combine deep technical expertise with a design-first mindset to deliver digital solutions that actually work — for your users and your bottom line.",
    "about.stat1Value": "50+",
    "about.stat1Label": "Projects Delivered",
    "about.stat2Value": "99%",
    "about.stat2Label": "Client Satisfaction",
    "about.stat3Value": "24/7",
    "about.stat3Label": "Support Available",
    "about.stat4Value": "10+",
    "about.stat4Label": "Tech Stacks",
    "about.speedTitle": "Speed & Efficiency",
    "about.speedDesc":
      "Rapid development cycles with agile methodology. We ship fast without sacrificing quality.",
    "about.securityTitle": "Security First",
    "about.securityDesc":
      "Enterprise-grade security built into every layer — from authentication to data encryption.",
    "about.clientTitle": "Client Partnership",
    "about.clientDesc":
      "We work as an extension of your team, aligning every decision with your business goals.",
    "about.innovationTitle": "Innovation Driven",
    "about.innovationDesc":
      "Leveraging cutting-edge technologies and AI to give you a competitive advantage.",

    // Contact
    "contact.tag": "Get in Touch",
    "contact.title": "Let's Build Something Great",
    "contact.subtitle":
      "Have a project in mind? Drop us a message and we will get back to you within 24 hours.",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.send": "Send Message",
    "contact.sent": "Message Sent",
    "contact.thanks":
      "Thanks for reaching out! We will get back to you within 24 hours.",
    "contact.another": "Send another message",

    // Footer
    "footer.tagline":
      "Smart Tech. Simple Flows.\nBuilding digital solutions that transform businesses.",
    "footer.servicesTitle": "Services",
    "footer.companyTitle": "Company",
    "footer.connectTitle": "Connect",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  he: {
    // Navbar
    "nav.services": "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",
    "nav.about": "\u05D0\u05D5\u05D3\u05D5\u05EA",
    "nav.contact": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",
    "nav.getInTouch": "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5",

    // Hero
    "hero.badge": "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D7\u05DB\u05DE\u05D4. \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D9\u05DD.",
    "hero.titleLine1": "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05D5\u05E0\u05D9\u05DD \u05D0\u05EA",
    "hero.titleLine2": "\u05D4\u05E2\u05EA\u05D9\u05D3 \u05D4\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9",
    "hero.subtitle":
      "\u05DE\u05D1\u05D5\u05D8\u05D9\u05DD \u05DC\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05D5\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI, \u05D3\u05E8\u05DA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA Full-Stack \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 UI/UX \u05DE\u05D3\u05D4\u05D9\u05DD \u2014 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DC\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D9\u05DD \u05D5\u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD.",
    "hero.exploreServices": "\u05D2\u05DC\u05D5 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",
    "hero.startProject": "\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
    "hero.discover": "\u05D2\u05DC\u05D5",

    // Services
    "services.tag": "\u05DE\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD",
    "services.title": "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD \u05DE\u05E7\u05E6\u05D4 \u05DC\u05E7\u05E6\u05D4",
    "services.subtitle":
      "\u05DE\u05D4\u05E8\u05E2\u05D9\u05D5\u05DF \u05D5\u05E2\u05D3 \u05DC\u05E4\u05E8\u05D9\u05E1\u05D4, \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05DB\u05E1\u05D9\u05DD \u05DB\u05DC \u05E9\u05DB\u05D1\u05D4 \u05D1\u05DE\u05D5\u05E6\u05E8 \u05D4\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D1\u05D4\u05E0\u05D3\u05E1\u05D4 \u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D5\u05E9\u05D1.",
    "services.automationBots": "\u05D1\u05D5\u05D8\u05D9\u05DD \u05DC\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4",
    "services.automationBotsDesc":
      "\u05D1\u05D5\u05D8\u05D9\u05DD \u05DC\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D5\u05D8\u05DC\u05D2\u05E8\u05DD \u05E9\u05DE\u05D9\u05D9\u05E2\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05E6\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA, \u05EA\u05DE\u05D9\u05DB\u05D4 \u05D5\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 24/7.",
    "services.uiux": "\u05E2\u05D9\u05E6\u05D5\u05D1 UI/UX",
    "services.uiuxDesc":
      "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05DE\u05D5\u05E7\u05D3 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05DC\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D5\u05EA SaaS, \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD \u05E9\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D0\u05D5\u05D4\u05D1\u05D9\u05DD.",
    "services.webApps": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8",
    "services.webAppsDesc":
      "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 Full-Stack \u05D1\u05E0\u05D5\u05D9\u05D5\u05EA \u05E2\u05DD \u05E4\u05E8\u05D9\u05D9\u05DE\u05D5\u05D5\u05E8\u05E7\u05D9\u05DD \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05D9\u05DD, \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05DC\u05D1\u05D9\u05E6\u05D5\u05E2\u05D9\u05DD \u05D5\u05E1\u05E7\u05D9\u05DC\u05D4.",
    "services.nativeApps": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC",
    "services.nativeAppsDesc":
      "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC \u05E0\u05D9\u05D9\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA \u05D5\u05E7\u05E8\u05D5\u05E1-\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC-iOS \u05D5-Android \u05E2\u05DD \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05DC\u05E7\u05D4.",
    "services.ai": "\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI",
    "services.aiDesc":
      "\u05D7\u05D9\u05D1\u05D5\u05E8, \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05D5\u05E0\u05D9\u05D4\u05D5\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 AI \u2014 \u05DE\u05DE\u05D5\u05D3\u05DC\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05E2\u05D3 \u05DC\u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05D7\u05DB\u05DE\u05D9\u05DD.",
    "services.cloud": "\u05E2\u05E0\u05DF \u05D5\u05D9\u05D9\u05E2\u05D5\u05E5",
    "services.cloudDesc":
      "\u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05EA \u05E2\u05E0\u05DF, \u05D9\u05D9\u05E2\u05D5\u05E5 \u05EA\u05E9\u05EA\u05D9\u05EA \u05D5\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9 \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9 \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD \u05E6\u05D5\u05DE\u05D7\u05D9\u05DD.",
    "services.devops": "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 DevOps",
    "services.devopsDesc":
      "\u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA CI/CD, \u05EA\u05E9\u05EA\u05D9\u05EA \u05DB\u05E7\u05D5\u05D3, \u05E0\u05D9\u05D8\u05D5\u05E8 \u05D5\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D9\u05EA \u05E4\u05E8\u05D9\u05E1\u05D4 \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA.",
    "services.landing": "\u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4",
    "services.landingDesc":
      "\u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4 \u05DE\u05DE\u05D9\u05E8\u05D9\u05DD \u05E2\u05DD \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05DE\u05E8\u05D4\u05D9\u05D1\u05D5\u05EA \u05D5\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E8\u05E1\u05E4\u05D5\u05E0\u05E1\u05D9\u05D1\u05D9 \u05DE\u05D5\u05E9\u05DC\u05DD.",
    "services.ecommerce": "\u05D7\u05E0\u05D5\u05D9\u05D5\u05EA \u05D0\u05D9\u05E7\u05D5\u05DE\u05E8\u05E1",
    "services.ecommerceDesc":
      "\u05D7\u05E0\u05D5\u05D9\u05D5\u05EA WordPress \u05D5-Shopify \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u2014 \u05E2\u05DD \u05EA\u05E9\u05DC\u05D5\u05DD \u05D7\u05DC\u05E7 \u05D5\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05DC\u05D0\u05D9.",
    "services.seo": "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8\u05D9\u05DD \u05D5-SEO",
    "services.seoDesc":
      "\u05D0\u05EA\u05E8\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2\u05D9\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D4\u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05DC\u05DE\u05E0\u05D5\u05E2\u05D9 \u05D7\u05D9\u05E4\u05D5\u05E9 \u2014 \u05DE\u05D1\u05D3\u05D9\u05E7\u05D5\u05EA SEO \u05D8\u05DB\u05E0\u05D9\u05D5\u05EA \u05D5\u05E2\u05D3 \u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05D5\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D0\u05D5\u05E8\u05D2\u05E0\u05D9\u05EA.",

    // Tech Marquee
    "tech.title": "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05E9\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D0\u05D9\u05EA\u05DF",

    // About
    "about.tag": "\u05DC\u05DE\u05D4 stakio.ai",
    "about.title": "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D7\u05DB\u05DE\u05D4. \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D9\u05DD.",
    "about.subtitle":
      "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E9\u05DC\u05D1\u05D9\u05DD \u05DE\u05D5\u05DE\u05D7\u05D9\u05D5\u05EA \u05D8\u05DB\u05E0\u05D9\u05EA \u05E2\u05DE\u05D5\u05E7\u05D4 \u05E2\u05DD \u05D2\u05D9\u05E9\u05D4 \u05DE\u05D5\u05E0\u05D7\u05D9\u05EA \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05E1\u05E4\u05E7 \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD \u05E9\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D0\u05DE\u05EA \u2014 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D5\u05DC\u05E9\u05D5\u05E8\u05D4 \u05D4\u05EA\u05D7\u05EA\u05D5\u05E0\u05D4.",
    "about.stat1Value": "+50",
    "about.stat1Label": "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05E1\u05D5\u05E4\u05E7\u05D5",
    "about.stat2Value": "99%",
    "about.stat2Label": "\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA",
    "about.stat3Value": "24/7",
    "about.stat3Label": "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D6\u05DE\u05D9\u05E0\u05D4",
    "about.stat4Value": "+10",
    "about.stat4Label": "\u05E1\u05D8\u05E7\u05D9 \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4",
    "about.speedTitle": "\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA",
    "about.speedDesc":
      "\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9 \u05E4\u05D9\u05EA\u05D5\u05D7 \u05DE\u05D4\u05D9\u05E8\u05D9\u05DD \u05D1\u05DE\u05EA\u05D5\u05D3\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA Agile. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05E1\u05E4\u05E7\u05D9\u05DD \u05DE\u05D4\u05E8 \u05D1\u05DC\u05D9 \u05DC\u05D4\u05EA\u05E4\u05E9\u05E8 \u05E2\u05DC \u05D0\u05D9\u05DB\u05D5\u05EA.",
    "about.securityTitle": "\u05D0\u05D1\u05D8\u05D7\u05D4 \u05E7\u05D5\u05D3\u05DD \u05DB\u05DC",
    "about.securityDesc":
      "\u05D0\u05D1\u05D8\u05D7\u05D4 \u05D1\u05E8\u05DE\u05D4 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05EA \u05D1\u05DB\u05DC \u05E9\u05DB\u05D1\u05D4 \u2014 \u05DE\u05D0\u05D9\u05DE\u05D5\u05EA \u05D5\u05E2\u05D3 \u05D4\u05E6\u05E4\u05E0\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD.",
    "about.clientTitle": "\u05E9\u05D5\u05EA\u05E4\u05D5\u05EA \u05E2\u05DD \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA",
    "about.clientDesc":
      "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05DB\u05D4\u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD, \u05D5\u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05DB\u05DC \u05D4\u05D7\u05DC\u05D8\u05D4 \u05DC\u05D9\u05E2\u05D3\u05D9\u05DD \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD.",
    "about.innovationTitle": "\u05DE\u05D5\u05E0\u05E2\u05D9\u05DD \u05DE\u05D7\u05D3\u05E9\u05E0\u05D5\u05EA",
    "about.innovationDesc":
      "\u05DE\u05E0\u05E6\u05DC\u05D9\u05DD \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D5-AI \u05DB\u05D3\u05D9 \u05DC\u05EA\u05EA \u05DC\u05DB\u05DD \u05D9\u05EA\u05E8\u05D5\u05DF \u05EA\u05D7\u05E8\u05D5\u05EA\u05D9.",

    // Contact
    "contact.tag": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",
    "contact.title": "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D1\u05E0\u05D4 \u05DE\u05E9\u05D4\u05D5 \u05D2\u05D3\u05D5\u05DC",
    "contact.subtitle":
      "\u05D9\u05E9 \u05DC\u05DB\u05DD \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D1\u05E8\u05D0\u05E9? \u05E9\u05DC\u05D7\u05D5 \u05DC\u05E0\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D5\u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA.",
    "contact.nameLabel": "\u05E9\u05DD",
    "contact.namePlaceholder": "\u05D4\u05E9\u05DD \u05E9\u05DC\u05DB\u05DD",
    "contact.emailLabel": "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
    "contact.emailPlaceholder": "you@company.com",
    "contact.messageLabel": "\u05D4\u05D5\u05D3\u05E2\u05D4",
    "contact.messagePlaceholder": "\u05E1\u05E4\u05E8\u05D5 \u05DC\u05E0\u05D5 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E9\u05DC\u05DB\u05DD...",
    "contact.send": "\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4",
    "contact.sent": "\u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4",
    "contact.thanks":
      "\u05EA\u05D5\u05D3\u05D4 \u05E9\u05E4\u05E0\u05D9\u05EA\u05DD \u05D0\u05DC\u05D9\u05E0\u05D5! \u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA.",
    "contact.another": "\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA",

    // Footer
    "footer.tagline":
      "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D7\u05DB\u05DE\u05D4. \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05E4\u05E9\u05D5\u05D8\u05D9\u05DD.\n\u05D1\u05D5\u05E0\u05D9\u05DD \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD \u05E9\u05DE\u05E9\u05E0\u05D9\u05DD \u05E2\u05E1\u05E7\u05D9\u05DD.",
    "footer.servicesTitle": "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",
    "footer.companyTitle": "\u05D7\u05D1\u05E8\u05D4",
    "footer.connectTitle": "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5",
    "footer.about": "\u05D0\u05D5\u05D3\u05D5\u05EA",
    "footer.contact": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",
    "footer.blog": "\u05D1\u05DC\u05D5\u05D2",
    "footer.careers": "\u05E7\u05E8\u05D9\u05D9\u05E8\u05D4",
    "footer.rights": "\u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA.",
    "footer.privacy": "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA",
    "footer.terms": "\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9",
  },
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && (saved === "en" || saved === "he")) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }, [])

  const dir = locale === "he" ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  const t = useCallback(
    (key: string) => {
      return translations[locale][key] || key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
