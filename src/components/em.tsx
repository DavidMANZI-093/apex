import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Em = ({ children }: Props) => {
  return (
    <span className="inline font-medium text-midnight-green/90">{children}</span>
  )
}

export default Em