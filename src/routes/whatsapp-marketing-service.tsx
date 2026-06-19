import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessagesSquare, Megaphone, Users, BarChart3, Image, Send } from "lucide-react";

export const Route = createFileRoute("/whatsapp-marketing-service")({
  head: () => ({
    meta: [
      { title: "WhatsApp Marketing — Campaign Service by Anntel" },
      { name: "description", content: "Run end-to-end WhatsApp marketing campaigns with rich templates, segmentation and conversion analytics." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="WhatsApp Marketing"
      title={<>Marketing that <span className="text-gradient">starts conversations.</span></>}
      description="Launch WhatsApp campaigns to opted-in audiences with rich media templates, smart segments and end-to-end analytics."
      bullets={[
        "Official WhatsApp Business API",
        "Rich templates with media, buttons & CTAs",
        "Smart segmentation and A/B testing",
        "Live click-through and conversion tracking",
      ]}
      features={[
        { icon: Megaphone, title: "Campaign manager", desc: "Plan, schedule and launch broadcasts from a polished console." },
        { icon: Image, title: "Rich templates", desc: "Drag-and-drop builder for media, buttons and quick replies." },
        { icon: Users, title: "Segmentation", desc: "Tag and target audiences for relevant, high-converting sends." },
        { icon: Send, title: "Bulk + personalized", desc: "Send at scale with deep personalization variables." },
        { icon: BarChart3, title: "Conversion tracking", desc: "Track read, click and purchase outcomes per campaign." },
        { icon: MessagesSquare, title: "Reply automation", desc: "Capture and route replies to your team or chatbot." },
      ]}
    />
  ),
});
