"use client";

import React from "react";
import { Modal } from "../ui/Modal";
import { profileData } from "@/data/profile";
import { Button } from "../ui/Button";
import { CopyButton } from "../ui/CopyButton";
import { Badge } from "../ui/Badge";
import { Mail, Phone, MapPin, FileText, Send } from "lucide-react";
import { trackResumeDownload } from "@/lib/analytics";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HireModal({ isOpen, onClose }: HireModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Hire Rahul Siddhu Nimbalkar"
      maxWidth="lg"
    >
      <div className="flex flex-col gap-5">
        <Badge variant="status">{profileData.availability}</Badge>

        <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
          Thank you for considering me for your engineering team! I am actively seeking
          opportunities as a{" "}
          <strong className="text-[var(--foreground)] font-semibold">Full Stack Developer & Software Engineer</strong>.
          I specialize in React, Next.js, Java, Spring Boot, Node.js, and relational databases.
        </p>

        {/* Direct Contact Coordinates */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
          <div className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2.5 text-[var(--foreground)]">
              <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="font-mono text-xs sm:text-sm">{profileData.email}</span>
            </div>
            <CopyButton textToCopy={profileData.email} />
          </div>

          <div className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2.5 text-[var(--foreground)]">
              <Phone className="w-4 h-4 text-[var(--success)]" />
              <span className="font-mono text-xs sm:text-sm">{profileData.phone}</span>
            </div>
            <CopyButton textToCopy={profileData.phone} />
          </div>

          <div className="flex items-center gap-2.5 text-sm text-[var(--foreground)]">
            <MapPin className="w-4 h-4 text-[var(--accent-secondary)]" />
            <span>{profileData.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            href={`mailto:${profileData.email}?subject=Full%20Stack%20Developer%20Opportunity`}
            variant="primary-gradient"
            className="flex-1"
            icon={<Send className="w-4 h-4" />}
          >
            Email Directly
          </Button>

          <Button
            href={profileData.resumeUrl}
            download="Rahul_Siddhu_Nimbalkar_Resume.pdf"
            onClick={() => trackResumeDownload("hire_modal")}
            variant="secondary"
            className="flex-1"
            icon={<FileText className="w-4 h-4" />}
          >
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </Modal>
  );
}
