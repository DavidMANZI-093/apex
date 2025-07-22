import CTAHome from "./ui/cta";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative flex !min-w-full !w-full min-h-screen !pt-16 bg-white"
		>
			<div className="relative w-full flex container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="relative grid lg:grid-cols-2 gap-12 items-center">
					<div className="relative flex flex-col gap-8">
						<div className="flex flex-col gap-4 lg:!py-0 !py-8">
							<h1 className="!text-3xl md:!text-4xl !font-bold !text-indigo-dye/85 leading-tight">
								Your Trusted Partner in{" "}
								<span className="text-slate-gray/70">
									Construction Consultancy
								</span>{" "}
								& Advanced Surveying Solutions
							</h1>
							<p className="!text-slate-gray max-w-2xl leading-relaxed">
								Delivering precision, innovation, and reliability through expert
								cosultancy and drone powered surveying.
							</p>
						</div>

						<CTAHome />
					</div>

					<div className="relative flex items-center w-full h-full !pb-12 lg:!py-16">
						<div className="relative w-full h-full rounded-2xl min-h-[350px] max-h-[500px]">
							<video
								className="!absolute !flex !w-full !h-full !object-cover rounded-2xl"
								poster="/thumbnail.jpg"
								src="/echelon-clip.webm"
								autoPlay
								loop
								muted
								playsInline
								preload="auto"
							></video>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
