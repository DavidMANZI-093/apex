import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Certifiers from "@/components/certifiers";

const Home = () => {
	return (
		<main className="relative flex flex-col w-full h-full z-0 bg-transparent">
			<Header />
			<Hero />
			<About />
			<Services />
			<Certifiers />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
