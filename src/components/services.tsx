import { Building, Map, Drone, Eye } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {

    const services = [
        {
          icon: Building,
          title: "Construction Consultancy",
          description:
            "Comprehensive end-to-end consulting services ensuring your construction project is strategically planned, efficiently executed, and fully compliant with regulations.",
          deliverables: [
            "Pre-construction feasibility studies",
            "Detailed project planning & cost estimation",
            "Contract management & procurement",
            "Quality assurance & risk assessment",
            "Real-time construction monitoring & reporting",
          ],
        },
        {
          icon: Map,
          title: "Topographic & Land Surveying",
          description:
            "Precision surveying services using state-of-the-art equipment and proven techniques for accurate land measurement, boundary determination, and comprehensive mapping.",
          deliverables: [
            "High-precision contour mapping",
            "Digital terrain models (DTMs) & 3D visualization",
            "Boundary & cadastral surveys",
            "Cut & fill volume calculations",
            "Advanced GIS mapping & spatial analysis",
          ],
        },
        {
          icon: Drone,
          title: "Drone-Based Surveying",
          description:
            "Revolutionary aerial surveying solutions leveraging advanced drone technology and photogrammetry for rapid, accurate, and cost-effective data collection over large areas.",
          deliverables: [
            "Large-scale topographic surveys (500+ hectares)",
            "Real-time construction progress mapping",
            "Detailed 3D site modeling & visualization",
            "High-resolution orthomosaic map generation",
            "Environmental monitoring & agricultural surveys",
          ],
        },
        {
          icon: Eye,
          title: "Site Supervision with Drone Support",
          description:
            "Comprehensive site monitoring and supervision services enhanced with cutting-edge drone technology for complete project oversight and quality control.",
          deliverables: [
            "24/7 remote construction monitoring",
            "Ultra-high-resolution aerial imagery",
            "Automated weekly/monthly progress reports",
            "Real-time asset tracking & inventory",
            "Safety inspection of hard-to-reach areas",
          ],
        },
      ]

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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;