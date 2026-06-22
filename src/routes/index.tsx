import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TimelineNav } from "@/components/site/TimelineNav";
import { HeroOrb } from "@/components/site/HeroOrb";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  MessageSquare, Phone, Mail, Bot, Globe, Shield,
  ArrowRight, Sparkles, Zap, Layers, MessagesSquare,
} from "lucide-react";


export const Route = createFileRoute("/")(  {
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
  {
    icon: MessageSquare, title: "Messaging", desc: "Reliable SMS, 2-way conversations and international delivery at scale.", to: "/anntel-messaging",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    icon: MessagesSquare, title: "WhatsApp Business", desc: "Official WhatsApp API for marketing, support and rich conversations.", to: "/whatsapp-api",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  },
  {
    icon: Phone, title: "Voice Services", desc: "Cloud voice, IVR, click-to-call and intelligent call routing.", to: "/voice-services",
    img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80",
  },
  {
    icon: Mail, title: "Email", desc: "Transactional and marketing email with inbox-first deliverability.", to: "/email-services",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  },
  {
    icon: Bot, title: "Chatbots", desc: "AI-powered automation across WhatsApp, web and messaging channels.", to: "/chatbots",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    icon: Shield, title: "OTP & Verify", desc: "Secure one-time passwords and identity verification, globally.", to: "/otp-solutions",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
];


const logos = ["Acme", "Globex", "Initech", "Umbrella", "Stark", "Wayne", "Hooli", "Pied Piper"];

function Home() {
  const { ref: blocksRef, isVisible: blocksVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: cxRef, isVisible: cxVisible } = useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO — Solid navy background */}
      <section className="relative w-full overflow-hidden text-white min-h-[80vh] flex flex-col justify-center bg-[#02163b]">
        <div className="container mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-24 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#740001]/20 px-3 py-1 text-xs font-semibold mb-6 text-white">
              <Sparkles className="h-3 w-3 text-[#740001]" /> The customer engagement platform
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-3xl text-white font-medium">
              Exploring cloud connective <span style={{ background: "linear-gradient(135deg,#fff 0%,#93c5fd 60%,#740001 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>possibilities.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-9">
              Build real conversations with your customers. Anntel unifies SMS, WhatsApp,
              RCS, voice and email behind one trusted, developer-first platform.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="xl" asChild className="bg-white text-[#02163b] hover:bg-gray-100 font-semibold border-none">
                <Link to="/contact">Start for free</Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border border-white bg-transparent text-white hover:bg-white/10 font-semibold">
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80 font-medium">
              <div className="flex items-center gap-2">✓ 99.95% uptime SLA</div>
              <div className="flex items-center gap-2">✓ 190+ countries</div>
              <div className="flex items-center gap-2">✓ ISO-grade security</div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg hidden lg:block">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 p-2">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Platform" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* logo marquee */}
        <div className="bg-white border-b border-gray-200 mt-auto">
          <div className="container mx-auto px-5 lg:px-8 py-10 overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
              {[...logos, ...logos].map((l, i) => (
                <div key={i} className="font-display text-2xl text-gray-400 font-bold">{l}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE NAV */}
      <TimelineNav />

      {/* BUILDING BLOCKS — with Unsplash photos + 3D cards */}
      <section
        className="text-white py-24"
        style={{ background: "linear-gradient(180deg,#050b1f 0%,#0a1730 50%,#0d1f3f 100%)" }}
      >
        <div className="container mx-auto px-5 lg:px-8">
          <div ref={blocksRef} className={`flex flex-wrap items-end justify-between gap-6 mb-12 ${blocksVisible ? "reveal-up" : "reveal-hidden"}`}>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-3 text-white">Building blocks for every conversation</h2>
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
            {solutions.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className={`group rounded-2xl overflow-hidden card-3d relative ${blocksVisible ? `reveal-up delay-${[100,200,300,100,200,300][i] ?? 100}` : "reveal-hidden"}`}
                style={{ background: "linear-gradient(180deg,#0f1f3d 0%,#0a1730 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Image thumbnail */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/40 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1.5 text-white card-depth-1">{s.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold rounded-full bg-white/10 border border-white/15 text-white px-4 py-1.5 group-hover:bg-[#3b82f6] group-hover:border-transparent transition-all">
                    Explore <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CX SPLIT — homeimage.jpg showcase */}
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

      {/* STATS — navy blue */}
      <section style={{ background: "linear-gradient(180deg,#050b1f 0%,#030812 100%)" }}>
        <div className="container mx-auto px-5 lg:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["190+", "Countries served"],
            ["10B+", "Messages a year"],
            ["99.95%", "Platform uptime"],
            ["24/7", "Expert support"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-5xl md:text-6xl text-gradient">{v}</div>
              <div className="text-sm text-white/60 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

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
            <div className="hover-lift rounded-2xl bg-[#740001] text-white p-8 shadow-orb">
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
      <section className="py-24" style={{ background: "#050b1f" }}>
        <div className="container mx-auto px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#740001] p-12 lg:p-20 text-white text-center shadow-orb">
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
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
