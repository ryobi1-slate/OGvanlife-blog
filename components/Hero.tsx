"use client";

import { useEffect, useRef } from "react";

const costBreakdown = [
  { label: "ELECTRICAL", pct: 45, color: "#C8B28A" },
  { label: "CABINETRY", pct: 30, color: "#8C9198" },
  { label: "INSULATION", pct: 15, color: "#6E747A" },
  { label: "PLUMBING", pct: 5, color: "#4A5058" },
  { label: "MISC", pct: 5, color: "#333840" },
];

const dataPoints = [
  {
    icon: "⬡",
    label: "BUILD COST",
    value: "$32,850",
    sub: "FULL CONVERSION",
  },
  {
    icon: "⚡",
    label: "ELECTRICAL",
    value: "45%",
    sub: "OF TOTAL COST",
  },
  {
    icon: "◈",
    label: "SOLAR CAPACITY",
    value: "800W",
    sub: "ROOF ARRAY",
  },
  {
    icon: "▣",
    label: "BATTERY BANK",
    value: "200Ah",
    sub: "LITHIUM LFP",
  },
];

export default function Hero() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars =
              entry.target.querySelectorAll<HTMLElement>("[data-bar]");
            bars.forEach((bar, i) => {
              const target = bar.dataset.target || "0%";
              setTimeout(() => {
                bar.style.width = target;
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-engineering-grid overflow-hidden">
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,178,138,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top document ruler – decorative */}
      <div className="absolute top-14 left-0 right-0 h-px bg-graphite-border opacity-60" />

      {/* Content wrapper */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Breadcrumb / system indicator */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-steel text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            DOC-001
          </span>
          <span className="text-graphite-border">—</span>
          <span
            className="text-steel text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            OVERVIEW / HOMEPAGE
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] inline-block animate-pulse" />
            <span
              className="text-steel text-[10px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              LIVE
            </span>
          </span>
        </div>

        {/* ── Main Headline ── */}
        <div className="max-w-5xl">
          {/* Pre-label */}
          <p
            className="text-sand text-xs tracking-[0.22em] uppercase mb-5 font-medium"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Mercedes Sprinter Van Conversion // Technical Reference
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] mb-6 text-bone"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The math behind{" "}
            <em
              className="not-italic"
              style={{ color: "#C8B28A", fontStyle: "italic" }}
            >
              the build.
            </em>
          </h1>

          <p
            className="text-steel-light text-base sm:text-lg max-w-2xl leading-relaxed mb-12"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Data-driven insights, rigorous testing, and no-fluff technical
            documentation for Mercedes Sprinter van conversions. Every number
            verified. Every system documented.
          </p>
        </div>

        {/* ── CTA Row ── */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="/build-guide"
            className="inline-flex items-center gap-2 border border-sand text-sand px-6 py-2.5 text-xs tracking-[0.14em] uppercase font-600 hover:bg-sand hover:text-graphite transition-colors duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span>→</span> EXPLORE BUILD GUIDE
          </a>
          <a
            href="/electrical"
            className="inline-flex items-center gap-2 border border-graphite-border text-steel text-xs tracking-[0.14em] uppercase font-600 hover:border-steel hover:text-bone transition-colors duration-200 px-6 py-2.5"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            ELECTRICAL SYSTEMS ↗
          </a>
        </div>

        {/* ── Data Points Strip ── */}
        <div className="border border-graphite-border bg-graphite-light/60 divide-x divide-graphite-border flex flex-col sm:flex-row">
          {dataPoints.map((dp, i) => (
            <div
              key={i}
              className="flex-1 px-5 py-4 flex flex-col gap-0.5 sm:border-b-0 border-b border-graphite-border last:border-0"
            >
              <span
                className="text-steel text-lg leading-none mb-1"
                aria-hidden
              >
                {dp.icon}
              </span>
              <span
                className="text-steel text-[9px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {dp.label}
              </span>
              <span
                className="text-bone text-2xl font-bold leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {dp.value}
              </span>
              <span
                className="text-steel text-[9px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {dp.sub}
              </span>
            </div>
          ))}
        </div>

        {/* ── Cost Breakdown Bar ── */}
        <div
          ref={barsRef}
          className="mt-6 border border-graphite-border bg-graphite-light/40 p-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span
                className="text-sand text-[9px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ↗ COST BREAKDOWN
              </span>
              <span className="text-graphite-border text-sm">|</span>
              <span
                className="text-bone text-[11px] font-bold"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                $32,850 TOTAL
              </span>
            </div>
            <span
              className="text-steel text-[9px] tracking-[0.12em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              REV 2026-02
            </span>
          </div>

          {/* Bars */}
          <div className="space-y-2.5">
            {costBreakdown.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className="text-[10px] tracking-[0.1em] w-24 text-right text-steel-light shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.label}
                </span>
                <div className="flex-1 h-4 bg-graphite-border relative overflow-hidden">
                  <div
                    data-bar
                    data-target={`${item.pct}%`}
                    className="absolute left-0 top-0 h-full transition-[width] duration-700 ease-out"
                    style={{
                      width: "0%",
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span
                  className="text-[10px] w-8 text-steel-light shrink-0 text-right"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Legend note */}
          <p
            className="text-steel text-[9px] tracking-[0.1em] mt-3 border-t border-graphite-border pt-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            BASED ON HIGH-ROOF 170&quot; EXT SPRINTER 2500 · ALL COSTS INCLUDE
            LABOR + MATERIALS
          </p>
        </div>
      </div>

      {/* Bottom ruled line with scroll hint */}
      <div className="relative max-w-7xl mx-auto px-6 pb-8 w-full flex items-center justify-between">
        <div className="flex-1 h-px bg-graphite-border" />
        <span
          className="text-steel text-[9px] tracking-[0.18em] mx-4 animate-bounce"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ↓ SCROLL
        </span>
        <div className="flex-1 h-px bg-graphite-border" />
      </div>
    </section>
  );
}
