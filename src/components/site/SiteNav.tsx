import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const messaging = [
  { to: "/anntel-messaging", label: "Anntel Messaging" },
  { to: "/two-way-messaging", label: "2-Way Messaging" },
  { to: "/international-messaging", label: "International SMS" },
  { to: "/database-campaigns", label: "Database Campaigns" },
  { to: "/otp-solutions", label: "OTP Solutions" },
  { to: "/smpp", label: "SMPP" },
  { to: "/rcs-business-messaging", label: "RCS Business Messaging" },
];
const whatsapp = [
  { to: "/whatsapp-api", label: "WhatsApp Business API" },
  { to: "/whatsapp-marketing-service", label: "WhatsApp Marketing" },
  { to: "/chatbots", label: "Chatbots" },
];
const channels = [
  { to: "/voice-services", label: "Voice Services" },
  { to: "/email-services", label: "Email Services" },
  { to: "/hlr-lookup", label: "HLR Lookup" },
];
const company = [
  { to: "/anntel-digital", label: "Anntel Digital" },
  { to: "/admin-reseller", label: "Admin & Reseller" },
  { to: "/contact", label: "Contact" },
];

function Dropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
        {label} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-navy border border-white/10 rounded-xl shadow-card-hover p-2 min-w-[260px] text-white">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block px-3 py-2 rounded-lg text-sm hover:bg-white/10 hover:text-white transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="container mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center">
            <Dropdown label="Messaging" items={messaging} />
            <Dropdown label="WhatsApp" items={whatsapp} />
            <Dropdown label="Channels" items={channels} />
            <Dropdown label="Company" items={company} />
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" asChild><Link to="/contact">Sign in</Link></Button>
          <Button variant="hero" asChild><Link to="/contact">Talk to sales</Link></Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy text-white">
          <div className="container mx-auto px-5 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {[
              ["Messaging", messaging],
              ["WhatsApp", whatsapp],
              ["Channels", channels],
              ["Company", company],
            ].map(([title, items]) => (
              <div key={title as string}>
                <div className="text-xs uppercase tracking-wide text-white/50 font-semibold mb-1">{title as string}</div>
                {(items as { to: string; label: string }[]).map((i) => (
                  <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="block py-1.5 text-sm">
                    {i.label}
                  </Link>
                ))}
              </div>
            ))}
            <Button variant="hero" className="w-full" asChild><Link to="/contact">Talk to sales</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
