import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { preload } from "react-dom";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APEX - Construction Consultancy & Surveying Solutions",
  description:
    "A leading construction consultancy and advanced surveying firm, " +
    "delivering precision-driven solutions through drone technology, " +
    "GIS, and expert project management across Rwanda and beyond.",
  keywords: [
    "APEX",
    "Constructions",
    "Rwanda",
    "Drone",
    "Surveying",
    "GIS",
    "Construction",
    "Consultancy",
    "Project",
    "Management",
  ],
  authors: [{ name: "APEX Constructions" }, { name: "MANZI David" }],
};

preload("/placeholder.png");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative flex ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
