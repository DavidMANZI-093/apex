import { MapPin, Building2, Sprout, Landmark, Users, TrendingUp } from "lucide-react";
import { CardSxProps } from "../types";

export const clients: CardSxProps[] = [
    {
        name: "Rwanda Transport Development Agency",
        acronym: "RTDA",
        sector: "Government",
        description: "Leading Rwanda's transport infrastructure development with precision mapping and surveying services.",
        services: ["Drone Surveying", "GIS Mapping"],
        icon: MapPin,
    },
    {
        name: "Kigali Infrastructure Development",
        acronym: "KID",
        sector: "Private",
        description: "Transforming Kigali's skyline through innovative construction consultancy and project management.",
        services: ["Construction Consultancy", "Site Supervision"],
        icon: Building2,
    },
    {
        name: "Rwanda Agriculture Board",
        acronym: "RAB",
        sector: "Government",
        description: "Optimizing agricultural land use through advanced surveying and precision mapping technologies.",
        services: ["Land Surveying", "Agricultural Mapping"],
        icon: Sprout,
    },
    {
        name: "Kigali City Council",
        acronym: "KCC",
        sector: "Government",
        description: "Ensuring urban development compliance through comprehensive monitoring and supervision services.",
        services: ["Urban Planning", "Development Monitoring"],
        icon: Landmark,
    },
    {
        name: "Private Developers Consortium",
        acronym: "PDC",
        sector: "Private",
        description: "Supporting private sector growth with end-to-end construction consultancy and technical expertise.",
        services: ["Project Management", "Technical Consulting"],
        icon: Users,
    },
    {
        name: "Rwanda Development Board",
        acronym: "RDB",
        sector: "Government",
        description:"Facilitating national development through strategic infrastructure planning and implementation support.",
        services: ["Strategic Planning", "Infrastructure Development"],
        icon: TrendingUp,
    },
]