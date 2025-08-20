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

export default function Home() {
  useRevealOnScroll();

  return (
    <main id="home" className="relative">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#00BFA6]/20 blur-3xl" />
        <div className="absolute right-0 bottom-[-10%] h-72 w-72 rounded-full bg-[#00BFA6]/10 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
