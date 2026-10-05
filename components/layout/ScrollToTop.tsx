"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--accent-primary)] hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--border-hover)] shadow-lg shadow-purple-950/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}
