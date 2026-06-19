import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Globe, Plane, Network, Languages, Route as RouteIcon, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/international-messaging")({
  head: () => ({
    meta: [
      { title: "International SMS — Global Messaging by Anntel" },
      { name: "description", content: "Send SMS to 190+ countries with intelligent routing, local compliance and the best-in-class delivery rates." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="International Messaging"
      title={<>One API. <span className="text-gradient">Every country.</span></>}
      description="A single integration to reach customers in 190+ countries with localized senders, language support and route optimization."
      bullets={[
        "Direct interconnects with tier-1 operators worldwide",
        "Local sender IDs and number provisioning",
        "Unicode & language-aware templates",
        "Country-specific compliance handled for you",
      ]}
      features={[
        { icon: Globe, title: "190+ destinations", desc: "Carrier coverage that just works — wherever your customers are." },
        { icon: RouteIcon, title: "Smart routing", desc: "Real-time route selection for the best price/quality balance." },
        { icon: Languages, title: "Multi-language", desc: "Full Unicode, RTL scripts and language fallback." },
        { icon: ShieldCheck, title: "Local compliance", desc: "GDPR, TRAI, TCPA and more, handled out of the box." },
        { icon: Network, title: "Direct connectivity", desc: "Hop-free SMPP into national operators." },
        { icon: Plane, title: "Global from day one", desc: "Provision new countries in minutes, not months." },
      ]}
      stats={[
        { value: "190+", label: "Countries" },
        { value: "800+", label: "Operators" },
        { value: "98%+", label: "Delivery" },
        { value: "30s", label: "To provision" },
      ]}
    />
  ),
});
