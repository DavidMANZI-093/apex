import { CardEx } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      name: "Kigali Commercial Complex",
      location: "Kigali, Rwanda",
      services: ["Construction Consultancy", "Site Supervision"],
      timeline: "18 months",
      outcomes: "Completed 2 weeks ahead of schedule with 15% cost savings",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Rural Road Infrastructure Survey",
      location: "Eastern Province, Rwanda",
      services: ["Drone Surveying", "Topographic Mapping"],
      timeline: "6 months",
      outcomes: "Mapped 150km of rural roads with 99.8% accuracy",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Agricultural Land Assessment",
      location: "Southern Province, Rwanda",
      services: ["Land Surveying", "GIS Mapping"],
      timeline: "4 months",
      outcomes: "Optimized land use planning for 500+ hectares",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Urban Development Project",
      location: "Musanze, Rwanda",
      services: ["Construction Consultancy", "Drone Monitoring"],
      timeline: "12 months",
      outcomes: "Zero safety incidents with real-time progress tracking",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section
      id="projects"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white/5"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-midnight-green/70 mb-6">
            Projects Portfolio
          </h2>
          <p className="text-french-grey leading-relaxed">
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
