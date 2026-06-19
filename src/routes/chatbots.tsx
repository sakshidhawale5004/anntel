import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Bot, Sparkles, Workflow, Languages, BarChart3, MessagesSquare } from "lucide-react";

export const Route = createFileRoute("/chatbots")({
  head: () => ({
    meta: [
      { title: "Chatbots — AI Automation by Anntel" },
      { name: "description", content: "Build AI-powered chatbots across WhatsApp, web and SMS with visual flows, NLP and seamless agent handoff." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Chatbots"
      title={<>AI conversations, <span className="text-gradient">on autopilot.</span></>}
      description="Deploy intelligent chatbots that understand intent, automate workflows and hand off to humans when it matters."
      bullets={[
        "Visual flow builder — no code required",
        "LLM-powered intent and entity detection",
        "Multi-lingual conversations out of the box",
        "Seamless escalation to live agents",
      ]}
      features={[
        { icon: Workflow, title: "Visual flow builder", desc: "Design conversation journeys with branching, conditions and APIs." },
        { icon: Sparkles, title: "LLM-powered", desc: "Connect GPT-class models to answer free-form questions." },
        { icon: Languages, title: "Multi-lingual", desc: "Speak your customer's language with auto-detection." },
        { icon: MessagesSquare, title: "Omnichannel", desc: "One bot, deployed across WhatsApp, web and SMS." },
        { icon: Bot, title: "Agent handoff", desc: "Seamlessly transfer conversations with full context." },
        { icon: BarChart3, title: "Bot analytics", desc: "Monitor containment, satisfaction and drop-off in real time." },
      ]}
    />
  ),
});
