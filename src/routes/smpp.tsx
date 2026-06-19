import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Server, Network, Gauge, ShieldCheck, Code2, Activity } from "lucide-react";

export const Route = createFileRoute("/smpp")({
  head: () => ({
    meta: [
      { title: "SMPP Gateway — Direct SMS Connectivity by Anntel" },
      { name: "description", content: "High-throughput SMPP v3.4 / v5 connectivity with direct carrier routes, persistent binds and real-time monitoring." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="SMPP"
      title={<>High-throughput <span className="text-gradient">SMPP.</span></>}
      description="Connect over SMPP v3.4 / v5 for raw speed and direct access to global carrier networks with persistent binds."
      bullets={[
        "Persistent TX/RX/TRX binds",
        "Configurable TPS up to 2000+ per bind",
        "TLS-encrypted SMPP connections",
        "Real-time monitoring & alerting",
      ]}
      features={[
        { icon: Server, title: "Carrier-grade gateway", desc: "Geo-redundant SMPP gateways with active-active failover." },
        { icon: Gauge, title: "Massive throughput", desc: "Configurable TPS limits sized to your scale." },
        { icon: Network, title: "Direct connectivity", desc: "Tier-1 operator routes for lowest-latency delivery." },
        { icon: ShieldCheck, title: "Secure binds", desc: "TLS encryption and IP allow-listing on every bind." },
        { icon: Activity, title: "Live monitoring", desc: "Bind health, latency and DLR analytics in real time." },
        { icon: Code2, title: "Developer-friendly", desc: "Sample binds and integration support to launch fast." },
      ]}
    />
  ),
});
