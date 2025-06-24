import { LucideIcon } from 'lucide-react';
import React from 'react';

type Props = {
    children: React.ReactNode;
    href?: string;
    className?: string;
    variant?: "default" | "outline";
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
};

const Button = (props: Props) => {
  return (
    <button className={props.className ? props.className : `flex items-center justify-center gap-2 !py-2 !px-4 !rounded-lg !text-[15px] transition-colors duration-200 active:!bg-verdigris cursor-pointer ${props.variant === "outline" ? "!border-[1.5px] !border-tiffany-blue/80 bg-transparent !text-tiffany-blue hover:!bg-tiffany-blue hover:!text-white" : "!bg-verdigris hover:!bg-tiffany-blue !text-white"}`}>
        {props.iconPosition === "left" && props.icon && <props.icon className='w-5 h-5' />}
        {props.children}
        {props.iconPosition === "right" && props.icon && <props.icon className='w-5 h-5' />}
    </button>
  );
}

export default Button;