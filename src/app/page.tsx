import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";

const Home = () => {
  return (
    <main className="relative flex w-full h-full z-0 bg-white">
      <Header />
      <Hero />
      <About />
    </main>
  );
};

export default Home;
