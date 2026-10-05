"use client";

import React, { useEffect } from "react";
import { NavItem } from "@/types";
import { X, FileText, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";
import { profileData } from "@/data/profile";
import { trackResumeDownload, trackSocialClick } from "@/lib/analytics";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavigate,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full bg-[var(--surface-elevated)] border-b border-[var(--border)] p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200 z-10">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-2 font-bold text-lg text-[var(--foreground)]">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white font-mono text-xs font-black shadow-sm shadow-blue-500/30">
              &lt;/&gt;
            </span>
            <span>
              Rahul<span className="text-[var(--accent-primary)] font-extrabold">Nimbalkar</span>
              <span className="text-[var(--foreground-muted)] font-normal text-xs">.dev</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.name.toLowerCase() ||
              (item.href === "/#home" && activeSection === "home");

            return (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.href);
                  onClose();
                }}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-left font-medium transition-all ${
                  isActive
                    ? "bg-blue-500/15 text-[var(--accent-primary)] border border-blue-500/30 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                    : "text-[var(--foreground-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[var(--border)] flex flex-col gap-3">
          <Button
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload("mobile_menu")}
            variant="primary-gradient"
            size="md"
            className="w-full"
            icon={<FileText className="w-4 h-4" />}
          >
            Resume
          </Button>

          <div className="flex items-center justify-center gap-4 text-xs text-[var(--foreground-muted)] pt-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("github")}
              className="hover:text-[var(--foreground)] flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("linkedin")}
              className="hover:text-[var(--foreground)] flex items-center gap-1"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
