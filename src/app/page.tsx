import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";

const Home = () => {
  return (
    <main className="relative flex flex-col w-full h-full z-0 bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
    </main>
  );
};

export default Home;