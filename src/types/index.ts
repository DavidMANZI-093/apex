import { LucideIcon } from "lucide-react";

export interface CardProps {
	title: string;
	description: string;
	deliverables: string[];
	image: string;
	alt: string;
	blurhash: string;
}

export interface CardExProps {
	title: string;
	category: string;
	client: string;
	timeline: string;
	services: string[];
	challenge: string;
	solution: string;
	outcomes: string[];
	metrics: string;
	icon?: LucideIcon;
	image: string;
	alt: string;
	blurhash: string;
}

export interface CardSxProps {
	name: string;
	acronym: string;
	sector: "Private" | "Government" | "Professional Body";
	description: string;
	logo: string;
	alt: string;
	blurhash: string;
}

export interface CardTxProps {
	quote: string;
	author: string;
	position: string;
	company: string;
	rating: number;
}
