import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Phone, PhoneCall, PhoneForwarded, Mic, Headphones, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/voice-services")({
  head: () => ({
    meta: [
      { title: "Voice Services — Cloud Voice & IVR by Anntel" },
      { name: "description", content: "Programmable voice, IVR, click-to-call and intelligent call routing on a carrier-grade cloud voice platform." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Voice Services"
      title={<>Voice that <span className="text-gradient">just works.</span></>}
      description="Build cloud voice experiences — IVR, OBD, click-to-call, missed-call services and call masking — through a single programmable API."
      bullets={[
        "Programmable voice with TTS and recordings",
        "Inbound IVR with dynamic menus",
        "Outbound dialer for campaigns and notifications",
        "Call masking for buyer–seller privacy",
      ]}
      features={[
        { icon: PhoneCall, title: "Programmable voice", desc: "Build call flows with simple JSON instructions and webhooks." },
        { icon: Mic, title: "Smart IVR", desc: "Dynamic menus with speech recognition and DTMF handling." },
        { icon: PhoneForwarded, title: "Call routing", desc: "Skill, geography and time-based routing to the right agent." },
        { icon: Headphones, title: "Click-to-call", desc: "Connect web visitors to agents instantly from any page." },
        { icon: Phone, title: "Number masking", desc: "Protect customer privacy in two-sided marketplaces." },
        { icon: BarChart3, title: "Call analytics", desc: "Track attribution, sentiment and outcomes for every call." },
      ]}
      stats={[
        { value: "1M+", label: "Calls / day" },
        { value: "99.95%", label: "Uptime" },
        { value: "HD", label: "Voice quality" },
        { value: "24/7", label: "Support" },
      ]}
    />
  ),
});
