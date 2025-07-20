"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Slide = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = ["slide-1", "slide-2", "slide-3", "slide-4"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => {
				const nextSlide = (prev + 1) % slides.length;
				console.log(`Changing to slide: ${nextSlide}`);
				return nextSlide;
			});
		}, 2000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div
			id="container"
			className="relative rounded-2xl overflow-hidden scale-75 w-full h-[350px] md:h-[500px]"
		>
			{slides.map((slide, index) => {
				return (
					<Image
						key={slide}
						id={slide}
						src={`/slides/${slide}.png`}
						className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
						alt={`Slide ${index + 1}`}
						width={500}
						height={500}
						priority={index === 0} // Only prioritize the first image
					/>
				);
			})}
		</div>
	);
};

export default Slide;