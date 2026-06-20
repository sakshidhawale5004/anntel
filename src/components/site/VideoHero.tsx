import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
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
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Respect reduced motion + only autoplay while in view
  useEffect(() => {
    const r = prefersReducedMotion();
    setReduced(r);
    const v = ref.current;
    if (!v) return;
    if (r) {
      v.pause();
      v.removeAttribute("autoplay");
      setPlaying(false);
      return;
    }
    // safe muted autoplay
    v.muted = true;
    const tryPlay = () => v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    tryPlay();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) tryPlay();
          else { v.pause(); }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {};
  const toggleMute = () => {};

  return (
    <section className="relative w-full h-[70vh] min-h-[480px] max-h-[760px] overflow-hidden bg-navy-deep text-white">
      {/* Dynamic background pattern and gradient */}
      <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.1)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>
      <div className="absolute -top-32 -left-10 h-[500px] w-[500px] rounded-full bg-[#ef4444]/20 blur-[120px]" />
      <div className="absolute top-40 right-10 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/20 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative h-full container mx-auto px-5 lg:px-8 flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-4 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">{title}</h2>
          <p className="text-base md:text-lg opacity-90 mb-7 max-w-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" onClick={() => track("cta_click", { surface: "hero", service, cta: "talk_to_sales" })}>
                Talk to sales <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="tel:+918828223388" onClick={() => track("cta_click", { surface: "hero", service, cta: "phone" })}>Call +91 8828 22 3388</a>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
