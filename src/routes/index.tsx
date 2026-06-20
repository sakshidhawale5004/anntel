import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroOrb } from "@/components/site/HeroOrb";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import {
  MessageSquare, Phone, Mail, Bot, Globe, Shield,
  ArrowRight, Sparkles, Zap, Layers, MessagesSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anntel — Cloud Communications for SMS, Voice, WhatsApp & Email" },
      { name: "description", content: "Anntel powers global customer conversations across SMS, WhatsApp, RCS, voice and email with enterprise-grade APIs, OTP, chatbots and campaign tools." },
      { property: "og:title", content: "Anntel — Cloud Communications Platform" },
      { property: "og:description", content: "Connect with customers anywhere — SMS, WhatsApp, RCS, voice, email & chatbots, on one trusted platform." },
    ],
  }),
  component: Home,
});

const solutions = [
  { icon: MessageSquare, title: "Messaging", desc: "Reliable SMS, 2-way conversations and international delivery at scale.", to: "/anntel-messaging" },
  { icon: MessagesSquare, title: "WhatsApp Business", desc: "Official WhatsApp API for marketing, support and rich conversations.", to: "/whatsapp-api" },
  { icon: Phone, title: "Voice Services", desc: "Cloud voice, IVR, click-to-call and intelligent call routing.", to: "/voice-services" },
  { icon: Mail, title: "Email", desc: "Transactional and marketing email with inbox-first deliverability.", to: "/email-services" },
  { icon: Bot, title: "Chatbots", desc: "AI-powered automation across WhatsApp, web and messaging channels.", to: "/chatbots" },
  { icon: Shield, title: "OTP & Verify", desc: "Secure one-time passwords and identity verification, globally.", to: "/otp-solutions" },
];

const logos = ["Acme", "Globex", "Initech", "Umbrella", "Stark", "Wayne", "Hooli", "Pied Piper"];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO — Deep navy background + 3D effects */}
      <section className="relative w-full overflow-hidden bg-navy-deep text-white min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
        
        {/* glow orbs */}
        <div className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[#ef4444]/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 right-10 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/25 blur-[140px]" />

        <div className="container mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-24 lg:pb-36 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-3 py-1 text-xs font-semibold mb-7">
            <Sparkles className="h-3 w-3 text-[#ef4444]" /> The customer engagement platform
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mb-6 max-w-5xl mx-auto">
            Exploring cloud<br />
            connective <span className="text-gradient-navy">possibilities.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-9">
            Build real conversations with your customers. Anntel unifies SMS, WhatsApp,
            RCS, voice and email behind one trusted, developer-first platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start for free <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button size="xl" asChild className="bg-white text-[#0a1730] hover:bg-white/90">
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#ef4444]" /> 99.95% uptime SLA</div>
            <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-[#ef4444]" /> 190+ countries</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#ef4444]" /> ISO-grade security</div>
          </div>

          {/* showcase card centered */}
          <div className="mt-16 max-w-3xl mx-auto tilt-3d perspective-[1500px]">
            <HeroOrb />
          </div>
        </div>

        {/* logo marquee */}
        <div className="border-y border-white/10 bg-black/30 backdrop-blur relative">
          <div className="container mx-auto px-5 lg:px-8 py-6 overflow-hidden">
            <div className="text-xs uppercase tracking-wider text-white/50 text-center mb-3">
              Trusted by teams shipping conversations worldwide
            </div>
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((l, i) => (
                <div key={i} className="font-display text-2xl text-white/40">{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILDING BLOCKS — Twilio style dark card grid */}
      <section className="bg-navy text-white py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-3">Building blocks for every conversation</h2>
              <p className="text-white/70">
                Your toolkit is expanding. Discover a new generation of building blocks designed to
                orchestrate context-rich conversations across channels — for humans and AI agents.
              </p>
            </div>
            <Button variant="glass" asChild className="border-white/20 text-white hover:bg-white/10">
              <Link to="/anntel-messaging">View all products</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group navy-card rounded-2xl p-6 hover-lift tilt-3d relative overflow-hidden shadow-card hover:shadow-card-hover"
              >
                <div className="aspect-[16/10] rounded-xl mb-5 bg-gradient-to-br from-[#0a1730] to-[#050b1f] border border-white/10 grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.4),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.35),transparent_55%)]" />
                  <s.icon className="h-14 w-14 text-white/90 relative drop-shadow-[0_4px_12px_rgba(239,68,68,0.5)]" />
                </div>
                <h3 className="text-xl font-semibold mb-1.5">{s.title}</h3>
                <p className="text-sm text-white/65 mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold rounded-full bg-[#3b82f6] text-white px-4 py-2 group-hover:bg-[#2563eb] transition-colors">
                  Explore <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CX SPLIT */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative tilt-3d perspective-[2000px] hover-lift">
            <div className="absolute -top-6 -left-6 z-10 inline-flex items-center gap-2 rounded-full bg-surface-elevated border border-border px-3 py-1.5 text-xs font-semibold shadow-card">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Live conversation
            </div>
            <VideoShowcase />
          </div>
          <div>
            <div className="text-sm font-semibold text-primary mb-2">Transform CX</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Multi-channel customer connections</h2>
            <p className="text-muted-foreground mb-6">
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
                <div key={t} className="rounded-xl border border-border bg-card p-4">
                  <div className="font-semibold mb-1">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-dark text-primary-foreground">
        <div className="container mx-auto px-5 lg:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["190+", "Countries served"],
            ["10B+", "Messages a year"],
            ["99.95%", "Platform uptime"],
            ["24/7", "Expert support"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-5xl md:text-6xl text-gradient">{v}</div>
              <div className="text-sm opacity-70 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO */}
      <section className="container mx-auto px-5 lg:px-8 py-24">
        <div className="max-w-2xl mb-12">
          <div className="text-sm font-semibold text-primary mb-2">Why Anntel</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">One platform, every channel</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2 hover-lift rounded-2xl border border-border bg-card p-8 shadow-card relative overflow-hidden">
            <Layers className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Composable APIs</h3>
            <p className="text-muted-foreground max-w-md">Mix SMS, voice, WhatsApp and email in any workflow. Clean REST APIs, webhooks and battle-tested SDKs.</p>
            <div className="absolute -right-10 -bottom-10 h-56 w-56 orb-3d opacity-70" />
          </div>
          <div className="hover-lift rounded-2xl bg-brand text-primary-foreground p-8 shadow-orb">
            <Shield className="h-8 w-8 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Trust & compliance</h3>
            <p className="opacity-90 text-sm">DLT-ready, opt-in workflows and global carrier-grade reliability.</p>
          </div>
          <div className="hover-lift rounded-2xl border border-border bg-card p-8 shadow-card">
            <Bot className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">AI automation</h3>
            <p className="text-muted-foreground text-sm">Deploy chatbots, smart routing and intent-aware journeys across channels.</p>
          </div>
          <div className="md:col-span-2 hover-lift rounded-2xl border border-border bg-card p-8 shadow-card">
            <Globe className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Global reach, local presence</h3>
            <p className="text-muted-foreground max-w-md">Local sender IDs, in-country routing and 190+ destinations on tier-1 carriers.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-5 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-12 lg:p-20 text-primary-foreground text-center shadow-orb">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-black/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl mb-5">Let's build something brilliant.</h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8">Talk to our experts and design a communication stack tailored to your business.</p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">Contact sales <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
