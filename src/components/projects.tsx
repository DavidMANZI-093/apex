import { Building, Drone, Eye } from "lucide-react";
import { CardEx } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Kigali Commercial Complex",
      category: "Construction Consultancy",
      client: "Private Developer",
      timeline: "18 months (2022-2023)",
      services: ["Construction Consultancy", "Site Supervision"],
      challenge: "Managing a complex mixed-use development with tight deadlines",
      solution: "Implemented agile project management with weekly drone monitoring",
      outcomes: [
        "Completed 2 weeks ahead of schedule",
        "Achieved 15% cost savings through optimized resource management",
        "Zero safety incidents throughout construction",
      ],
      metrics: "$2.5M project value, 25,000 sq.m built area",
      icon: Building,
    },
    {
      title: "Rural Road Infrastructure Survey",
      category: "Drone Surveying",
      client: "Rwanda Transport Development Agency",
      timeline: "6 months (2023)",
      services: ["Drone Surveying", "Topographic Mapping", "GIS Analysis"],
      challenge: "Mapping extensive rural road network across challenging terrain",
      solution: "Deployed advanced drone fleet with RTK GPS for centimeter accuracy",
      outcomes: [
        "Mapped 150km of rural roads with 99.8% accuracy",
        "Delivered comprehensive digital terrain models",
        "Identified 23 critical maintenance points",
      ],
      metrics: "150km mapped, 1,200 aerial images processed",
      icon: Drone,
    },
    {
      title: "Agricultural Land Assessment",
      category: "Land Surveying",
      client: "Rwanda Agriculture Board",
      timeline: "4 months (2023)",
      services: ["Land Surveying", "GIS Mapping", "Soil Analysis Integration"],
      challenge: "Optimizing land use for maximum agricultural productivity",
      solution: "Combined traditional surveying with drone mapping and soil data",
      outcomes: [
        "Optimized land use planning for 500+ hectares",
        "Increased potential yield projections by 18%",
        "Created digital land registry system",
      ],
      metrics: "500+ hectares surveyed, 3 districts covered",
      icon: Map,
    },
    {
      title: "Urban Development Monitoring",
      category: "Site Supervision",
      client: "Kigali City Council",
      timeline: "12 months (2022-2023)",
      services: ["Construction Consultancy", "Drone Monitoring", "Progress Reporting"],
      challenge: "Ensuring compliance and progress tracking across multiple sites",
      solution: "Implemented AI-powered progress tracking with weekly aerial surveys",
      outcomes: [
        "Zero safety incidents with real-time monitoring",
        "95% adherence to project timeline",
        "Automated progress reporting reduced admin by 60%",
      ],
      metrics: "12 sites monitored, 144 progress reports delivered",
      icon: Eye,
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
            Projects Portfolio
          </h2>
          <p className="text-slate-gray/80 leading-relaxed">
          {"Explore our successful projects that showcase our " + 
          "expertise in construction consultancy and advanced " + 
          "surveying solutions."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <CardEx key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
