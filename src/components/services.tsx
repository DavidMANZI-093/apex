import { Ruler, Hammer, Globe, Droplets, Eye } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {

    const services = [
      {
        icon: Ruler,  // precise measurement theme
        title: "Advanced Surveying",
        description:
          "High-precision land and engineering surveying using GNSS, RTK, Total Stations, and UAV/Drone photogrammetry for accurate mapping and analysis.",
        deliverables: [
          "Topographic & Cadastral Surveys",
          "Engineering Surveys",
          "GNSS/DGPS, RTK & Total Station Operations",
          "UAV/Drone Mapping & Photogrammetry",
        ],
      },
      {
        icon: Hammer,  // construction theme
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
      },
      {
        icon: Globe,  // geospatial/GIS theme
        title: "Geospatial Data Analysis",
        description:
          "In-depth GIS mapping, remote sensing, and spatial data analysis for informed decision-making and sustainable land development.",
        deliverables: [
          "GIS Mapping & Remote Sensing",
          "Spatial Planning & Land Development Analysis",
          "Advanced GIS Mapping & Spatial Analysis",
          "Digital Terrain Models (DTMs) & 3D Visualization",
        ],
      },
      {
        icon: Droplets,  // environment & water
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
      },
      {
        icon: Eye,  // supervision & monitoring
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
      },
    ];

  return (
    <section
      id="services"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">Our Services</h2>
          <p className="!text-base text-slate-gray/80 leading-relaxed">
            {"We provide comprehensive construction consultancy and " +
            "surveying solutions tailored to meet your project needs."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 !mx-auto gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;