"use client";

import React from "react";

export function HeroTechIllustration() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto select-none py-2 flex items-center justify-center">
      {/* Soft ambient background glow matching illustration mood */}
      <div className="tech-hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/25 blur-3xl opacity-80 pointer-events-none" />

      {/* SVG Canvas for the Technical Developer Illustration */}
      <svg
        viewBox="0 0 500 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="monitorBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="40%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="monitorScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#172554" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="cloudCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="codeBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          <linearGradient id="phoneBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="60%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="standGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="45%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="dataLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================
            LAYER 1: BACKGROUND GEARS (Attached & Rotating Clockwise in One Circular Motion)
            High-contrast metallic chrome in Dark Mode & Rich Brushed Aluminum in Light Mode
            ======================================================== */}

        {/* TOP-RIGHT LARGE GEAR (Center: 320, 145) */}
        <g transform="translate(320, 145)">
          <g className="anim-spin-cw">
            <rect x="-45" y="-12" width="90" height="24" rx="5" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.9" />
            <rect x="-45" y="-12" width="90" height="24" rx="5" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.9" transform="rotate(45)" />
            <rect x="-45" y="-12" width="90" height="24" rx="5" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.9" transform="rotate(90)" />
            <rect x="-45" y="-12" width="90" height="24" rx="5" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.9" transform="rotate(135)" />
            <circle cx="0" cy="0" r="32" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx="0" cy="0" r="14" className="tech-gear-hole" />
          </g>
        </g>

        {/* MID-RIGHT MEDIUM GEAR (Center: 385, 255) */}
        <g transform="translate(385, 255)">
          <g className="anim-spin-cw">
            <rect x="-30" y="-8" width="60" height="16" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" />
            <rect x="-30" y="-8" width="60" height="16" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(45)" />
            <rect x="-30" y="-8" width="60" height="16" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(90)" />
            <rect x="-30" y="-8" width="60" height="16" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(135)" />
            <circle cx="0" cy="0" r="22" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx="0" cy="0" r="9" className="tech-gear-hole" />
          </g>
        </g>

        {/* BOTTOM-LEFT LOWER GEAR (Center: 125, 335) */}
        <g transform="translate(125, 335)">
          <g className="anim-spin-cw">
            <rect x="-37" y="-10" width="74" height="20" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" />
            <rect x="-37" y="-10" width="74" height="20" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(45)" />
            <rect x="-37" y="-10" width="74" height="20" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(90)" />
            <rect x="-37" y="-10" width="74" height="20" rx="4" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" opacity="0.85" transform="rotate(135)" />
            <circle cx="0" cy="0" r="26" fill="url(#gearGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx="0" cy="0" r="11" className="tech-gear-hole" />
          </g>
        </g>

        {/* ========================================================
            LAYER 2: LEFT SIDE CODE BARS (Firmly Attached & Visible in Both Themes)
            ======================================================== */}
        <g>
          <line x1="90" y1="165" x2="250" y2="165" className="tech-bg-line anim-code-shimmer-1" />
          <line x1="90" y1="188" x2="250" y2="188" className="tech-bg-line anim-code-shimmer-2" />
          <line x1="90" y1="211" x2="235" y2="211" className="tech-bg-line anim-code-shimmer-3" />
          <line x1="90" y1="234" x2="245" y2="234" className="tech-bg-line anim-code-shimmer-1" />
          <line x1="90" y1="257" x2="230" y2="257" className="tech-bg-line anim-code-shimmer-2" />
          <line x1="90" y1="280" x2="240" y2="280" className="tech-bg-line anim-code-shimmer-3" />
        </g>

        {/* ========================================================
            LAYER 3: DESKTOP MONITOR & STAND (Firmly Anchored)
            ======================================================== */}

        {/* Monitor Stand Base & Pole */}
        <g>
          {/* Oval Stand Foot / Base */}
          <ellipse cx="235" cy="378" rx="85" ry="12" fill="url(#standGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.4" />
          <ellipse cx="235" cy="376" rx="80" ry="10" className="tech-stand-highlight" />
          {/* Vertical Neck */}
          <path d="M 222 320 L 216 374 L 254 374 L 248 320 Z" fill="url(#standGrad)" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.4" />
        </g>

        {/* Monitor Outer Chassis / Bezel */}
        <rect
          x="135"
          y="170"
          width="215"
          height="156"
          rx="12"
          fill="url(#monitorBodyGrad)"
          stroke="#3b82f6"
          strokeWidth="2"
          className="anim-monitor-glow tech-monitor-frame"
        />

        {/* Monitor Inner Screen */}
        <rect
          x="142"
          y="177"
          width="201"
          height="142"
          rx="8"
          fill="url(#monitorScreenGrad)"
        />

        {/* Top Code Editor Window inside Monitor */}
        <rect
          x="172"
          y="185"
          width="164"
          height="82"
          rx="6"
          fill="#0a0f24"
          stroke="rgba(56, 189, 248, 0.45)"
          strokeWidth="1.2"
        />

        {/* Editor Window Header Bar */}
        <path d="M 172 191 C 172 187.6 174.6 185 178 185 L 330 185 C 333.4 185 336 187.6 336 185 L 336 195 L 172 195 Z" fill="#1e293b" />
        {/* Editor 3 Window Control Dots */}
        <circle cx="180" cy="190" r="2" fill="#ef4444" />
        <circle cx="186" cy="190" r="2" fill="#f59e0b" />
        <circle cx="192" cy="190" r="2" fill="#10b981" />

        {/* Code Lines inside Editor */}
        <g>
          {/* Line 1 */}
          <rect x="180" y="202" width="38" height="3" rx="1.5" fill="#38bdf8" />
          <rect x="222" y="202" width="52" height="3" rx="1.5" fill="#a78bfa" />
          {/* Line 2 */}
          <rect x="180" y="210" width="85" height="3" rx="1.5" fill="#e2e8f0" className="anim-code-shimmer-1" />
          {/* Line 3 */}
          <rect x="188" y="218" width="60" height="3" rx="1.5" fill="#38bdf8" className="anim-code-shimmer-2" />
          <rect x="252" y="218" width="35" height="3" rx="1.5" fill="#34d399" />
          {/* Line 4 */}
          <rect x="188" y="226" width="75" height="3" rx="1.5" fill="#f472b6" className="anim-code-shimmer-3" />
          {/* Line 5 */}
          <rect x="188" y="234" width="95" height="3" rx="1.5" fill="#60a5fa" />
          {/* Line 6 */}
          <rect x="180" y="242" width="45" height="3" rx="1.5" fill="#a78bfa" />
          {/* Blinking Cyan Cursor */}
          <rect x="229" y="240" width="2" height="6" fill="#38bdf8" className="anim-code-shimmer-1" />
        </g>

        {/* Bottom Screen UI Section */}
        {/* 3 App/Module square boxes */}
        <rect x="245" y="278" width="16" height="15" rx="3.5" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
        <rect x="267" y="278" width="16" height="15" rx="3.5" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1" />
        <rect x="289" y="278" width="16" height="15" rx="3.5" fill="rgba(16, 185, 129, 0.3)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1" />

        {/* Bottom Center Bar Line */}
        <rect x="245" y="299" width="60" height="3.5" rx="1.75" fill="rgba(255, 255, 255, 0.2)" />

        {/* ========================================================
            LAYER 4: LEFT SIDE PANELS (Firmly Attached)
            ======================================================== */}

        {/* TOP-LEFT CODE PANEL */}
        <g>
          <rect
            x="110"
            y="152"
            width="52"
            height="52"
            rx="9"
            fill="#0f172a"
            stroke="#3b82f6"
            strokeWidth="1.5"
            className="drop-shadow-md"
          />
          {/* Window control dots inside */}
          <circle cx="118" cy="160" r="1.5" fill="#ef4444" />
          <circle cx="123" cy="160" r="1.5" fill="#f59e0b" />
          <circle cx="128" cy="160" r="1.5" fill="#10b981" />
          {/* Code lines */}
          <rect x="118" y="168" width="34" height="2.5" rx="1" fill="#38bdf8" />
          <rect x="118" y="174" width="24" height="2.5" rx="1" fill="#cbd5e1" />
          <rect x="118" y="180" width="30" height="2.5" rx="1" fill="#818cf8" />
          <rect x="118" y="186" width="20" height="2.5" rx="1" fill="#34d399" />
        </g>

        {/* BOTTOM-LEFT GEAR PANEL (Gear Spins Exactly In-Place) */}
        <g>
          <rect
            x="108"
            y="218"
            width="54"
            height="54"
            rx="9"
            fill="#0a2540"
            stroke="#06b6d4"
            strokeWidth="1.5"
            className="drop-shadow-md"
          />
          {/* Gear inside panel rotating strictly centered at (135, 245) */}
          <g transform="translate(135, 245)">
            <g className="anim-spin-panel">
              <rect x="-12" y="-4" width="24" height="8" rx="2" fill="#06b6d4" />
              <rect x="-12" y="-4" width="24" height="8" rx="2" fill="#06b6d4" transform="rotate(45)" />
              <rect x="-12" y="-4" width="24" height="8" rx="2" fill="#06b6d4" transform="rotate(90)" />
              <rect x="-12" y="-4" width="24" height="8" rx="2" fill="#06b6d4" transform="rotate(135)" />
              <circle cx="0" cy="0" r="9" fill="#06b6d4" />
              <circle cx="0" cy="0" r="4" fill="#0a2540" />
            </g>
          </g>
        </g>

        {/* ========================================================
            LAYER 5: < / > CODE BADGE (Firmly Attached Over Bottom-Left Monitor)
            ======================================================== */}
        <g>
          {/* Outer glow shadow */}
          <rect
            x="150"
            y="266"
            width="68"
            height="46"
            rx="10"
            fill="url(#codeBadgeGrad)"
            stroke="#ffffff"
            strokeWidth="1.2"
            filter="url(#screenGlow)"
            opacity="0.3"
          />
          {/* Main Badge */}
          <rect
            x="150"
            y="266"
            width="68"
            height="46"
            rx="10"
            fill="url(#codeBadgeGrad)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          {/* Inner `< / >` Symbol */}
          <text
            x="184"
            y="297"
            fontFamily="monospace"
            fontSize="21"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
            letterSpacing="-1"
          >
            &lt;/&gt;
          </text>
        </g>

        {/* ========================================================
            LAYER 6: CLOUD CARD (Firmly Attached at Top Right)
            ======================================================== */}
        <g>
          {/* Cyan/Teal Rounded Card */}
          <rect
            x="320"
            y="145"
            width="72"
            height="70"
            rx="14"
            fill="url(#cloudCardGrad)"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.95"
            className="drop-shadow-lg"
          />

          {/* White Cloud Icon */}
          <g>
            <path
              d="M 344 176 
                 A 8 8 0 0 1 356 168 
                 A 12 12 0 0 1 372 170 
                 A 8 8 0 0 1 378 178 
                 A 6 6 0 0 1 372 184 
                 L 346 184 
                 A 6 6 0 0 1 344 176 Z"
              fill="#ffffff"
            />
          </g>

          {/* Subtle Downward Sync Arrow */}
          <g className="anim-arrow-bounce">
            <line x1="356" y1="184" x2="356" y2="198" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M 349 193 L 356 200 L 363 193" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>

        {/* ========================================================
            LAYER 7: MOBILE SMARTPHONE (Firmly Attached in Right Foreground)
            ======================================================== */}
        <g>
          {/* Phone Outer Chassis */}
          <rect
            x="315"
            y="260"
            width="64"
            height="120"
            rx="14"
            fill="url(#phoneBodyGrad)"
            stroke="#3b82f6"
            strokeWidth="1.8"
            className="drop-shadow-xl"
          />

          {/* Phone Screen */}
          <rect
            x="320"
            y="268"
            width="54"
            height="104"
            rx="10"
            fill="#090d21"
          />

          {/* Top Speaker Ear Notch */}
          <rect x="339" y="264" width="16" height="2" rx="1" fill="#64748b" />

          {/* Glowing Cyan Card on Phone Screen with Pulse */}
          <rect
            x="326"
            y="294"
            width="42"
            height="42"
            rx="8"
            fill="url(#codeBadgeGrad)"
            className="anim-phone-pulse"
          />

          {/* Checkmark inside Phone Card */}
          <path
            d="M 338 315 L 344 321 L 356 309"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Bottom Pill on Phone */}
          <rect x="335" y="358" width="24" height="3" rx="1.5" fill="#334155" />
        </g>

        {/* ========================================================
            LAYER 8: SUBTLE DATA STREAMS
            ======================================================== */}
        {/* Stream line from Cloud Card down to Monitor */}
        <path
          d="M 335 220 C 330 240, 310 250, 290 250"
          stroke="url(#dataLineGrad)"
          strokeWidth="2"
          className="anim-data-stream"
          fill="none"
        />

        {/* Stream line from Monitor to Phone */}
        <path
          d="M 280 320 C 290 340, 305 340, 315 330"
          stroke="url(#dataLineGrad)"
          strokeWidth="2"
          className="anim-data-stream"
          fill="none"
        />
      </svg>
    </div>
  );
}
