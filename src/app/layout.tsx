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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`absolute w-screen h-screen z-0 ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
