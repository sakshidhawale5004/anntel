import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ConnectivityBeams } from "./ConnectivityBeams";
import { VideoHero } from "./VideoHero";
import { VideoReel } from "./VideoReel";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ServicePageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  bullets: string[];
  features: { icon: LucideIcon; title: string; desc: string }[];
  stats?: { value: string; label: string }[];
  ctaTitle?: string;
  visual?: ReactNode;
}

export function ServicePage({
  eyebrow,
  title,
  description,
  bullets,
  features,
  stats,
  ctaTitle = "Ready to get started?",
  visual,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Full-width video hero */}
      <VideoHero
        eyebrow={eyebrow}
        title={typeof title === "string" ? title : eyebrow}
        subtitle={description}
        service={eyebrow}
      />

      {/* Hero detail */}
      <section className="relative overflow-hidden bg-hero">
        <div className="container mx-auto px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              {eyebrow}
            </div>
            <h1 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-5">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-7">{description}</p>
            <ul className="space-y-2 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get started <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            {visual ?? <DefaultVisual />}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="container mx-auto px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="hover-lift rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="h-11 w-11 rounded-xl bg-brand text-primary-foreground flex items-center justify-center mb-5 shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video reel gallery */}
      <VideoReel eyebrow={`${eyebrow} · stories`} title="See it in action" service={eyebrow} />


      {/* Stats */}
      {stats && (
        <section className="bg-dark text-primary-foreground">
          <div className="container mx-auto px-5 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl lg:text-5xl text-gradient">{s.value}</div>
                <div className="text-sm opacity-70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container mx-auto px-5 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-12 lg:p-16 text-primary-foreground shadow-orb">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl mb-4">{ctaTitle}</h2>
            <p className="opacity-90 mb-7">Join thousands of businesses powering customer conversations with Anntel.</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Contact us <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function DefaultVisual() {
  return <ConnectivityBeams />;
}

