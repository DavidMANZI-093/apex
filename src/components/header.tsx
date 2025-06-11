import Image from "next/image"
import NavLink from "./nav-link"

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/projects", text: "Projects" },
    { href: "/testimonials", text: "Testimonials" },
]

const Header = () => {
  return (
    <header className="w-full h-fit !px-8 !py-4 flex items-center justify-between border border-zinc-900">
        <div className="flex items-center gap-2">
            <Image src="/icon1.png" alt="APEX Constructions" width={32} height={32} />
            <p className="font-normal text-base">
                <span className="font-semibold text-midnight-green/90">APEX</span>
                <span className="font-medium text-french-grey">Constructions</span>
            </p>
        </div>
        <div className="flex items-center gap-4 mx-2">
            {links.map((link) => (
                <NavLink key={link.href} href={link.href} text={link.text} />
            ))}
            <button className="!bg-midnight-green !px-[12px] !py-[6px] !rounded-md cursor-pointer active:!bg-midnight-green/90">
                <p className="font-normal text-sm text-white/80">Get in touch</p>
            </button>
        </div>
    </header>
  )
}

export default Header