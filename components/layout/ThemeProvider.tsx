"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const setTheme = (newTheme: Theme) => {
    if (typeof window === "undefined") return;

    localStorage.setItem("portfolio-theme", newTheme);

    const doc = document;
    const docWithVT = doc as unknown as {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    // If View Transitions API is supported, crossfade the entire screen simultaneously at once
    if (typeof docWithVT.startViewTransition === "function") {
      doc.documentElement.classList.add("view-transitioning");
      const transition = docWithVT.startViewTransition(() => {
        doc.documentElement.classList.toggle("light", newTheme === "light");
        window.dispatchEvent(new Event("theme-change"));
      });

      transition.finished.finally(() => {
        doc.documentElement.classList.remove("view-transitioning");
      });
    } else {
      // Synchronized fallback for browsers without View Transitions API:
      // Force every single element to transform at the exact same start and finish time
      doc.documentElement.classList.add("theme-transitioning");
      doc.documentElement.classList.toggle("light", newTheme === "light");
      window.dispatchEvent(new Event("theme-change"));
      setTimeout(() => {
        doc.documentElement.classList.remove("theme-transitioning");
      }, 350);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
