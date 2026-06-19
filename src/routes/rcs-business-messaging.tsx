import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessagesSquare, Image, BadgeCheck, BarChart3, Bot, Smartphone } from "lucide-react";

export const Route = createFileRoute("/rcs-business-messaging")({
  head: () => ({
    meta: [
      { title: "RCS Business Messaging — Rich Conversations by Anntel" },
      { name: "description", content: "Deliver rich, verified RCS experiences — carousels, suggested replies and branded sender IDs — across Android." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="RCS Business Messaging"
      title={<>SMS, <span className="text-gradient">reimagined.</span></>}
      description="Send branded, verified, interactive RCS messages with images, carousels and suggested actions — the next generation of messaging."
      bullets={[
        "Verified sender with brand name and logo",
        "Rich cards, carousels and suggested replies",
        "Read receipts and typing indicators",
        "Automatic SMS fallback when unsupported",
      ]}
      features={[
        { icon: BadgeCheck, title: "Verified sender", desc: "Boost trust with brand-verified messages and blue checkmarks." },
        { icon: Image, title: "Rich media", desc: "Send images, videos, carousels and product cards inline." },
        { icon: MessagesSquare, title: "Interactive replies", desc: "Suggested replies and quick actions to drive engagement." },
        { icon: Bot, title: "Conversational AI", desc: "Plug in chatbots for end-to-end automation." },
        { icon: BarChart3, title: "Rich analytics", desc: "Delivery, read, click and conversion metrics." },
        { icon: Smartphone, title: "SMS fallback", desc: "Auto-fallback to SMS for devices without RCS." },
      ]}
    />
  ),
});
