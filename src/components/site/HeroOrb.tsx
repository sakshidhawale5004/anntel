import { useMouseTilt } from "@/hooks/useMouseTilt";

/**
 * Hero image showcase composition — replaces the old asset-based orb
 * with the brand homeimage, surrounded by floating service chips and glow rings.
 */
export function HeroOrb() {
  const tiltRef = useMouseTilt(12);

  return (
    <div ref={tiltRef} className="relative w-full max-w-[640px] mx-auto select-none transition-transform duration-200 ease-out">
      {/* Outer glow */}
      <div className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl"
        style={{ background: "radial-gradient(ellipse at 40% 40%, #ef444440, #3b82f630, transparent 70%)" }}
      />

      {/* Main image card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{ background: "#0a1730" }}
      >
        {/* Conic border ring animation */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, #ef444430 25%, transparent 50%, #3b82f630 75%, transparent 100%)",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        <img
          src="/homepageimage.jpg"
          alt="Anntel cloud communications platform"
          className="w-full object-cover"
          style={{ maxHeight: "380px" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        {/* Gradient overlay on bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050b1f] to-transparent" />
      </div>

      {/* Floating service chips */}
      <Chip className="absolute left-0 -top-5" delay="0s" label="SMS" />
      <Chip className="absolute right-4 -top-3" delay="1s" label="WhatsApp" />
      <Chip className="absolute right-0 bottom-10" delay="2s" label="Voice" />
      <Chip className="absolute left-4 bottom-4" delay="1.5s" label="RCS" />
    </div>
  );
}

function Chip({ className, delay, label }: { className: string; delay: string; label: string }) {
  return (
    <div
      className={`${className} animate-float backdrop-blur border border-white/20 rounded-full px-3 py-1.5 text-xs font-semibold shadow-card text-white z-20`}
      style={{ animationDelay: delay, background: "rgba(10,23,48,0.85)" }}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 mr-2 align-middle" />
      {label}
    </div>
  );
}
