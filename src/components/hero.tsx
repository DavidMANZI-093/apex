import Button from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="!pt-16 min-h-screen flex items-center bg-gradient-to-br from-white to-tiffany-blue/5">
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="gap-8">
                    <div className="gap-4">
                        <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold !text-midnight-green leading-tight">Your Trusted Partner in <span className="text-verdigris">Construction Consultancy</span> & Advanced Surveying Solutions</h1>
                        <p className="!text-lg !text-french-grey max-w-2xl">Delivering precision, innovation, and reliability through expert cosultancy and drone powered surveying.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button href="/contact">Get a Free Consultation</Button>
                        <Button href="/contact">Explore Our Services</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;