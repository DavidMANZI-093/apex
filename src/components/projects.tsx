import { Building, Drone, Eye, Map } from "lucide-react";
import { CardEx } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Excavation Planning and Execution in Masoro and Kigali Industrial Zones",
      category: "Construction Support",
      client: "-",
      timeline: "-",
      services: ["Excavation Planning", "Execution Support"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Flood Control Mapping and Design Feasibility Studies in Nyamuhura and Volcano Area Sub-catchments",
      category: "Environmental & Infrastructure",
      client: "-",
      timeline: "-",
      services: ["Flood Control Mapping", "Feasibility Studies"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Restoration Monitoring of the Nyacyonga Wetland using Geospatial and Hydrological Modeling Tools",
      category: "Environmental & Geospatial",
      client: "-",
      timeline: "-",
      services: ["Restoration Monitoring", "Geospatial Analysis", "Hydrological Modeling"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Collaboration with MINICOM (Ministry of Trade and Industry, Rwanda)",
      category: "Institutional Collaboration",
      client: "MINICOM",
      timeline: "-",
      services: ["Technical Lead", "Surveying & GIS Support"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Project with COWI Rwanda Ltd",
      category: "Institutional Collaboration",
      client: "COWI Rwanda Ltd",
      timeline: "-",
      services: ["Technical Lead", "Surveying & GIS Support"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Project with LE REJETON (CAR/Bangui Project)",
      category: "Institutional Collaboration",
      client: "LE REJETON",
      timeline: "-",
      services: ["Technical Lead", "Surveying & GIS Support"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
    {
      title: "Various District Authorities and Private Developers",
      category: "Institutional Collaboration",
      client: "Various District Authorities & Private Developers",
      timeline: "-",
      services: ["Surveying", "GIS", "Technical Support"],
      challenge: "-",
      solution: "-",
      outcomes: ["-"],
      metrics: "-",
      image: "",
      blurhash: "",
    },
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
      image: "/project-2.jpeg",
      blurhash: "data:image/jpeg;base64,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"
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
      image: "/project-3.webp",
      blurhash: "data:image/jpeg;base64,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"
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
      image: "/project-4.jpg",
      blurhash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAEVAdIDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwYEBf/EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAGREBAQEBAQEAAAAAAAAAAAAAAAEREgIx/9oADAMBAAIRAxEAPwD6QH0HiFRQFRRFVBBVRQaEUFVFBVQBVQQVUAUAUQAAQBFQVEVKgiVUorNSrUoJWatSis1KtZqCVmtVmgzWa1WaipWatSoM1mtVmojNSrUqDNSrWaiJUq1KiM1FqUZRlaiM0QBkAB6EB63VQAVUAVUVEVUAaVlQaVlQVUEGhFBRAVRFAEAAQBFRFEEAZqpRUqFQErNarNRUrNWpQZqVazUVKzVqUGazWqzUErNWs1ESs1qs1BKzVqVESs1alRErNWpRmpUKiM0EBFEAeiEHqdFEUFEUFVlRGlZUGlZVBVQBpWdUVVZUFE0BoZUAQQVBBVQQBBBRKJUCs1azRSs1azQKzVrNQSs1alFSs1azUErNWpUGalWs0ErNWs1EKzVrNREqUqVESpS1m1GaVBBlRBBRAHoRB621VAFVlQaEEGlZ1dBpdZNBpWdXQaNZVBrRNNBo1nV0F01NNBdNTU0VpNTTUA1NTQXU01NFEpqUCs0tS1FKlGaBWatZopWaVKglZq1moJUpUoJWatZqCVmrWaiFZq1moiVm1bWbUQtZtLWdGKqJpqCmpqag1ozoD0QmmvW00MqCqyug0M6ug1prK6g1qs6aDZrOroNaazq6DWms6uoNaazporWms6aDWms6aC6ampoq6ampqC6mpqaC6mmpopampaloFqWlqWopazS1LQSpSs2oFrNW1mglS0tZtQKzS1m1AtZtLUtQS1m1bWbURLWbS1m1GaWpqamoyums6amri6azpqaY1ozommPR6azpr2jWmppoNaazq6DRrOmg3prOroNausauoNausauitausaug1q6xq6g1prOmg1prOmitaazpoNams6ag1qampoq6azpoLqampoLrNpqailqWpqWgtrNpazaBalpazailrNpalqCWpaWs2gWs2lrNqBazaWs2ohazaWs2oiWs2lrNqM01NTU1m0xrU1m1NYvpca01jTWOlxvRjQ6Mel01nTX0WGtNZ1dBrTWdNBrV1nTQa1dY1dFa1dY1dQa1dY1dBrV1jTQb01nTUVrV1jTQb01jTQb1NZ01Fa01nTQa1NZ00F1NTU0VrU1NTQXU1NTUDUtNZtFW1LUtS1AtZtLUtAtZtLWbUC1m0tZtFLWbS1m1ELWbS1m1kLWLS1i1NSlrNqWs2s2pjVrNqWprlbrUi6azqamLjWms6mri43oxoYY9Nq6xq6+g4taazpoNaazpoN6axq6DWrrGrqDWrrGmit6azpoN6axpqDerrGmg3prGmit6axpoN6axpqDWms6aK1qazpoNams6aC6mpqairqampoLqampaC2palrNqKtqWpazaC2s2lrNqBazaWs2oFrNpazailrFpaxazqFrFp1052sX0mLazalrNrH1ZGrU1i9M3prG5HTU9Od6qauNcunpPTmLi46ehzDDHqtNZ0163ka1dY1dBrTWdNFa1dY00G9NZ01BvTWNNBvTWdNFb01jTUG9NZ00G9NY00VvTWNNQb1NZ00GtNZ1NFb1NZ01BrU1nTQXTWdTRWtTWdTQa1NZ1NQW1LU1LRVtZtS1LUC1LUtZtQW1m1LWbUUtZtS1m1LTC1jrpOunPrpztXDqs2penO9JISN3pi9M26jeNyLuoCqAAAAAA9NprGrr0vI1prOmg1prOmit6axpoN6azpqDemsaaDems6ait6axpoN6axq6DWms6aitaazpoNaazqaDemsaaitaazqaDeprOpoNaazqaK1qazqaDWprOpqDVrNqWpaKtrNqWs2oLazalrNqLi2s2paxembVxbWOuk66c+umLdXFvTn10z10xaSLhetQG1AAAAAAAAAAeh01jTXoeZvTWNNBvTWNXQb01jTQb01jTUVvV1jTQb01jTUG9XWNNBvTWNNFb01jV1BrTWdNBrTWdTQb01jTRWtNZ1NQa01nU0GtNZ1NFa1NZ1NBrUtZ1NRV1LWbUtFxbWbUtZtQxbWbUvTF6ZtakW9OfXSddOXXTH1qeWuunO3SosjWIio0zQAQAAAAAAAAAB+3prGmu7hjemsaaGN6uuemhjpprGmhjerrnq6i43prGroY3prGmoN6azpoN6axpoN6azpqDWms6aDWms6aK1prGmg1prOpoNaazqaK1qampqC6mpqaKtqWs2paLi2pazazekXGrWL0zemOu2a1I11059dsXq1GW5C3UAVAFZqIqKwAAAAAAAAAAAA/U9Hpy9Hp3Yx19Hpy9L6DHXTXL0voMdNXXL0uomOmrrnpoY6auuerqGN6uueroY3prGrqGN6axq6DWms6aI3prOmitamppoLprOmg1qampoNams6aKupqalqKupazalouLazalrF6FkavTF6Z66YtRuReu2LQYtaEBABFQBBkRUVAAQAAAAAAAAAB9HunusDvreN+19uammOntfbkBjtOl9OGrOqJy+j0vpwnbU6ROXbV1ynSyozjpq65ytaiY3q6xpoY3q6xq6I1q6xq6DWms6aDWms6aDWpqamg1qampoq6mpqWgupalrNo1i2s2penO9LjUjV6Yt1ERuQRUc/VBAZAAQQFQAEQBUQVBAAAAAAAAAAHTRBenRVZDoaGdXV6FEVrpVEF0alanTAqY7TpqVwlxudIzY6yrrnK1KjON6usauiN6azqiLq6yugoiApqGqGpomimpaWs2ilrNqWsW6uNyLayA0IIxQRUcwARABRABAARBUAAEEUUQUBBQEFAQUBoBlsAAAFFQBVQalFVBuUVZUGxuVuVyjcozY6SrrErURlpWVEURRFQAEBQS0ZopazaWsWq1IWsqitAIzQRUc6IA5qAKgioAAIAAAAACAAAAAAAAAAKANACAAAAKKigKityiiK3AalZWNDpGoxGoMVpUVEURRABUEEFGatSqrNYrVZabggICKjNBKqVz9CAOYAKCAIAAAAAAAAAAAACgIKAgoAAKAIAAAAooAKDUUUHSIKDQ1G4AzVagIyKCoAAiACVKCqx0yDTcQBAQGaCUHP0IA5gAogAgAAAAAAAAACgAACgAAAP/Z"
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
