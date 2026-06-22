import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { MessageSquare, MessagesSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/whatsapp-api")({
  head: () => ({
    meta: [
      { title: "WhatsApp Business Platform — Anntel" },
      { name: "description", content: "Official WhatsApp Business API with green-tick verification, templates, webhooks and conversational commerce." },
    ],
  }),
  component: WhatsAppAPI,
});

const logos = ["HubSpot", "Rappi", "Oyo", "Nu", "Rescue"];

function WhatsAppAPI() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      
      {/* Hero Section */}
      <section className="bg-[#02163b] text-white pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="container mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="text-red-400 font-semibold mb-4 text-sm tracking-wide uppercase">WhatsApp Business Platform</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-medium">
              Global reach with a local feel. That's the power of WhatsApp.
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-8">
              Engage your customers across campaigns, promotions, and live support through WhatsApp messaging and calling—powered by Anntel's programmable APIs.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" asChild className="bg-[#1a56ff] text-white hover:bg-blue-600 font-semibold border-none rounded-sm">
                <Link to="/contact">Start for free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white bg-transparent hover:bg-white/10 font-semibold rounded-sm">
                <Link to="/contact">Contact sales</Link>
              </Button>
            </div>
            <div className="flex gap-6 text-sm text-white/80">
              <div className="flex items-center gap-1.5 font-medium">✓ Free trial</div>
              <div className="flex items-center gap-1.5 font-medium">✓ No credit card required</div>
              <div className="flex items-center gap-1.5 font-medium">✓ Flexible pricing</div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" alt="WhatsApp Interface" className="rounded-2xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 border border-white/10" />
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="border-b border-white/10 py-10" style={{ background: "linear-gradient(180deg,#050b1f 0%,#0a1730 100%)" }}>
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-70">
            {logos.map((l) => (
              <div key={l} className="font-display text-2xl font-bold text-white">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* API Cards Section */}
      <section className="py-24" style={{ background: "linear-gradient(180deg,#0a1730 0%,#050b1f 100%)" }}>
        <div className="container mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Build WhatsApp experiences with less hassle, more hustle
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto mb-20 text-lg">
            Deliver rich, interactive experiences on WhatsApp to connect with a 2-billion audience on the world's most popular messaging app. With the Anntel App Services Platform, you can build a complete solution that moves seamlessly from chat to voice in the same thread.
          </p>

          <h3 className="font-display text-2xl md:text-3xl mb-12 text-white">Simple APIs that support any interaction</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {[
              { icon: MessageSquare, title: "Programmable Messaging API", desc: "Send two-way WhatsApp messages for alerts, notifications, marketing, and promotions." },
              { icon: MessagesSquare, title: "Conversations API", desc: "Your WhatsApp integration fits into any omnichannel conversation. Connect front-line tools for customer support and sales enablement." },
              { icon: Phone, title: "Programmable Voice API", desc: "Seamlessly enable WhatsApp business calling and extend customer engagement from chat to voice-simply unlocking new channels." },
            ].map((card, i) => (
              <div key={i} className="rounded-xl border border-white/10 p-8 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white/5 hover:bg-white/10">
                <div className="h-12 w-12 rounded-full bg-[#740001] text-white flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(116,0,1,0.5)]">
                  <card.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{card.title}</h4>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{card.desc}</p>
                <Link to="/contact" className="text-white font-semibold text-sm hover:underline flex items-center gap-1 group">
                  Explore the API <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Mode Section */}
      <section className="bg-[#02163b] py-24 text-white">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4 font-medium">Build mode, activated</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explore quick starts, code snippets, SDKs, and more in our comprehensive resource library to accelerate your WhatsApp solution.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Get started quickly</h3>
              <ul className="space-y-6">
                <li><Link to="/contact" className="text-white hover:text-blue-400 underline decoration-1 underline-offset-4 font-medium text-lg transition-colors">Read the WhatsApp API Docs</Link></li>
                <li><Link to="/contact" className="text-white hover:text-blue-400 underline decoration-1 underline-offset-4 font-medium text-lg transition-colors">Get started with Messaging</Link></li>
                <li><Link to="/contact" className="text-white hover:text-blue-400 underline decoration-1 underline-offset-4 font-medium text-lg transition-colors">Get started with WhatsApp in contact center</Link></li>
              </ul>
            </div>
            <div className="bg-[#0f1f3d] rounded-xl border border-white/10 p-6 md:p-8 font-mono text-sm md:text-base shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500"></div>
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-white/90 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                <code className="text-gray-400">// Download the helper library from anntel.com/docs/node/install</code>{"\n"}
                <code className="text-purple-400">const</code> client = <code className="text-blue-300">require</code>(<code className="text-green-300">'anntel'</code>)(accountSid, authToken);{"\n\n"}
                client.messages{"\n"}
                {"  "}.<code className="text-blue-300">create</code>(&#123;{"\n"}
                {"    "}body: <code className="text-green-300">'Hello! This is a message from a node app.'</code>,{"\n"}
                {"    "}from: <code className="text-green-300">'whatsapp:+14155238886'</code>,{"\n"}
                {"    "}to: <code className="text-green-300">'whatsapp:+15005550006'</code>{"\n"}
                {"  "}&#125;){"\n"}
                {"  "}.<code className="text-blue-300">then</code>(message =&gt; console.log(message.sid));
              </pre>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
