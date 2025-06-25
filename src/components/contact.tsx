const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white/5"
    >
      <div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
          <h2 className="!text-2xl md:!text-3xl !font-medium !text-midnight-green/70 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-french-grey leading-relaxed">
            {"Interested in our services or looking to partner " +
            "with us? Reach out today!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="flex flex-col gap-6  !p-8 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md">
                <div className="flex flex-col">
                    <h4 className="!text-xl !font-medium !text-midnight-green/70 mb-6">Send us a message</h4>
                    <p className="text-french-grey leading-relaxed">
                        {"Fill out the form below and we'll get back " +
                        "to you within 24 hours."}
                    </p>
                </div>
            
                <div className="flex flex-col">
                    <h4 className="!text-xl !font-medium !text-midnight-green/70 mb-6">Send us a message</h4>
                    <p className="text-french-grey leading-relaxed">
                        {"Fill out the form below and we'll get back " +
                        "to you within 24 hours."}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;