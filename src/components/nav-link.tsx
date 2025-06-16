"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    href: string;
    text: string;
    onClick?: () => void;
}

const NavLink = ({ href, text, onClick }: Props) => {
  const pathname = usePathname()
  return (
    <Link className='relative flex w-fit items-center gap-1' href={href} onClick={onClick}>
      {/* <span className={`absolute w-1 h-1 -left-2 rounded-full bg-midnight-green/90 ${pathname === href ? "" : "hidden"}`}/> */}
      <p className={`font-normal ${pathname === href ? "text-verdigris" : "text-midnight-green"} text-sm hover:text-verdigris active:!text-midnight-green/70`}>{text}</p>
    </Link>
  )
}

export default NavLink