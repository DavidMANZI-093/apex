import { ArrowRight, Search } from "lucide-react";
import Button from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative flex !min-w-full !w-full min-h-screen !pt-16 bg-gradient-to-br from-white to-tiffany-blue/5">
        <div className="relative w-full flex container !mx-auto !px-4 sm:!px-6 lg:!px-8">
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative flex flex-col gap-8">
                    <div className="flex flex-col gap-4 lg:!py-0 !py-8">
                        <h1 className="!text-2xl md:!text-3xl lg:!text-4xl font-bold !text-midnight-green leading-tight">Your Trusted Partner in <span className="text-verdigris">Construction Consultancy</span> & Advanced Surveying Solutions</h1>
                        <p className="!text-base !text-french-grey max-w-2xl leading-relaxed">Delivering precision, innovation, and reliability through expert cosultancy and drone powered surveying.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button href="/contact" iconPosition="right" icon={ArrowRight}>Get&nbsp;a&nbsp;Free&nbsp;Consultation</Button>
                        <Button href="/contact" iconPosition="left" icon={Search} variant="outline">Explore&nbsp;Our&nbsp;Services</Button>
                    </div>
                </div>

                <div className="relative flex items-center w-full h-full !pb-12 lg:!py-16">
                    <div className="relative w-full h-full bg-placeholder rounded-2xl min-h-[350px] max-h-[500px]"></div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;