import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";

import wave from "../assets/wave.svg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
