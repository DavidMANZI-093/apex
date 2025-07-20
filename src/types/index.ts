import { LucideIcon } from "lucide-react";

export interface CardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	deliverables: string[];
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
	blurhash: string;
}

export interface CardSxProps {
	name: string;
	acronym: string;
	sector: "Private" | "Government";
	description: string;
	services: string[];
	icon: LucideIcon;
}

export interface CardTxProps {
	quote: string;
	author: string;
	position: string;
	company: string;
	rating: number;
}
