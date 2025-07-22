"use client";

import Button from "./button";

const JoinUs = () => {
	return (
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
	);
};

export default JoinUs;
