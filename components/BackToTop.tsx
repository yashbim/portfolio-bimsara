"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={
        "fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-md backdrop-blur transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 " +
        (visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2")
      }
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}


