"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificatesData } from "@/data/certificates";
import { SectionHeader } from "../ui/SectionHeader";
import { CertificateModal } from "../modals/CertificateModal";
import { CertificateItem } from "@/types";
import { Button } from "../ui/Button";
import { Building2, Calendar, Download, Eye, CheckCircle } from "lucide-react";

export function Certificates() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="glow-navy -bottom-24 left-1/4 opacity-50" />
      <div className="glow-cyan top-12 right-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titleGradient="Certificates"
          subtitle="Verified internship completion certificates, technical certifications, and formal industrial training qualifications."
        />

        {/* 2-column Grid of Certificates matching reference (8.0s - 8.5s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <div>
                {/* Certificate Preview Frame with Hover Overlay */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-6 cursor-pointer group/preview border border-[var(--border)] bg-slate-950 shadow-inner transition-colors"
                >
                  <Image
                    src={cert.previewUrl}
                    alt={cert.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                  />

                  {/* Hover Overlay with "View Certificate" pill */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg transform translate-y-2 group-hover/preview:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/25 text-[var(--success)]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-[var(--foreground)] group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm mb-6 text-[var(--foreground-muted)]">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border)]">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Certificate
                </button>

                <Button
                  href={cert.fileUrl}
                  download={true}
                  variant="secondary"
                  size="sm"
                  icon={<Download className="w-3.5 h-3.5" />}
                  className="rounded-xl"
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={activeCert}
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
