"use client"

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    text?: string;
    invert?: boolean;
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
    shadow?: boolean;
}

const Button = (props: Props) => {
  return (
    <button className={`!px-[12px] !py-[6px] flex items-center gap-2 !rounded-md cursor-pointer active:!bg-midnight-green/90 ${props.invert ? "!bg-white !text-midnight-green" : "!bg-midnight-green !text-white"} ${props.shadow ? " !shadow-lg shadow-midnight-green" : ""}`} onClick={props.onClick}>
        {props.icon && <props.icon className="w-4 h-4" />}
        <p className={`font-normal text-sm ${props.invert ? "text-midnight-green" : "text-white"}`}>{props.text}</p>
    </button>
  )
}

const ButtonIcon = (props: Props) => {
    return (
        <button className={`!px-[12px] !py-[6px] flex items-center gap-2 !rounded-md cursor-pointer active:!bg-midnight-green/90 ${props.invert ? "!bg-white !text-midnight-green" : "!bg-midnight-green !text-white"}`} onClick={props.onClick}>
            {props.icon && <props.icon className="w-4 h-4" />}
        </button>
    )
}

const ButtonLink = (props: Props) => {
    return (
        <Link href={props.href || "#"} className={`!px-[12px] !py-[6px] relative flex items-center justify-center gap-2 cursor-pointer active:!bg-midnight-green/10 !bg-white !text-midnight-green`} onClick={props.onClick}>
            {props.icon && <props.icon className="w-4 h-4" />}
            <p className={`relative flex items-center w-full font-normal text-sm text-midnight-green`}>{props.text}</p>
        </Link>
    )
}

export { Button, ButtonIcon, ButtonLink }