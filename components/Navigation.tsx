"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "BUILD GUIDE", href: "/build-guide" },
  { label: "SYSTEMS", href: "/systems" },
  { label: "ELECTRICAL", href: "/electrical" },
  { label: "SAFETY", href: "/safety" },
  { label: "ABOUT", href: "/about" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-graphite/95 backdrop-blur-sm border-b border-graphite-border">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Van icon SVG */}
          <svg
            width="36"
            height="22"
            viewBox="0 0 36 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            {/* Van body */}
            <rect x="1" y="5" width="34" height="13" rx="1.5" fill="none" stroke="#C8B28A" strokeWidth="1.2" />
            {/* Cab section */}
            <path d="M22 5 L22 1 Q22 0.5 21.5 0.5 L9 0.5 Q8 0.5 7 1.5 L4 5" stroke="#C8B28A" strokeWidth="1.2" fill="none" />
            {/* Windows */}
            <rect x="9" y="1.5" width="5" height="3.5" rx="0.4" fill="#C8B28A" opacity="0.4" />
            <rect x="15.5" y="1.5" width="5.5" height="3.5" rx="0.4" fill="#C8B28A" opacity="0.4" />
            {/* Rear window / vent lines */}
            <line x1="27" y1="7" x2="27" y2="16" stroke="#C8B28A" strokeWidth="0.8" opacity="0.4" />
            <line x1="30" y1="7" x2="30" y2="16" stroke="#C8B28A" strokeWidth="0.8" opacity="0.4" />
            {/* Wheels */}
            <circle cx="8.5" cy="18" r="3.5" fill="none" stroke="#C8B28A" strokeWidth="1.2" />
            <circle cx="8.5" cy="18" r="1.5" fill="#C8B28A" opacity="0.5" />
            <circle cx="27.5" cy="18" r="3.5" fill="none" stroke="#C8B28A" strokeWidth="1.2" />
            <circle cx="27.5" cy="18" r="1.5" fill="#C8B28A" opacity="0.5" />
            {/* Roof rack line */}
            <line x1="7" y1="0.5" x2="22" y2="0.5" stroke="#C8B28A" strokeWidth="1.2" opacity="0.6" />
          </svg>

          {/* Wordmark */}
          <div className="flex flex-col">
            <span
              className="font-heading text-bone text-xs tracking-[0.28em] font-700 leading-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.28em" }}
            >
              OG VAN LIFE
            </span>
            <span
              className="text-steel text-[9px] tracking-[0.18em] leading-none mt-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em" }}
            >
              TECHNICAL DOCS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Subscribe CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/subscribe"
            className="hidden md:inline-flex items-center gap-2 bg-alert hover:bg-[#8f2d21] transition-colors px-4 py-1.5 text-bone text-[0.65rem] font-heading font-600 tracking-[0.14em] uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bone inline-block" />
            SUBSCRIBE
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-steel-light transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-steel-light transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-steel-light transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-graphite-light border-t border-graphite-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 bg-alert px-4 py-2 text-bone text-[0.65rem] font-heading font-600 tracking-[0.14em] uppercase w-fit"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bone inline-block" />
            SUBSCRIBE
          </Link>
        </div>
      )}
    </header>
  );
}
