"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"

export default function PrivacyPolicyPage() {
	const { locale } = useI18n()

	return (
		<div>
			<Navbar />
			<main className="mx-auto max-w-3xl px-6 py-20">
				{locale === "he" ? (
					<section>
						<h1 className="mb-6 text-3xl font-bold">מדיניות פרטיות</h1>

						<p className="mb-4">
							ברוכים הבאים ל-stakio.ai. פרטיות המשתמש הינה חשובה לנו. במסמך זה
							תמצאו פירוט על אופן איסוף, שימוש ושמירת מידע באתר התדמית שלנו.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">1. מי אנחנו</h2>
						<p className="mb-4">
							stakio.ai ("האתר" או "אנחנו") היא חברה המספקת שירותי פיתוח,
							עיצוב ופתרונות דיגיטליים.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">2. מידע שאנו אוספים</h2>
						<p className="mb-4">
							באתר זה אנו אוספים מידע מינימלי לצרכי אנליטיקה ותפעול בסיסי. סוגי
							המידע כוללים פרטי קשר שתמסרו בטפסים (שם, אימייל, הודעה), נתוני גלישה
							אנונימיים (דפי כניסה, משך שהייה) ומידע טכני (דפדפן, מערכת הפעלה).
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">3. שימוש במידע</h2>
						<p className="mb-4">
							המידע משמש לניתוח תעבורה, שיפור חוויית משתמש, ומענה לפניות דרך
							טפסי יצירת קשר. אין שימוש בפרטי קשר לצורכי פרסום ממוקד מצדנו.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">4. Google Analytics</h2>
						<p className="mb-4">
							אנו משתמשים ב-Google Analytics בשביל מדידת תנועה ואנליטיקה. הנתונים
							המסופקים הם סטטיסטיים ואנונימיים; אם אתם רוצים להגביל שימוש זה
							ניתן להסיר/לחסום עוגיות בדפדפן.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">5. עוגיות (Cookies)</h2>
						<p className="mb-4">
							האתר משתמש בעוגיות לצורך אנליטיקה ותפעול. מדיניות העוגיות מפורטת
							בדף מדיניות העוגיות (קישור בפוטר).
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">6. שמירת נתונים</h2>
						<p className="mb-4">
							אנו שומרים נתונים למשך הזמן הנדרש למטרות שהוגדרו או על פי דרישות
							חוק. בקשות למחיקה או עדכון מתבצעות בהתאם לחוק.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">7. אבטחה</h2>
						<p className="mb-4">
							אנו נוקטים אמצעים סבירים להגנה על המידע, אך אין שיטה שהיא בטוחה
							במאה אחוז. במקרה של חריגה או דליפה נעדכן בהתאם להוראות החוק.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">8. זכויותיכם</h2>
						<p className="mb-4">
							ניתן לבקש גישה, תיקון, מחיקה או העברת נתונים. לפניות בנושא השתמשו
							בטופס יצירת הקשר באתר.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">9. קשר</h2>
						<p className="mb-4">
							לשאלות או בקשות בנושא פרטיות פנו דרך טופס היצירה קשר באתר או לכתובת
							האימייל שלנו.
						</p>

						<p className="mt-8 text-sm text-muted-foreground">תאריך התוקף: 1 במרץ 2026</p>
					</section>
				) : (
					<section>
						<h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

						<p className="mb-4">
							Welcome to stakio.ai. We respect your privacy. This policy explains how
							we collect, use, and store information on this marketing website.
						</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">1. Who we are</h2>
						<p className="mb-4">stakio.ai ("the site" or "we") provides development,
							design and digital solutions.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">2. Information we collect</h2>
						<p className="mb-4">We collect minimal data for analytics and basic site
							operation. This may include contact details submitted via forms (name,
							email, message), anonymous browsing data (pages visited, time on site),
							and technical data (browser, OS).</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">3. How we use data</h2>
						<p className="mb-4">Data is used to analyse traffic, improve user
							experience, and respond to contact requests. We do not use contact data
							for personalised advertising ourselves.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">4. Google Analytics</h2>
						<p className="mb-4">We use Google Analytics to measure site traffic and usage.
							The data collected is statistical and anonymised. You can opt-out by
							blocking cookies in your browser.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">5. Cookies</h2>
						<p className="mb-4">The site uses cookies for analytics and basic
							functionality. See our Cookie Policy (link in footer) for details.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">6. Data retention</h2>
						<p className="mb-4">We retain data for as long as necessary for the
							purposes stated or as required by law. Requests to delete or update data
							will be handled according to applicable legislation.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">7. Security</h2>
						<p className="mb-4">We implement reasonable security measures, however no
							method is 100% secure. In the event of a breach we will follow legal
							obligations and notify affected parties as required.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">8. Your rights</h2>
						<p className="mb-4">You may request access, correction, deletion or data
							portability. Contact us via the contact form for such requests.</p>

						<h2 className="mt-8 mb-3 text-xl font-semibold">9. Contact</h2>
						<p className="mb-4">For privacy-related questions please use the contact
							form on the site or email us directly.</p>

						<p className="mt-8 text-sm text-muted-foreground">Effective date: 1 March 2026</p>
					</section>
				)}
			</main>
			<Footer />
		</div>
	)
}
