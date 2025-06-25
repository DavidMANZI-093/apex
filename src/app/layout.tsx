import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APEX Constructions",
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

import Cursor from "@/components/ui/cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white/5 backdrop-blur-sm`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
