import Image from "next/image";

const Slide = () => {
	const slides = [
		{
			name: "slide-1",
			blurhash: ""
		}
		{
			name: "slide-2",
			blurhash: ""
		}
		{
			name: "slide-3",
			blurhash: ""
		}
		{
			name: "slide-4",
			blurhash: ""
		}
		{
			name: "slide-5",
			blurhash: ""
		}
	]

	return (
		<div
			id="container"
			className="relative rounded-2xl overflow-hidden scale-75 w-full h-[350px] md:h-[500px]"
		>
			{slides.map((slide, index) => {
				return (
					<Image
						key={slide.name}
						id={slide.name}
						src={`/slides/${slide.name}.png`}
						className={`absolute top-0 left-0 !w-full !h-full object-cover transition-opacity duration-1000`}
						alt={`Slide ${index + 1}`}
						width={500}
						height={500}
						placeholder="blur"
						blurDataURL={slide.blurhash}
					/>
				);
			})}
		</div>
	);
};

export default Slide;
