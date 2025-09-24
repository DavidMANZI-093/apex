"use client";

import { Loader2, LucideIcon } from "lucide-react";
import React from "react";

type Props = {
	children: React.ReactNode;
	href?: string;
	className?: string;
	variant?: "default" | "outline" | "gold";
	icon?: LucideIcon;
	iconPosition?: "left" | "right";
	loading?: boolean;
	onClick?: () => void;
};

const Button = (props: Props) => {
	return (
		<button
			className={
				props.className
					? props.className
					: `flex items-center justify-center gap-2 !py-2 !px-4 !rounded-lg !text-[15px] !font-medium transition-colors duration-200 ${props.loading ? "!cursor-not-allowed" : "cursor-pointer active:!bg-slate-gray"} ${props.variant === "outline" ? "!border-[1.5px] !border-slate-gray hover:!border-transparent bg-transparent !text-slate-gray hover:!bg-indigo-dye/70 hover:!text-white" : props.variant === "gold" ? "!bg-dutch-white/90 hover:!bg-dutch-white/85 !text-indigo-dye/90" : "!bg-slate-gray hover:!bg-indigo-dye/70 !text-white"}`
			}
			onClick={props.loading ? undefined : props.onClick}
		>
			{props.loading ? (
				<>
					<Loader2 className="w-5 h-5 animate-spin" />
				</>
			) : (
				<>
					{props.iconPosition === "left" && props.icon && (
						<props.icon className="w-5 h-5" />
					)}
					{props.children}
					{props.iconPosition === "right" && props.icon && (
						<props.icon className="w-5 h-5" />
					)}
				</>
			)}
		</button>
	);
};

export default Button;
