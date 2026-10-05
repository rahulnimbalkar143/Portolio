import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gradient" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  download?: boolean | string;
}

export function Button({
  children,
  variant = "primary-gradient",
  size = "md",
  href,
  isExternal,
  target,
  rel,
  icon,
  iconRight,
  download,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-medium rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
    lg: "px-6 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
  }[size];

  let variantClasses = "";

  switch (variant) {
    case "primary-gradient":
      variantClasses = "btn-primary-gradient";
      break;
    case "secondary":
      variantClasses = "btn-secondary";
      break;
    case "outline":
      variantClasses = "btn-outline";
      break;
    case "ghost":
      variantClasses = "btn-ghost";
      break;
    case "icon":
      variantClasses = "btn-icon";
      break;
  }

  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    const isBlank = target === "_blank" || isExternal;
    if (isBlank || download) {
      return (
        <a
          href={href}
          target={isBlank ? "_blank" : target}
          rel={isBlank ? (rel || "noopener noreferrer") : rel}
          download={download}
          className={baseClasses}
        >
          {icon && <span>{icon}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        {icon && <span>{icon}</span>}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled} {...props}>
      {icon && <span>{icon}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
