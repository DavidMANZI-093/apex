import { CardTx } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Echelon Landworks Ltd demonstrated outstanding professionalism and technical expertise in supporting the Ministry's initiatives to map, survey, and digitalize industrial zones across the country. Their work on the Industrial Land Portal was instrumental in improving our land management systems. We highly appreciate their timely delivery and collaborative approach.",
      author: "Christian Twahirwa",
      position: "Director General of Industry & Entrepreneur Development",
      company: "Ministry of Trade and Industry (MINICOM), Rwanda",
      rating: 5,
    },
    {
      quote:
        "Working with Echelon Landworks Ltd during our Masoro excavation project was a seamless experience. Their precise cut-and-fill analysis and topographic support helped us stay on schedule and budget. Their team brings a great balance of innovation and field accuracy.",
      author: "Alfred NKURIKIYIMANA",
      position: "Managing Director",
      company: "CLAU General Ltd",
      rating: 5,
    },
    {
      quote:
        "Echelon Landworks brought valuable expertise in conducting detailed topographic mapping under tough conditions in Bangui. Their survey outputs were crucial for the planning and design of the waste management facility. Their professional team adapted well to international standards and multi-agency coordination.",
      author: "Hirwa HOMIDAS",
      position: "Project Manager",
      company: "LE REJETON (COWI Rwanda Ltd Subcontractor)",
      rating: 5,
    },
    {
      quote:
        "We commend Echelon Landworks Ltd for their excellent geospatial work and flood risk mapping in Rutsiro District. Their analysis and field data collection informed our district planning strategies and disaster preparedness interventions. We look forward to future collaborations.",
      author: "NULL",
      position: "District Engineer",
      company: "Rutsiro District - Local Government",
      rating: 5,
    },
    {
      quote:
        "Their ability to apply remote sensing techniques such as NDVI and NDMI in monitoring wetland recovery was highly beneficial for our restoration project. Echelon Landworks Ltd is a forward-thinking company we trust for environment-related spatial analysis.",
      author: "NULL",
      position: "Wetland Restoration Program Coordinator",
      company: "Wetlands Restoration Task Force - Kigali Environmental Project",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-gray/80 leading-relaxed">
            {"Don't just take our word for it. Here's what our " +
              "satisfied clients have to say about our services."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <CardTx key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
