import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Users, BarChart3, Wallet, Settings, ShieldCheck, Briefcase } from "lucide-react";

export const Route = createFileRoute("/admin-reseller")({
  head: () => ({
    meta: [
      { title: "Admin & Reseller — White-Label Platform by Anntel" },
      { name: "description", content: "White-label admin and reseller panels with multi-tenant billing, wallets, branding and granular permissions." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Admin & Reseller"
      title={<>Run your own <span className="text-gradient">messaging business.</span></>}
      description="Launch a fully branded reseller platform with multi-tenant management, wallets, pricing and reporting — all under your brand."
      bullets={[
        "White-label admin and customer portals",
        "Multi-level reseller hierarchies",
        "Per-customer pricing & wallets",
        "Role-based access controls",
      ]}
      features={[
        { icon: Users, title: "Multi-tenant", desc: "Onboard unlimited customers and sub-resellers with isolation." },
        { icon: Wallet, title: "Wallets & billing", desc: "Prepaid wallets, top-ups and invoices, fully automated." },
        { icon: Settings, title: "Custom branding", desc: "Your logo, domain and theme across every touchpoint." },
        { icon: BarChart3, title: "Deep reporting", desc: "Granular reports per customer, route and channel." },
        { icon: ShieldCheck, title: "Role permissions", desc: "Fine-grained controls for every team and customer role." },
        { icon: Briefcase, title: "Reseller-ready", desc: "Channel partner programs with margin management." },
      ]}
    />
  ),
});
