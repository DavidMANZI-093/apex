const Hero = () => {
  return (
    <section id="home" className="!pt-16 min-h-screen flex items-center bg-gradient-to-br from-white to-tiffany-blue/5">
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="gap-8">
                    <div className="gap-4">
                        <h1 className="!text-4xl md:!text-5xl lg:!text-6xl font-bold !text-midnight-green leading-tight">Your Trusted Partner in <span className="text-verdigris">Construction Consultancy</span> & Advanced Surveying Solutions</h1>
                        <p className="!text-lg !text-french-grey max-w-2xl">Delivering precision, innovation, and reliability through expert cosultancy and drone powered surveying.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;