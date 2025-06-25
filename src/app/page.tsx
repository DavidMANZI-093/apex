import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";

const Home = () => {
  return (
    <main className="relative flex flex-col w-full h-full z-0 bg-transparent">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
};

export default Home;