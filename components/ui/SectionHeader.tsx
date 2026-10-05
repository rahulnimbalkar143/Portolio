import React from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  titlePlain?: string;
  titleGradient?: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badge,
  badgeIcon,
  titlePlain,
  titleGradient,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider shadow-xs">
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] mb-4 leading-tight">
        {titlePlain && <span>{titlePlain}</span>}
        {titlePlain && titleGradient && " "}
        {titleGradient && (
          <span className="text-gradient inline-block pb-2 -mb-2">
            {titleGradient}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
