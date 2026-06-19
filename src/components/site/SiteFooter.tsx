import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "Messaging",
    items: [
      ["Anntel Messaging", "/anntel-messaging"],
      ["2-Way Messaging", "/two-way-messaging"],
      ["International SMS", "/international-messaging"],
      ["OTP Solutions", "/otp-solutions"],
      ["SMPP", "/smpp"],
      ["RCS Business", "/rcs-business-messaging"],
    ],
  },
  {
    title: "WhatsApp",
    items: [
      ["WhatsApp API", "/whatsapp-api"],
      ["WhatsApp Marketing", "/whatsapp-marketing-service"],
      ["Chatbots", "/chatbots"],
      ["Database Campaigns", "/database-campaigns"],
    ],
  },
  {
    title: "Channels",
    items: [
      ["Voice Services", "/voice-services"],
      ["Email Services", "/email-services"],
      ["HLR Lookup", "/hlr-lookup"],
    ],
  },
  {
    title: "Company",
    items: [
      ["Anntel Digital", "/anntel-digital"],
      ["Admin & Reseller", "/admin-reseller"],
      ["Contact", "/contact"],
    ],
  },
] as const;

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/anntelindia/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/anntel_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/anntel/", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Cloud communications for SMS, voice, WhatsApp, RCS, email and beyond. Built for scale and trust.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="tel:+918828223388" className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +91 8828 22 3388
              </a>
              <a href="mailto:contact@anntel.in" className="flex items-center gap-2 text-foreground/90 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> contact@anntel.in
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 grid place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary-foreground hover:bg-brand hover:border-transparent hover:scale-110 transition-all shadow-card"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold mb-3">{c.title}</div>
              <ul className="space-y-2">
                {c.items.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Anntel. All rights reserved.</div>
          <div>Privacy · Terms · Cookies</div>
        </div>
      </div>
    </footer>
  );
}
