import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Awards from "@/components/Awards";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <StatsBar />
        <CaseStudies />
        <Awards />
        <About />
        <Contact />
      </main>
    </>
  );
}
