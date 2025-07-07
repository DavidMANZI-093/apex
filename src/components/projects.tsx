import { Building } from "lucide-react";
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
      image: "/project-1.jpg",
      blurhash: "data:image/jpeg;base64,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"
    },
    {
      title: "Excavation Planning and Execution in Masoro and Kigali Industrial Zones",
      category: "Construction Support",
      client: "CLAU General Supply Ltd",
      timeline: "2023",
      services: ["Drone Mapping", "GNSS Mapping", "Earthworks Monitoring"],
      challenge: "Drone and GNSS mapping for Cold Solution storage facility earthworks.",
      solution: "Produced topographic profiles and cut-fill analysis.",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "/projects/excavation-masoro.jpg",
      blurhash: "data:image/jpeg;base64,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XOVqUVuVqVzlalBuVdY1rQa1dZ00VvV1jV1BrTWdNBrTWdNBdNTU0F1NTU0F1LU1LQW1m0tZtELUtS1LQLWLVtYtQLWbS1m0qJazaWsWs7oWsWlrNqfQtZtS1m1cwLWbUvTFreYi3pm0RqBoiarNUTTVSqJpolUTQWtaayqFXTUAXRAHoaaxq65V1dJVlc5WpVqOkqyucrUqjpK1K5ytSg6StSucrUorpK1K5ytSg6SrKxKsorpq6xKug3q6xq6Dems6aDWms6ugumpqaDWpqamgums6aC6zalqWoLazaWs2gWpalrNohazaWs2oFrFpaxazuhazaWsWoFrFq2udrWYhaxejqsWumYFqGpa0zumpqWosY3pdNQVmgAgAAqALpqAtXTUAq6IBX3aaxq64R6G5WpXOVZQdZWpXOVqVUdJWpXOVqVR0lalc5WpRXSVqVzlalB0lWViVZQdJV1zla0VvV1jV0G9NY1dBrTWdNBrTWdNBrU1NTQXUtTU1BdTU1LQW1m0tZtELWbS1m1AtZtLWLWdC1i0tZtQLWLVtYtazES1z6q9VztdMwLUtS1LWoxvRamoNOe7QAQAAAAAAAAAAAAAB9Grrnq65x6K6StSucrUqQdJW5XKVqUiOsrUrnK1Ko6StSucrUorpK1K5ytSg6SrK5ytSg3q6xKuit6usaug3prGroN6axpqDemsaaDWms6mg1qampoLqWprNoLalqWs2oi2s2lrFqBazaWs2s6VLWbS1m0zEqWsdVbXPqumYlTqsWpay6ZjO9LagK5gAAAAAAAAAAAAAAAAAN6usaaRv06StSuUrcqeV9OsrUrlK3KQrrK1K5StypFrpK1K5ytSkWukqyucrUpCukqyucrUqLXTV1z1dB001jV0G9NY1dFb01jTUG9NY00K1prOpola1NZ00Kupams2hWrWbUtS1EpazaWs2olLWLS1m1mFLWLS1jrprMZ3o6rl10trFdMxi1AGgAAAAAAAAAAAAAAAAAAABQHSILEUg1K3K5xYQrtK1K4ytzpmLnTrK1K5StSpGq6yrK5ytSpFrpKsrnKukWumrrGrqRa3q656ukK6aaxpqQremsaukK1prOppCt6ms6aQrWprOppErWprOpakStWs2pazaRKtrNqWs3oib0trF6S9MVmMb0trFVK1iM1mtVmtY1iAKoAAAAAAAAAAAAAAAAAAADQDsgACqiiKqKMtStTpzVIV1lalcdanSRrOnWVqVynSypGvTrq65a1qRa6aa56upFrpprGmkK3q656akK6ams6mkK3prGmkStams6mkT01qWs3pm9EZ3pu1m9M2osY3pb0zRERKlVKzqolVKjTNZrVZrWNYgCqAAAAAAAAAAAAAAAAAAAA0KPQiKAgoIKIoiqyqIqoCKuoA1Omp05qkLrp6XXJdIvp01dctXUh6dNNc9NIenTTXPTUh6b9HpgIz61r0moCUBAAEEARURUTVRFqMtM1K1Waq4yArQAAAAAAAAAAAAAAAAAAADYD0MgAKAAqKIKiogqAKAIoioKIogACiKgACACAAAAgIqCiKiAioipUWoxrSM1pmioi1GmgAAAAAAAAAAAAAAAAAAAH//2Q==",
    },
    {
      title: "Flood Control Mapping and Design Feasibility Studies in Nyamuhura and Volcano Area Sub-catchments",
      category: "Environmental & Infrastructure",
      client: "COWI Rwanda",
      timeline: "2023-2024",
      services: ["UAV Surveys", "DGPS Surveys", "Hydrological Inputs"],
      challenge: "Feasibility study of Volcano Region flood control works.",
      solution: "Delivered terrain models and hydrological inputs for engineering simulations.",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "",
      blurhash: "",
    },
    {
      title: "Restoration Monitoring of the Nyacyonga Wetland",
      category: "Environmental & Geospatial",
      client: "NULL",
      timeline: "NULL",
      services: ["Geospatial Analysis", "Hydrological Modeling"],
      challenge: "NULL",
      solution: "NULL",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "",
      blurhash: "",
    },
    {
      title: "Industrial Park Zoning and Physical Planning",
      category: "GIS & Planning",
      client: "MINICOM",
      timeline: "Feb 2024 - Present",
      services: [
        "Zoning Maps",
        "Physical Plans",
        "GIS-based Reports",
        "Industrial Portal Development",
      ],
      challenge: "Strategic planning for industrial parks: layout, utility access, land suitability.",
      solution: "Produced zoning maps, GIS reports, and coordinated with stakeholders.",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "",
      blurhash: "",
    },
    {
      title: "Detailed Design of Kageyo Dam and Irrigation Project",
      category: "Drone Surveying",
      client: "SABA Engineering PLC",
      timeline: "2025",
      services: ["Drone Surveys", "Orthomosaics", "DSM & Contour Maps"],
      challenge: "Drone survey of 2,442 ha for hydrological and irrigation design.",
      solution: "Acquired & processed high-resolution data using advanced drones.",
      outcomes: ["NULL"],
      metrics: "2,442 ha",
      image: "",
      blurhash: "",
    },
    {
      title: "Topographic Survey of 150 km Road Corridor",
      category: "Drone Surveying",
      client: "Geocart Surveys & Engineering Solutions",
      timeline: "2024",
      services: ["UAV-based Topographic Survey", "Engineering-grade Mapping"],
      challenge: "Survey a long road corridor for route planning.",
      solution: "Processed drone imagery into engineering-grade mapping products.",
      outcomes: ["NULL"],
      metrics: "150 km",
      image: "",
      blurhash: "",
    },
    {
      title: "Nyaburogo Irrigation Scheme",
      category: "Agricultural Development",
      client: "Echelon Landworks Ltd",
      timeline: "2024",
      services: ["Drone Survey", "Elevation Models", "Land Classification"],
      challenge: "Drone survey of 955 ha agricultural area for irrigation planning.",
      solution: "Delivered accurate elevation models and land classification datasets.",
      outcomes: ["NULL"],
      metrics: "955 ha",
      image: "",
      blurhash: "",
    },
    {
      title: "Kigali IV and Bugesera Road Projects",
      category: "Urban Development",
      client: "SHESCO Ltd",
      timeline: "Feb 2022 - Oct 2024",
      services: ["Drone Mapping", "GIS-based Planning", "Reporting"],
      challenge: "Drone mapping and GIS planning for urban expansion zones.",
      solution: "NULL",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "",
      blurhash: "",
    },
    {
      title: "Informal Settlement Upgrades and Land Use Planning",
      category: "Community Infrastructure",
      client: "UCS Ltd",
      timeline: "2022",
      services: ["GIS Mapping", "Community Infrastructure Surveys"],
      challenge: "Mapping informal settlements and supporting land use planning.",
      solution: "Provided GIS maps and supported planning.",
      outcomes: ["NULL"],
      metrics: "NULL",
      image: "",
      blurhash: "",
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

        <div className="grid grid-cols-1 md:grid-cols-2 !mx-auto gap-8">
          {projects.map((project, index) => (
            <CardEx key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
