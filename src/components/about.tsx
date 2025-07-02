import { Shield, Lightbulb, Award, Leaf, Users, Target, Compass, Handshake } from "lucide-react";

const about = () => {
  const values = [
    {
      icon: Shield,
      name: "Integrity",
      description: "Honest and transparent in all our dealings",
    },
    {
      icon: Lightbulb,
      name: "Innovation",
      description: "Embracing cutting-edge technology and methods",
    },
    {
      icon: Award,
      name: "Excellence",
      description: "Delivering superior quality in every project",
    },
    {
      icon: Leaf,
      name: "Sustainability",
      description: "Committed to environmentally responsible practices",
    },
    {
      icon: Users,
      name: "Client-Centered",
      description: "Putting our clients' needs at the heart of everything",
    },
  ];

  return (
    <section
      id="about"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white/5"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">Who We Are</h2>
          <p className="text-slate-gray/80 leading-relaxed">
            {"Echelon Landworks is a professional consultancy firm specialized " +
              "in construction project management, topographic and land " +
              "surveying, site supervision, and cutting-edge drone " +
              "surveying solutions. We serve public and private sector " +
              "clients across Rwanda, offering expertise backed by " +
              "technology, precision, and integrity."}
          </p>
        </div>

        <div className="flex gap-8 justify-center flex-wrap">
          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 transition-all duration-200">
            <span className="flex w-16 h-16 items-center justify-center !rounded-full !bg-slate-gray !mb-4">
              <Target className="w-8 h-8 !text-white" />
            </span>
            <h3 className="!text-lg !font-semibold !text-indigo-dye/85">Our Vision</h3>
            <p className="text-slate-gray/80 leading-relaxed !text-center">
              {"To redefine the construction and surveying industry " +
                "by integrating traditional practices with innovative " +
                "technologies such as drone mapping and aerial inspections."}
            </p>
          </div>

          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 transition-all duration-200">
            <span className="flex w-16 h-16 items-center justify-center !rounded-full !bg-slate-gray !mb-4">
              <Compass className="w-8 h-8 !text-white" />
            </span>
            <h3 className="!text-lg !font-semibold !text-indigo-dye/85">Our Mission</h3>
            <p className="text-slate-gray/80 leading-relaxed !text-center">
              {"To deliver accurate, cost-effective, and timely solutions " +
                "that empower our clients to make informed decisions " +
                "and execute successful projects."}
            </p>
          </div>

          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 transition-all duration-200">
            <span className="flex w-16 h-16 items-center justify-center !rounded-full !bg-slate-gray !mb-4">
              <Handshake className="w-8 h-8 !text-white" />
            </span>
            <h3 className="!text-lg !font-semibold !text-indigo-dye/85">Our Commitment</h3>
            <p className="text-slate-gray/80 leading-relaxed !text-center">
              {"To maintain the highest standards of professionalism " +
                "while fostering long-term partnerships build on trust, " +
                "reliability, and exceptional service delivery."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="!text-2xl !font-medium !text-indigo-dye/85 !text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col text-center gap-2 items-center group">
                <div className="w-16 h-16 bg-dutch-white/75 group-hover:bg-indigo-dye/85 transition-colors duration-200 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-slate-gray group-hover:text-white transition-colors duration-200" />
                </div>
                <h4 className="!font-medium !text-indigo-dye/85">
                  {value.name}
                </h4>
                <p className="text-sm text-slate-gray/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="!text-2xl !font-medium !text-indigo-dye/85 !text-center mb-12">
            Our Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col text-center gap-2 items-center group">
                <div className="w-16 h-16 bg-dutch-white/75 group-hover:bg-indigo-dye/85 transition-colors duration-200 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-slate-gray group-hover:text-white transition-colors duration-200" />
                </div>
                <h4 className="!font-medium !text-indigo-dye/85">
                  {value.name}
                </h4>
                <p className="text-sm text-slate-gray/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
