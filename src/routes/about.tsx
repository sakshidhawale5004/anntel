import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { 
  Rocket, Shield, Globe, Users, MessageSquare, MessagesSquare, 
  Phone, Mail, Database, Target, Cpu, Award, Layers, ArrowRight, CheckCircle2, 
  Sparkles, Heart, Building2, Network, Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import showcaseOrb from "@/assets/showcase-orb.jpg";
import { useMouseTilt } from "@/hooks/useMouseTilt";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | We Are Anntel" },
      { name: "description", content: "Anntel is a cloud communications platform helping businesses with SMS marketing campaigns, customer service alerts, voice, email, and digital strategy." },
    ],
  }),
  component: About,
});

const clientLogos = [
  "/L&T.jpg",
  "/202402053114902_202410.png",
  "/kotak.jpg",
  "/5-removebg-preview.png",
  "/4-removebg-preview2-1.png",
  "/3-removebg-preview-1.png",
  "/2-removebg-preview3-1.png",
  "/1-removebg-preview3-1.png"
];

const stats = [
  { value: "100K+", label: "Billable transactions Pan India", desc: "Reliable throughput across India" },
  { value: "5+", label: "Super Network Connections", desc: "Direct operator partnerships" },
  { value: "3+ Offices", label: "Offices across India", desc: "Pan-India operational presence" },
  { value: "100+", label: "Digital transformation", desc: "Empowering modern enterprises" },
];

const targetAudience = [
  {
    title: "Enterprises",
    desc: "Scalable, secure cloud communications infrastructure engineered for high-volume corporate workloads and mission-critical reliability.",
    icon: Building2,
    tag: "High Volume",
  },
  {
    title: "Over-The-Top (OTT) Players",
    desc: "High-throughput messaging and voice connectivity designed for global OTT applications with ultra-low latency and seamless delivery.",
    icon: Network,
    tag: "Low Latency",
  },
  {
    title: "Mobile Network Operators (MNO)",
    desc: "Comprehensive SMS filtering, routing optimization, analytical capabilities, and monetization suites tailored for global carrier networks.",
    icon: Globe,
    tag: "Carrier Grade",
  },
];

const visionPillars = [
  {
    title: "Inspiring Our Colleagues",
    subtitle: "Equal Opportunities Without Barriers",
    desc: "Inspiring our colleagues with equal opportunities to outperform without barriers in an environment that instills ideation, and celebrating their success.",
    icon: Award,
    color: "from-red-500 to-pink-500",
    badge: "Culture & Ideation",
  },
  {
    title: "THINK CUSTOMER Approach",
    subtitle: "Forging Strong Relationships",
    desc: "Empowering our clients with future-ready solutions and forging strong relationships with a THINK CUSTOMER approach that allows us to completely understand your business and expectations.",
    icon: Heart,
    color: "from-orange-500 to-amber-500",
    badge: "Client Empowerment",
  },
  {
    title: "Robust Communication Stack",
    subtitle: "Deep Operational Excellence",
    desc: "Creating a robust communication stack coupled with our deep operational excellence, domain knowledge, and analytical capabilities that enable our clients to provide unique and superlative customer experiences.",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    badge: "Superlative Experience",
  },
];

const solutions = [
  {
    title: "Enhanced Business Messaging",
    desc: "Enable deeper customer engagement with fully programmable messaging APIs.",
    icon: Sparkles,
    to: "/anntel-messaging",
    badge: "Programmable APIs",
  },
  {
    title: "Messaging",
    desc: "Interactive experiences that accelerate engaging customer communications.",
    icon: MessageSquare,
    to: "/two-way-messaging",
    badge: "Interactive",
  },
  {
    title: "Voice",
    desc: "Engage your target audience with innovative & integrated voice solutions.",
    icon: Phone,
    to: "/voice-services",
    badge: "Cloud Voice",
  },
  {
    title: "Email",
    desc: "Automate your customer engagement & enable better customer experience.",
    icon: Mail,
    to: "/email-services",
    badge: "Automation",
  },
  {
    title: "Database campaign",
    desc: "Simplify regulatory customer compliance with a customized & reliable solution.",
    icon: Database,
    to: "/database-campaigns",
    badge: "Compliance",
  },
  {
    title: "Digital Strategy",
    desc: "We tackle digital marketing via a digital strategy made up of many different tactics. When all these tactics are used together, they create a holistic approach to getting your business more leads.",
    icon: Target,
    to: "/anntel-digital",
    badge: "Holistic Marketing",
  },
  {
    title: "Digital Services",
    desc: "Strategically positioned to help customers deliver higher products, offerings & commercial enterprise processes through digitization.",
    icon: Cpu,
    to: "/anntel-digital",
    badge: "Digitization",
  },
];

/**
 * Interactive 3D Hero Orb component featuring mouse tilt and orbiting channel nodes
 * exactly matching the red omnichannel sphere screenshot.
 */
