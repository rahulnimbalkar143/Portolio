"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--surface-elevated)] border-t border-[var(--border)] pt-8 pb-8 overflow-hidden text-[var(--foreground-muted)]">
      {/* Subtle reference glowing top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Row: Brand & Bio on Left, Social Icons on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[var(--border)]">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-2 max-w-xl">
            <Link href="/#home" className="flex items-center gap-2.5 select-none w-fit">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white font-mono text-xs font-black shadow-sm shadow-blue-500/20">
                &lt;/&gt;
              </div>
              <span className="font-bold text-lg tracking-tight text-[var(--foreground)]">
                Rahul<span className="text-[var(--accent-primary)] font-extrabold">Nimbalkar</span>
                <span className="text-[var(--foreground-muted)] font-normal text-xs">.dev</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
              Full-Stack Developer skilled in Java, Spring Boot, React, and Node.js.
              Focused on building reliable, maintainable, and practical web applications.
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] text-[var(--foreground-muted)] hover:text-white transition-all shadow-2xs hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] text-[var(--foreground-muted)] hover:text-white transition-all shadow-2xs hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] text-[var(--foreground-muted)] hover:text-white transition-all shadow-2xs hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profileData.phone}`}
              aria-label="Phone"
              className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] text-[var(--foreground-muted)] hover:text-white transition-all shadow-2xs hover:scale-105"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--foreground-muted)] opacity-85">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>

          <p className="text-[11px] sm:text-xs">
            Designed & Engineered with Next.js, React & Modern TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
