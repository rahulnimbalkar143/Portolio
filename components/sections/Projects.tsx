"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import {
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShoppingCart,
  Boxes,
  HelpCircle,
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";

export function Projects() {
  const getProjectPreview = (id: string) => {
    switch (id) {
      case "nodesq-ai":
        return (
          <div className="w-full h-44 sm:h-52 rounded-xl bg-slate-950 border border-blue-500/20 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">nodesq-ai-canvas.tsx</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Mockup visual nodes */}
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
              <div className="relative flex items-center gap-4 z-10">
                <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-cyan-300 text-xs font-mono shadow-lg">
                  Prompt: Node A
                </div>
                <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="p-2.5 rounded-lg bg-cyan-600/20 border border-cyan-500/40 text-cyan-200 text-xs font-mono shadow-lg">
                  AI Canvas Node B
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Infinite Canvas</span>
              <span className="text-cyan-400">React Flow + Redux</span>
            </div>
          </div>
        );

      case "krushee-mart":
        return (
          <div className="w-full h-44 sm:h-52 rounded-xl bg-slate-950 border border-blue-500/20 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">krushee-mart-store.app</span>
              </div>
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <div className="relative flex-1 flex flex-col justify-center px-4">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/25 text-center">
                  <div className="text-[10px] text-emerald-400 font-bold">Seeds & Bio</div>
                  <div className="text-[9px] text-slate-400">In Stock</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-blue-500/25 text-center">
                  <div className="text-[10px] text-blue-400 font-bold">Equipment</div>
                  <div className="text-[9px] text-slate-400">Instant Cart</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-cyan-500/25 text-center">
                  <div className="text-[10px] text-cyan-400 font-bold">Orders</div>
                  <div className="text-[9px] text-slate-400">JWT Secured</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Agri E-Commerce</span>
              <span className="text-emerald-400">Node.js + MySQL</span>
            </div>
          </div>
        );

      case "enterprise-inventory":
        return (
          <div className="w-full h-44 sm:h-52 rounded-xl bg-slate-950 border border-blue-500/20 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">spring-inventory-audit.api</span>
              </div>
              <Boxes className="w-3.5 h-3.5 text-blue-400" />
            </div>

            <div className="relative flex-1 flex flex-col justify-center px-2 space-y-2">
              <div className="flex items-center justify-between px-3 py-1.5 rounded bg-slate-900 border border-blue-500/20 text-xs font-mono">
                <span className="text-slate-300">STOCK_ALERT</span>
                <span className="text-emerald-400 font-bold">OK • Auto-Sync</span>
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 rounded bg-slate-900 border border-blue-500/20 text-xs font-mono">
                <span className="text-slate-300">AUDIT_LOG_TRIGGER</span>
                <span className="text-cyan-400 font-bold">200 OK</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Spring Boot REST</span>
              <span className="text-blue-400">Spring Security + JWT</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 sm:h-52 rounded-xl bg-slate-950 border border-blue-500/20 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">quiz-assessment.app</span>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            <div className="relative flex-1 flex flex-col justify-center px-4">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs">
                <span className="text-slate-300 font-medium">Question 10/10 • Anti-Cheat Active</span>
                <span className="text-cyan-400 font-mono font-bold">02:45s</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Timed Assessment</span>
              <span className="text-cyan-400">React + Spring Boot</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="glow-navy -top-32 right-1/4 opacity-50" />
      <div className="glow-blue bottom-12 left-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titlePlain="Portfolio"
          titleGradient="Projects"
          subtitle="Explore selected full-stack web applications, AI platforms, and enterprise software systems."
        />

        {/* 2-column Grid of Project Cards matching reference (6.5s - 7.5s) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <div>
                {/* Project UI / Mockup Preview Frame */}
                <div className="mb-6">
                  {getProjectPreview(project.id)}
                </div>

                {/* Category Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-blue-500/10 border-blue-500/25 text-cyan-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-[var(--foreground)] group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold mb-4 text-blue-400">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-[var(--foreground-secondary)]">
                  {project.description}
                </p>

                {/* Key Engineering Work */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[var(--foreground-muted)]">
                    KEY ENGINEERING WORK
                  </h4>
                  <ul className="space-y-2">
                    {project.keyWork.map((work, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-normal text-[var(--foreground-secondary)]"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] text-xs font-mono shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: small rounded buttons matching reference */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border)]">
                <Button
                  href={project.liveUrl || project.githubUrl}
                  isExternal={true}
                  variant="primary-gradient"
                  size="sm"
                  iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                  className="rounded-xl shadow-md shadow-blue-500/20"
                >
                  Live Demo ↗
                </Button>

                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    isExternal={true}
                    variant="secondary"
                    size="sm"
                    icon={<GithubIcon className="w-3.5 h-3.5" />}
                    className="rounded-xl"
                  >
                    GitHub ↗
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
