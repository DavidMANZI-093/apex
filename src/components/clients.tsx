import { Building2, Landmark, MapPin, Sprout, TrendingUp, Users } from 'lucide-react';
import React from 'react';
import { CardSx } from './ui/card';

const Clients = () => {
    const clients = [
        {
            name: "Rwanda Transport Development Agency",
            acronym: "RTDA",
            sector: "Government",
            description: "Leading Rwanda's transport infrastructure development with precision mapping and surveying services.",
            services: ["Drone Surveying", "GIS Mapping"],
            icon: MapPin,
        },
        {
            name: "Kigali Infrastructure Development",
            acronym: "KID",
            sector: "Private",
            description: "Transforming Kigali's skyline through innovative construction consultancy and project management.",
            services: ["Construction Consultancy", "Site Supervision"],
            icon: Building2,
        },
        {
            name: "Rwanda Agriculture Board",
            acronym: "RAB",
            sector: "Government",
            description: "Optimizing agricultural land use through advanced surveying and precision mapping technologies.",
            services: ["Land Surveying", "Agricultural Mapping"],
            icon: Sprout,
        },
        {
            name: "Kigali City Council",
            acronym: "KCC",
            sector: "Government",
            description: "Ensuring urban development compliance through comprehensive monitoring and supervision services.",
            services: ["Urban Planning", "Development Monitoring"],
            icon: Landmark,
        },
        {
            name: "Private Developers Consortium",
            acronym: "PDC",
            sector: "Private",
            description: "Supporting private sector growth with end-to-end construction consultancy and technical expertise.",
            services: ["Project Management", "Technical Consulting"],
            icon: Users,
        },
        {
            name: "Rwanda Development Board",
            acronym: "RDB",
            sector: "Government",
            description:"Facilitating national development through strategic infrastructure planning and implementation support.",
            services: ["Strategic Planning", "Infrastructure Development"],
            icon: TrendingUp,
        },
    ] as const;

    const stats = [
        { number: "50+", label: "Trusted Partners", description: "Government and private sector clients" },
        { number: "200+", label: "Projects Completed", description: "Across construction and surveying" },
        { number: "15,000+", label: "Hectares Mapped", description: "Using advanced drone technology" },
        { number: "99.8%", label: "Client Satisfaction", description: "Based on project completion rates" },
    ];

  return (
    <section
      id="clients"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">    
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">Trusted by Leading Organizations</h2>
          <p className="!text-base text-slate-gray/80 leading-relaxed">
            {"From government agencies to private developers, Rwanda's most " +
            "respected organizations choose Echelon Landworks for their " +
            "construction consultancy and surveying needs."}
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !mx-auto !mb-16 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col gap-2 max-w-80 items-center !p-6 !rounded-lg !bg-white !shadow-md !shadow-slate-gray/20 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200'>
              <span className='!text-3xl !text-center md:!text-4xl !font-medium !text-dutch-white mb-6'>{stat.number}</span>
              <p className='!text-lg !text-center !font-semibold text-indigo-dye/80 leading-relaxed'>{stat.label}</p>
              <p className='!text-sm !text-center text-slate-gray/80 leading-relaxed'>{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <CardSx key={index} {...client} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients;