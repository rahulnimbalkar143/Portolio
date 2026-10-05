// Google Analytics 4 (GA4) Helper Utilities

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetIdOrAction: string | Date,
      optionsOrParams?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Generic event tracking helper
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

/**
 * Track when a recruiter or visitor downloads your resume
 */
export function trackResumeDownload(source: "navbar" | "hero" | "about" | "mobile_menu" | "hire_modal") {
  trackEvent("download_resume", {
    event_category: "Engagement",
    event_label: `Resume Download via ${source}`,
    source,
  });
}

/**
 * Track contact form submissions
 */
export function trackContactSubmit(status: "success" | "error") {
  trackEvent("contact_form_submit", {
    event_category: "Leads",
    event_label: `Contact Form Submission - ${status}`,
    status,
  });
}

/**
 * Track social link clicks (LinkedIn, GitHub, Email copy)
 */
export function trackSocialClick(platform: "linkedin" | "github" | "email") {
  trackEvent("social_click", {
    event_category: "Outbound",
    event_label: platform,
    platform,
  });
}
