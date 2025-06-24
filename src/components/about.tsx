const about = () => {
  return (
    <section id="about" className="relative flex !min-w-full !w-full min-h-screen !pt-16 bg-white">
        <div className="relative w-full flex container !mx-auto !px-4 sm:!px-6 lg:!px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-midnight-green mb-6">Who We Are</h2>
                <p className="text-lg text-french-grey leading-relaxed">
                    {"APEX is a professional consultancy firm specialized "+
                    "in construction project management, topographic and land " +
                    "surveying, site supervision, and cutting-edge drone " +
                    "surveying solutions. We serve public and private sector " +
                    "clients across Rwanda, offering expertise backed by " + 
                    "technology, precision, and integrity."}
                </p>
            </div>
        </div>
    </section>
  )
}

export default about;