import { useEffect, useRef, useState } from "react";
import r1 from "@/assets/reel-1.jpg";
import r2 from "@/assets/reel-2.jpg";
import r3 from "@/assets/reel-3.jpg";
import r4 from "@/assets/reel-4.jpg";
import { prefersReducedMotion } from "@/lib/analytics";

const REELS = [
  { poster: r1, title: "OTP verification in under 2 seconds", tag: "OTP" },
  { poster: r2, title: "Cloud voice calls that scale globally", tag: "Voice" },
  { poster: r3, title: "WhatsApp appointment automation", tag: "WhatsApp" },
  { poster: r4, title: "Retail RCS commerce flows", tag: "RCS" },
];

export function VideoReel({
  eyebrow = "Stories in motion",
  title = "See it in action",
}: { eyebrow?: string; title?: string; service?: string }) {
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

  return (
    <section ref={sectionRef} className="container mx-auto px-5 lg:px-8 py-20">
      <div className="max-w-2xl mb-10">
        <div className="text-sm font-semibold text-primary mb-2">{eyebrow}</div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">{title}</h2>
        <p className="text-muted-foreground">Explore how businesses are using our multi-channel solutions.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {REELS.map((r, i) => {
          const offset = reduced ? 0 : (i % 2 === 0 ? -1 : 1) * scrollY * 24;
          return (
            <div
              key={r.title}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {r.tag}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                <div className="text-sm font-semibold drop-shadow leading-snug">{r.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
