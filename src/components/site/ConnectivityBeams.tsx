import { MessageSquare, Phone, Mail, Bot, Globe, Shield } from "lucide-react";

/**
 * Animated SVG "connectivity" visual — a hub orb with flowing dashed beams
 * to channel nodes. Default visual on service pages.
 */
export function ConnectivityBeams() {
  const nodes = [
    { icon: MessageSquare, label: "SMS", angle: -90 },
    { icon: Bot, label: "Chat", angle: -30 },
    { icon: Phone, label: "Voice", angle: 30 },
    { icon: Mail, label: "Email", angle: 90 },
    { icon: Globe, label: "RCS", angle: 150 },
    { icon: Shield, label: "OTP", angle: 210 },
  ];
  const radius = 42;
  return (
    <div className="relative aspect-square max-w-[520px] mx-auto tilt-3d">
      <div className="absolute inset-0 rounded-full bg-brand opacity-25 blur-3xl animate-pulse-glow" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.75 0.22 28)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.4 0.2 25)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="22" fill="url(#hubGlow)" />
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x2 = 50 + Math.cos(rad) * radius;
          const y2 = 50 + Math.sin(rad) * radius;
          return (
            <line
              key={n.label}
              x1="50" y1="50" x2={x2} y2={y2}
              stroke="oklch(0.55 0.22 25)" strokeWidth="0.5"
              className="beam-dash" style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}
      </svg>

      <div className="absolute inset-[14%] rounded-full border border-primary/20" />
      <div className="absolute inset-[26%] rounded-full border border-primary/10" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[34%] w-[34%]">
        <div className="orb-3d w-full h-full animate-float grid place-items-center text-primary-foreground">
          <span className="font-display text-2xl lg:text-3xl">anntel</span>
        </div>
      </div>

      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const left = `${50 + Math.cos(rad) * radius}%`;
        const top = `${50 + Math.sin(rad) * radius}%`;
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{ left, top, animationDelay: `${i * 0.4}s` }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border shadow-card grid place-items-center text-primary">
                <n.icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-semibold bg-surface-elevated/90 backdrop-blur px-2 py-0.5 rounded-full border border-border">
                {n.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
