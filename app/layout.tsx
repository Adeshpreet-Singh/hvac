import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcticAir HVAC | 24/7 Heating, Cooling & Air Quality Experts",
  description: "ArcticAir HVAC - Expert installation, repair, and maintenance of heating and cooling systems. NATE-certified technicians. 24/7 emergency service. Free estimates.",
  openGraph: {
    title: "ArcticAir HVAC | 24/7 Heating, Cooling & Air Quality Experts",
    description: "Expert HVAC installation, repair, and maintenance. NATE-certified technicians. 24/7 emergency service. Free estimates.",
    type: "website",
    locale: "en_US",
    siteName: "ArcticAir HVAC",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcticAir HVAC | 24/7 Heating, Cooling & Air Quality Experts",
    description: "Expert HVAC installation, repair, and maintenance. NATE-certified technicians. 24/7 emergency service.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}