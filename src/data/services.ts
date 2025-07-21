import { CardProps } from "@/types";

export const services: CardProps[] = [
	{
		title: "Advanced Surveying & Aerial LiDAR",
		description:
			"High-precision land and engineering surveying using Aerial LiDAR for unparalleled accuracy, GNSS, RTK, Total Stations, and UAV/Drone photogrammetry for comprehensive mapping.",
		deliverables: [
			"Aerial LiDAR Surveys (Bare Earth & Classified Point Clouds)",
			"Topographic & Cadastral Surveys",
			"Engineering Surveys",
			"GNSS/DGPS, RTK & Total Station Operations",
			"UAV/Drone Mapping & Photogrammetry",
		],
		image: "/services/service-1.jpeg",
		blurhash: "",
	},
	{
		title: "Construction Support & Site Surveys", // Slightly modified title
		description:
			"Professional support throughout construction projects, ensuring sites are accurately set out, monitored, and drone-assisted mapping for roads and infrastructure development.", // Incorporating drone road mapping
		deliverables: [
			"Pre-construction Feasibility Studies",
			"Detailed Project Planning & Cost Estimation",
			"Setting Out for Building and Road Projects",
			"Excavation Monitoring & Volume Computations",
			"Site Grading & Level Supervision",
			"Real-time Construction Monitoring & Reporting",
			"Contract Management & Procurement",
			"Quality Assurance & Risk Assessment",
			"Drone-based Progress Mapping & As-built Surveys for Roads", // Added specific drone deliverable
		],
		image: "/services/service-2.jpeg", // Assigning drone mapping a road image here
		blurhash: "",
	},
	{
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
		title: "Environmental & Agricultural Solutions", // Updated title
		description:
			"Supporting sustainable infrastructure, environmental protection, and precision agriculture through advanced surveying and drone-based monitoring.", // Emphasize agriculture and drones
		deliverables: [
			"Flood Control Mapping",
			"Wetland & Land Use Restoration Surveys",
			"Drainage & Watercourse Delineation",
			"Industrial Park Surveying & Zoning",
			"Agricultural Surveys & Crop Health Monitoring (Drone-assisted)", // Clarify drone assistance for plants
			"Environmental Monitoring & Impact Assessment Support", // Rephrased/combined
		],
		image: "/services/service-4.png", // Assigning drone irrigating plants image here
		blurhash: "",
	},
	{
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
