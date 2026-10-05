"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "../ui/Modal";
import { CertificateItem } from "@/types";
import { Download, ExternalLink, ZoomIn, ZoomOut, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!certificate) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={certificate.title} maxWidth="4xl">
      <div className="flex flex-col gap-6">
        {/* Certificate Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 text-[var(--success)] text-xs font-semibold uppercase tracking-wider mb-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{certificate.badge}</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)]">
              Issued by: <span className="font-semibold">{certificate.issuer}</span>
            </p>
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">Date of Issue: {certificate.date}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-lg bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)] border border-[var(--border)] transition-colors cursor-pointer text-xs flex items-center gap-1 shadow-2xs"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              <span>{isZoomed ? "Fit View" : "Zoom In"}</span>
            </button>

            <Button
              href={certificate.fileUrl}
              download={true}
              variant="secondary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Download
            </Button>

            <Button
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary-gradient"
              size="sm"
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Open Original
            </Button>
          </div>
        </div>

        {/* Certificate Viewer Preview */}
        <div
          className={`relative rounded-xl border border-[var(--border)] bg-slate-950 overflow-hidden flex items-center justify-center p-2 min-h-[400px] ${
            isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <div
            className={`relative transition-transform duration-300 ${
              isZoomed ? "scale-150 transform-origin-center my-10" : "scale-100 w-full"
            }`}
          >
            <Image
              src={certificate.previewUrl}
              alt={certificate.title}
              width={1200}
              height={850}
              className="rounded-lg object-contain mx-auto w-auto max-h-[70vh] shadow-xl"
              priority
            />
          </div>
        </div>

        <p className="text-center text-xs text-[var(--foreground-muted)]">
          Click image to toggle zoom. Official verified documentation for Rahul Siddhu Nimbalkar.
        </p>
      </div>
    </Modal>
  );
}
