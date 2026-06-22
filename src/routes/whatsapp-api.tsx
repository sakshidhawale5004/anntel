import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessageSquare, MessagesSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/whatsapp-api")({
  head: () => ({
    meta: [
      { title: "WhatsApp Business Platform — Anntel" },
      { name: "description", content: "Official WhatsApp Business API with green-tick verification, templates, webhooks and conversational commerce." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="WhatsApp Business Platform"
      title={<>Global reach with a local feel. <span className="text-gradient">That's the power of WhatsApp.</span></>}
      description="Engage your customers across campaigns, promotions, and live support through WhatsApp messaging and calling—powered by Anntel's programmable APIs."
      bullets={[
        "Official WhatsApp Business API",
        "Free trial & flexible pricing",
        "No credit card required",
        "Green-tick verification support",
      ]}
      features={[
        { icon: MessageSquare, title: "Programmable Messaging API", desc: "Send two-way WhatsApp messages for alerts, notifications, marketing, and promotions." },
        { icon: MessagesSquare, title: "Conversations API", desc: "Your WhatsApp integration fits into any omnichannel conversation. Connect front-line tools for customer support and sales enablement." },
        { icon: Phone, title: "Programmable Voice API", desc: "Seamlessly enable WhatsApp business calling and extend customer engagement from chat to voice-simply unlocking new channels." },
      ]}
      stats={[
        { value: "2B+", label: "Global users" },
        { value: "98%", label: "Open rates" },
        { value: "5x", label: "Better conversions" },
      ]}
    />
  ),
});
