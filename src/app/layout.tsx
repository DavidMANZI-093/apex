import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { preload } from "react-dom";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const caveat = Caveat({
	variable: "--font-caveat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://echelonlandworks.com'),
	alternates: {
		canonical: '/',
	},
	title: "Echelon Landworks - Construction Consultancy & Surveying Solutions",
	description:
		"Echelon Landworks Ltd is a Rwandan-based leader in land surveying, construction " +
		"support, and geospatial solutions. We deliver accurate, efficient, and technology-driven " +
		"services including UAV mapping, GIS analysis, and sustainable infrastructure planning.",
	openGraph: {
		title: "Echelon Landworks - Construction Consultancy & Surveying Solutions",
		description: "Rwandan-based leader in land surveying, construction support, and geospatial solutions.",
		url: 'https://echelonlandworks.com',
		siteName: 'Echelon Landworks',
		images: [
			{
				url: '/thumbnail.jpg',
				width: 1200,
				height: 630,
				alt: 'Echelon Landworks - Professional Land Surveying Services',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Echelon Landworks - Professional Surveying Solutions',
		description: 'Expert land surveying and geospatial solutions in Rwanda',
		images: ['/thumbnail.jpg'],
	},
	keywords: [
		"Echelon Landworks",
		"Rwanda",
		"Surveying",
		"Land Survey",
		"Drone Mapping",
		"UAV",
		"GIS",
		"Geospatial",
		"Construction Support",
		"Engineering",
		"Topographic",
		"Cadastral",
		"Infrastructure",
		"Wetland Restoration",
		"Environmental Planning",
	],
	authors: [{ name: "Echelon Landworks" }, { name: "MANZI David" }],
};

preload("/placeholder.png");
preload("/web-app-manifest-192x192.png");
preload("/web-app-manifest-512x512.png");
preload("/thumbnail-1.webp");

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`relative flex ${inter.variable} ${caveat.variable} antialiased`}
			>
				{children}
				{/* <Analytics /> */}
				{/* <SpeedInsights /> */}
			</body>
		</html>
	);
}
