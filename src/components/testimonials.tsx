import { CardTx } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Their drone-assisted supervision helped us save time and money while maintaining high-quality construction standards.",
      author: "Jane Doe",
      position: "Project Manager",
      company: "XYZ Ltd.",
      rating: 4
    },
    {
      quote:
        "APEX's topographic surveying was incredibly accurate and delivered ahead of schedule. Their professionalism is unmatched.",
      author: "John Smith",
      position: "Development Director",
      company: "ABC Construction",
      rating: 3
    },
    {
      quote:
        "The 3D modeling and progress mapping provided invaluable insights for our project management team.",
      author: "Sarah Johnson",
      position: "Site Engineer",
      company: "BuildRight Corp",
      rating: 5
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

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <CardTx key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
