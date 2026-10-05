import React from "react";
import {
  Database,
  Layers,
  Terminal,
  GitBranch,
  ShieldCheck,
  Code,
  Wrench,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  const n = name.toLowerCase();

  // 1. Java
  if (n.includes("java") && !n.includes("script")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M7 19c3.5 1 7 1 10 0M6 21c4.5 1.2 8.5 1.2 12 0"
          stroke="#ea2d2e"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 2c1 2-1 3.5 0 5.5M13 1c1 2.5-1 4 0 6.5M16 2.5c.8 1.8-.8 3.2 0 5"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 10c0 4 2.5 6 6 6s6-2 6-6H6z"
          fill="#ea2d2e"
          fillOpacity="0.2"
          stroke="#ea2d2e"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M18 11.5c1.5 0 2.5.8 2.5 2s-1 2-2.5 2"
          stroke="#ea2d2e"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 2. JavaScript
  if (n.includes("javascript")) {
    return (
      <div className="w-6 h-6 rounded bg-[#f7df1e] text-black font-black flex items-center justify-center text-[10px] font-sans select-none shrink-0 shadow-sm">
        JS
      </div>
    );
  }

  // 3. TypeScript
  if (n.includes("typescript")) {
    return (
      <div className="w-6 h-6 rounded bg-[#3178c6] text-white font-black flex items-center justify-center text-[10px] font-sans select-none shrink-0 shadow-sm">
        TS
      </div>
    );
  }

  // 4. Python
  if (n.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path
          d="M11.9 2c-3.1 0-5 1.4-5 3.5v2.5h5.1c1.8 0 3.2 1.4 3.2 3.2v.3h2.3c2 0 3.5-1.5 3.5-3.5 0-2.4-1.8-4-4.5-4.8L11.9 2z"
          fill="#3776ab"
        />
        <circle cx="9.2" cy="4.5" r="0.9" fill="#ffffff" />
        <path
          d="M12.1 22c3.1 0 5-1.4 5-3.5V16h-5.1c-1.8 0-3.2-1.4-3.2-3.2v-.3H6.5c-2 0-3.5 1.5-3.5 3.5 0 2.4 1.8 4 4.5 4.8l4.6 1.2z"
          fill="#ffd43b"
        />
        <circle cx="14.8" cy="19.5" r="0.9" fill="#1e293b" />
      </svg>
    );
  }

  // 5. C / C++
  if (n.includes("c / c++") || n.includes("c++")) {
    return (
      <div className="w-6 h-6 rounded-md bg-[#00599c] text-white font-bold flex items-center justify-center text-[9px] font-sans select-none shrink-0 shadow-sm border border-cyan-400/30">
        C++
      </div>
    );
  }

  // 6. SQL
  if (n === "sql") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#06b6d4" strokeWidth="1.8" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#06b6d4" strokeWidth="1.8" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#06b6d4" strokeWidth="1.8" />
      </svg>
    );
  }

  // 7. MySQL
  if (n.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 14c2-5 6-9 11-9 3 0 6 2 7 5-1 1-3 1-5 0-3 3-7 5-13 4z"
          fill="#00758f"
          opacity="0.3"
        />
        <path
          d="M3 14c2-5 6-9 11-9 3 0 6 2 7 5-1 1-3 1-5 0-3 3-7 5-13 4z"
          stroke="#38bdf8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="8" r="1" fill="#38bdf8" />
      </svg>
    );
  }

  // 8. PostgreSQL
  if (n.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 3c-4.5 0-8 3.5-8 8 0 3 1.5 5.5 4 7v3h3v-2.5c.3.1.7.2 1 .2 5 0 8-3.5 8-8s-3.5-7.7-8-7.7z"
          fill="#336791"
          opacity="0.25"
        />
        <path
          d="M12 3c-4.5 0-8 3.5-8 8 0 3 1.5 5.5 4 7v3h3v-2.5c.3.1.7.2 1 .2 5 0 8-3.5 8-8s-3.5-7.7-8-7.7z"
          stroke="#60a5fa"
          strokeWidth="1.6"
        />
        <circle cx="9" cy="9" r="1.2" fill="#60a5fa" />
        <path d="M12 11c1.5 0 3 .8 3 2.5S13.5 16 12 16" stroke="#93c5fd" strokeWidth="1.4" />
      </svg>
    );
  }

  // 9. MongoDB
  if (n.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2C12 2 6 8.5 6 13.5c0 3.3 2.7 6.5 6 8.5 3.3-2 6-5.2 6-8.5C18 8.5 12 2 12 2z"
          fill="#13aa52"
          opacity="0.25"
        />
        <path
          d="M12 2C12 2 6 8.5 6 13.5c0 3.3 2.7 6.5 6 8.5 3.3-2 6-5.2 6-8.5C18 8.5 12 2 12 2z"
          stroke="#22c55e"
          strokeWidth="1.6"
        />
        <path d="M12 3v17" stroke="#22c55e" strokeWidth="1.4" />
      </svg>
    );
  }

  // 10. React.js
  if (n.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.8" fill="#00d8ff" />
      </svg>
    );
  }

  // 11. Next.js
  if (n.includes("next")) {
    return (
      <div className="w-6 h-6 rounded-full bg-black border border-white/40 text-white font-bold flex items-center justify-center text-[10px] font-mono shrink-0 shadow-sm">
        N
      </div>
    );
  }

  // 12. Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" fill="#38bdf8" className={className}>
        <path d="M12 4.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.3 15 11.7 18 11.7c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 5.9 15 4.5 12 4.5zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C7.7 17.5 9 18.9 12 18.9c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.1 9 11.7 6 11.7z" />
      </svg>
    );
  }

  // 13. Redux / Redux Toolkit
  if (n.includes("redux")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="7" r="3.2" stroke="#a855f7" strokeWidth="1.6" />
        <circle cx="7" cy="16" r="3.2" stroke="#a855f7" strokeWidth="1.6" />
        <circle cx="17" cy="16" r="3.2" stroke="#a855f7" strokeWidth="1.6" />
        <path d="M10 9l-2 4.5M14 9l2 4.5M9.5 16h5" stroke="#c084fc" strokeWidth="1.4" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  // 14. HTML5 & CSS3
  if (n.includes("html") || n.includes("css3")) {
    return (
      <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black flex items-center justify-center text-[10px] font-sans select-none shrink-0 shadow-sm border border-orange-400/40">
        5
      </div>
    );
  }

  // 15. Bootstrap
  if (n.includes("bootstrap")) {
    return (
      <div className="w-6 h-6 rounded-md bg-[#7952b3] text-white font-black flex items-center justify-center text-xs font-serif select-none shrink-0 shadow-sm border border-purple-400/40">
        B
      </div>
    );
  }

  // 16. Node.js
  if (n.includes("node")) {
    return (
      <div className="w-6 h-6 rounded bg-[#339933]/20 border border-[#22c55e]/40 text-[#4ade80] font-black flex items-center justify-center text-[8px] font-mono shrink-0">
        node
      </div>
    );
  }

  // 17. Express.js
  if (n.includes("express")) {
    return (
      <div className="w-6 h-6 rounded bg-slate-800 border border-slate-600 text-slate-200 font-bold flex items-center justify-center text-[9px] font-mono shrink-0">
        ex
      </div>
    );
  }

  // 18. Spring Boot
  if (n.includes("spring boot") || (n.includes("spring") && !n.includes("security"))) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="9.5" fill="#15803d" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.6" />
        <path
          d="M12 6c3 2 4.5 5 4.5 7.5 0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5C7.5 11 9 8 12 6z"
          fill="#22c55e"
          fillOpacity="0.3"
          stroke="#4ade80"
          strokeWidth="1.4"
        />
        <path d="M12 9v7" stroke="#4ade80" strokeWidth="1.2" />
      </svg>
    );
  }

  // 19. Spring Security
  if (n.includes("security")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2l8 3.5v6.5c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V5.5L12 2z"
          fill="#16a34a"
          fillOpacity="0.25"
          stroke="#22c55e"
          strokeWidth="1.8"
        />
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 20. RESTful APIs
  if (n.includes("restful") || n.includes("api")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="3.5" fill="#f97316" fillOpacity="0.25" stroke="#f97316" strokeWidth="1.8" />
        <path
          d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
          stroke="#fb923c"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 21. JWT Authentication
  if (n.includes("jwt") || n.includes("auth")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="2.5" fill="#ec4899" />
        <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" stroke="#ec4899" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M5.6 18.4l2.5-2.5M15.9 8.1l2.5-2.5" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 22. Git / GitHub
  if (n.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="6" cy="6" r="2.5" fill="#f05032" />
        <circle cx="6" cy="18" r="2.5" fill="#f05032" />
        <circle cx="18" cy="9" r="2.5" fill="#f05032" />
        <path d="M6 8.5v7M8.5 6.5l7 2.5" stroke="#f05032" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 23. Docker
  if (n.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M2 13.5c1.5 4 5.5 6.5 10 6.5 6.5 0 10-4.5 10-9.5 0-.5 0-1-.2-1.5-1.5.5-3 .5-4.5 0-1 1.5-3 2-4.8 1.5H2z"
          fill="#0db7ed"
          fillOpacity="0.25"
        />
        <path
          d="M2 13.5c1.5 4 5.5 6.5 10 6.5 6.5 0 10-4.5 10-9.5 0-.5 0-1-.2-1.5-1.5.5-3 .5-4.5 0-1 1.5-3 2-4.8 1.5H2z"
          stroke="#0db7ed"
          strokeWidth="1.6"
        />
        <rect x="5" y="10" width="2" height="2" fill="#38bdf8" />
        <rect x="8" y="10" width="2" height="2" fill="#38bdf8" />
        <rect x="8" y="7.5" width="2" height="2" fill="#38bdf8" />
        <rect x="11" y="10" width="2" height="2" fill="#38bdf8" />
        <rect x="11" y="7.5" width="2" height="2" fill="#38bdf8" />
      </svg>
    );
  }

  // 24. Postman
  if (n.includes("postman")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="9" fill="#ff6c37" fillOpacity="0.2" stroke="#ff6c37" strokeWidth="1.6" />
        <path
          d="M7 16l8-8M15 8l-2 6-4-1"
          stroke="#ff6c37"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 25. VS Code
  if (n.includes("vs code") || n.includes("vscode")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M17 2l5 2.5v15L17 22l-8-7.5L4 18l-2-1.5v-9L4 6l5 3.5L17 2z"
          fill="#007acc"
          fillOpacity="0.2"
        />
        <path
          d="M17 2l5 2.5v15L17 22l-8-7.5L4 18l-2-1.5v-9L4 6l5 3.5L17 2z"
          stroke="#007acc"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M17 6.5L7.5 14.5M17 17.5L7.5 9.5" stroke="#38bdf8" strokeWidth="1.4" />
      </svg>
    );
  }

  // 26. Maven
  if (n.includes("maven")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M19 4c-5 0-9 4-11 9l-3 7 7-3c5-2 9-6 9-11 0-.7-.3-1.4-.7-2H19z"
          fill="#ea2d2e"
          fillOpacity="0.2"
        />
        <path
          d="M19 4c-5 0-9 4-11 9l-3 7 7-3c5-2 9-6 9-11 0-.7-.3-1.4-.7-2H19z"
          stroke="#f97316"
          strokeWidth="1.6"
        />
        <path d="M5 20l8-8" stroke="#f43f5e" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return <Terminal className={`${className} text-cyan-400`} />;
}
