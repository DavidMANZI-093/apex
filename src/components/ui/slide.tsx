import Image from "next/image";

const Slide = () => {
	const slides = ["slide-1", "slide-2", "slide-3", "slide-4"];

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
						className={`absolute top-0 left-0 !w-full !h-full object-cover transition-opacity duration-1000`}
						alt={`Slide ${index + 1}`}
						width={500}
						height={500}
					/>
				);
			})}
		</div>
	);
};

export default Slide;
