import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Search, Smartphone, Network, ShieldCheck, BarChart3, Globe } from "lucide-react";

export const Route = createFileRoute("/hlr-lookup")({
  head: () => ({
    meta: [
      { title: "HLR Lookup — Number Intelligence by Anntel" },
      { name: "description", content: "Real-time HLR lookups for number validation, portability, roaming status and operator information across 190+ countries." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="HLR Lookup"
      title={<>Clean your database in <span className="text-gradient">real time.</span></>}
      description="Validate phone numbers, detect portability and identify operators with carrier-grade HLR lookups."
      bullets={[
        "Active vs inactive number detection",
        "Operator and country identification",
        "Number portability (MNP) status",
        "Roaming status when available",
      ]}
      features={[
        { icon: Search, title: "Live HLR", desc: "Query the home location register in real time for accurate status." },
        { icon: Smartphone, title: "MNP-aware", desc: "Detect ported numbers to route via the correct carrier." },
        { icon: Network, title: "Operator data", desc: "Identify operator, MCC and MNC for every number." },
        { icon: ShieldCheck, title: "Reduce fraud", desc: "Filter out invalid and high-risk numbers before sending." },
        { icon: BarChart3, title: "Bulk lookups", desc: "Process millions of numbers with batch APIs." },
        { icon: Globe, title: "Global coverage", desc: "Lookups across 190+ countries on direct connections." },
      ]}
    />
  ),
});
