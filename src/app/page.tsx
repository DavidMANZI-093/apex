import Header from "@/components/header";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <main className="relative flex flex-col w-full h-full z-0 bg-white items-center">
    <Header />
    <Hero />
    {/* <Hero /> */}
    </main>
  );
}

export default Home;