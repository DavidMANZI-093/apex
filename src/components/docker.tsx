import React from 'react'

const Docker = () => {
  return (
    <div className="absolute top-0 left-0 grid sm:grid-cols-2 grid-cols-1 w-full h-full sm:!px-24 !px-8 sm:!py-16 !py-2 gap-2">
        <div className="bg-gradient-to-br from-midnight-green/30 to-tiffany-blue/60 rounded-lg frame-focus-1"></div>
        <div className="relative w-full h-full sm:grid hidden grid-rows-2 gap-2">
            <div className="bg-gradient-to-br from-midnight-green/30 to-tiffany-blue/60 rounded-lg frame-focus-2"></div>
            <div className="bg-gradient-to-br from-midnight-green/30 to-tiffany-blue/60 rounded-lg frame-focus-3"></div>
        </div>
    </div>
  )
}

export default Docker