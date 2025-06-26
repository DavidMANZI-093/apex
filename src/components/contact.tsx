import { Mail, MapPin, Phone } from "lucide-react";
import Button from "./ui/button";
import { LuLinkedin } from "react-icons/lu";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white/5"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-midnight-green/70 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-french-grey leading-relaxed">
            {"Interested in our services or looking to partner " +
              "with us? Reach out today!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="flex flex-col gap-6 !p-8 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md">
            <div className="flex flex-col">
              <h4 className="!text-lg !font-medium !text-midnight-green/70 mb-6">
                Send us a message
              </h4>
              <p className="!text-sm !text-french-grey leading-relaxed">
                {"Fill out the form below and we'll get back " +
                  "to you within 24 hours."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label
                    className="!text-sm !font-medium !text-midnight-green/70"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="flex !text-sm !p-2 !rounded-lg !border !border-french-grey/30"
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    className="!text-sm !font-medium !text-midnight-green/70"
                    htmlFor="company"
                  >
                    Company/Organization
                  </label>
                  <input
                    className="flex !text-sm !p-2 !rounded-lg !border !border-french-grey/30"
                    id="company"
                    type="text"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col w-full gap-2">
                  <label
                    className="!text-sm !font-medium !text-midnight-green/70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex !text-sm !p-2 !rounded-lg !border !border-french-grey/30"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="!text-sm !font-medium !text-midnight-green/70"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="flex !text-sm !p-2 !rounded-lg !border !border-french-grey/30"
                    id="phone"
                    placeholder="+250 7XX XXX XXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="!text-sm !font-medium !text-midnight-green/70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex w-full !h-24 !text-sm !p-2 !rounded-lg !border !border-french-grey/30"
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                />
              </div>
            </div>
            <Button>Send Message</Button>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-6 !p-8 !rounded-lg !bg-white">
            <h4 className="!text-lg !font-medium !text-midnight-green/70 mb-6">
                Get in touch
            </h4>

            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="w-11 h-11 bg-verdigris/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-verdigris" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="!text-sm !font-medium !text-midnight-green/70">Phone</p>
                  <p className="!text-sm !text-french-grey">+250 793 245 612</p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-11 h-11 bg-verdigris/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-verdigris" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="!text-sm !font-medium !text-midnight-green/70">Email</p>
                  <p className="!text-sm !text-french-grey">info@apexrwanda.com</p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-11 h-11 bg-verdigris/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-verdigris" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="!text-sm !font-medium !text-midnight-green/70">Address</p>
                  <p className="!text-sm !text-french-grey">Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="!text-lg !font-medium !text-midnight-green/70">Follow us</h5>
              <div className="flex gap-2">
                <a className="w-11 h-11 bg-verdigris/10 !text-midnight-green/80 hover:!bg-verdigris hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.linkedin.com/apexrwanda" target="_blank" rel="noopener noreferrer">
                  <LuLinkedin className="w-5 h-5" />
                </a>
                <a className="w-11 h-11 bg-verdigris/10 !text-midnight-green/80 hover:!bg-verdigris hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.facebook.com/apexrwanda" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a className="w-11 h-11 bg-verdigris/10 !text-midnight-green/80 hover:!bg-verdigris hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.instagram.com/apexrwanda" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a className="w-11 h-11 bg-verdigris/10 !text-midnight-green/80 hover:!bg-verdigris hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.twitter.com/apexrwanda" target="_blank" rel="noopener noreferrer">
                  <RiTwitterXLine className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
