import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { 
  Rocket, Shield, Globe, Users, MessageSquare, Phone, Mail, 
  Database, Target, Cpu, Award, Layers, ArrowRight, CheckCircle2, 
  Sparkles, Heart, Building2, Network 
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { value: "100K+", label: "Billable transactions Pan India" },
  { value: "5+", label: "Super Network Connections" },
  { value: "3+ Offices", label: "Offices across India" },
  { value: "100+", label: "Digital transformation" },
];

const targetAudience = [
  {
    title: "Enterprises",
    desc: "Scalable, secure cloud communications infrastructure engineered for high-volume corporate workloads and mission-critical reliability.",
    icon: Building2,
  },
  {
    title: "Over-The-Top (OTT) Players",
    desc: "High-throughput messaging and voice connectivity designed for global OTT applications with ultra-low latency and seamless delivery.",
    icon: Network,
  },
  {
    title: "Mobile Network Operators (MNO)",
    desc: "Comprehensive SMS filtering, routing optimization, analytical capabilities, and monetization suites tailored for global carrier networks.",
    icon: Globe,
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

function About() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-red-500/30 overflow-x-hidden">
      <SiteNav />
      
      <main className="flex-grow">
        {/* HERO SECTION - We Are Anntel */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#740001]/20 to-transparent pointer-events-none" />
          <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.8)_0,transparent_50%)] mix-blend-screen pointer-events-none blur-[100px]" />
          
          <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-red-400 mb-8 shadow-inner animate-fade-in-up">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              We Are Anntel
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Connecting the world <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
                through mobile technology.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Anntel isn’t just experts in messaging, we’re more than that. With our cloud communications platform, we are helping businesses with our SMS-based marketing campaigns, customer service alerts, and updates.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Button size="lg" asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-8 h-14 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all transform hover:scale-105 text-lg">
                <Link to="/contact">Get an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 h-14 rounded-full backdrop-blur-md transition-all text-lg">
                <a href="#solutions">Explore Our Solutions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* KEY STATS SECTION */}
        <section className="relative z-20 -mt-10 mb-24 container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-white/10">
                <div className="font-display text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-200 mb-2">{stat.value}</div>
                <div className="text-sm text-red-400 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE CATER TO & OVERVIEW */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
                Global Reach & Portfolio
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Powering Diverse Communications
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We cater to enterprises, over-the-top (OTT) players, and mobile network operators (MNO) and our portfolio comprises solutions in messaging, voice, email, SMS filtering, analytics, and monetization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-red-300 transition-colors">{item.title}</h3>
                    <p className="text-white/65 leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-red-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Tailored Architecture
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR VISION & GUIDING PRINCIPLES */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#081226] to-[#020817]">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="container mx-auto px-5 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
                Guiding Principles
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-4">
                To connect the world through mobile technology.
              </p>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                We’re guided by our commitments to our colleagues, our clients, and our technological stack:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {visionPillars.map((pillar, i) => (
                <div key={i} className="flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 relative group shadow-xl">
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
                    <div className="text-sm font-medium text-red-400 mb-6">{pillar.subtitle}</div>
                    <p className="text-white/70 leading-relaxed font-light text-base">{pillar.desc}</p>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
                Adaptive Portfolio
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our Solutions Can Adapt to Your Business
              </h2>
              <p className="text-lg text-white/60">
                Whether you require programmable APIs, integrated voice solutions, or a holistic digital marketing strategy, our solutions scale with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol, i) => (
                <div 
                  key={i} 
                  className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group ${i === solutions.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                        <sol.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                        {sol.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">{sol.title}</h3>
                    <p className="text-white/65 leading-relaxed text-sm font-light mb-8">{sol.desc}</p>
                  </div>
                  <Link 
                    to={sol.to} 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 group-hover:translate-x-1 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-gradient-to-b from-[#020817] to-[#0a1730]">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-lg text-white/60">We combine enterprise-grade reliability with developer-first simplicity.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Global Infrastructure", desc: "Our distributed network ensures low latency and high delivery rates across 190+ countries." },
                { icon: Shield, title: "Uncompromising Security", desc: "ISO-certified, GDPR compliant, and built with encryption at every layer to protect your data." },
                { icon: Users, title: "Customer Obsessed", desc: "We provide 24/7 dedicated support and account management for our enterprise partners." }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-default relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-red-500">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS MARQUEE - Customers Who Trust Us */}
        <section className="py-24 border-t border-white/10 bg-[#0a1730] overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8 mb-12 text-center">
            <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-3">Customers Who Trust Us</h2>
            <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">Powering global enterprises & fast-growing brands</p>
          </div>
          <div className="flex gap-20 animate-marquee whitespace-nowrap items-center w-max opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="Client Logo" 
                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-all duration-300" 
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#740001] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000')] bg-cover bg-center opacity-30" />
          <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">Ready to transform your communication?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Join thousands of businesses that trust Anntel to handle their critical messaging infrastructure.</p>
            <Button size="lg" asChild className="bg-white text-[#740001] hover:bg-white/90 text-lg h-14 px-8 rounded-full font-semibold shadow-2xl">
              <Link to="/contact">Get an Expert</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
