import Link from "next/link";

export interface ArticleSpec {
  label: string;
  value: string;
}

export interface ArticleData {
  slug: string;
  category: string;
  tag: string; // e.g. "ELECTRICAL" | "SYSTEM" | "SAFETY" | "INSULATION"
  title: string;
  description: string;
  specs: ArticleSpec[];
  updated: string;
  readTime: string;
  docId: string;
  schematic?: React.ReactNode; // optional SVG schematic
}

export default function ArticleCard({ article }: { article: ArticleData }) {
  return (
    <Link href={`/${article.slug}`} className="block group">
      <article className="article-card h-full flex flex-col">
        {/* ── Card Header ── */}
        <div className="border-b border-graphite-border px-5 pt-4 pb-3 flex items-center justify-between">
          <span className="category-tag">{article.tag}</span>
          <span
            className="text-steel text-[9px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {article.docId}
          </span>
        </div>

        {/* ── Schematic / Visual placeholder ── */}
        {article.schematic ? (
          <div className="border-b border-graphite-border px-5 py-4 flex items-center justify-center bg-graphite/50 min-h-[90px]">
            {article.schematic}
          </div>
        ) : (
          <div className="border-b border-graphite-border px-5 py-4 flex items-center justify-center bg-graphite/50 min-h-[90px]">
            <SchematicPlaceholder category={article.tag} />
          </div>
        )}

        {/* ── Body ── */}
        <div className="px-5 py-4 flex-1 flex flex-col gap-3">
          <h3
            className="text-bone text-base font-bold leading-snug group-hover:text-sand transition-colors duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {article.title}
          </h3>
          <p
            className="text-steel text-xs leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {article.description}
          </p>

          {/* ── Technical Specs ── */}
          <div className="mt-auto pt-3 border-t border-graphite-border space-y-1.5">
            {article.specs.map((spec) => (
              <div key={spec.label} className="flex items-baseline justify-between gap-2">
                <span
                  className="text-steel text-[9px] tracking-[0.12em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {spec.label}
                </span>
                <span
                  className="text-sand text-[11px] font-500 tracking-wide shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Card Footer ── */}
        <div className="border-t border-graphite-border px-5 py-2.5 flex items-center justify-between">
          <span
            className="text-steel text-[9px] tracking-[0.1em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            UPD {article.updated}
          </span>
          <span
            className="text-steel text-[9px] tracking-[0.1em] uppercase flex items-center gap-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {article.readTime} READ
            <span className="text-sand ml-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

/* Inline schematic SVGs per category */
function SchematicPlaceholder({ category }: { category: string }) {
  switch (category) {
    case "ELECTRICAL":
      return <ElectricalSchematic />;
    case "SAFETY":
      return <SafetySchematic />;
    case "INSULATION":
      return <InsulationSchematic />;
    case "PLUMBING":
      return <PlumbingSchematic />;
    default:
      return <SystemSchematic />;
  }
}

function ElectricalSchematic() {
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Solar panel */}
      <rect x="4" y="10" width="32" height="20" rx="1" stroke="#C8B28A" strokeWidth="1"/>
      <line x1="4" y1="16" x2="36" y2="16" stroke="#C8B28A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="4" y1="22" x2="36" y2="22" stroke="#C8B28A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="13" y1="10" x2="13" y2="30" stroke="#C8B28A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="22" y1="10" x2="22" y2="30" stroke="#C8B28A" strokeWidth="0.7" opacity="0.5"/>
      <text x="20" y="40" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">SOLAR</text>
      {/* Wire */}
      <line x1="36" y1="20" x2="68" y2="20" stroke="#C8B28A" strokeWidth="1" strokeDasharray="3 2"/>
      {/* MPPT */}
      <rect x="68" y="10" width="24" height="20" rx="1" stroke="#6E747A" strokeWidth="1"/>
      <text x="80" y="22" fontSize="6" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">MPPT</text>
      {/* Wire */}
      <line x1="92" y1="20" x2="116" y2="20" stroke="#C8B28A" strokeWidth="1" strokeDasharray="3 2"/>
      {/* Battery */}
      <rect x="116" y="8" width="28" height="24" rx="1" stroke="#C8B28A" strokeWidth="1.2"/>
      <rect x="119" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.3"/>
      <rect x="127" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.5"/>
      <rect x="135" y="12" width="6" height="15" rx="0.5" fill="#C8B28A" opacity="0.7"/>
      <text x="130" y="42" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">LiFePO4</text>
      {/* Wire to load */}
      <line x1="144" y1="20" x2="166" y2="20" stroke="#C8B28A" strokeWidth="1" strokeDasharray="3 2"/>
      {/* Load / Inverter */}
      <polygon points="166,10 190,20 166,30" stroke="#6E747A" strokeWidth="1" fill="none"/>
      <text x="183" y="42" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">INV</text>
      {/* Amps label */}
      <text x="53" y="15" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">↑ 40A</text>
      <text x="104" y="15" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">↓ 12V</text>
    </svg>
  );
}

function SafetySchematic() {
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Shield outline */}
      <path d="M100 6 L128 16 L128 38 Q128 54 100 64 Q72 54 72 38 L72 16 Z" stroke="#B23A2A" strokeWidth="1.2" fill="none"/>
      {/* Inner shield */}
      <path d="M100 14 L120 22 L120 38 Q120 50 100 58 Q80 50 80 38 L80 22 Z" stroke="#B23A2A" strokeWidth="0.7" fill="rgba(178,58,42,0.08)"/>
      {/* Exclamation */}
      <line x1="100" y1="28" x2="100" y2="44" stroke="#B23A2A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="100" cy="50" r="1.5" fill="#B23A2A"/>
      {/* Rating labels left */}
      <text x="58" y="24" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="end">LOAD:</text>
      <text x="58" y="34" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="end">CRASH:</text>
      <text x="58" y="44" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="end">TEMP:</text>
      {/* Rating values right */}
      <text x="142" y="24" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono">20G</text>
      <text x="142" y="34" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono">35G</text>
      <text x="142" y="44" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono">-40°C</text>
    </svg>
  );
}

function InsulationSchematic() {
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Van wall cross section */}
      <rect x="20" y="10" width="8" height="50" rx="0.5" fill="#C8B28A" opacity="0.7" stroke="#C8B28A" strokeWidth="0.5"/>
      <text x="24" y="68" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">SKIN</text>
      {/* Thinsulate layer */}
      <rect x="28" y="10" width="20" height="50" rx="0.5" fill="none" stroke="#6E747A" strokeWidth="0.7" strokeDasharray="2 1.5"/>
      <text x="38" y="68" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">THIN</text>
      {/* Poly-iso board */}
      <rect x="48" y="10" width="36" height="50" rx="0.5" fill="rgba(200,178,138,0.12)" stroke="#C8B28A" strokeWidth="1"/>
      {/* Diagonal hatch */}
      {[0,6,12,18,24,30,36].map((o,i) => (
        <line key={i} x1={48+o} y1="10" x2={Math.min(48+o+36,84)} y2={Math.max(10,10+36-o)} stroke="#C8B28A" strokeWidth="0.5" opacity="0.3"/>
      ))}
      <text x="66" y="68" fontSize="6" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">POLY-ISO</text>
      {/* Vapor barrier */}
      <rect x="84" y="10" width="6" height="50" fill="none" stroke="#6E747A" strokeWidth="0.5" strokeDasharray="1 1"/>
      <text x="87" y="68" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">VB</text>
      {/* Interior wall */}
      <rect x="90" y="10" width="10" height="50" fill="#333840" stroke="#6E747A" strokeWidth="0.7"/>
      <text x="95" y="68" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">PLY</text>
      {/* R-value callout */}
      <line x1="110" y1="35" x2="140" y2="35" stroke="#6E747A" strokeWidth="0.7"/>
      <text x="142" y="32" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono">R-24</text>
      <text x="142" y="42" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono">COMBINED</text>
    </svg>
  );
}

