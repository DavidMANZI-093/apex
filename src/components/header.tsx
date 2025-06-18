"use client";

import Image from "next/image";
import Button from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Services", href: "/services"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-french-grey/20">
      <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/web-app-manifest-192x192.png" alt="APEX icon" width={40} height={40}/>
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
            <Button href="/contact">Get Consultation</Button>
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
      </div>
    </header>
  );
}

export default Header;