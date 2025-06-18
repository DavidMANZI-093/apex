import React from 'react';

type Props = {
    children: React.ReactNode;
    href?: string;
    className?: string;
    variant?: "default" | "outline";
};

const Button = (props: Props) => {
  return (
    <button className={props.className ? props.className : `!py-2 !px-4 !rounded-lg !bg-verdigris hover:!bg-tiffany-blue !text-white !text-[15px] transition-colors duration-200 ${props.variant === "outline" ? "border border-tiffany-blue bg-transparent !text-tiffany-blue hover:bg-tiffany-blue hover:!text-white" : ""}`}>
        {props.children}
    </button>
  );
}

export default Button;