import { Card } from "./ui/card";
import { services } from "../data/services";

const Services = () => {
	return (
		<section
			id="services"
			className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
		>
			<div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
					<h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
						Our Services
					</h2>
					<p className="!text-base text-slate-gray leading-relaxed">
						{"We provide comprehensive construction consultancy and " +
							"surveying solutions tailored to meet your project needs."}
					</p>
				</div>

				<div className="grid md:grid-cols-2 !mx-auto gap-10">
					{services.map((service, index) => (
						<Card key={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
