"use client";

import React from "react";
import { skillCategories, engineeringPractices } from "@/data/skills";
import { SectionHeader } from "../ui/SectionHeader";
import { TechIcon } from "../ui/TechIcon";
import {
  Code2,
  Database,
  Layers,
  Wrench,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

// Category icons matching reference screenshot
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  languages: Code2,
  databases: Database,
  frameworks: Layers,
  tools: Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="glow-navy -bottom-24 -right-24 opacity-50" />
      <div className="glow-blue top-12 left-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titlePlain="Technical"
          titleGradient="Skills & Tech Stack"
          subtitle="Explore the technologies, languages, frameworks, and engineering standards I use to build scalable systems."
        />

        {/* Unified Technology Stack Area */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] mb-12 relative overflow-hidden">
          {/* Subtle gradient accent along top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="space-y-7 sm:space-y-8">
            {skillCategories.map((category) => {
              const IconComponent = CATEGORY_ICONS[category.id] || Layers;

              return (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/25 text-cyan-500 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Horizontal Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-xl px-3.5 py-3 border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] transition-all duration-200 flex items-center gap-3 cursor-default shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
                      >
                        {/* Technology Icon */}
                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                          <TechIcon name={skill} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        {/* Technology Name */}
                        <span className="text-xs sm:text-sm font-medium text-[var(--foreground)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering & Architecture Section (Preserved Exactly) */}
        <div className="glass-card rounded-2xl p-5 sm:p-7 border border-[var(--border)] relative overflow-hidden">
          {/* Subtle gradient accent along top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          {/* Section Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl border bg-blue-500/10 border-blue-500/25 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--foreground)]">
                Engineering & Architecture
              </h3>
              <p className="text-xs text-[var(--foreground-muted)]">
                Architectural principles & development standards applied in production
              </p>
            </div>
          </div>

          {/* Compact Engineering Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {engineeringPractices.map((practice) => (
              <div
                key={practice.id}
                className="p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.14)] hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--foreground)] leading-snug">
                    {practice.title}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[var(--foreground-secondary)] pl-6">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
