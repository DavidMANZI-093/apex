"use client";

import Image from "next/image";
import Button from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Services", href: "#services"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm !border-b !border-french-grey/20">
      <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/web-app-manifest-192x192.png" alt="APEX icon" placeholder="blur" priority={true} blurDataURL={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACGAIYDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECAxESITH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIxEv/aAAwDAQACEQMRAD8AxUmlKTTTiz9f4y7a+kZdxXK+svWfjM2byz65338Zsd+Km7J6ac7VccvDGr1I7zz5GjMcxhfHO1qTHn6ujEXzHc81JgWc4SR0/wAuWI1hKWnsJVRwACNVLqKEsR0Q3Gbpls1Ed59WMdTWPWS/DTeYnJWZrPOauOVq+OLRjkL82+oc+LRnmtnmrnmy3OcQnM3w0TA+BrGa5LctNylrImM+olpfcR0rNhAW0Ky9Athy2I6p6idytY58iYj8GzhSZUzgMJjmvjmbGFsYRrC5wpMKZwpMCo/Dlw0fLlyDLrKO8tesodIIx9Izba+kZOis1GhzX9DTD1HLDOMupfHPD+CQHJlXOXMxbOUHcZXxkuMrYyK7nKky7mHkBP5LrK3hdQGbcZ+ka9xm6QGLrGPq3dYx9YsZrLr+gan6GmHrABl0HjsgNIBsxXMJmK5iKpiLZieVsgfMPIXJ4K5SaPSaBHbN0ats3QRj6sfWNvVk6RUrJqfoPZ+hpl6QAYadho5DQD5VynlXIquVco5VzQUlN6SV31A1pNUWk1QJus/RbdQ3VGboy9I1dGfcVGewHsAy2COGiK7DwsNBT5UynFICkp5UpTyoqso9T9H0B7ouqW6JdANVHdNqp6qoltHUV0noRKwH8Airscdgp4aFhogeHhIaCnld9KPQP659F9ctA10S1y0toC1O120tohaSmrioXwOgDOwBA8NABTw0AB0ACgtAAtLQBC0tAAtcAVAAAf/Z"} width={40} height={40}/>
            <span className="flex">
                <p className="text-xl font-bold text-midnight-green">APEX</p>
                {/* <p className="text-xl font-medium text-french-grey">Constructions</p> */}
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              return (
                <a key={link.name} href={link.href} className="!text-[15px] !text-midnight-green hover:!text-verdigris transition-colors duration-200">
                  {link.name}
                </a>
              );
            })}
            <Button onClick={() => {window.location.href = "#contact"}}>Get Consultation</Button>
          </nav>

          {/* Mobile Navigation */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-midnight-green" />
            ) : (
              <Menu className="w-6 h-6 text-midnight-green" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden !py-4 botder-t border-french-grey/20">
            <nav className="flex flex-col gap-1 transition-colors duration-200">
              {navLinks.map((link) => {
                return (
                  <a key={link.name} href={link.href} className="!text-midnight-green/70 !py-2 !rounded-lg hover:!text-verdigris/70 hover:bg-verdigris/10 !text-[15px] !text-center transition-colors duration-200">
                    {link.name}
                  </a>
                );
              })}
              <Button onClick={() => {window.location.href = "#contact"}}>Get Consultation</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;