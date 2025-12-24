import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import SectionDivider from "@/components/animations/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background animado global */}
      <AnimatedBackground />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <Hero />
        <SectionDivider variant="gradient" />
        <About />
        <SectionDivider variant="dots" />
        <Projects />
        <SectionDivider variant="gradient" />
        <Skills />
        <SectionDivider variant="dots" />
        <Comparison />
        <SectionDivider variant="gradient" />
        <Testimonials />
        <SectionDivider variant="dots" />
        <Contact />
      </div>
    </div>
  );
}
