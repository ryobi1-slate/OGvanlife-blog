const stats = [
  {
    value: "620",
    unit: "HRS",
    label: "Build hours logged",
    docId: "SY-LOG-001",
  },
  {
    value: "47",
    unit: "DOCS",
    label: "Technical articles",
    docId: "IX-001",
  },
  {
    value: "99.2",
    unit: "%",
    label: "Uptime reliability target",
    docId: "SY-REL-001",
  },
  {
    value: "38",
    unit: "KG",
    label: "Electrical system weight",
    docId: "EL-W-001",
  },
];

const principles = [
  {
    num: "01",
    title: "Every number cited",
    body: "No estimations without source data. Every measurement is from real-world testing on a production vehicle, not manufacturer specs.",
  },
  {
    num: "02",
    title: "Engineering drawings, not mood boards",
    body: "Dimensional accuracy and tolerances matter. Documentation uses proper technical illustration: cross-sections, exploded views, wiring schematics.",
  },
  {
    num: "03",
    title: "Failure modes documented",
    body: "We document what went wrong and why. Every system failure, incorrect assumption, and revised decision is part of the public record.",
  },
];

export default function TechCallout() {
  return (
    <>
      {/* ── Stats band ── */}
      <section className="border-y border-graphite-border bg-graphite-light/50">
        <div className="max-w-7xl mx-auto px-6 py-0 grid grid-cols-2 lg:grid-cols-4 divide-x divide-graphite-border">
          {stats.map((s) => (
            <div key={s.docId} className="px-6 py-8 flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-bone text-3xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-sand text-sm font-bold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s.unit}
                </span>
              </div>
              <p
                className="text-steel text-[10px] leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </p>
              <p
                className="text-graphite-border text-[8px] tracking-[0.1em] mt-auto"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.docId}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engineering Principles ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: header + description */}
          <div>
            <p
              className="text-sand text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              — WHY THIS EXISTS
            </p>
            <h2
              className="text-bone text-3xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Vanlife documentation should read like an engineering manual,
              not a travel blog.
            </h2>
            <p
              className="text-steel text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Most van build content is aspirational, not actionable. It shows
              the sunset, not the wiring diagram. It shows the finished kitchen,
              not the load calculations that made it safe.
            </p>
            <p
              className="text-steel text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              OG Van Life exists to fill the documentation gap. Everything
              published here is based on a real 2022 Sprinter 2500 build with
              real data, real costs, and real failure modes.
            </p>

            {/* Alert block */}
            <div className="mt-8 border-l-2 border-alert pl-4 py-1">
              <p
                className="text-[10px] tracking-[0.12em] uppercase text-alert mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ⚠ SAFETY NOTE
              </p>
              <p
                className="text-steel text-xs leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Electrical work in vehicles carries fire risk. All wiring
                documentation references NEC 690 and ABYC E-11. Consult a
                licensed electrician before energizing any high-current system.
              </p>
            </div>
          </div>

          {/* Right: principles list */}
          <div className="space-y-0">
            {principles.map((p, i) => (
              <div
                key={p.num}
                className={`py-6 flex gap-5 items-start ${i < principles.length - 1 ? "border-b border-graphite-border" : ""}`}
              >
                <span
                  className="text-graphite-border text-xs shrink-0 mt-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="text-bone text-sm font-bold mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-steel text-xs leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
