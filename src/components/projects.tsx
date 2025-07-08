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
      image: "/projects/project-1.jpg",
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
      blurhash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAEPAeIDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECAwQGBf/EABwQAQEBAQEAAwEAAAAAAAAAAAABEQISAzFhE//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARESAjH/2gAMAwEAAhEDEQA/AOoDLmoAKAKqooLFSKKqooKqLBVVFiCqiiqACqiigAKIoCAAAKgIAioCMtM0EqVazVErNarNBms1qs0Rms1qs0GKzWqzQYrNarFEZrFbrFEYrnXSudEYrn06dOfQlc+nK/br05dfY51is1qss0iIqDQAo+xBVaAAUAFVFBVRRVVFBVRUVVRQVUBWhFBQBVEUAAAAUQAEAERUBEqpQSs1alUSs1azQSs1qsURKzVrNBms1qsUGaxW6xRGa51usURisVusUGOnOt1joZrn05dOnTl0OdZrLVZZIiKg0AKPsgFaAAUAVVRQVUVBVQFaVlQaEUVVRQVWVFURQUQBQBQEBUABBAEEASiUCs1azVCs1azQSs1azRErNWs0GazWqxQZrNarFEZrFarFBmsVqsURiufTpXPoZrn05dOvTl0jFYqVajJERUVQBVfZADQACgCqqKCiKCqiiqqANKyoKqArQgDQgCqyoqiAKggKIAIICoICIrNAqUqUErNWs1QrNWs0ErFarFESs1azQZrNWs0RmsVqsUGaxWqxURisdN1z6Ga59OXTr05VmsVmpVrNCICK0AKPswBsAFUAFABVQBVRQVWVFaEAaEUFVkFaENBoZUFENBUTTQUTU0FTTU0BNNTQNQ1NAqUtZtArNW1m0Cs0rNUKzVrNEZrNWs0GazVrNQZrFarFEZrFarFEZrn03XPpEY6cq6dOVZYqVKtZrRBBFVRAV9mAjaiAKqAqqyoKrKgqoA0IA0rIK0rJoNGpoDWmsqoommirpqaaC6ampoLompoKhqaCpqamgus6amgWpaazaBalpazaIWs1bWbQS1m1bWbQS1mraxaIlZq1i0ErFatYojNYtatYtQZ6c+q11XPqs2ssdMVrqsUjFSs1aza2sE0tTVXF0Z0Fx9qAw2KgCiANCCq0IA0JoDQhoNDOroNaazqgurrOmitaazpoNaammqLprOmg1prOmgums6aC6mpqaC6mppoGpprOgtqWpaloFqWlrNoFrNpazaIWs2razaCWs2lrNoFrFq2sWiJaxa1axagzaxa1a52pUZ6rna11XPqs/Waz1WLVtZtbkYLWLS1m1qRuQtEGmgAH22msjk01ogCiaaDRrOroLq6zpoNKzporWms6uqNaM6ug1prOmg1prOmg3prOmg1prOmqNampqaDWms6aC6azpoLqampoNampqaC6mpqaBalqWpaotrNqWpaBalqWpagWs2lrNoiWs2lrNoFrFq2sWgWsWlrFqIWufVXqufVZqJa59Veq5dVZGaWsWl6YdJCRdQFaAAAAfZ6azprk21prOmg1q6zpoNaazpoNaus6aDWms6ug1prOmg1q6xq6o1prOmg1q6xpoN6axpoN6axpqjWms6aDWms6mg1prOpoNampqaC6mpqaC6mpqaotqWpazaC2palrNoLazaWs2gtrFpazaBazaWsWohazaWsWgWsWlrn10zQ6rn1Trpy76STUp105XpL1qOsjOACqAAAAAA+v01nTXJtrV1jTQb01jV0GtNZ00G9NY00G9NZ00G9NY1dUa1dY00G9NY1dBrTWdNBrTWdNBrTWdNUa01jTQa01nU0VrTWdTQa1NTU1UXTWdTQa1nU1LQW1LUtZtBq1m1LWbQW1m0tZtAtZtLWLQW1m1LWLQW1i1L059dIi9dOXXR1049dpmi99uVuluo3JjIAoAAAAAAAA+q01jV1yba1dY00G9NY00G9NY1dBvTWNNBvV1z1dBvTWNNUb01jV0G9NY00G9NY00G9NY01RvTWNNBvU1nTQa01jTQa01jTVGtTWdNBdNZ1NBdS1NZtBq1m1LUtBbWbUtZtBbUtZtZtBbWbUvTF6Bb0xekvTn10C9dOXXbPXbnaYq9dawguMWgCoAAAAAAAAAA+k01z9HpyadNNc/S+gb1dc/R6B001z9LoOmmuemg6aaxpqq6aa56ug6aa56aDpprGmg3prGmqN6axq6DWmsaaDemsaaDeprOpqjeprOpoNams6mg3qazqaDWs6zalqjVrNqWs2g1azazazaDVrF6S9MXoGr059dM9duXXa4uN9duPXWpemLQtxbWQGLdABAAAAAAAAAAAAH7no9OXo9OSuvo9OXo9A6+l9OPpfQOvpfTj6X0Dr6PTl6X0quumuXpfQOumufo9A66a5+jVHTV1z9Gg6aa56ug3prGmg3prGmqN6axpoN6msaaDeprGmqrWprOpoNams2paDVqWs2s2g1azazemb0o1emL0zemOu1xWr059dsdd6xauDV61i9JaylZvpdQEZAAAAAAAAAAAAAAAAe/2vt5ff6e3LGder2e3m9/p7Mpr1ez283tfZlOnp9r7eX+jU+QOnp9L6eafIs+RV16PS+nCdr7DXf0vpw9L6VddvS+nH0voNdvR6cvS+lNddNc/R6FdPS65el0HTTXPTQdNTWNNUb01jU0G9NY1NFb1NY1LVG7WbWdZvQN3pm9M3pi9KN3pi9Mddud61cVvrtzvTNrNqmtXpnUGbWdAEQAAAAAAAAAAAAAAAAAAAA1dqALtPVQBr0vtgTEx0na+nIMTHadNTtw2r6TDl6J2s7eedNToTK9E7anbzTpqdCbXonS+nnnTU7XF6d/S+nCdtToxddfS+nL0voXXTTXP0uhrpprnpqrremsamhremsamg3rN6ZvTN6VW70zemL0xe1wbvTHXbF61nVw1b0lqIWpqoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALqANTpZ0wJiY6zpZXKVqUSx11dc5V1WcdPS+nPV1UdPR6c9XQ109Hpz00xddPR6c9NXF1v0npjUtMNavTN6ZtZtXFW9M2oKoCM2qAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUqysNQSt6usxRlrRBUUQVFQBTUtGaqlrK1FaAEqoAwAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
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
      image: "/projects/road-corridor.jpg",
      blurhash: "data:image/jpeg;base64,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",
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
      image: "/projects/irrigation-nyaburogo.jpg",
      blurhash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAEPAeIDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAECBgUDBP/EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9QDo5gAAAAAAAAAAACKigAAioAACAIIioAgAiKgqIqAiKgIlVmglSrUoM1KtSglZq1KCVmtVmipWa1WaCVmtVmglZq1KCVmtVmqqVlqs0EqLUVURUABAAAdaAy5gAAACoAogAAAAAAAIAAAIACKgCACIqAIIKIIAglBEq1ASpVZoJUq1mglSrWaglSrUqqzUq1mglSrWaCVKtZoJUqpVVKzVSgiKgqIqKCAAADrRBhzUQBRAFEUAAAEUUQBUAAAAQABAAQBFQBBBRAQRFQESiAMrUoJUpUoJUq1mglSrWaKVmrUoJWatSglZq1mqFZq1KKzUq1KCM1UqiIqCoiooCAKIA60QYc1EAUQBRAFEAUQBRAFEAAQVUAAQAQAEAEBAEEAQQBKICVKtZoFSlSglSlSoqVKtZqiVKtZoJUq1mglSrWaCVKtZoqVKtZUGatQEQSiiCKKggKJoDrQGGAABUAUQBRAFQAAABAFEAAQFQQFQQAEAQQBBAEEAQ1AKlKlFSpSpQKzSpQKzVtZoFZq1mgVmrWaBWatZopWatZqhWVrNAqFZFKhU1QQ1NBUTRVUQB1wmmubmommgommgogCiAKIAogACAogCogCoJoKhqaCoagCCAIIKIIAmiAalLWbQKlLUtBKlKlArNKlArNKlBKlpUtFKzS1KCVKWpaolqUtZtAtS0tZtFW1NTU1QtNS1nRWtTU1NUa0Z0B2Azprm5tDIDQyA0agC6ammgompoNDOmgommgogKCAKiAKmoAaampoLqaamgahqaAhqaAlTUtAqFqUCs2lSgWs2rWbQLWaWpaBazaWpaKWs0tS0C1m0tZtAtS0tZtAtS1LWbRVtS1LWbV0W1m1LWb0arVqWsaaarWprOmmo1ozoaOyE01lzUQBTUNBdNTTQXRNNFUTTQXTU0BdNZNBdNTTQXU1NNBdNTU0F1NTTUF1NTU0F1NNTQNTTU0DUtNTQLUtS1LVUtS0tZtBbWbS1LQLWbS1LQLWbS1LQLWbS1m0C1LUtS0C1m0tZtTQtS1LWbTVW1m1m1m00W1m9M3pNVVtTUFNABAAAAHYaammssrpqaaC6ammgumppoLpqaaC6ampoNaazpoNaazpoLpqamg1qammgupqaagupqaaKaampoLqampoLqampoLqampoLazaWpaBalqWpaBalqWpaBalqWpaBazaWs2mi2s2pazaaq2s2pazami2s2pazaC2sWpemL0sg1emLUGsABQAAAAAAAB1ums6ayy1prOmg1prOmg1prOmg1prOmoNaazpoNamppoLprOmg1prOmirpqamg1qampoLprOmgupqamgupqamgupqamoLqampaC2palqWgWpalqWilqWpazaC2s2lrNqaLaxaWsWpotrNqWs2gtrNqWsXpqQW9MXpL1rLcgtuoCgAAAAAAAAAAADqdNZ01llrTWdNBrTWdNBrTWdNQa01nTQa01nTQa01nTRWtTU1NBrTWdNBrU1nTQa1NZ01BdNZ00F1NTU0F1NTU0VdTU1NBdS1LUtBbWbUtS1BbWbUtS0C1LUtZtTRbWbUtZtRVtZtS1i9LILazemb0xetbkRb0zbqDYAAAAAAAAAAAAAAAA6XTWdNZZa01nTQa01nTQa01nTQa01nTQa01nTUVrTWNNBrTWdNBrTWdTQa01nTQXTWdNRV01nU0GtTWdNBdTU1NBdTU1m0GrWbUtS1BbWbUtZtRWrWbWbUtQW1m1LWbTBbWLUvTHXTUg1enzvSW6y6SC6gKgAAAAAAAAAAAAAAAAADoNNZ01GWtNZ00GtNZ00GtXWNNBvTWNNQa01nTRWtNZ00GtNZ00F01nTQa1NTU1Fa1NTU0GtTWdNBdTU1NBdTU1NQW1LUtZtFW1LUtZtQW1m1LWbWVW1m1LWL0sg1emL0zembW5Bb0zqDaaACAAAAAAAAAAAAAAAAAAAAPc01jTRlvTWdNBrTWdNBrTWdNBrTWdNBrTWdNRWtNY00GtNZ00GtNZ1NBrTWdTRWtNZ1NQa1NTU0F1NTU0VdTUtZtQatZtS1m1Bq1i1LWb0itWsXpm9MWrIrV6ZtTUbkTTUBWQAAAAAAAAAAAAAAAAAAAAAAAHr6azprTLWms6aDWms6aDWms6ag1prOmg1prOmg1prOmitaazqaDWms6ag1qazporWprOmgupqammKupampamC2s2pazaYrVrNrN6YvSYuNXpi9JahgammoqWgCsgAAAAAAAAAAAAAAAAAAAAAAAAAPT01NNbYXTU00F01NTQa01DRV01NNBdNQ0F01nTRWtTUNQXTWdNFXTU1NBdTU1NFXU1NTTBbUtS1m0xVtZvSWsmKWoIzTRBBm0AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAegA6sAIgoigAAACgAAIKoggCAoCAIJRTUtKlFS1i1qsqqIqIIlWozUqAIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
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
