"use client";

import React from "react";
import Button from "./button";
import { ArrowRight, Search } from "lucide-react";

const CTAHome = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-4">
			<Button
				onClick={() => (window.location.href = "#contact")}
				iconPosition="right"
				icon={ArrowRight}
			>
				Get&nbsp;a&nbsp;Free&nbsp;Consultation
			</Button>
			<Button
				onClick={() => (window.location.href = "#services")}
				iconPosition="left"
				icon={Search}
				variant="outline"
			>
				Explore&nbsp;Our&nbsp;Services
			</Button>
		</div>
	);
};

export default CTAHome;
