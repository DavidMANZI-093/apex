import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const rubik = Rubik({
  variable: "--font-rubik",
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
        className={`h-screen w-screen bg-white absolute z-0 ${rubik.variable} antialiased`}
      >
        <div className="relative flex flex-col h-full w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
