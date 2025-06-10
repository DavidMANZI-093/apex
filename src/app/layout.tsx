import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Apex Constructions",
  description:
    "A leading construction consultancy and advanced surveying firm, " +
    "delivering precision-driven solutions through drone technology, " +
    "GIS, and expert project management across Rwanda and beyond.",
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
        {children}
      </body>
    </html>
  );
}