function PlumbingSchematic() {
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Fresh tank */}
      <rect x="10" y="18" width="28" height="34" rx="2" stroke="#C8B28A" strokeWidth="1"/>
      <rect x="14" y="22" width="20" height="26" rx="1" fill="rgba(200,178,138,0.15)"/>
      <text x="24" y="14" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">FRESH</text>
      <text x="24" y="58" fontSize="7" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">30 GAL</text>
      {/* Pipe */}
      <line x1="38" y1="35" x2="58" y2="35" stroke="#6E747A" strokeWidth="1.5"/>
      {/* Pump */}
      <rect x="58" y="28" width="20" height="14" rx="2" stroke="#C8B28A" strokeWidth="1"/>
      <text x="68" y="36" fontSize="6" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">PUMP</text>
      <text x="68" y="50" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">55PSI</text>
      {/* Pipe */}
      <line x1="78" y1="35" x2="110" y2="35" stroke="#6E747A" strokeWidth="1.5"/>
      {/* Filter */}
      <circle cx="94" cy="35" r="7" stroke="#6E747A" strokeWidth="0.8" fill="none"/>
      <text x="94" y="53" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">FILTER</text>
      {/* Faucet */}
      <path d="M110 35 L118 35 L118 28 L122 28" stroke="#C8B28A" strokeWidth="1.2" fill="none"/>
      <path d="M122 24 Q126 24 126 28 Q126 32 122 32" stroke="#C8B28A" strokeWidth="1" fill="none"/>
      {/* Grey tank */}
      <rect x="140" y="18" width="28" height="34" rx="2" stroke="#6E747A" strokeWidth="1"/>
      <text x="154" y="14" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">GREY</text>
      <text x="154" y="58" fontSize="7" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">15 GAL</text>
      <line x1="128" y1="35" x2="140" y2="35" stroke="#6E747A" strokeWidth="1" strokeDasharray="2 1.5"/>
    </svg>
  );
}

