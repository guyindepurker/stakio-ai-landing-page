"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"

export default function CookiePolicyPage() {
  const { locale } = useI18n()

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        {locale === "he" ? (
          <section>
            <h1 className="mb-6 text-3xl font-bold">מדיניות עוגיות</h1>

            <p className="mb-4">
              אתר זה משתמש בעוגיות (cookies) כדי לשפר חוויית משתמש ולנתח תעבורה.
              בעמוד זה מפורטים סוגי העוגיות והשימוש בהן.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">מה הן עוגיות?</h2>
            <p className="mb-4">
              עוגיות הן קבצי טקסט קטנים שנשלחים למחשב או למכשיר שלכם על ידי האתר
              ונשמרים בדפדפן. הן מאפשרות זיהוי מושגי כמו העדפות משתמש ותפעול האתר.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">סוגי עוגיות שאנו משתמשים בהם</h2>
            <ul className="ml-6 list-disc">
              <li>
                עוגיות חיוניות: נדרשות לתפקוד בסיסי של האתר ולאבטחה.
              </li>
              <li>
                עוגיות אנליטיקה: אנו משתמשים ב-Google Analytics לאיסוף נתוני שימוש
                אנונימיים (דפי כניסה, משך ביקור וכו').
              </li>
            </ul>

            <h2 className="mt-8 mb-3 text-xl font-semibold">ניהול עוגיות</h2>
            <p className="mb-4">
              ניתן לנהל או לחסום עוגיות מדפדפן האינטרנט שלכם. חסימת עוגיות עלולה
              להשפיע על פונקציונליות האתר.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">שינויים במדיניות</h2>
            <p className="mb-4">אנו עשויים לעדכן מדיניות זו מעת לעת; עדכונים יפורסמו באתר.</p>

            <p className="mt-8 text-sm text-muted-foreground">תאריך התוקף: 1 במרץ 2026</p>
          </section>
        ) : (
          <section>
            <h1 className="mb-6 text-3xl font-bold">Cookie Policy</h1>

            <p className="mb-4">
              This site uses cookies to improve user experience and analyse traffic.
              This page explains the cookies we use and why.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">What are cookies?</h2>
            <p className="mb-4">
              Cookies are small text files placed on your device by the website. They
              enable features such as remembering preferences and site analytics.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">Types of cookies we use</h2>
            <ul className="ml-6 list-disc">
              <li>Essential cookies: required for basic site operation and security.</li>
              <li>
                Analytics cookies: we use Google Analytics to collect anonymous usage
                statistics (page views, session duration, etc.).
              </li>
            </ul>

            <h2 className="mt-8 mb-3 text-xl font-semibold">Managing cookies</h2>
            <p className="mb-4">
              You can manage or block cookies through your browser settings. Blocking
              cookies may affect site functionality.
            </p>

            <h2 className="mt-8 mb-3 text-xl font-semibold">Changes to this policy</h2>
            <p className="mb-4">We may update this policy occasionally; changes will be posted here.</p>

            <p className="mt-8 text-sm text-muted-foreground">Effective date: 1 March 2026</p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
