import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcticAir HVAC | Heating, Cooling & Air Quality",
  description: "ArcticAir HVAC - Expert installation, repair, and maintenance of heating and cooling systems. Indoor air quality specialists available 24/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}