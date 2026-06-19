import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MessagesSquare, ArrowLeftRight, Bot, Hash, Inbox, Webhook } from "lucide-react";

export const Route = createFileRoute("/two-way-messaging")({
  head: () => ({
    meta: [
      { title: "2-Way Messaging — Conversational SMS by Anntel" },
      { name: "description", content: "Run two-way SMS conversations with long codes, short codes and keywords — fully programmable through the Anntel API." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="2-Way Messaging"
      title={<>Conversations that go <span className="text-gradient">both ways.</span></>}
      description="Receive replies, run keyword campaigns and route inbound SMS to the right agent or workflow — at any scale."
      bullets={[
        "Dedicated long codes, short codes & sender IDs",
        "Inbound webhooks routed in real time",
        "Keyword campaigns, polls and auto-responders",
        "Conversation threading and agent inbox",
      ]}
      features={[
        { icon: ArrowLeftRight, title: "True 2-way SMS", desc: "Capture every reply and stitch it back into the conversation thread." },
        { icon: Webhook, title: "Inbound webhooks", desc: "Push inbound messages to your systems instantly via signed callbacks." },
        { icon: Hash, title: "Keyword automation", desc: "Trigger flows on keywords like STOP, JOIN, INFO with zero code." },
        { icon: Bot, title: "Bot handoff", desc: "Blend chatbot answers with seamless agent escalation." },
        { icon: Inbox, title: "Agent inbox", desc: "Give support teams a shared, searchable inbox across numbers." },
        { icon: MessagesSquare, title: "Cross-channel", desc: "Bridge SMS conversations to WhatsApp, RCS or email." },
      ]}
      stats={[
        { value: "100M+", label: "Inbound / mo" },
        { value: "<200ms", label: "Webhook latency" },
        { value: "99.99%", label: "Capture rate" },
        { value: "24/7", label: "Support" },
      ]}
    />
  ),
});