function Hero3DOrb() {
  const tiltRef = useMouseTilt(15);
  
  return (
    <div ref={tiltRef} className="relative w-full max-w-[480px] aspect-square mx-auto select-none transition-transform duration-300 ease-out py-8 flex items-center justify-center cursor-pointer group/orb">
      {/* Deep 3D Ambient Glows */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/40 via-red-500/25 to-orange-500/20 blur-3xl animate-pulse" />
      <div className="absolute -inset-4 rounded-full border border-red-500/30 animate-[spin_30s_linear_infinite] border-dashed" />
      <div className="absolute -inset-10 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute -inset-16 rounded-full border border-red-500/15 animate-[spin_50s_linear_infinite]" />

      {/* Center 3D Red Orb */}
      <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-red-500/60 shadow-[0_0_80px_rgba(239,68,68,0.7)] bg-gradient-to-b from-[#5c0001] via-[#3a0001] to-[#0a1730] flex items-center justify-center p-3 transform group-hover/orb:scale-105 transition-all duration-700">
        <img 
          src={showcaseOrb} 
          alt="Anntel 3D Omnichannel Sphere" 
          className="w-full h-full object-contain rounded-full filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] scale-110" 
          onError={(e) => {
            e.currentTarget.src = "/showcase-orb.jpg";
          }}
        />
      </div>

      {/* 6 Orbiting Channel Chips - Styled exactly like the red screenshot */}
      {/* 1. Top: SMS */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: "0s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><MessageSquare className="w-3.5 h-3.5" /></span>
          SMS
        </div>
      </div>

      {/* 2. Top Right: Chat */}
      <div className="absolute top-12 -right-2 sm:right-2 animate-float z-20" style={{ animationDelay: "0.8s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><MessagesSquare className="w-3.5 h-3.5" /></span>
          Chat
        </div>
      </div>

      {/* 3. Bottom Right: Voice */}
      <div className="absolute bottom-12 -right-2 sm:right-2 animate-float z-20" style={{ animationDelay: "1.6s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Phone className="w-3.5 h-3.5" /></span>
          Voice
        </div>
      </div>

      {/* 4. Bottom: Email */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 animate-float z-20" style={{ animationDelay: "2.4s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Mail className="w-3.5 h-3.5" /></span>
          Email
        </div>
      </div>

      {/* 5. Bottom Left: RCS */}
      <div className="absolute bottom-12 -left-2 sm:left-2 animate-float z-20" style={{ animationDelay: "3.2s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Globe className="w-3.5 h-3.5" /></span>
          RCS
        </div>
      </div>

      {/* 6. Top Left: OTP */}
      <div className="absolute top-12 -left-2 sm:left-2 animate-float z-20" style={{ animationDelay: "4.0s" }}>
        <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 text-xs font-bold shadow-[0_10px_25px_rgba(239,68,68,0.5)] border border-red-200 transform hover:scale-110 transition-transform">
          <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Shield className="w-3.5 h-3.5" /></span>
          OTP
        </div>
      </div>

      {/* Radially radiating connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 500 500">
        <line x1="250" y1="250" x2="250" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="250" y1="250" x2="430" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="250" y1="250" x2="430" y2="380" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="250" y1="250" x2="250" y2="460" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="250" y1="250" x2="70" y2="380" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="250" y1="250" x2="70" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-red-500/30 overflow-x-hidden">
      <SiteNav />
      
      <main className="flex-grow">
        {/* 3D HERO SECTION - We Are Anntel with 3D Orbit Sphere */}
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#020817] via-[#050e24] to-[#020817]">
          {/* Ambient 3D background lighting */}
          <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#740001]/30 via-[#740001]/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="container mx-auto px-5 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story & CTA */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-red-400 mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-md animate-fade-in-up">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                  We Are Anntel
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  Connecting the world <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 drop-shadow-[0_5px_15px_rgba(239,68,68,0.4)]">
                    through mobile technology.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  Anntel isn’t just experts in messaging, we’re more than that. With our cloud communications platform, we are helping businesses with our SMS-based marketing campaigns, customer service alerts, and updates.
                </p>
                <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-8 h-14 rounded-full shadow-[0_0_35px_rgba(239,68,68,0.4)] transition-all transform hover:scale-105 text-lg">
                    <Link to="/contact">Get an Expert</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 h-14 rounded-full backdrop-blur-md transition-all text-lg">
                    <a href="#solutions">Explore Solutions</a>
                  </Button>
                </div>
                
                {/* Quick trust checkmarks */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 font-medium animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                  <div className="flex items-center gap-2"><span className="text-red-400 font-bold">✓</span> Enterprise OTT & MNO Solutions</div>
                  <div className="flex items-center gap-2"><span className="text-red-400 font-bold">✓</span> Pan-India 100K+ Transactions</div>
                </div>
              </div>

              {/* Right Column: 3D Orb Hero Showcase */}
              <div className="lg:col-span-5 flex items-center justify-center py-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <Hero3DOrb />
              </div>
            </div>
          </div>
        </section>

        {/* KEY STATS SECTION - 3D Elevated Cards */}
        <section className="relative z-20 -mt-12 mb-24 container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.07] backdrop-blur-2xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.1] transition-all duration-500 transform-gpu hover:-translate-y-2 hover:scale-[1.03] border border-white/5 hover:border-red-500/50 group shadow-lg hover:shadow-[0_15px_30px_rgba(239,68,68,0.2)]">
                <div className="font-display text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-200 mb-2 group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-sm text-red-400 font-bold tracking-wider uppercase mb-1">{stat.label}</div>
                <div className="text-xs text-white/50 font-light">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE CATER TO - 3D Cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                Global Reach & Portfolio
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Powering Diverse Communications
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                We cater to enterprises, over-the-top (OTT) players, and mobile network operators (MNO) and our portfolio comprises solutions in messaging, voice, email, SMS filtering, analytics, and monetization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 perspective-[1500px]">
              {targetAudience.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.02] border border-white/10 hover:border-red-500/60 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)] transform-gpu hover:-translate-y-2.5 hover:rotate-1">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-md">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed font-light text-base">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-red-500" /> Tailored Architecture
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS MARQUEE - 3D Elevated White Strip */}
        <section className="py-20 border-y border-gray-200 bg-white text-gray-900 overflow-hidden relative z-20 shadow-2xl">
          <div className="container mx-auto px-5 lg:px-8 mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-3 border border-red-100">
              Verified Trust
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2 tracking-tight">Customers Who Trust Us</h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Powering global enterprises & fast-growing brands across India</p>
          </div>
          <div className="flex gap-14 animate-marquee whitespace-nowrap items-center w-max py-4">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <div key={i} className="px-8 py-4 rounded-2xl bg-gray-50/90 hover:bg-white border border-gray-150 transition-all duration-300 flex items-center justify-center transform-gpu hover:-translate-y-1.5 hover:scale-105 shadow-sm hover:shadow-xl">
                <img 
                  src={src} 
                  alt="Client Logo" 
                  className="h-12 md:h-16 w-auto object-contain transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* OUR VISION & GUIDING PRINCIPLES */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#081226] to-[#020817]">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="container mx-auto px-5 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-4">
                Guiding Principles
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-4">
                To connect the world through mobile technology.
              </p>
              <p className="text-base text-white/60 max-w-2xl mx-auto font-light">
                We’re guided by our commitments to our colleagues, our clients, and our technological stack:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {visionPillars.map((pillar, i) => (
                <div key={i} className="flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 relative group shadow-2xl transform-gpu hover:-translate-y-2 hover:scale-[1.01]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-full" />
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-[#081226] rounded-[14px] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                          <pillar.icon className="w-6 h-6 text-red-400" />
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{pillar.title}</h3>
                    <div className="text-sm font-semibold text-red-400 mb-6">{pillar.subtitle}</div>
                    <p className="text-white/75 leading-relaxed font-light text-base">{pillar.desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    Core Anntel Commitment
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTIONS CAN ADAPT TO YOUR BUSINESS */}
        <section id="solutions" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-4">
                Adaptive Portfolio
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Our Solutions Can Adapt to Your Business
              </h2>
              <p className="text-lg text-white/65 font-light">
                Whether you require programmable APIs, integrated voice solutions, or a holistic digital marketing strategy, our solutions scale seamlessly with your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol, i) => (
                <div 
                  key={i} 
                  className={`p-8 rounded-3xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:border-red-500/40 transition-all duration-500 flex flex-col justify-between group shadow-xl transform-gpu hover:-translate-y-2 hover:scale-[1.02] ${i === solutions.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-md">
                        <sol.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {sol.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">{sol.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm font-light mb-8">{sol.desc}</p>
                  </div>
                  <Link 
                    to={sol.to} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 group-hover:translate-x-1.5 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-gradient-to-b from-[#020817] to-[#0a1730] border-t border-white/10">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Us?</h2>
              <p className="text-lg text-white/65 font-light">We combine enterprise-grade reliability with developer-first simplicity.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Global Infrastructure", desc: "Our distributed network ensures low latency and high delivery rates across 190+ countries." },
                { icon: Shield, title: "Uncompromising Security", desc: "ISO-certified, GDPR compliant, and built with encryption at every layer to protect your data." },
                { icon: Users, title: "Customer Obsessed", desc: "We provide 24/7 dedicated support and account management for our enterprise partners." }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-default relative overflow-hidden shadow-2xl transform-gpu hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-red-500 shadow-inner">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/65 leading-relaxed font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#740001] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000')] bg-cover bg-center opacity-30" />
          <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to transform your communication?</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10 font-light">Join thousands of businesses that trust Anntel to handle their critical messaging infrastructure.</p>
            <Button size="lg" asChild className="bg-white text-[#740001] hover:bg-white/90 text-lg h-14 px-8 rounded-full font-bold shadow-[0_10px_30px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-all">
              <Link to="/contact">Get an Expert</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
