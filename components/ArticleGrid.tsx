import ArticleCard, { ArticleData } from "./ArticleCard";

const articles: ArticleData[] = [
  {
    slug: "electrical/lithium-battery-sizing",
    category: "ELECTRICAL",
    tag: "ELECTRICAL",
    docId: "EL-001",
    title: "Lithium Battery Sizing Calculator & Load Analysis",
    description:
      "Full methodology for calculating amp-hour requirements across 24-hour usage cycles. Includes inverter efficiency derating, charge-discharge depth-of-discharge curves for LiFePO4 cells, and BMS selection criteria.",
    specs: [
      { label: "BATTERY BANK", value: "200Ah LiFePO4" },
      { label: "USABLE CAPACITY", value: "180Ah (90% DoD)" },
      { label: "CHARGE RATE", value: "0.2C (40A MAX)" },
    ],
    updated: "2026-01",
    readTime: "22 MIN",
  },
  {
    slug: "electrical/solar-array-wiring",
    category: "ELECTRICAL",
    tag: "ELECTRICAL",
    docId: "EL-002",
    title: "800W Roof Solar Array: Series vs. Parallel Wiring",
    description:
      "Engineering comparison of series and parallel PV configurations under partial shading conditions. MPPT controller selection matrix, wire gauge sizing per NEC 690, and fuse placement rationale.",
    specs: [
      { label: "ARRAY OUTPUT", value: "800W PEAK" },
      { label: "MPPT INPUT", value: "12–75V VOC" },
      { label: "WIRE GAUGE", value: "10 AWG (30A)" },
    ],
    updated: "2026-01",
    readTime: "18 MIN",
  },
  {
    slug: "safety/cargo-restraint-systems",
    category: "SAFETY",
    tag: "SAFETY",
    docId: "SF-001",
    title: "Cargo Restraint Engineering: G-Force Ratings & Fastener Specs",
    description:
      "FMVSS 302 compliance documentation for all interior cargo systems. Pull-test data for L-track anchors, E-track rails, and threaded inserts through 80/20 aluminum extrusion into Sprinter ribs.",
    specs: [
      { label: "FORCE RATING", value: "20G FORWARD" },
      { label: "ANCHOR LOAD", value: "1,500 LB EA." },
      { label: "BOLT SPEC", value: "M8 × 1.25 GR.8.8" },
    ],
    updated: "2025-12",
    readTime: "15 MIN",
  },
  {
    slug: "insulation/thermal-envelope-analysis",
    category: "INSULATION",
    tag: "INSULATION",
    docId: "IN-001",
    title: "Thermal Envelope Design: Heat Loss Modeling & R-Value Stack",
    description:
      "ASHRAE 90.1 heat loss calculations for a 170\" high-roof shell. Poly-iso vs. Thinsulate stacking strategy, vapor management, thermal bridging through ribs, and real-world delta-T performance data.",
    specs: [
      { label: "COMBINED R-VALUE", value: "R-24 WALLS" },
      { label: "FLOOR R-VALUE", value: "R-14 COMPOSITE" },
      { label: "ENERGY USE", value: "12W AVG HEATING" },
    ],
    updated: "2025-11",
    readTime: "28 MIN",
  },
  {
    slug: "systems/fresh-water-system",
    category: "PLUMBING",
    tag: "PLUMBING",
    docId: "PL-001",
    title: "30-Gallon Pressurized Fresh Water System: Full Schematic",
    description:
      "End-to-end documentation of the pressurized water system: tank selection, accumulator sizing, pump specifications, filtration stack, winterization valve placement, and grey water management.",
    specs: [
      { label: "FRESH CAPACITY", value: "30 GAL (UV-HDPE)" },
      { label: "PUMP PRESSURE", value: "55 PSI (3.8 BAR)" },
      { label: "FILTER RATING", value: "0.5 MICRON" },
    ],
    updated: "2025-10",
    readTime: "20 MIN",
  },
  {
    slug: "systems/vehicle-overview",
    category: "SYSTEM",
    tag: "SYSTEM",
    docId: "SY-001",
    title: "Build Overview: 2022 Sprinter 2500 High-Roof 170\" EXT",
    description:
      "Master index of all systems. Vehicle donor specs, pre-conversion inspection checklist, sub-system dependency map, total cost accounting, and the rationale behind each major design decision.",
    specs: [
      { label: "DONOR VEHICLE", value: "2022 SPRINTER 2500" },
      { label: "CONVERSION COST", value: "$32,850 TOTAL" },
      { label: "BUILD HOURS", value: "620 HRS LOGGED" },
    ],
    updated: "2025-09",
    readTime: "12 MIN",
  },
];

export default function ArticleGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10 border-b border-graphite-border pb-5">
        <div>
          <p
            className="text-sand text-[10px] tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — TECHNICAL DEEP DIVES
          </p>
          <h2
            className="text-bone text-3xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Latest Documentation
          </h2>
        </div>
        <a
          href="/archive"
          className="hidden sm:flex items-center gap-1.5 text-steel text-[10px] tracking-[0.14em] uppercase hover:text-bone transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          VIEW ALL DOCS <span className="text-sand">↗</span>
        </a>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["ALL", "ELECTRICAL", "SAFETY", "INSULATION", "PLUMBING", "SYSTEM"].map(
          (f) => (
            <button
              key={f}
              className={`px-3 py-1 text-[9px] tracking-[0.14em] uppercase border transition-colors ${
                f === "ALL"
                  ? "border-sand text-sand"
                  : "border-graphite-border text-steel hover:border-steel hover:text-bone"
              }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-10 flex justify-center">
        <button
          className="border border-graphite-border text-steel text-[10px] tracking-[0.14em] uppercase px-8 py-3 hover:border-steel hover:text-bone transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          LOAD MORE DOCUMENTATION
        </button>
      </div>
    </section>
  );
}
