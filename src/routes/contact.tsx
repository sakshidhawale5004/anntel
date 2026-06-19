import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="bg-hero">
        <div className="container mx-auto px-5 lg:px-8 py-20 lg:py-24 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-5">
            We'd love to hear from you
          </div>
          <h1 className="font-display text-5xl lg:text-6xl mb-5">
            Let's <span className="text-gradient">talk.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether you're scaling OTPs, launching WhatsApp commerce or building a global voice stack — our experts are ready.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-card">
          {sent ? (
            <div className="text-center py-16">
              <div className="mx-auto h-16 w-16 rounded-full bg-brand text-primary-foreground flex items-center justify-center shadow-glow mb-5">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl mb-2">Thank you!</h2>
              <p className="text-muted-foreground">We received your message and will respond within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid sm:grid-cols-2 gap-5"
            >
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="block text-sm font-medium mb-1.5">Interested in</label>
                <select className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>SMS / Messaging</option>
                  <option>WhatsApp Business API</option>
                  <option>Voice Services</option>
                  <option>Email</option>
                  <option>RCS Business Messaging</option>
                  <option>Chatbots</option>
                  <option>Reseller program</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">How can we help?</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <Button variant="hero" size="lg" type="submit">Send message <Send className="h-4 w-4" /></Button>
              </div>
            </form>
          )}
        </div>

        <div className="space-y-5">
          <InfoCard icon={Mail} title="Email" text="contact@anntel.in" href="mailto:contact@anntel.in" />
          <InfoCard icon={Phone} title="Sales Inquiry" text="+91 8828 22 3388" href="tel:+918828223388" />
          <InfoCard icon={MapPin} title="Address" text="Mumbai · Delhi · Bengaluru, India" />

          <div className="relative rounded-2xl bg-brand text-primary-foreground p-6 shadow-orb overflow-hidden">
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-wider opacity-80 mb-1">Enterprise</div>
              <div className="font-semibold mb-1">Need a custom rollout?</div>
              <p className="text-sm opacity-90">Dedicated account manager, custom SLAs and on-call engineering.</p>
            </div>
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
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, href }: { icon: typeof Mail; title: string; text: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card flex items-start gap-3 hover-lift">
      <div className="h-10 w-10 rounded-xl bg-brand text-primary-foreground flex items-center justify-center shadow-glow shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-medium">{text}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
