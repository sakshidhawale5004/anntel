import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessageSquare, Zap, BarChart3, Globe, Shield, Layers } from "lucide-react";

export const Route = createFileRoute("/anntel-messaging")({
  head: () => ({
    meta: [
      { title: "Anntel Messaging — Enterprise SMS at Scale" },
      { name: "description", content: "Send transactional & promotional SMS globally with carrier-grade reliability, smart routing and real-time analytics." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Anntel Messaging"
      title={<>Enterprise SMS, <span className="text-gradient">delivered with intent.</span></>}
      description="One API for promotional, transactional and conversational SMS — backed by direct carrier connectivity in 190+ countries."
      bullets={[
        "Direct tier-1 carrier routes for fastest delivery",
        "DLT-compliant templates and sender ID management",
        "Real-time delivery receipts and analytics",
        "REST API, SMPP and dashboard sending",
      ]}
      features={[
        { icon: Zap, title: "Sub-second delivery", desc: "Premium routes ensure your messages reach users the moment they're sent." },
        { icon: Globe, title: "Global coverage", desc: "Reach 190+ countries with optimized routes per destination." },
        { icon: Shield, title: "Carrier-grade trust", desc: "Built-in compliance, opt-out handling and fraud protection." },
        { icon: BarChart3, title: "Live analytics", desc: "Track delivery, opens and conversions across every campaign." },
        { icon: Layers, title: "Smart templates", desc: "Personalize at scale with variables, fallback and language packs." },
        { icon: MessageSquare, title: "Unified inbox", desc: "Manage replies and conversations alongside your sends." },
      ]}
      stats={[
        { value: "99.95%", label: "Uptime SLA" },
        { value: "10B+", label: "Messages / yr" },
        { value: "190+", label: "Countries" },
        { value: "<1s", label: "Avg delivery" },
      ]}
    />
  ),
});
