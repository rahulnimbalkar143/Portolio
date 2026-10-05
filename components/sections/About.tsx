"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { leadershipData } from "@/data/leadership";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Sparkles,
  GraduationCap,
  Crown,
  Trophy,
  Award,
  FileText,
  Code2,
} from "lucide-react";
import { trackResumeDownload } from "@/lib/analytics";

export function About() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="glow-navy -top-32 left-1/4 opacity-50" />
      <div className="glow-cyan bottom-10 right-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titlePlain="About"
          titleGradient="Me"
          subtitle="Building reliable web applications and backend services with strong computer science fundamentals and a passion for clean code."
        />

        {/* Reference Top Grid: Main Intro with Circular Halo Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Hello & Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Software Engineer</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
              Hello, I&apos;m{" "}
              <span className="text-gradient">{profileData.name}</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--foreground-secondary)] mb-8">
              <p>{profileData.aboutBio1}</p>
              <p>{profileData.aboutBio2}</p>
            </div>

            {/* Reference Action Buttons: Download CV + View Projects */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <Button
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackResumeDownload("about")}
                variant="primary-gradient"
                size="md"
                icon={<FileText className="w-4 h-4" />}
              >
                Download CV
              </Button>

              <Button
                onClick={scrollToProjects}
                variant="secondary"
                size="md"
                icon={<Code2 className="w-4 h-4 text-cyan-400" />}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Column: Reference Circular Halo Portrait (matching 4.0s - 5.5s) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
              {/* Intense circular radial blue/cyan halo ring glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 opacity-60 blur-2xl group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

              {/* Glowing circular container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-2xl shadow-blue-950/60 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
                  <Image
                    src={profileData.photoUrl}
                    alt={profileData.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards in Sleek Dark Glass */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {profileData.stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300 shadow-sm"
            >
              <span
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 ${idx % 2 === 0 ? "text-cyan-400" : "text-blue-500"
                  }`}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Academic Qualifications & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left: Academic Qualifications */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-9 flex flex-col">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 rounded-xl border bg-cyan-500/10 border-cyan-500/25 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                  Academic Qualifications
                </h3>
                <p className="text-xs mt-0.5 text-[var(--foreground-muted)]">
                  University degrees & foundational computer science education
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-around">
              {educationData.map((edu, idx) => (
                <div
                  key={edu.id}
                  className={`relative pl-5 border-l-2 ${idx === 0
                    ? "border-blue-500"
                    : "border-[var(--border)]"
                    }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--foreground-secondary)]">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold mb-3 text-cyan-400">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border bg-emerald-500/10 border-emerald-500/25 text-[var(--success)]">
                      CGPA: {edu.cgpa}
                    </span>

                    <Badge
                      variant="achievement"
                      icon={
                        idx === 0 ? (
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                        )
                      }
                    >
                      {edu.badge}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Leadership & Positions of Responsibility */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {leadershipData.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-7 sm:p-8 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-2.5 rounded-xl border bg-amber-500/10 border-amber-500/20 text-[var(--warning)]">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                        Leadership & Responsibility
                      </h3>
                      <p className="text-xs mt-0.5 text-[var(--foreground-muted)]">
                        Campus initiatives & collaborative governance
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-[var(--foreground)]">
                        {item.role}
                      </h4>
                      <span className="text-xs font-medium text-[var(--foreground-muted)]">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-cyan-400 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)] mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-400">
                    {item.organization}
                  </span>
                  <Badge variant="achievement">{item.badge}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
