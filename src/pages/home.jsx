import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Pricing from "../components/pricing";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
