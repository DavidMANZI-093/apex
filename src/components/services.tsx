import { Building, Map, Drone, Eye } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {

    const services = [
        {
          icon: Building,
          title: "Construction Consultancy",
          description:
            "We offer end-to-end consulting services to ensure your construction project is strategically planned, efficiently executed, and fully compliant.",
          deliverables: [
            "Feasibility Studies",
            "Project Planning & Cost Estimation",
            "Contract Management",
            "Quality Assurance & Risk Assessment",
            "Construction Monitoring & Reporting",
          ],
        },
        {
          icon: Map,
          title: "Topographic and Land Surveying",
          description:
            "Comprehensive surveying services using advanced equipment and techniques for accurate land measurement and mapping.",
          deliverables: [
            "Contour Maps",
            "Digital Terrain Models (DTMs)",
            "Boundary & Cadastral Surveys",
            "Cut & Fill Volume Calculations",
            "GIS Mapping",
          ],
        },
        {
          icon: Drone,
          title: "Drone-Based Surveying",
          description:
            "Cutting-edge aerial surveying solutions using advanced drone technology for efficient and accurate data collection.",
          deliverables: [
            "Large-Scale Topographic Surveys",
            "Construction Progress Mapping",
            "3D Site Modeling",
            "Orthomosaic Map Generation",
            "Environmental & Agricultural Surveys",
          ],
        },
        {
          icon: Eye,
          title: "Site Supervision with Drone Support",
          description:
            "Advanced site monitoring and supervision services enhanced with drone technology for comprehensive project oversight.",
          deliverables: [
            "Remote Construction Monitoring",
            "High-Resolution Aerial Imagery",
            "Weekly/Monthly Progress Reports",
            "Asset Tracking",
            "Inspection of Hard-to-Reach Areas",
          ],
        },
      ]

  return (
    <section
      id="services"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-indigo-dye/2"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">Our Services</h2>
          <p className="!text-base text-french-grey leading-relaxed">
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