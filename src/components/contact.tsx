import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import Form from "./ui/form";

const Contact = () => {
	return (
		<section
			id="contact"
			className="relative flex !min-w-full !w-full min-h-screen !pt-24 !pb-12 lg:!pt-32 lg:!pb-16 bg-white/5"
		>
			<div className="relative w-full flex flex-col gap-16 container !mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-16">
				<div className="flex flex-col max-w-4xl !mx-auto text-center mb-16 !gap-4">
					<h2 className="!text-2xl md:!text-3xl !font-medium !text-indigo-dye/85 mb-6">
						Let&apos;s Work Together
					</h2>
					<p className="text-slate-gray leading-relaxed">
						{"Interested in our services or looking to partner " +
							"with us? Reach out today!"}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact form */}
					<Form />

					{/* Social Media */}
					<div className="flex flex-col gap-6 !p-8 !rounded-lg !bg-white">
						<h4 className="!text-lg !font-medium !text-indigo-dye/85 mb-6">
							Get in touch
						</h4>

						<div className="flex flex-col gap-6">
							<div className="flex gap-2">
								<div className="w-11 h-11 bg-indigo-dye/4 rounded-lg flex items-center justify-center">
									<Phone className="w-5 h-5 text-indigo-dye/80" />
								</div>
								<div className="flex flex-col gap-1">
									<p className="!text-sm !font-medium !text-indigo-dye/85">
										Phone
									</p>
									<p className="!text-sm !text-slate-gray">+250 788 609 349</p>
								</div>
							</div>

							<div className="flex gap-2">
								<div className="w-11 h-11 bg-indigo-dye/4 rounded-lg flex items-center justify-center">
									<Mail className="w-5 h-5 text-indigo-dye/80" />
								</div>
								<div className="flex flex-col gap-1">
									<p className="!text-sm !font-medium !text-indigo-dye/85">
										Email
									</p>
									<p className="!text-sm !text-slate-gray">
										info@echelonlandworks.com
									</p>
								</div>
							</div>

							<div className="flex gap-2">
								<div className="w-11 h-11 bg-indigo-dye/4 rounded-lg flex items-center justify-center">
									<MapPin className="w-5 h-5 text-indigo-dye/80" />
								</div>
								<div className="flex flex-col gap-1">
									<p className="!text-sm !font-medium !text-indigo-dye/85">
										Address
									</p>
									<p className="!text-sm !text-slate-gray">
										Kigali-Kicukiro, Rwanda
									</p>
								</div>
							</div>

							<div className="flex gap-2">
								<div className="w-11 h-11 bg-indigo-dye/4 rounded-lg flex items-center justify-center">
									<Clock className="w-5 h-5 text-indigo-dye/80" />
								</div>
								<div className="flex flex-col gap-1">
									<p className="!text-sm !font-medium !text-indigo-dye/85">
										Business Hours
									</p>
									<p className="!text-sm !text-slate-gray">
										Monday - Friday: 6:00 AM - 7:00 PM
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<h5 className="!text-lg !font-medium !text-indigo-dye/85">
								Follow us
							</h5>
							<div className="flex gap-2">
								<a
									className="w-11 h-11 bg-indigo-dye/4 !text-indigo-dye/80 hover:!bg-indigo-dye hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center"
									href="https://www.linkedin.com/echelonlandworksrwanda"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LuLinkedin className="w-5 h-5" />
								</a>
								<a
									className="w-11 h-11 bg-indigo-dye/4 !text-indigo-dye/80 hover:!bg-indigo-dye hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center"
									href="https://www.facebook.com/echelonlandworksrwanda"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FiFacebook className="w-5 h-5" />
								</a>
								<a
									className="w-11 h-11 bg-indigo-dye/4 !text-indigo-dye/80 hover:!bg-indigo-dye hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center"
									href="https://www.instagram.com/echelonlandworksrwanda"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FiInstagram className="w-5 h-5" />
								</a>
								<a
									className="w-11 h-11 bg-indigo-dye/4 !text-indigo-dye/80 hover:!bg-indigo-dye hover:!text-white transition-colors duration-200 rounded-lg flex items-center justify-center"
									href="https://www.twitter.com/echelonlandworksrwanda"
									target="_blank"
									rel="noopener noreferrer"
								>
									<RiTwitterXLine className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
