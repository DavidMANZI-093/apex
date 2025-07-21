import { CardProps } from "@/types";
import { Ruler, Hammer, Globe, Droplets, Eye } from "lucide-react";

export const services: CardProps[] = [
	{
		icon: Ruler, // precise measurement theme
		title: "Advanced Surveying",
		description:
			"High-precision land and engineering surveying using GNSS, RTK, Total Stations, and UAV/Drone photogrammetry for accurate mapping and analysis.",
		deliverables: [
			"Topographic & Cadastral Surveys",
			"Engineering Surveys",
			"GNSS/DGPS, RTK & Total Station Operations",
			"UAV/Drone Mapping & Photogrammetry",
		],
		image: "",
		blurhash: "",
	},
	{
		icon: Hammer, // construction theme
		title: "Construction Support",
		description:
			"Professional support throughout construction projects, ensuring sites are accurately set out, monitored, and compliant with regulations.",
		deliverables: [
			"Pre-construction Feasibility Studies",
			"Detailed Project Planning & Cost Estimation",
			"Setting Out for Building and Road Projects",
			"Excavation Monitoring & Volume Computations",
			"Site Grading & Level Supervision",
			"Real-time Construction Monitoring & Reporting",
			"Contract Management & Procurement",
			"Quality Assurance & Risk Assessment",
		],
		image: "",
		blurhash: "",
	},
	{
		icon: Globe, // geospatial/GIS theme
		title: "Geospatial Data Analysis",
		description:
			"In-depth GIS mapping, remote sensing, and spatial data analysis for informed decision-making and sustainable land development.",
		deliverables: [
			"GIS Mapping & Remote Sensing",
			"Spatial Planning & Land Development Analysis",
			"Advanced GIS Mapping & Spatial Analysis",
			"Digital Terrain Models (DTMs) & 3D Visualization",
		],
		image: "",
		blurhash: "",
	},
	{
		icon: Droplets, // environment & water
		title: "Environmental & Infrastructure Projects",
		description:
			"Supporting sustainable infrastructure with flood mapping, wetland restoration, and industrial zoning through advanced surveying and modeling.",
		deliverables: [
			"Flood Control Mapping",
			"Wetland & Land Use Restoration Surveys",
			"Drainage & Watercourse Delineation",
			"Industrial Park Surveying & Zoning",
			"Environmental Monitoring & Agricultural Surveys",
		],
		image: "",
		blurhash: "",
	},
	{
		icon: Eye, // supervision & monitoring
		title: "Site Supervision & Monitoring",
		description:
			"Comprehensive site oversight enhanced with drone technology, providing real-time progress tracking, quality control, and safety inspections.",
		deliverables: [
			"24/7 Remote Construction Monitoring",
			"Ultra-high-resolution Aerial Imagery",
			"Automated Weekly/Monthly Progress Reports",
			"Real-time Asset Tracking & Inventory",
			"Safety Inspection of Hard-to-Reach Areas",
		],
		image: "",
		blurhash: "",
	},
];
