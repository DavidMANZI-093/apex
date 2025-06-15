"use client";

import React from 'react'
import Link from 'next/link'

type Props = {
    href: string;
    text: string;
    onClick?: () => void;
}

const NavLink = ({ href, text, onClick }: Props) => {
  return (
    <Link href={href} onClick={onClick}>
        <p className="font-normal text-midnight-green text-sm hover:text-verdigris active:!text-midnight-green/70">{text}</p>
    </Link>
  )
}

export default NavLink