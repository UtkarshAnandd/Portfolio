import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import OpenSource from "@/components/sections/OpenSource";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <OpenSource />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
