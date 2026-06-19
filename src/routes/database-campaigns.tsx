import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Database, Filter, Target, Upload, BarChart3, Users } from "lucide-react";

export const Route = createFileRoute("/database-campaigns")({
  head: () => ({
    meta: [
      { title: "Database Campaigns — Targeted Outreach by Anntel" },
      { name: "description", content: "Run targeted SMS, WhatsApp and email campaigns to your CRM lists with smart segmentation and analytics." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Database Campaigns"
      title={<>Reach the <span className="text-gradient">right audience.</span></>}
      description="Upload, segment and launch multi-channel campaigns to your customer database with built-in targeting and reporting."
      bullets={[
        "Upload CRM lists or sync from your CDP",
        "Segment by behaviour, geography and tags",
        "Personalize across SMS, WhatsApp and email",
        "Track opens, clicks and conversions live",
      ]}
      features={[
        { icon: Upload, title: "Quick imports", desc: "CSV, API or CRM integrations — load millions of records in minutes." },
        { icon: Filter, title: "Segmentation", desc: "Build dynamic audiences with rich filters and saved segments." },
        { icon: Target, title: "Smart targeting", desc: "AI-driven send-time optimization and audience scoring." },
        { icon: Users, title: "Unified profiles", desc: "Single customer view across every channel they touch." },
        { icon: BarChart3, title: "Live reporting", desc: "Real-time dashboards for delivery, engagement and ROI." },
        { icon: Database, title: "Secure storage", desc: "Encrypted at rest with role-based access controls." },
      ]}
    />
  ),
});
