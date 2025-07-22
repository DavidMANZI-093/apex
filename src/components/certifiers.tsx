import { CardSx } from "./ui/card.tsx";
import { certifiers } from "../data/certifiers.ts";
import stats from "../data/stats.json";
import JoinUs from "./ui/join-us.tsx";

const Certifiers = () => {
	return (
		<section
			id="certifiers"
			className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white"
		>
			<div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
					<h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
						Trusted & Certified by Leading Organizations
					</h2>
					<p className="!text-base text-slate-gray leading-relaxed">
						{"Our high standards are validated by key government bodies, reputable " +
							"professional associations, and respected organizations across " +
							"Rwanda for all land surveying needs."}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 !mx-auto gap-8">
					{certifiers.map((client, index) => (
						<CardSx key={index} {...client} />
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !mx-auto !mb-16 gap-8">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col gap-2 max-w-80 items-center !p-6 !rounded-lg !bg-white !shadow-md !shadow-slate-gray/20 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200"
						>
							<span className="!text-3xl !text-center md:!text-4xl !font-medium !text-dutch-white mb-6">
								{stat.number}
							</span>
							<p className="!text-lg !text-center !font-semibold text-indigo-dye/80 leading-relaxed">
								{stat.label}
							</p>
							<p className="!text-sm !text-center text-slate-gray leading-relaxed">
								{stat.description}
							</p>
						</div>
					))}
				</div>

				<JoinUs />
			</div>
		</section>
	);
};

export default Certifiers;
