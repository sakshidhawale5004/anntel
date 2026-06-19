import person from "@/assets/showcase-person.jpg";

/**
 * Twilio-style "video graphic": cinematic image framed by a rotating conic
 * glow with animated chat bubbles overlaid for a live-message feel.
 */
export function VideoShowcase() {
  return (
    <div className="relative tilt-3d">
      <div className="relative conic-ring rounded-3xl overflow-hidden shadow-orb">
        <img
          src={person}
          alt="Customer engaging on a smartphone with Anntel-powered messaging"
          width={1024}
          height={1280}
          loading="lazy"
          className="w-full h-auto object-cover aspect-[4/5] block"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute top-6 right-6 max-w-[62%] bubble-in" style={{ animationDelay: "0.4s" }}>
          <div className="rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 p-3 text-primary-foreground shadow-orb">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-6 w-6 rounded-lg bg-brand grid place-items-center text-[10px] font-bold">A</span>
              <div className="text-[11px] leading-tight">
                <div className="font-semibold">Anntel Retail</div>
                <div className="opacity-70">Order update</div>
              </div>
            </div>
            <p className="text-xs leading-snug opacity-95">
              Your order #A-2841 is out for delivery 🚚 Track it live in WhatsApp.
            </p>
            <div className="text-[10px] opacity-60 mt-1">just now</div>
          </div>
        </div>

        <div className="absolute bottom-24 left-6 max-w-[58%] bubble-in" style={{ animationDelay: "1.4s" }}>
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 p-3 text-foreground shadow-card-hover">
            <div className="text-[10px] uppercase tracking-wider text-primary font-bold mb-0.5">OTP</div>
            <p className="text-xs leading-snug">
              <span className="font-bold">428 391</span> is your secure Anntel verification code.
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 bubble-in" style={{ animationDelay: "2.2s" }}>
          <div className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold shadow-glow animate-pulse-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Delivered · 190+ countries
          </div>
        </div>
      </div>

      <div className="absolute -inset-8 -z-10 bg-primary/25 blur-3xl rounded-full animate-pulse-glow" />
    </div>
  );
}
