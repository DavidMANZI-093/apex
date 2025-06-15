"use client"

import Image from "next/image"
import NavLink from "./nav-link"
import { Button, ButtonIcon, ButtonLink } from "./buttons"
import {MessageSquareText, Menu, X, Home, Info, Briefcase, Box} from "lucide-react"
import { useState, useEffect } from "react"

const links = [
    { href: "/", text: "Home", icon: Home },
    { href: "/about", text: "About", icon: Info },
    { href: "/services", text: "Services", icon: Briefcase },
    { href: "/projects", text: "Projects", icon: Box },
    { href: "/testimonials", text: "Testimonials", icon: MessageSquareText },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

  return (
    <header className="relative w-full h-16 md:!px-8 !px-4 !py-4 flex items-center z-4 justify-between">
        <div className="flex items-center gap-2">
            <Image src="/icon1.png" alt="APEX Constructions" width={32} height={32} />
            <p className="font-normal text-base">
                <span className="font-semibold text-midnight-green/90">APEX</span>
                <span className="font-medium text-french-grey">Constructions</span>
            </p>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 mx-2">
            {links.map((link) => (
                <NavLink key={link.href} href={link.href} text={link.text} />
            ))}
            <Button text="Get in touch" icon={MessageSquareText} />
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
            <ButtonIcon icon={isOpen ? X : Menu} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className={`${isOpen ? "fixed" : "hidden"} top-16 left-0 backdrop-blur-sm w-screen h-screen`}>
            
        </div>
        <div className={`absolute ${isOpen ? "!h-fit flex flex-col" : "!h-0 hidden"} w-fit top-[70px] gap-2 !pr-6 right-0 z-5`}>
            <ul className="relative bg-white w-fit rounded overflow-hidden !shadow-lg shadow-midnight-green">
                {links.map((link) => (
                    <ButtonLink key={link.href} href={link.href} text={link.text} icon={link.icon} />
                ))}
            </ul>
            <Button shadow text="Get in touch" icon={MessageSquareText} />
        </div>
    </header>
  )
}

export default Header