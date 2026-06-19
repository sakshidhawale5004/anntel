import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import videoAsset from "@/assets/service-hero.mp4.asset.json";
import r1 from "@/assets/reel-1.jpg";
import r2 from "@/assets/reel-2.jpg";
import r3 from "@/assets/reel-3.jpg";
import r4 from "@/assets/reel-4.jpg";
import { prefersReducedMotion, track } from "@/lib/analytics";

const REELS = [
  { poster: r1, title: "OTP verification in under 2 seconds", tag: "OTP" },
  { poster: r2, title: "Cloud voice calls that scale globally", tag: "Voice" },
  { poster: r3, title: "WhatsApp appointment automation", tag: "WhatsApp" },
  { poster: r4, title: "Retail RCS commerce flows", tag: "RCS" },
];

export function VideoReel({
  eyebrow = "Stories in motion",
  title = "See it in action",
  service,
}: { eyebrow?: string; title?: string; service?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => { setReduced(prefersReducedMotion()); }, []);

  // parallax — skip when reduced motion
  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - rect.top / window.innerHeight;
      setScrollY(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section ref={sectionRef} className="container mx-auto px-5 lg:px-8 py-20">
      <div className="max-w-2xl mb-10">
        <div className="text-sm font-semibold text-primary mb-2">{eyebrow}</div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">{title}</h2>
        <p className="text-muted-foreground">Hover any reel to preview, tap to expand into a full cinematic playback.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {REELS.map((r, i) => {
          const offset = reduced ? 0 : (i % 2 === 0 ? -1 : 1) * scrollY * 24;
          return (
            <button
              key={r.title}
              onClick={() => { setActive(i); track("reel_lightbox_open", { service, tag: r.tag, index: i }); }}
              onMouseEnter={() => track("reel_hover", { service, tag: r.tag, index: i })}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark shadow-card hover:shadow-card-hover transition-all"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <img
                src={r.poster}
                alt={r.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {!reduced && (
                <video
                  src={videoAsset.url}
                  muted loop playsInline preload="none"
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLVideoElement).play().catch(() => {});
                    track("reel_preview_play", { service, tag: r.tag });
                  }}
                  onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur border border-white/25 text-primary-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {r.tag}
                </span>
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <span className="h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-glow opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-500">
                  <Play className="h-5 w-5 ml-0.5" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left text-primary-foreground">
                <div className="text-sm font-semibold drop-shadow leading-snug">{r.title}</div>
              </div>
            </button>
          );
        })}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-4 animate-fade-in"
          onClick={() => { setActive(null); track("reel_lightbox_close", { service, method: "backdrop" }); }}
        >
          <button
            onClick={() => { setActive(null); track("reel_lightbox_close", { service, method: "button" }); }}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 border border-white/20 text-primary-foreground grid place-items-center hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-orb" onClick={(e) => e.stopPropagation()}>
            <video
              src={videoAsset.url}
              controls autoPlay loop
              poster={REELS[active].poster}
              className="w-full h-full object-cover"
              onPlay={() => track("video_play", { surface: "lightbox", service, tag: REELS[active!].tag })}
              onPause={() => track("video_pause", { surface: "lightbox", service, tag: REELS[active!].tag })}
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {REELS[active].tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <div className="font-display text-2xl drop-shadow">{REELS[active].title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