function SystemSchematic() {
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
      {/* Generic van outline top-down */}
      <rect x="40" y="15" width="120" height="40" rx="3" stroke="#C8B28A" strokeWidth="1.2" fill="none"/>
      <rect x="40" y="15" width="32" height="40" rx="2" stroke="#6E747A" strokeWidth="0.8" fill="none"/>
      {/* Roof structures */}
      <rect x="52" y="20" width="18" height="10" rx="1" stroke="#C8B28A" strokeWidth="0.7" fill="rgba(200,178,138,0.1)"/>
      <rect x="52" y="38" width="18" height="10" rx="1" stroke="#C8B28A" strokeWidth="0.7" fill="rgba(200,178,138,0.1)"/>
      {/* Interior layout lines */}
      <line x1="80" y1="15" x2="80" y2="55" stroke="#333840" strokeWidth="1.5"/>
      <line x1="130" y1="15" x2="130" y2="55" stroke="#333840" strokeWidth="1"/>
      <line x1="80" y1="35" x2="160" y2="35" stroke="#333840" strokeWidth="0.8"/>
      {/* Labels */}
      <text x="60" y="36" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">CAB</text>
      <text x="105" y="26" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">STORAGE</text>
      <text x="145" y="26" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">GALLEY</text>
      <text x="105" y="47" fontSize="6" fill="#C8B28A" fontFamily="JetBrains Mono" textAnchor="middle">GARAGE</text>
      <text x="145" y="47" fontSize="6" fill="#6E747A" fontFamily="JetBrains Mono" textAnchor="middle">BED</text>
      {/* Wheels */}
      <rect x="36" y="20" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" strokeWidth="0.7"/>
      <rect x="36" y="36" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" strokeWidth="0.7"/>
      <rect x="158" y="20" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" strokeWidth="0.7"/>
      <rect x="158" y="36" width="6" height="14" rx="1" fill="#333840" stroke="#6E747A" strokeWidth="0.7"/>
    </svg>
  );
}
