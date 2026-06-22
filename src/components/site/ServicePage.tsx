import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ConnectivityBeams } from "./ConnectivityBeams";
import { VideoHero } from "./VideoHero";
import { VideoReel } from "./VideoReel";
import { Check, ArrowRight, Bot, Globe, Shield, Layers, type LucideIcon } from "lucide-react";
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
              className="hover-lift rounded-2xl border border-white/10 bg-white/5 p-7 shadow-card relative overflow-hidden"
            >
              <div className="h-11 w-11 rounded-xl bg-[#740001] text-white flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(116,0,1,0.5)] relative z-10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white relative z-10">{f.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed relative z-10">{f.desc}</p>
              
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Video reel gallery */}
      <VideoReel eyebrow={`${eyebrow} · stories`} title="See it in action" service={eyebrow} />


      {/* CX SPLIT — showcase */}
      <section
        className="border-y border-[#0a1730]"
        style={{ background: "linear-gradient(180deg,#0d1f3f 0%,#0a1730 100%)" }}
      >
        <div className="container mx-auto px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with floating badge */}
          <div className="relative tilt-3d perspective-[2000px] hover-lift">
            <div className="absolute -top-6 -left-6 z-10 inline-flex items-center gap-2 rounded-full bg-[#0f1f3d] border border-white/15 px-3 py-1.5 text-xs font-semibold shadow-card text-white">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Live conversation
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] conic-ring">
              <img
                src="/showcase-person.jpg"
                alt="Anntel multi-channel customer engagement platform"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px", maxHeight: "440px" }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="text-sm font-semibold text-red-400 mb-2">Transform CX</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5 text-white">Multi-channel customer connections</h2>
            <p className="text-white/70 mb-6">
              Reach customers on their preferred channels — anywhere in the world.
              Integrate powerful APIs to start building solutions for SMS, WhatsApp,
              voice, video and email in minutes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Global reach", "Local presence in 190+ countries."],
                ["Built on trust", "Compliant, safe and secure by default."],
                ["Developer first", "Clean REST APIs and SDKs."],
                ["Scales with you", "From the first OTP to billion-message rollouts."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold mb-1 text-white">{t}</div>
                  <div className="text-sm text-white/60">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* BENTO — navy blue */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg,#030812 0%,#050b1f 100%)" }}
      >
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-red-400 mb-2">Why Anntel</div>
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">One platform, every channel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 hover-lift rounded-2xl border border-white/10 bg-white/5 p-8 shadow-card relative overflow-hidden">
              <Layers className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Composable APIs</h3>
              <p className="text-white/60 max-w-md">Mix SMS, voice, WhatsApp and email in any workflow. Clean REST APIs, webhooks and battle-tested SDKs.</p>
              <div className="absolute -right-10 -bottom-10 h-56 w-56 orb-3d opacity-70" />
            </div>
            <div className="hover-lift rounded-2xl bg-brand text-primary-foreground p-8 shadow-orb">
              <Shield className="h-8 w-8 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Trust & compliance</h3>
              <p className="opacity-90 text-sm">DLT-ready, opt-in workflows and global carrier-grade reliability.</p>
            </div>
            <div className="hover-lift rounded-2xl border border-white/10 bg-white/5 p-8 shadow-card">
              <Bot className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">AI automation</h3>
              <p className="text-white/60 text-sm">Deploy chatbots, smart routing and intent-aware journeys across channels.</p>
            </div>
            <div className="md:col-span-2 hover-lift rounded-2xl border border-white/10 bg-white/5 p-8 shadow-card">
              <Globe className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Global reach, local presence</h3>
              <p className="text-white/60 max-w-md">Local sender IDs, in-country routing and 190+ destinations on tier-1 carriers.</p>
            </div>
          </div>
        </div>
      </section>

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

