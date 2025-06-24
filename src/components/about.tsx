import { Shield, Lightbulb, Award, Leaf, Users } from "lucide-react";

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
      className="relative flex !min-w-full !w-full min-h-screen !pt-16 bg-white"
    >
      <div className="relative w-full flex flex-col gap-12 container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="flex flex-col max-w-4xl mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-midnight-green/70 mb-6">
            Who We Are
          </h2>
          <p className="text-french-grey leading-relaxed">
            {"APEX is a professional consultancy firm specialized " +
              "in construction project management, topographic and land " +
              "surveying, site supervision, and cutting-edge drone " +
              "surveying solutions. We serve public and private sector " +
              "clients across Rwanda, offering expertise backed by " +
              "technology, precision, and integrity."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-1">
            <h3 className="!text-lg !font-medium !text-midnight-green/70">Our Vision</h3>
            <p className="text-french-grey leading-relaxed">
              {"To redefine the construction and surveying industry " +
                "by integrating traditional practices with innovative " +
                "technologies such as drone mapping and aerial inspections."}
            </p>
          </div>

          <div className="flex flex-col gap-1 items-center sm:items-start">
            <h3 className="!text-lg !font-medium !text-midnight-green/70">Our Mission</h3>
            <p className="text-french-grey leading-relaxed">
              {"To deliver accurate, cost-effective, and timely solutions " +
                "that empower our clients to make informed decisions " +
                "and execute successful projects."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="!text-2xl !font-medium !text-midnight-green/70 !text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col text-center space-y-4 items-center">
                <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-verdigris" />
                </div>
                <h4 className="font-semibold text-midnight-green">
                  {value.name}
                </h4>
                <p className="text-sm text-french-grey">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
