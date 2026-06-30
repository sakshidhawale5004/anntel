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

function Dropdown({
  label,
  items,
  isDark,
}: {
  label: string;
  items: { to: string; label: string }[];
  isDark: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          isDark
            ? "text-white/80 hover:text-white"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        {label} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div
          className={`rounded-xl shadow-lg p-2 min-w-[260px] border ${
            isDark
              ? "bg-[#0a1730] border-white/10 text-white"
              : "bg-white border-gray-200 text-gray-800"
          }`}
        >
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isDark
                  ? "hover:bg-white/10 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
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
  const isDark = true;

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDark
          ? "bg-[#050b1f]/95 border-white/10 text-white"
          : "bg-white/95 border-gray-200 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo isDark={isDark} />
          <nav className="hidden lg:flex items-center">
            <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors ${isDark ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}>About</Link>
            <Dropdown label="Messaging" items={messaging} isDark={isDark} />
            <Dropdown label="WhatsApp" items={whatsapp} isDark={isDark} />
            <Dropdown label="Channels" items={channels} isDark={isDark} />
            <Dropdown label="Company" items={company} isDark={isDark} />
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            asChild
            className={isDark ? "text-white hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-gray-900"}
          >
            <Link to="/contact">Contact Sales</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={isDark ? "text-white hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-gray-900 cursor-pointer"}
          >
            <a href="https://anntelair.com/">Login</a>
          </Button>
          <Button asChild>
            <Link to="/contact">Start for free</Link>
          </Button>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <button
            className={`p-2 ${isDark ? "text-white" : "text-gray-800"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className={`lg:hidden border-t transition-colors duration-300 ${
            isDark ? "border-white/10 bg-[#050b1f] text-white" : "border-gray-200 bg-white text-gray-900"
          }`}
        >
          <div className="container mx-auto px-5 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {[
              ["Messaging", messaging],
              ["WhatsApp", whatsapp],
              ["Channels", channels],
              ["Company", company],
              ["About", [{ to: "/about", label: "About Anntel" }]],
            ].map(([title, items]) => (
              <div key={title as string}>
                <div
                  className={`text-xs uppercase tracking-wide font-semibold mb-1 ${
                    isDark ? "text-white/50" : "text-gray-400"
                  }`}
                >
                  {title as string}
                </div>
                {(items as { to: string; label: string }[]).map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className={`block py-1.5 text-sm ${
                      isDark ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            ))}
            <Button variant="hero" className="w-full" asChild>
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
