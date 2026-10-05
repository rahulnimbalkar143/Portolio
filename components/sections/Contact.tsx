"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "../ui/SectionHeader";
import { CopyButton } from "../ui/CopyButton";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  ExternalLink,
  MessageCircle,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { trackContactSubmit, trackSocialClick } from "@/lib/analytics";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email" && emailError) {
      if (EMAIL_REGEX.test(value.trim()) || value.trim() === "") {
        setEmailError("");
      }
    }
    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleEmailBlur = () => {
    if (formData.email.trim() && !EMAIL_REGEX.test(formData.email.trim())) {
      setEmailError("Please enter a valid email address (e.g. name@company.com)");
    } else {
      setEmailError("");
    }
  };

  const dismissStatus = () => {
    setStatus("idle");
    setStatusMessage("");
  };

  // Automatically clear status message after a short delay
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000); // disappears after 5 seconds
      return () => clearTimeout(timer);
    } else if (status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 8000); // error banner clears after 8 seconds if not dismissed
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setStatusMessage("Please complete all required fields (*).");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address (e.g. name@company.com)");
      setStatus("error");
      setStatusMessage("Please enter a valid email address format.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject: formData.subject.trim(),
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      trackContactSubmit("success");
      setStatusMessage(
        "Thank you! Your message has been sent directly to Rahul's inbox. I'll get back to you shortly!"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setEmailError("");
    } catch (err: unknown) {
      setStatus("error");
      trackContactSubmit("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "Could not send message. Please try again or reach out directly at " +
              profileData.email
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow matching reference */}
      <div className="glow-navy -top-24 right-1/4 opacity-50" />
      <div className="glow-cyan bottom-10 left-1/4 opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          titlePlain="Contact"
          titleGradient="Me"
          subtitle="Got a question or opportunity? Send me a message, and I'll get back to you soon."
          className="mb-10 sm:mb-14"
        />

        {/* Reference Two-Column Layout (Storyboard 3: 11.0s - 14.0s) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Get in Touch / Message Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl border border-[var(--border)] h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                    Get in Touch
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    Send a direct note for full-time roles or collaborations
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold mb-1.5 text-[var(--foreground)]"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager"
                      required
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] text-xs sm:text-sm transition-all focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 shadow-inner"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[var(--foreground)]"
                    >
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    {emailError && (
                      <span className="text-[11px] text-red-400 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {emailError}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Mail
                      className={`w-4 h-4 absolute left-3.5 top-3.5 pointer-events-none transition-colors ${
                        emailError ? "text-red-400" : "text-slate-400"
                      }`}
                    />
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleEmailBlur}
                      placeholder="e.g. recruiter@company.com"
                      required
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-[var(--foreground)] placeholder-[var(--foreground-muted)] text-xs sm:text-sm transition-all focus:outline-none shadow-inner ${
                        emailError
                          ? "border-red-500/80 bg-red-500/5 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                          : "border-[var(--border)] bg-[var(--surface-elevated)] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold mb-1.5 text-[var(--foreground)]"
                  >
                    Subject / Role Title
                  </label>
                  <div className="relative">
                    <MessageCircle className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Developer Opportunity"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] text-xs sm:text-sm transition-all focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 shadow-inner"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-1.5 text-[var(--foreground)]"
                  >
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] text-xs sm:text-sm transition-all focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 shadow-inner resize-y"
                  />
                </div>

                {/* Status Messages */}
                {status === "error" && (
                  <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-[var(--error)] text-xs animate-in fade-in duration-300">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={dismissStatus}
                      aria-label="Dismiss error"
                      className="p-1 rounded-lg text-red-400 hover:text-red-200 hover:bg-red-500/20 transition-colors cursor-pointer shrink-0"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-[var(--success)] text-xs animate-in fade-in duration-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--success)]" />
                      <span>{statusMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={dismissStatus}
                      aria-label="Dismiss message"
                      className="p-1 rounded-lg text-emerald-400 hover:text-emerald-200 hover:bg-emerald-500/20 transition-colors cursor-pointer shrink-0"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Submit Button matching reference button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Reference "Connect With Me" Panel (11.5s - 14.0s) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl border border-[var(--border)] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    Connect With Me
                  </h3>
                </div>

                {/* Reference Featured Card: "Let's Connect on LinkedIn" */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("linkedin")}
                  className="group p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-blue-50/40 dark:from-blue-900/40 dark:to-cyan-950/30 border border-blue-200/80 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] flex items-center justify-between transition-all duration-300 mb-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-600/20 dark:border-blue-500/40 text-[#0a66c2] dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        Let&apos;s Connect
                      </h4>
                      <p className="text-xs text-[var(--foreground-muted)]">
                        on LinkedIn
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#0a66c2] dark:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Direct channels grid (GitHub -> Email -> Phone) */}
                <div className="space-y-4">
                  {/* GitHub Item */}
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackSocialClick("github")}
                    className="group p-4 sm:p-4.5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between gap-3 hover:border-cyan-500/40 hover:bg-[var(--surface-hover)] transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white shrink-0 transition-colors">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider block text-[var(--foreground-muted)]">
                          GITHUB
                        </span>
                        <span className="text-xs font-semibold text-[var(--foreground)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                          rahulnimbalkar143
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                  </a>

                  {/* Email Item */}
                  <div className="p-4 sm:p-4.5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between gap-3 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-600 dark:text-cyan-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider block text-[var(--foreground-muted)]">
                          EMAIL ADDRESS
                        </span>
                        <a
                          href={`mailto:${profileData.email}`}
                          className="text-xs font-semibold text-[var(--foreground)] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
                        >
                          {profileData.email}
                        </a>
                      </div>
                    </div>
                    <CopyButton textToCopy={profileData.email} />
                  </div>

                  {/* Phone Item */}
                  <div className="p-4 sm:p-4.5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between gap-3 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider block text-[var(--foreground-muted)]">
                          PHONE / WHATSAPP
                        </span>
                        <a
                          href={`tel:${profileData.phone}`}
                          className="text-xs font-semibold text-[var(--foreground)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                        >
                          {profileData.phone}
                        </a>
                      </div>
                    </div>
                    <CopyButton textToCopy={profileData.phone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
