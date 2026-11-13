"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function BackToTopButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-navy ${className}`}
    >
      <ArrowUp aria-hidden="true" size={18} />
    </button>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-card transition duration-300 hover:-translate-y-1 hover:bg-space ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  );
}
