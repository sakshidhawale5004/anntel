import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { prefersReducedMotion, track } from "@/lib/analytics";

interface VideoHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  service?: string;
}

export function VideoHero({ eyebrow, title, subtitle, service }: VideoHeroProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  // Respect reduced motion
  useEffect(() => {
    const r = prefersReducedMotion();
    setReduced(r);
    const v = ref.current;
    if (!v || r) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) tryPlay();
          else v.pause();
        });
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] min-h-[480px] max-h-[760px] overflow-hidden text-white"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #122a55 0%, #050b1f 60%)" }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-20 -left-10 h-[400px] w-[400px] rounded-full bg-[#ef4444]/15 blur-[120px]" />
      <div className="absolute top-20 right-10 h-[350px] w-[350px] rounded-full bg-[#3b82f6]/20 blur-[100px]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050b1f] to-transparent" />

      {/* Text content — always forced white */}
      <div className="relative h-full container mx-auto px-5 lg:px-8 flex items-center z-10">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold mb-5 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            {eyebrow}
          </div>

          {/* Title — always white with text-shadow for readability */}
          <h2
            className="font-display text-4xl md:text-6xl leading-[1.05] mb-4 text-white"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
          >
            {title}
          </h2>

          {/* Subtitle — always white */}
          <p className="text-base md:text-lg text-white/80 mb-7 max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link
                to="/contact"
                onClick={() =>
                  track("cta_click", { surface: "hero", service, cta: "talk_to_sales" })
                }
              >
                Talk to sales <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/15 border border-white/30 text-white backdrop-blur hover:bg-white/25"
            >
              <a
                href="tel:+918828223388"
                onClick={() =>
                  track("cta_click", { surface: "hero", service, cta: "phone" })
                }
              >
                Call +91 8828 22 3388
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
