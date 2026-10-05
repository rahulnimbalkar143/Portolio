"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Button } from "../ui/Button";
import { CopyButton } from "../ui/CopyButton";
import { HeroTechIllustration } from "../ui/HeroTechIllustration";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

const TYPING_TITLES = [
  "Full Stack Developer & Software Engineer",
  "Java & Spring Boot Backend Developer",
  "React & Next.js Modern Frontend Developer",
  "MCA Academic Topper & Problem Solver",
];


export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter animation matching reference video's role subtitle typing
  useEffect(() => {
    const currentFullText = TYPING_TITLES[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 35);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
        }, 250);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Ambient background glows matching reference deep navy/blue atmosphere */}
      <div className="glow-navy -top-24 -left-24 opacity-60" />
      <div className="glow-blue top-1/4 -right-24 opacity-40" />
      <div className="glow-cyan bottom-4 left-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: My Existing Portfolio Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status badge */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-blue-500/25 text-[var(--accent-secondary)] text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.availability}</span>
            </div>

            {/* Personal greeting eyebrow */}
            <div className="flex items-baseline gap-2 mb-2 text-base sm:text-lg font-medium text-cyan-600 dark:text-cyan-400">
              <span>Hi, I&apos;m</span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                {profileData.name}
              </span>
            </div>

            {/* Main Headings */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-2 leading-[1.08] text-[var(--foreground)]">
              Full Stack <br />
              <span className="text-gradient">Developer</span>
            </h1>

            {/* Typewriter animated subtitle */}
            <div className="h-8 sm:h-9 flex items-center mb-5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--foreground-secondary)] tracking-tight font-mono">
                {displayText}
                <span className="typing-cursor" />
              </h2>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8 text-[var(--foreground-secondary)]">
              {profileData.shortBio}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7">
              <Button
                onClick={() => scrollToSection("projects")}
                variant="primary-gradient"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Explore Projects
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="secondary"
                size="md"
                icon={<Send className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Icons Row + Direct Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-blue-500/50 hover:bg-[var(--surface-hover)] text-[var(--foreground-secondary)] hover:text-white shadow-xs transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-blue-500/50 hover:bg-[var(--surface-hover)] text-[var(--foreground-secondary)] hover:text-white shadow-xs transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground-secondary)] shadow-xs backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {profileData.email}
                </a>
                <CopyButton textToCopy={profileData.email} />
              </div>
            </div>
          </div>

          {/* Right Column: Working Animated Technical Illustration (Faithfully Recreated from Reference) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <HeroTechIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
