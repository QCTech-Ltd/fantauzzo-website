"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna in cima alla pagina"
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border-2 border-primary transition-transform duration-300 group-hover:scale-110"
      />
      <span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full border border-primary/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125"
      />
      <ChevronUp size={22} className="relative z-10" />
    </button>
  );
}
