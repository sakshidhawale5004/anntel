import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Rocket, Shield, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Anntel" },
      { name: "description", content: "Learn more about Anntel, our mission, and the global brands that trust our cloud communication solutions." },
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
  { value: "10B+", label: "API Calls Monthly" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50+", label: "Global Carriers" },
  { value: "500+", label: "Enterprise Clients" },
];

function About() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-red-500/30 overflow-x-hidden">
      <SiteNav />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#740001]/20 to-transparent pointer-events-none" />
          <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.8)_0,transparent_50%)] mix-blend-screen pointer-events-none blur-[100px]" />
          
          <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-red-400 mb-8 animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              The Anntel Story
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Connecting the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">
                world seamlessly.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              We're building the infrastructure that powers billions of conversations globally. Simple APIs, robust architecture, and a relentless focus on reliability.
            </p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative z-20 -mt-10 mb-24 container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Our mission is to <span className="text-red-500">democratize</span> global communication.
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  At Anntel, we believe that communication is the foundation of every successful business relationship. Our mission is to provide scalable, secure, and innovative communication APIs that enable companies of all sizes to engage with their customers on their preferred channels.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                    <Rocket className="w-5 h-5 text-red-400" />
                    <span className="font-medium text-white/90">Built for speed</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                    <Shield className="w-5 h-5 text-red-400" />
                    <span className="font-medium text-white/90">Bank-grade security</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-500/20 blur-3xl rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
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

        {/* Client Logos Marquee */}
        <section className="py-24 border-t border-white/10 bg-[#0a1730] overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8 mb-12 text-center">
             <h2 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-2">Powering global enterprises</h2>
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
            <Button size="lg" className="bg-white text-[#740001] hover:bg-white/90 text-lg h-14 px-8 rounded-full font-semibold">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
