"use client"

import Docker from "@/components/docker"
import { Button } from "@/components/buttons"
import { ClipboardPen, Compass } from "lucide-react"
import Em from "@/components/em"

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] w-full">
    <Docker />
    <div className="relative w-full h-full flex flex-col items-center gap-6 justify-center  bg-gradient-to-b from-transparent to-midnight-green">
      <h1 className="sm:!px-32 !px-12 font-semibold !text-4xl text-center text-white">Your <Em>Trusted Partner</Em> in Construction Consultancy <Em>&</Em> Advanced Surveying Solutions.</h1>
      <h2 className="sm:!px-36 !px-12 font-semibold !text-lg text-center text-white">Precision. Innovation. Reliability. Delivered through expert consultancy and cutting-edge drone surveying.</h2>
      <div className="flex sm:flex-row flex-col items-center gap-4">
        <Button text="Get a free consultation" icon={ClipboardPen} />
        <Button text="Explore our services" icon={Compass} />
      </div>
    </div>
</div>
  )
}

export default Home