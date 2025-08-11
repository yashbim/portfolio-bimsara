"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0D1B2A]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="inline-flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">
              Bimsara Madurapperuma
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00BFA6]" aria-hidden />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-gray-200 hover:text-white focus-visible:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              {open ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D1B2A]/95">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6">
            <ul className="flex flex-col py-4 text-base">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2 text-gray-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

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

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="reveal">
            <p className="text-sm uppercase tracking-widest text-[#00BFA6]">
              Software Engineer & Business Analyst
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Hi, I’m <span className="text-[#00BFA6]">Bimsara</span>. I build
              reliable software and shape strategy with data.
            </h1>
            <p className="mt-4 max-w-prose text-gray-200">
              I bridge engineering and business to deliver products that are
              scalable, user-centric, and outcome-driven.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/Bimsara_Madurapperuma_CV.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-[#00BFA6] px-4 py-2 font-medium text-[#0D1B2A] shadow-lg shadow-[#00BFA6]/30 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-[#00BFA6]/40 active:translate-y-0"
                download
              >
                Download CV
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    stroke="#0D1B2A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-white hover:bg-white/5"
              >
                See Projects
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md reveal">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/globe.svg"
                  alt="Tech illustration"
                  width={128}
                  height={128}
                  className="h-32 w-32 opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl text-gray-200">
            I’m a hands-on engineer who enjoys solving ambiguous problems. My
            focus areas include web platforms, data-driven decision making, and
            designing systems that scale. I collaborate across product, design,
            and business to turn insights into impact.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {[
              {
                role: "Software Engineer",
                company: "TechNova Labs",
                period: "2023 — Present",
                summary:
                  "Built microservices and internal tools, reducing deployment time by 40% and improving reliability.",
              },
              {
                role: "Business Analyst",
                company: "InsightWorks",
                period: "2021 — 2023",
                summary:
                  "Led analytics initiatives, defined KPIs, and partnered with engineering to ship data features.",
              },
            ].map((item) => (
              <div
                key={item.role + item.company}
                className="grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:gap-4"
              >
                <div>
                  <p className="text-base font-medium">
                    {item.role} · {item.company}
                  </p>
                  <p className="mt-1 text-gray-300">{item.summary}</p>
                </div>
                <div className="sm:text-right text-gray-300">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00BFA6]">
                Languages
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Python", "SQL"].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-gray-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00BFA6]">
                Frameworks & Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Tailwind",
                  "PostgreSQL",
                  "Prisma",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-gray-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00BFA6]">
                Other
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Systems Design",
                  "Data Analytics",
                  "Product Strategy",
                  "Agile",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-gray-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-[#00BFA6] hover:opacity-90"
            >
              See All Projects →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Analytics Dashboard",
                tech: ["Next.js", "Tailwind", "PostgreSQL"],
                desc: "Interactive analytics with role-based access and custom reports.",
                img: "/window.svg",
              },
              {
                title: "Realtime Collaboration",
                tech: ["React", "Node.js", "WebSocket"],
                desc: "Collaborative editor with presence and conflict resolution.",
                img: "/globe.svg",
              },
              {
                title: "E‑commerce Platform",
                tech: ["Next.js", "Prisma", "Stripe"],
                desc: "Headless storefront with performant product search.",
                img: "/file.svg",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1"
              >
                <div className="aspect-video w-full bg-white/5">
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src={p.img}
                      alt="Project preview"
                      width={56}
                      height={56}
                      className="h-14 w-14 opacity-80 transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <h2 className="text-2xl font-semibold">Awards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { name: "Hackathon Winner", type: "tech", icon: "/vercel.svg" },
              { name: "Orchestra Lead", type: "music", icon: "/globe.svg" },
              {
                name: "University Sports Meet – Silver",
                type: "sport",
                icon: "/next.svg",
              },
            ].map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                  <Image
                    src={a.icon}
                    alt="award icon"
                    width={24}
                    height={24}
                    className="h-6 w-6 opacity-80"
                  />
                </div>
                <div>
                  <p className="font-medium">{a.name}</p>
                  <p className="text-sm text-gray-300 capitalize">{a.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="reveal">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 max-w-prose text-gray-200">
            Let’s connect. I’m open to interesting engineering and product
            challenges.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:bimsara@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#00BFA6]"
              >
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#00BFA6]"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#00BFA6]"
              >
                <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.26-1.23-1.6-1.23-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.47-2.44-.28-5-1.22-5-5.42 0-1.2.43-2.19 1.13-2.96-.12-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13a10.4 10.4 0 0 1 2.75-.37c.93 0 1.87.13 2.75.37 2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.23 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.21-2.56 5.13-5 5.41.4.34.74 1.01.74 2.05 0 1.48-.01 2.67-.01 3.04 0 .29.2.63.76.52A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-300 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Bimsara Madurapperuma. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
