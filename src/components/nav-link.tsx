import React from 'react'
import Link from 'next/link'

type Props = {
    href: string;
    text: string;
}

const NavLink = ({ href, text }: Props) => {
  return (
    <Link href={href}>
        <p className="font-normal text-midnight-green text-sm hover:text-verdigris active:!text-midnight-green/70">{text}</p>
    </Link>
  )
}

export default NavLink