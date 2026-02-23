import Link from "next/link";

const systemLinks = [
  { label: "BUILD GUIDE", href: "/build-guide" },
  { label: "ELECTRICAL", href: "/electrical" },
  { label: "SYSTEMS", href: "/systems" },
  { label: "SAFETY", href: "/safety" },
];

const infoLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "METHODOLOGY", href: "/methodology" },
  { label: "SUBSCRIBE", href: "/subscribe" },
  { label: "RSS FEED", href: "/feed.xml" },
];

export default function Footer() {
  return (
    <footer className="border-t border-graphite-border bg-graphite-light/30">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo wordmark */}
            <div>
              <p
                className="text-bone text-sm tracking-[0.28em] font-bold uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.28em" }}
              >
                OG VAN LIFE
              </p>
              <p
                className="text-steel text-[9px] tracking-[0.18em] mt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                TECHNICAL DOCUMENTATION
              </p>
            </div>

            <p
              className="text-steel text-xs leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              No-fluff engineering documentation for serious Sprinter van
              builders. Every spec verified. Every system tested.
            </p>

            {/* System status indicator */}
            <div className="flex items-center gap-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
              <span
                className="text-steel text-[9px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Systems links */}
          <div>
            <p
              className="text-sand text-[9px] tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              SYSTEMS
            </p>
            <ul className="space-y-2.5">
              {systemLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-bone text-[10px] tracking-[0.1em] uppercase transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <p
              className="text-sand text-[9px] tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              INFORMATION
            </p>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-bone text-[10px] tracking-[0.1em] uppercase transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe bar */}
        <div className="mt-10 border border-graphite-border bg-graphite/60 p-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div>
            <p
              className="text-bone text-xs font-bold tracking-[0.08em] uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              GET TECHNICAL UPDATES
            </p>
            <p
              className="text-steel text-[10px] mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              New documentation drops. No marketing. Unsubscribe anytime.
            </p>
          </div>
          <form className="flex gap-0 flex-1 sm:max-w-xs w-full">
            <input
              type="email"
              placeholder="engineer@domain.com"
              className="flex-1 bg-graphite border border-graphite-border border-r-0 px-3 py-2 text-bone text-xs placeholder:text-steel focus:outline-none focus:border-steel"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            />
            <button
              type="submit"
              className="bg-alert hover:bg-[#8f2d21] transition-colors px-4 py-2 text-bone text-[10px] tracking-[0.12em] uppercase font-bold whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-graphite-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-steel text-[9px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026 OG VAN LIFE. TECHNICAL DOCUMENTATION.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-steel hover:text-bone text-[9px] tracking-[0.1em] uppercase transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="text-steel hover:text-bone text-[9px] tracking-[0.1em] uppercase transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              TERMS OF SERVICE
            </Link>
            <span
              className="text-graphite-border text-[9px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              v1.0.0-beta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
