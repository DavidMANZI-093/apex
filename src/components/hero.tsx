import Button from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative flex w-full h-full !pt-16 bg-gradient-to-br from-white to-tiffany-blue/10">
        <div className="relative flex container !mx-auto !px-4 sm:!px-6 lg:!px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="!text-2xl md:!text-3xl lg:!text-4xl font-bold !text-midnight-green leading-tight">Your Trusted Partner in <span className="text-verdigris">Construction Consultancy</span> & Advanced Surveying Solutions</h1>
                        <p className="!text-base !text-french-grey max-w-2xl">Delivering precision, innovation, and reliability through expert cosultancy and drone powered surveying.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button href="/contact">Get a Free Consultation</Button>
                        <Button href="/contact" variant="outline">Explore Our Services</Button>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="h-fit bg-gradient-to-br from-verdigris/20 to-tiffany-blue/20 rounded-2xl flex items-center justify-center">
                        <Image src="/placeholder.svg" alt="Drone surveying construction site" className="w-full h-full object-cover rounded-2xl" width={0} height={0}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;