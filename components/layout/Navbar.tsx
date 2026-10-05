"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "@/types";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { FileText, Menu } from "lucide-react";
import { profileData } from "@/data/profile";
import { trackResumeDownload } from "@/lib/analytics";

const navItems: NavItem[] = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Certificates", href: "/#certificates" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrollSection, setScrollSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const activeSection =
    pathname !== "/" && pathname.length > 1
      ? pathname.replace("/", "")
      : scrollSection;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = [
          "home",
          "about",
          "skills",
          "experience",
          "projects",
          "certificates",
          "contact",
        ];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setScrollSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigate = (href: string) => {
    if (pathname === "/") {
      if (href.startsWith("/#")) {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setScrollSection(id);
          return;
        }
      }
    }
    router.push(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border)] py-3 shadow-md shadow-blue-950/10"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/#home"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setScrollSection("home");
            }
          }}
          className="group flex items-center gap-2.5 select-none focus:outline-none"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white font-mono text-xs font-black shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
            &lt;/&gt;
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-[var(--foreground)]">
            Rahul
            <span className="text-[var(--accent-primary)] font-extrabold">
              Nimbalkar
            </span>
            <span className="text-[var(--foreground-muted)] font-normal text-xs sm:text-sm">
              .dev
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-xs backdrop-blur-md">
          {navItems.map((item) => {
            const sectionId = item.href.replace("/#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.href)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm transition-all duration-200 cursor-pointer rounded-full ${
                  isActive
                    ? "text-[var(--foreground)] font-semibold bg-blue-500/10 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-white/5 font-medium"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)] animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: Theme Toggle + Resume Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <Button
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload("navbar")}
            variant="primary-gradient"
            size="sm"
            className="hidden sm:inline-flex"
            icon={<FileText className="w-3.5 h-3.5" />}
          >
            Resume
          </Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)] shadow-xs transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </header>
  );
}
