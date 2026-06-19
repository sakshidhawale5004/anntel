import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessagesSquare, BadgeCheck, Webhook, Bot, ShoppingCart, Settings2 } from "lucide-react";

export const Route = createFileRoute("/whatsapp-api")({
  head: () => ({
    meta: [
      { title: "WhatsApp Business API — Anntel" },
      { name: "description", content: "Official WhatsApp Business API with green-tick verification, templates, webhooks and conversational commerce." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="WhatsApp Business API"
      title={<>Conversations that <span className="text-gradient">convert.</span></>}
      description="Official WhatsApp Business API by Meta — go live in days with verification, message templates, automation and analytics."
      bullets={[
        "Green-tick business verification assistance",
        "Programmable templates and rich messages",
        "Two-way conversations with agent inbox",
        "Catalog & commerce features ready",
      ]}
      features={[
        { icon: BadgeCheck, title: "Verified account", desc: "We guide you through Meta Business Verification end-to-end." },
        { icon: MessagesSquare, title: "Rich templates", desc: "Buttons, media headers and call-to-action templates." },
        { icon: Webhook, title: "Real-time webhooks", desc: "Inbound messages and status events streamed to your stack." },
        { icon: Bot, title: "Chatbots & flows", desc: "Drop-in flow builder or connect your own NLP / LLM." },
        { icon: ShoppingCart, title: "Commerce", desc: "Catalogs, carts and payments inside the conversation." },
        { icon: Settings2, title: "Multi-agent inbox", desc: "Assign, tag and resolve conversations with your team." },
      ]}
      stats={[
        { value: "2B+", label: "WhatsApp users" },
        { value: "98%", label: "Open rate" },
        { value: "5×", label: "CTR vs SMS" },
        { value: "Days", label: "To go live" },
      ]}
    />
  ),
});
