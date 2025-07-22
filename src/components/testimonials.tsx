import { CardTx } from "./ui/card";
import testimonials from "../data/testimonials.json";

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
		>
			<div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
					<h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
						Our Amazing Clients
					</h2>
					<p className="text-slate-gray leading-relaxed">
						{
							"We're proud to work with a diverse range of clients. See who trusts us."
						}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !mx-auto gap-4">
					{testimonials.map((testimonial, index) => (
						<CardTx key={index} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
