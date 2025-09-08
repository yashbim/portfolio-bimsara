"use client";

import { useRevealOnScroll } from "@/components/useRevealOnScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  useRevealOnScroll();

  return (
    <main id="home" className="relative">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"></div>
      <Particles />

      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
