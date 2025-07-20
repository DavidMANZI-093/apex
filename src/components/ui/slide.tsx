"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Slide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ["slide-1", "slide-2", "slide-3", "slide-4"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div 
            id="container"
            className="flex flex-col gap-8 rounded-2xl overflow-hidden scale-75"
        >
            {slides.map((slide, index) => (
                <Image
                    key={slide}
                    id={slide}
                    src={`/slides/${slide}.png`}
                    className={`!w-full !h-full object-cover min-h-[350px] max-h-[500px] aspect-[1/1] transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                    alt="about"
                    width={500}
                    height={500}
                    priority={index === 0}
                />
            ))}
        </div>
    );
};

export default Slide;