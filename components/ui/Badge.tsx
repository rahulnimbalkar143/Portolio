import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "status" | "gradient" | "tech" | "outline" | "achievement" | "counter";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "tech",
  className = "",
  icon,
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-colors";

  if (variant === "status") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full status-badge-style shadow-sm backdrop-blur-md ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full status-dot-ping opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 status-dot"></span>
        </span>
        <span className="status-text">{children}</span>
      </div>
    );
  }

  if (variant === "achievement") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg achievement-badge-style text-xs font-medium ${className}`}
      >
        {icon}
        {children}
      </span>
    );
  }

  if (variant === "gradient") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold ${className}`}
      >
        {icon}
        {children}
      </span>
    );
  }

  if (variant === "outline") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg outline-badge-style text-xs font-medium ${className}`}
      >
        {icon}
        {children}
      </span>
    );
  }

  if (variant === "counter") {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-md counter-badge-style text-xs font-mono ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default tech pill
  return (
    <span
      className={`${baseClasses} tech-badge-style shadow-sm ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
