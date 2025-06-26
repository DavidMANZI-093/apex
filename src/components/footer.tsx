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
    <footer className="relative flex h-fit !w-full !py-12 bg-midnight-green">
      <div className="relative w-full flex flex-col gap-10 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/web-app-manifest-192x192.png"
                alt="APEX icon"
                width={40}
                height={40}
                placeholder="blur"
                priority={true}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACGAIYDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECAxESITH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIxEv/aAAwDAQACEQMRAD8AxUmlKTTTiz9f4y7a+kZdxXK+svWfjM2byz65338Zsd+Km7J6ac7VccvDGr1I7zz5GjMcxhfHO1qTHn6ujEXzHc81JgWc4SR0/wAuWI1hKWnsJVRwACNVLqKEsR0Q3Gbpls1Ed59WMdTWPWS/DTeYnJWZrPOauOVq+OLRjkL82+oc+LRnmtnmrnmy3OcQnM3w0TA+BrGa5LctNylrImM+olpfcR0rNhAW0Ky9Athy2I6p6idytY58iYj8GzhSZUzgMJjmvjmbGFsYRrC5wpMKZwpMCo/Dlw0fLlyDLrKO8tesodIIx9Izba+kZOis1GhzX9DTD1HLDOMupfHPD+CQHJlXOXMxbOUHcZXxkuMrYyK7nKky7mHkBP5LrK3hdQGbcZ+ka9xm6QGLrGPq3dYx9YsZrLr+gan6GmHrABl0HjsgNIBsxXMJmK5iKpiLZieVsgfMPIXJ4K5SaPSaBHbN0ats3QRj6sfWNvVk6RUrJqfoPZ+hpl6QAYadho5DQD5VynlXIquVco5VzQUlN6SV31A1pNUWk1QJus/RbdQ3VGboy9I1dGfcVGewHsAy2COGiK7DwsNBT5UynFICkp5UpTyoqso9T9H0B7ouqW6JdANVHdNqp6qoltHUV0noRKwH8Airscdgp4aFhogeHhIaCnld9KPQP659F9ctA10S1y0toC1O120tohaSmrioXwOgDOwBA8NABTw0AB0ACgtAAtLQBC0tAAtcAVAAAf/Z"
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
          <div className="flex flex-col md:items-center gap-2">
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
          <div className="flex flex-col gap-3">
            <h4 className="flex !text-lg !text-white/70">Newsletter</h4>
            <p className="flex text-french-grey text-sm mb-4">
              Stay updated with our latest projects and industry insights.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <input
                placeholder="Your email"
                className="flex !bg-white/10 !border !border-white/20 !text-white placeholder:!text-french-grey !text-sm !p-2 !rounded-lg"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <hr className="!border !border-french-grey/20" />
        <p className="!text-center !text-french-grey !text-sm">Copyright &copy; {new Date().getFullYear()} APEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
