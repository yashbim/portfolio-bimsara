"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  // Hidden easter egg: double-tap / double-click the portrait to summon "Bim".
  // We detect the double-tap manually so it works on touch (where `dblclick`
  // is unreliable) as well as desktop.
  const lastTap = useRef(0);
  const handlePortraitTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 400) {
      lastTap.current = 0;
      window.dispatchEvent(new Event("bim:summon"));
    } else {
      lastTap.current = now;
    }
  };

  return (
    <section id="home" className="hero-glow relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-28 lg:pt-32">
        <div className="reveal">
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl">
            Bimsara <span className="text-gradient">Madurapperuma</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-snug text-foreground sm:text-xl">
            Software Engineer &amp; Business Analyst building reliable software
            and shaping strategy with data.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            I bridge engineering and business to deliver products that are
            scalable, user-centric, and outcome-driven.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/CV/CV-Bimsara.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-accent-deep hover:text-white"
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/yashbim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:text-foreground"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/bimsara-madurapperuma-ab6a53232/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:text-foreground"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="reveal mx-auto w-full max-w-sm">
          <div
            onClick={handlePortraitTap}
            className="relative select-none rounded-[1.75rem] border border-line bg-surface p-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
              <Image
                src="/portraits/c1.jpg"
                alt="Portrait of Bimsara Madurapperuma"
                fill
                priority
                sizes="(min-width: 1024px) 384px, 80vw"
                draggable={false}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
