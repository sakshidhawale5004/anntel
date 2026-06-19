import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Megaphone, Search, MousePointerClick, Palette, BarChart3, Share2 } from "lucide-react";

export const Route = createFileRoute("/anntel-digital")({
  head: () => ({
    meta: [
      { title: "Anntel Digital — Digital Marketing Services" },
      { name: "description", content: "Performance marketing, SEO, paid media, creative and analytics — the digital growth partner that closes the loop with messaging." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Anntel Digital"
      title={<>Digital marketing, <span className="text-gradient">closed loop.</span></>}
      description="From paid acquisition to retention — we run digital programs that connect every touchpoint to a measurable conversation."
      bullets={[
        "Performance marketing across Google & Meta",
        "SEO, content and growth experimentation",
        "Creative production for every channel",
        "Attribution from click → conversation → conversion",
      ]}
      features={[
        { icon: MousePointerClick, title: "Paid acquisition", desc: "Search, social and programmatic, optimized for pipeline." },
        { icon: Search, title: "SEO & content", desc: "Long-term organic growth with technical + editorial firepower." },
        { icon: Palette, title: "Creative studio", desc: "Brand, video and ad creative crafted for performance." },
        { icon: Megaphone, title: "Lifecycle marketing", desc: "Re-engage and retain via SMS, WhatsApp and email." },
        { icon: Share2, title: "Social & influencer", desc: "Reach the right communities with the right voices." },
        { icon: BarChart3, title: "Full-funnel analytics", desc: "Dashboards that tie spend to revenue, end to end." },
      ]}
    />
  ),
});
