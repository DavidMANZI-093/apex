"use client";

import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import team from "../../data/team.json";
import Button from "./button";

const Team = () => {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{team.map((value, index) => (
				<div
					key={index}
					className="flex flex-col text-center gap-4 !p-6 rounded-lg shadow shadow-slate-gray/20 items-center justify-between hover:shadow-lg hover:scale-101 ease-in-out transition-all duration-200"
				>
					<div className="flex flex-col gap-4 items-center">
						<div className="w-28 h-28 bg-gradient-to-br from-indigo-dye/25 to-indigo-dye/85 rounded-full flex items-center justify-center mx-auto">
							{value.image ? (
								<Image
									className="object-cover !w-full !h-full !rounded-full"
									src={value.image}
									alt={value.name}
									width={100}
									height={100}
								/>
							) : (
								<User className="w-8 h-8 text-white" />
							)}
						</div>
						<span className="flex flex-col">
							<h4 className="!font-semibold !text-indigo-dye/85">
								{value.name}
							</h4>
							<h5 className="!text-sm !font-medium !text-indigo-dye/65">
								{value.position}
							</h5>
						</span>
						<p className="text-sm text-slate-gray">{value.bio}</p>
					</div>
					<Button variant="outline">View Profile</Button>
				</div>
			))}
		</div>
	);
};

export default Team;
