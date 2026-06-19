import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Mail, Send, Inbox, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/email-services")({
  head: () => ({
    meta: [
      { title: "Email Services — Transactional & Marketing Email by Anntel" },
      { name: "description", content: "Reliable transactional and marketing email with inbox-first deliverability, templates and rich analytics." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Email Services"
      title={<>Inbox-first <span className="text-gradient">email delivery.</span></>}
      description="Send transactional and marketing email with high deliverability, beautiful templates and real-time engagement insights."
      bullets={[
        "Dedicated and shared IP pools",
        "SPF, DKIM and DMARC managed for you",
        "Drag-and-drop template builder",
        "Click, open and bounce analytics",
      ]}
      features={[
        { icon: Send, title: "Transactional API", desc: "Trigger receipts, alerts and resets with millisecond latency." },
        { icon: Mail, title: "Marketing campaigns", desc: "Design, segment and schedule beautiful broadcasts." },
        { icon: ShieldCheck, title: "Deliverability", desc: "Automated authentication, warm-up and reputation management." },
        { icon: BarChart3, title: "Engagement insights", desc: "Heatmaps, click tracking and conversion attribution." },
        { icon: Sparkles, title: "Template library", desc: "Responsive templates that render perfectly on every client." },
        { icon: Inbox, title: "Inbox placement", desc: "Continuous monitoring to keep you out of the spam folder." },
      ]}
    />
  ),
});
