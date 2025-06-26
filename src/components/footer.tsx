import Image from "next/image";
import Button from "./ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative flex h-fit !w-full !p-12 bg-midnight-green">
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col md:col-span-2 gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="APEX icon"
                width={40}
                height={40}
              />
              <p className="text-xl font-bold text-white">APEX</p>
            </div>
            <p className="flex !text-sm leading-relaxed text-french-grey">
              {"Professional construction consultancy and drone-powered " +
                "surveying solutions across Rwanda. Delivering precision, " +
                "innovation, and reliability."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="!text-lg !text-white/70">Quick Links</h4>
            <ul className="flex flex-col">
              {quickLinks.map((link, index) => (
                <li className="!list-inside" key={index}>
                  <a
                    href={link.href}
                    className="!text-sm !text-french-grey hover:!text-tiffany-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="!text-lg !text-white/70">Newsletter</h4>
            <p className="text-french-grey text-sm mb-4">
              Stay updated with our latest projects and industry insights.
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Your email"
                className="bg-white/20 border-white/20 text-white placeholder:!text-french-grey !text-sm !p-2 !rounded-lg"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
