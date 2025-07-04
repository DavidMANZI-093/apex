import Image from "next/image";
import Button from "./ui/button";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative flex h-fit !w-full !py-12 bg-indigo-dye/95">
      <div className="relative w-full flex flex-col gap-10 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full"
                src="/web-app-manifest-192x192.png"
                alt="Echelon Landworks icon"
                width={60}
                height={60}
                placeholder="blur"
                priority={true}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIRIpH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqnVZez6ABD//2Q=="
              />
              <span className="flex flex-col gap-1">
                <p className="text-xl font-bold text-white/80">Echelon Landworks</p>
                <p className="text-xs !text-dutch-white/90">Precision. Innovation. Reliability.</p>
              </span>
            </div>
            <p className="flex !text-sm leading-relaxed text-white/50">
              {"Professional construction consultancy and drone-powered " +
                "surveying solutions across Rwanda. Delivering precision, " +
                "innovation, and reliability."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center gap-2">
            <h4 className="!text-lg !text-dutch-white/80">Quick Links</h4>
            <ul className="flex flex-col">
              {quickLinks.map((link, index) => (
                <li className="!list-inside" key={index}>
                  <a
                    href={link.href}
                    className="!text-sm !text-white/50 hover:!text-dutch-white/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="flex !text-lg !text-dutch-white/80">Newsletter</h4>
            <p className="flex text-white/50 text-sm mb-4">
              Stay updated with our latest projects and industry insights.
            </p>
            <div className="flex flex-wrap items-start gap-4">
              <input
                placeholder="Your email"
                className="flex !bg-white/10 !border !border-white/20 !text-white placeholder:!text-white/50 !text-sm !p-2 !rounded-lg"
              />
              <span className="relative flex flex-col h-fit max-w-48 gap-1">
                <Button variant="gold">Subscribe</Button>
                <p className="flex text-white/50 text-[10px]">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </span>
            </div>
          </div>
        </div>
        <hr className="!border !border-french-grey/20" />
        <div className="flex flex-col md:flex-row justify-between flex-wrap items-center gap-2">
          <div className="flex gap-2">
            <a className="w-11 h-11 !text-white/60 hover:!text-dutch-white/90 transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.linkedin.com/echelonlandworksrwanda" target="_blank" rel="noopener noreferrer">
              <LuLinkedin className="w-5 h-5" />
            </a>
            <a className="w-11 h-11 !text-white/60 hover:!text-dutch-white/90 transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.facebook.com/echelonlandworksrwanda" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a className="w-11 h-11 !text-white/60 hover:!text-dutch-white/90 transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.instagram.com/echelonlandworksrwanda" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="w-5 h-5" />
            </a>
            <a className="w-11 h-11 !text-white/60 hover:!text-dutch-white/90 transition-colors duration-200 rounded-lg flex items-center justify-center" href="https://www.twitter.com/echelonlandworksrwanda" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="w-5 h-5" />
            </a>
          </div>
          <span className="flex flex-col gap-1 items-center md:items-end">
            <p className="flex !text-center !text-dutch-white/70 !text-sm">&copy; {new Date().getFullYear()} Echelon Landworks Ltd. All rights reserved.</p>
            <a className="flex gap-2 group" href="https://github.com/DavidMANZI-093" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-4 h-4 !text-white/50" />
              <p className="flex !text-center !text-white/50 !text-xs group-hover:underline">Proudly built by MANZI David.</p>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
