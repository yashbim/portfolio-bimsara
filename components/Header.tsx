"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    opts?: { closeMenu?: boolean }
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }
    if (opts?.closeMenu) setOpen(false);
  };

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Scroll-spy + header border once the page has scrolled
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "#home";
      for (const { href } of NAV_LINKS) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= 120) current = href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled || open
          ? "border-b border-line bg-background/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            scroll={false}
            onClick={(e) => handleNavClick(e, "#home")}
            className="inline-flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt=""
              width={724}
              height={475}
              priority
              className="h-6 w-auto"
            />
            <span aria-hidden className="h-5 w-px bg-subtle" />
            <span className="text-[15px] font-bold tracking-tight">
              Bimsara Madurapperuma
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1 text-sm">
              {NAV_LINKS.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      scroll={false}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={`rounded-full px-3.5 py-1.5 transition-colors ${
                        isActive
                          ? "bg-surface-2 text-accent-2"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface hover:bg-surface-2 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background/95 md:hidden">
          <nav className="mx-auto max-w-6xl px-5 sm:px-8" aria-label="Mobile">
            <ul className="flex flex-col py-3">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    scroll={false}
                    onClick={(e) => handleNavClick(e, item.href, { closeMenu: true })}
                    className={`block rounded-lg px-3 py-3 text-base ${
                      active === item.href ? "text-accent-2" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
