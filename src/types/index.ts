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
    challenges: string;
    solution: string;
    outcomes: string;
    metrics: string;
    icon?: LucideIcon;
    image: string;
    blurhash: string;
}