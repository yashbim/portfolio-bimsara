"use client";

import { useEffect } from "react";
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
import Blogs from "@/components/Blogs";
import ChatWithBim from "@/components/ChatWithBim";

export default function Home() {
  useRevealOnScroll();

  useEffect(() => {
    const topic = process.env.NEXT_PUBLIC_NTFY_TOPIC;
    if (!topic) return;

    if (window.sessionStorage.getItem("ntfy_sent")) return;
    window.sessionStorage.setItem("ntfy_sent", "true");

    fetch(`https://ntfy.sh/${topic}`, {
      method: "POST",
      body: "A new user visited your portfolio website!",
      headers: {
        "Title": "Portfolio Visit",
        "Priority": "default",
        "Tags": "eyes,globe_with_meridians"
      }
    }).catch((err) => console.error("Error sending ntfy notification:", err));
  }, []);

  return (
    <main id="home" className="relative">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      ></div>
      <Particles />

      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Blogs />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatWithBim />
    </main>
  );
}

