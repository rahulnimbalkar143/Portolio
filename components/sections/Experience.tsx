"use client";

import React, { useState } from "react";
import { experienceData } from "@/data/experience";
import { certificatesData } from "@/data/certificates";
import { SectionHeader } from "../ui/SectionHeader";
import { CertificateModal } from "../modals/CertificateModal";
import { CertificateItem } from "@/types";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Building2,
} from "lucide-react";

export function Experience() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleOpenCertificate = (company: string) => {
    if (company.toLowerCase().includes("nexanova")) {
      const cert = certificatesData.find((c) => c.id === "nexanova-cert");
      if (cert) setSelectedCert(cert);
    } else {
      const cert = certificatesData.find((c) => c.id === "vkumar-cert");
      if (cert) setSelectedCert(cert);
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient glow */}
      <div className="glow-navy -top-24 -left-20 opacity-50" />
      <div className="glow-cyan bottom-10 right-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titlePlain="Professional"
          titleGradient="Work Experience"
          subtitle="Hands-on software development experience building real-world enterprise applications, RESTful services, and full-stack software solutions."
        />

        <div className="flex flex-col gap-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 sm:p-9 relative border-l-4 border-l-blue-500 hover:border-l-cyan-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300"
            >
              {/* Header row: role, duration & dates */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-blue-500/10 border-blue-500/25 text-cyan-400">
                    {item.role}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/25 text-[var(--success)]">
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground-secondary)] text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>
                      {item.period} • {item.duration}
                    </span>
                  </div>

                  {item.certificateUrl && (
                    <button
                      onClick={() => handleOpenCertificate(item.company)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Company & Location */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] flex items-center gap-2.5">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  <span>{item.company}</span>
                </h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm mt-1 text-[var(--foreground-muted)]">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Overview text */}
              <p className="text-sm sm:text-base leading-relaxed mb-6 text-[var(--foreground-secondary)]">
                {item.overview}
              </p>

              {/* Live Systems or Project Tag */}
              {item.liveSystems && item.liveSystems.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.liveSystemsLabel || "KEY SYSTEMS"}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.liveSystems.map((sys) => (
                      <span
                        key={sys}
                        className="px-3 py-1 rounded-lg border border-blue-500/20 bg-[var(--surface-elevated)] text-[var(--foreground)] text-xs sm:text-sm font-medium shadow-2xs"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Contributions Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[var(--foreground-muted)]">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {item.keyContributions.map((contrib, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-normal text-[var(--foreground-secondary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-[var(--border)]">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 text-[var(--foreground-muted)]">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
