"use client";

import React from "react";
import { CardSx } from "./ui/card";
import Button from "./ui/button";
import { certifiers } from "../data/certifiers.ts";
import stats from "../data/stats.json";

const Clients = () => {
	return (
		<section
			id="clients"
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

				<div className="flex flex-col max-w-4xl !mx-auto text-center !gap-4">
					<h2 className="!text-xl md:!text-2xl !font-medium !text-indigo-dye/85 mb-6">
						Join Rwanda&apos;s Leading Organizations
					</h2>
					<p className="!text-base text-slate-gray leading-relaxed">
						{"Ready to experience the precision, innovation, and reliability " +
							"that has made us Rwanda's trusted partner" +
							"in construction consultancy and surveying?"}
					</p>
					<div className="flex gap-4 flex-wrap items-center justify-center">
						<Button onClick={() => (window.location.href = "#contact")}>
							Start Your Project
						</Button>
						<Button
							variant="outline"
							onClick={() => (window.location.href = "#projects")}
						>
							See Our Work
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Clients;
