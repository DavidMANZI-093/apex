"use client";

import Image from "next/image";
import Button from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm !border-b !border-slate-gray/20">
			<div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<Image
							className="rounded-full"
							src="/web-app-manifest-192x192.png"
							alt="Echelon Landworks icon"
							placeholder="blur"
							priority={true}
							blurDataURL={
								"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIRIpH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqnVZez6ABD//2Q=="
							}
							width={60}
							height={60}
						/>
						<span className="flex flex-col items-start">
							<p className="text-xl font-bold text-indigo-dye/85">
								Echelon Landworks
							</p>
							<p className="text-sm font-medium text-slate-gray">
								Precision. Innovation. Reliability
							</p>
						</span>
					</div>
					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-6 lg:gap-8">
						{navLinks.map((link) => {
							return (
								<a
									key={link.name}
									href={link.href}
									className="!text-sm font-medium !text-indigo-dye/70 hover:!text-indigo-dye/40 transition-colors duration-200"
								>
									{link.name}
								</a>
							);
						})}
						<Button
							onClick={() => {
								window.location.href = "#contact";
							}}
						>
							Get Consultation
						</Button>
					</nav>

					{/* Mobile Navigation */}
					<button
						className="lg:hidden !p-2 cursor-pointer hover:!bg-indigo-dye/5 !rounded-lg transition-colors duration-200"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="w-6 h-6 text-indigo-dye/70" />
						) : (
							<Menu className="w-6 h-6 text-indigo-dye/70" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden !py-4 !border-t !border-slate-gray/20">
						<nav className="flex flex-col gap-1 transition-colors duration-200">
							{navLinks.map((link) => {
								return (
									<a
										key={link.name}
										href={link.href}
										className="!text-indigo-dye/70 !py-2 !rounded-lg hover:bg-indigo-dye/5 !text-[15px] !text-center transition-colors duration-200"
									>
										{link.name}
									</a>
								);
							})}
							<Button
								onClick={() => {
									window.location.href = "#contact";
								}}
							>
								Get Consultation
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
