import logo from "@/assets/anntel-logo.png.asset.json";

/**
 * Animated 3D "anntel" orb composition. Uses the brand logo PNG (which already
 * has the glossy red sphere baked in) and surrounds it with floating glow rings
 * + parallax orbit dots for a cinematic hero centerpiece.
 */
export function HeroOrb() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto select-none">
      {/* halo */}
      <div className="absolute inset-0 rounded-full bg-brand opacity-30 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-8 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* orbit ring 1 */}
      <div className="absolute inset-0 rounded-full border border-primary/15" style={{ transform: "rotate(-12deg)" }}>
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-primary shadow-glow" />
      </div>
      <div className="absolute inset-6 rounded-full border border-primary/10" style={{ transform: "rotate(22deg)" }}>
        <span className="absolute top-1/2 -right-1 h-2 w-2 rounded-full bg-primary-glow" />
      </div>

      {/* main logo */}
      <div className="absolute inset-[12%] animate-float">
        <img
          src={logo.url}
          alt="Anntel"
          className="w-full h-full object-contain drop-shadow-[0_30px_60px_oklch(0.4_0.22_25/0.55)]"
        />
        {/* extra specular highlight */}
        <div className="absolute inset-[8%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 30% at 32% 22%, oklch(1 0 0 / 0.35), transparent 70%)",
          }}
        />
      </div>

      {/* floating chips */}
      <Chip className="left-0 top-10" delay="0s" label="SMS" />
      <Chip className="right-2 top-20" delay="1s" label="WhatsApp" />
      <Chip className="right-0 bottom-16" delay="2s" label="Voice" />
      <Chip className="left-4 bottom-8" delay="1.5s" label="RCS" />
    </div>
  );
}

function Chip({ className, delay, label }: { className: string; delay: string; label: string }) {
  return (
    <div
      className={`absolute ${className} animate-float bg-surface-elevated/90 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-semibold shadow-card`}
      style={{ animationDelay: delay }}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2 align-middle" />
      {label}
    </div>
  );
}
