"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CopyButton({
  textToCopy,
  label,
  className = "",
  children,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label || textToCopy}`}
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95 bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--border-hover)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-2xs ${className}`}
    >
      {children}
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-500 font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-[var(--foreground-muted)]" />
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
