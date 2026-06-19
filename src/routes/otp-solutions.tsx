import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShieldCheck, KeyRound, Smartphone, Lock, Timer, Globe } from "lucide-react";

export const Route = createFileRoute("/otp-solutions")({
  head: () => ({
    meta: [
      { title: "OTP Solutions — Secure Verification by Anntel" },
      { name: "description", content: "One-time password delivery over SMS, voice, WhatsApp and email with the highest delivery rates and fraud protection." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="OTP & Verify"
      title={<>Verify users in <span className="text-gradient">seconds.</span></>}
      description="Send and validate one-time passwords across SMS, voice, email and WhatsApp from a single API with built-in fraud controls."
      bullets={[
        "Multi-channel OTP with smart fallback",
        "Carrier lookup and number validation",
        "Auto-fill ready for Android & iOS",
        "Fraud detection & rate limiting built in",
      ]}
      features={[
        { icon: KeyRound, title: "Verify API", desc: "Generate, deliver and validate codes with one endpoint." },
        { icon: ShieldCheck, title: "Fraud protection", desc: "Detect SIM-swap, suspicious numbers and pumping attacks." },
        { icon: Smartphone, title: "Auto-fill ready", desc: "Native support for SMS Retriever and one-tap codes." },
        { icon: Timer, title: "Fast & resilient", desc: "Sub-second delivery with automatic channel fallback." },
        { icon: Lock, title: "Bank-grade security", desc: "Encrypted in transit and at rest, audit logged." },
        { icon: Globe, title: "Worldwide reach", desc: "Verification in 190+ countries on premium routes." },
      ]}
      stats={[
        { value: "99.9%", label: "Delivery" },
        { value: "<3s", label: "Verification" },
        { value: "190+", label: "Countries" },
        { value: "0", label: "Setup time" },
      ]}
    />
  ),
});
