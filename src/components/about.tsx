import { ShieldCheck, GraduationCap, Lightbulb, Briefcase, Leaf, Target, Compass, User, Handshake } from "lucide-react";

const about = () => {
  const values = [
    {
      icon: ShieldCheck,
      name: "Trusted",
      description: "8+ Years of Practical Experience",
    },
    {
      icon: GraduationCap,
      name: "Certified",
      description: "Technically Skilled and Certified Professionals",
    },
    {
      icon: Lightbulb,
      name: "Innovative",
      description: "Cutting-edge Surveying Technology",
    },
    {
      icon: Briefcase,
      name: "Proven",
      description: "Strong Government & Private Sector Track Record",
    },
    {
      icon: Leaf,
      name: "Sustainable",
      description: "Environmentally Responsible & Standards Compliant",
    },
  ];

  const team = [
    {
      name: "Elisa Shema",
      position: "Founder & Managing Director",
      bio: "Master's in Geo-information Science, Bachelor's in Land Surveying, Licensed Drone Pilot & GIS Specialist, over 5 years of field and consultancy experience.",
      image: "",
    },
    {
      name: "Rungano Didie",
      position: "Urban & Regional Planning Specialist",
      bio: "Master's in Geo-information Science, Bachelor's in Urban Planning, RUPI member, over 5 years of field and consultancy experience.",
      image: "",
    },
    {
      name: "Ruth Kabarungi",
      position: "Permanent Secretary",
      bio: "ACCA Certificate & Member, Bachelor's Degree in Economics.",
      image: "",
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
            {"Echelon Landworks Ltd is a Rwandan-owned professional firm specializing " +
            "in land surveying, geospatial technologies, and civil engineering support " +
            "services. Established in 2017, we have delivered projects nationwide in " +
            "infrastructure development, environmental management, and industrial site " +
            "planning — earning a trusted reputation for precision and innovation."}
          </p>
        </div>

        <div className="flex gap-8 justify-center flex-wrap">
          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 ease-in-out transition-all duration-200">
            <span className="flex w-16 h-16 items-center justify-center !rounded-full !bg-slate-gray !mb-4">
              <Target className="w-8 h-8 !text-white" />
            </span>
            <h3 className="!text-lg !font-semibold !text-indigo-dye/85">Our Vision</h3>
            <p className="text-slate-gray/80 leading-relaxed !text-center">
              {"To become a national leader in high-precision land surveying and geospatial " +
              "services, contributing to sustainable development and smart infrastructure " +
              "planning in Rwanda and beyond."}
            </p>
          </div>

          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 ease-in-out transition-all duration-200">
            <span className="flex w-16 h-16 items-center justify-center !rounded-full !bg-slate-gray !mb-4">
              <Compass className="w-8 h-8 !text-white" />
            </span>
            <h3 className="!text-lg !font-semibold !text-indigo-dye/85">Our Mission</h3>
            <p className="text-slate-gray/80 leading-relaxed !text-center">
              {"To provide accurate, efficient, and technology-driven solutions in land surveying " +
              "and construction support — ensuring client satisfaction, legal compliance, and " +
              "sustainable land use."}
            </p>
          </div>

          <div className="flex flex-col gap-1 min-w-64 w-72 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 ease-in-out transition-all duration-200">
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
            Why Choose Us?
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
            {team.map((value, index) => (
              <div key={index} className="flex flex-col text-center gap-4 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center hover:shadow-lg hover:scale-101 ease-in-out transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-dye/25 to-indigo-dye/85 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-8 h-8 text-white" />
                </div>
                <span className="flex flex-col">
                  <h4 className="!font-semibold !text-indigo-dye/85">
                    {value.name}
                  </h4>
                  <h5 className="!text-sm !font-medium !text-indigo-dye/65">
                    {value.position}
                  </h5>
                </span>
                <p className="text-sm text-slate-gray/80">{value.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
