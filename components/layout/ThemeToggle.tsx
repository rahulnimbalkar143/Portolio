"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => { };

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--surface)]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in fade-in duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 animate-in fade-in duration-200" />
      )}
    </button>
  );
}
