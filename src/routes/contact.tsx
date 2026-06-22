import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Shield } from "lucide-react";
import { submitContact } from "@/lib/db";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Anntel — Talk to our experts" },
      { name: "description", content: "Get in touch with the Anntel team for SMS, WhatsApp, voice, RCS and email solutions tailored to your business." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#050b1f" }}>
      <SiteNav />

      {/* HERO */}
      <section
        className="relative w-full overflow-hidden text-white py-20 lg:py-28"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #122a55 0%, #050b1f 60%)" }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.1)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>
        {/* Glow orbs */}
        <div className="absolute -top-20 left-1/3 h-[300px] w-[300px] rounded-full bg-[#ef4444]/15 blur-[100px]" />
        <div className="absolute top-10 right-10 h-[250px] w-[250px] rounded-full bg-[#3b82f6]/15 blur-[80px]" />

        <div className="relative container mx-auto px-5 lg:px-8 text-center max-w-3xl z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            We'd love to hear from you
          </div>
          <h1 className="font-display text-5xl lg:text-7xl mb-5 text-white" style={{ textShadow: "0 4px 32px rgba(0,0,0,0.5)" }}>
            Let's <span style={{ background: "linear-gradient(135deg,#ef4444,#f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>talk.</span>
          </h1>
          <p className="text-lg text-white/65 max-w-xl mx-auto">
            Whether you're scaling OTPs, launching WhatsApp commerce or building a global voice stack — our experts are ready.
          </p>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <div className="border-y border-white/10" style={{ background: "rgba(10,23,48,0.8)" }}>
        <div className="container mx-auto px-5 lg:px-8 py-4 flex flex-wrap justify-center gap-8 text-sm text-white/70">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-red-400" /> Responds within 1 business day</div>
          <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-blue-400" /> 24/7 support available</div>
          <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-green-400" /> Enterprise SLA options</div>
        </div>
      </div>

      {/* MAIN FORM + SIDEBAR */}
      <section className="container mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">

        {/* Contact Form */}
        <div
          className="lg:col-span-2 rounded-3xl p-8 lg:p-10 border border-white/10"
          style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #0a1730 100%)" }}
        >
          <div className="mb-8">
            <h2 className="font-display text-2xl text-white mb-1">Send us a message</h2>
            <p className="text-sm text-white/50">Fill in the form and our team will get back to you shortly.</p>
          </div>

          {sent ? (
            <div className="text-center py-16">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.4)] mb-5">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="font-display text-3xl text-white mb-2">Thank you!</h3>
              <p className="text-white/60">We received your message and will respond within one business day.</p>
            </div>
          ) : (
            <form onSubmit={async (e) => { 
              e.preventDefault(); 
              const fd = new FormData(e.currentTarget);
              const data = {
                first: fd.get('first') as string,
                last: fd.get('last') as string,
                email: fd.get('email') as string,
                company: fd.get('company') as string,
                phone: fd.get('phone') as string,
                interest: fd.get('interest') as string,
                project: fd.get('project') as string,
              };
              await submitContact({ data }).catch(console.error);
              const text = `New Contact Request:%0AFirst Name: ${data.first}%0ALast Name: ${data.last}%0AEmail: ${data.email}%0ACompany: ${data.company}%0APhone: ${data.phone}%0AInterested in: ${data.interest}%0AProject: ${data.project}`;
              window.open(`https://wa.me/918828223388?text=${text}`, '_blank');
              setSent(true); 
            }} className="grid sm:grid-cols-2 gap-5">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="block text-sm font-medium mb-1.5 text-white/80">Interested in</label>
                <select name="interest" className="w-full h-11 rounded-xl border border-white/15 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white"
                  style={{ background: "rgba(255,255,255,0.05)" }}>
                  <option style={{ background: "#0a1730" }}>SMS / Messaging</option>
                  <option style={{ background: "#0a1730" }}>WhatsApp Business API</option>
                  <option style={{ background: "#0a1730" }}>Voice Services</option>
                  <option style={{ background: "#0a1730" }}>Email</option>
                  <option style={{ background: "#0a1730" }}>RCS Business Messaging</option>
                  <option style={{ background: "#0a1730" }}>Chatbots</option>
                  <option style={{ background: "#0a1730" }}>Reseller program</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5 text-white/80">How can we help?</label>
                <textarea
                  name="project"
                  rows={5}
                  className="w-full rounded-xl border border-white/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white resize-none"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="sm:col-span-2 mt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500/50" />
                  <span className="text-sm text-white">
                    I hereby consent to receive promotional updates and communications from Anntel India via Email, SMS, WhatsApp, RCS, and other communication channels.
                  </span>
                </label>
              </div>
              <div className="sm:col-span-2 mt-4">
                <Button size="lg" type="submit" className="text-white w-full bg-[#ff5722] hover:bg-[#e64a19] text-base h-12 rounded-md">
                  Send
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <InfoCard icon={Mail} title="Email us" text="contact@anntel.in" href="mailto:contact@anntel.in" />
          <InfoCard icon={Phone} title="Sales Inquiry" text="+91 8828 22 3388" href="tel:+918828223388" />
          <InfoCard icon={MapPin} title="Offices" text="Mumbai, Raipur, Haryana" />

          {/* Enterprise CTA card */}
          <div
            className="relative rounded-2xl p-6 overflow-hidden border border-red-500/20"
            style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)" }}
          >
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative">
              <div className="text-xs uppercase tracking-wider text-red-300 font-semibold mb-1">Enterprise</div>
              <div className="font-semibold text-white mb-1">Need a custom rollout?</div>
              <p className="text-sm text-white/75">Dedicated account manager, custom SLAs and on-call engineering.</p>
            </div>
          </div>

          {/* Working hours */}
          <div
            className="rounded-2xl p-5 border border-white/10"
            style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #0a1730 100%)" }}
          >
            <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-3">Working Hours</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">9:00 AM – 7:00 PM IST</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Saturday</span>
                <span className="text-white font-medium">10:00 AM – 4:00 PM IST</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR OFFICES */}
      <section style={{ background: "linear-gradient(180deg,#050b1f 0%,#0a1730 100%)" }} className="py-20">
        <div className="container mx-auto px-5 lg:px-8">

          {/* Section header + world map */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                Our presence
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Our Offices</h2>
              <p className="text-white/60 mb-8 max-w-md">With offices across India, Anntel delivers local expertise with global-grade infrastructure to power your communications at scale.</p>
              <div className="space-y-3">
                {[
                  { city: "MUMBAI", detail: "Registered Office, Maharashtra" },
                  { city: "RAIPUR", detail: "Operations Centre, Chhattisgarh" },
                  { city: "HARYANA", detail: "North India Hub, NCR Region" },
                ].map((o) => (
                  <div key={o.city} className="flex items-center gap-3 py-3 border-b border-white/10 group cursor-pointer">
                    <span className="text-red-500 font-bold text-sm">▶</span>
                    <div>
                      <div className="text-sm font-bold text-white tracking-widest">{o.city}</div>
                      <div className="text-xs text-white/50">{o.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* World map image */}
            <div className="img-3d-frame">
              <img
                src="/map.jpg"
                alt="Our global offices"
                className="w-full h-64 lg:h-80 object-cover"
              />
              {/* India highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1730]/60 via-transparent to-[#0a1730]/60" />
              <div className="absolute bottom-4 left-4 text-xs text-white/70 font-semibold">
                📍 India — Mumbai · Raipur · Haryana
              </div>
            </div>
          </div>

          {/* Office detail cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                city: "Mumbai",
                state: "Maharashtra",
                address: "1005, Rustomjee Reserve, Rangnath Keskar Marg, Dahisar West, Mumbai 400068",
                phone: "+91 8828 22 3388",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
                tag: "Headquarters",
              },
              {
                city: "Raipur",
                state: "Chhattisgarh",
                address: "Sector 24, GE Road, Raipur – 492 001",
                phone: "+91 8828 22 3388",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
                tag: "Operations",
              },
              {
                city: "Haryana",
                state: "NCR Region",
                address: "Sector 44, Gurugram – 122 003",
                phone: "+91 8828 22 3388",
                img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
                tag: "North India Hub",
              },
            ].map((office) => (
              <div
                key={office.city}
                className="card-3d rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "linear-gradient(180deg,#0f1f3d 0%,#0a1730 100%)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={office.img} alt={office.city} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600/90 text-white px-2.5 py-1 rounded-full">{office.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white text-lg">{office.city}</h3>
                  <div className="text-xs text-red-400 font-semibold mb-3">{office.state}</div>
                  <div className="flex items-start gap-2 text-sm text-white/60 mb-2">
                    <MapPin className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Phone className="h-4 w-4 text-white/30 shrink-0" />
                    {office.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5 text-white/80">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-xl border border-white/15 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white placeholder:text-white/30"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, href }: { icon: typeof Mail; title: string; text: string; href?: string }) {
  const inner = (
    <div
      className="rounded-2xl border border-white/10 p-5 flex items-start gap-3 hover-lift transition-all group"
      style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #0a1730 100%)" }}
    >
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/40 font-semibold">{title}</div>
        <div className="font-medium text-white">{text}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
