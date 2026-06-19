import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { track } from "@/lib/analytics";

type Msg = { role: "bot" | "user"; text: string; cta?: { label: string; to: string; topic: string }[] };

type Topic = "pricing" | "whatsapp" | "otp" | "reseller" | "sales" | null;

const QUICK = [
  { label: "Pricing & plans", topic: "pricing" as const },
  { label: "WhatsApp API", topic: "whatsapp" as const },
  { label: "OTP solutions", topic: "otp" as const },
  { label: "Reseller program", topic: "reseller" as const },
  { label: "Talk to sales", topic: "sales" as const },
];

const FLOWS: Record<Exclude<Topic, null>, Msg[]> = {
  pricing: [
    { role: "bot", text: "Our pricing scales with monthly volume. SMS starts at competitive per-message rates, with bulk + enterprise tiers. Share your channel + volume and our team will send a custom quote." },
    { role: "bot", text: "Want me to connect you with sales for a tailored plan?", cta: [{ label: "Get a quote →", to: "/contact?topic=pricing", topic: "pricing" }] },
  ],
  whatsapp: [
    { role: "bot", text: "Anntel is an official WhatsApp Business Solution partner. Onboarding (Meta verification + green-tick application) typically takes 24–48 hrs after KYC." },
    { role: "bot", text: "Templates, broadcast, two-way support and CRM webhooks are all included. Ready to start verification?", cta: [{ label: "Start WhatsApp onboarding →", to: "/contact?topic=whatsapp-api", topic: "whatsapp" }] },
  ],
  otp: [
    { role: "bot", text: "Our OTP API delivers in <2 seconds across 190+ countries with auto-failover routes (SMS → voice → WhatsApp fallback)." },
    { role: "bot", text: "You get 50 free OTP credits on signup. Want me to send your activation details to sales?", cta: [{ label: "Activate OTP →", to: "/contact?topic=otp", topic: "otp" }] },
  ],
  reseller: [
    { role: "bot", text: "Our reseller program gives you white-labelled dashboards, wholesale pricing, dedicated routes and a full admin panel to onboard sub-clients." },
    { role: "bot", text: "Send your business details and our reseller team will set up a sandbox for you.", cta: [{ label: "Apply as reseller →", to: "/contact?topic=reseller", topic: "reseller" }] },
  ],
  sales: [
    { role: "bot", text: "I can connect you directly. Call +91 8828 22 3388 or email contact@anntel.in — or drop your details in the form and we'll respond within one business day.", cta: [{ label: "Open contact form →", to: "/contact?topic=sales", topic: "sales" }] },
  ],
};

function detectTopic(t: string): Topic {
  const s = t.toLowerCase();
  if (s.match(/price|plan|cost|quote|rate/)) return "pricing";
  if (s.includes("whatsapp") || s.includes("wa ")) return "whatsapp";
  if (s.match(/otp|verify|2fa|verification/)) return "otp";
  if (s.match(/reseller|partner|white.?label/)) return "reseller";
  if (s.match(/sales|contact|call|email|demo|talk|human/)) return "sales";
  return null;
}

function fallback(input: string): Msg {
  const t = input.toLowerCase();
  if (t.includes("rcs")) return { role: "bot", text: "RCS Business Messaging lets you send rich cards, carousels and verified branding on Android — supported on all major Indian carriers." };
  if (t.includes("voice")) return { role: "bot", text: "Voice covers cloud IVR, click-to-call, OBD campaigns and SIP trunking with crystal-clear HD audio." };
  if (t.match(/hi|hello|hey/)) return { role: "bot", text: "Hi there 👋 I'm Anni, your Anntel guide. Ask me about pricing, WhatsApp API, OTP, reseller or sales." };
  return { role: "bot", text: "Let me route that to a human. Want me to hand you off to our team?", cta: [{ label: "Talk to sales →", to: "/contact?topic=general", topic: "sales" }] };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi 👋 I'm Anni — your Anntel guide. Pick a topic below or ask anything." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);
  useEffect(() => { if (open) track("chatbot_open"); }, [open]);

  const pushFlow = (topic: Exclude<Topic, null>) => {
    track("chatbot_flow", { topic });
    const out = FLOWS[topic];
    out.forEach((m, i) => setTimeout(() => setMsgs((p) => [...p, m]), 400 * (i + 1)));
  };

  const send = (text: string) => {
    const v = text.trim(); if (!v) return;
    setMsgs((m) => [...m, { role: "user", text: v }]);
    setInput("");
    track("chatbot_message", { length: v.length });
    const topic = detectTopic(v);
    if (topic) pushFlow(topic);
    else setTimeout(() => setMsgs((m) => [...m, fallback(v)]), 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-[90] h-14 w-14 rounded-full grid place-items-center text-white shadow-2xl transition-transform hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #1e3a8a, #0f2350)",
          boxShadow: "0 20px 40px -10px rgba(15, 35, 80, 0.6), 0 0 0 4px rgba(255,255,255,0.05)",
        }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary border-2 border-white animate-pulse" />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-5 z-[90] w-[min(380px,calc(100vw-2rem))] rounded-2xl overflow-hidden border animate-scale-in"
          style={{
            background: "linear-gradient(180deg, #0a1428, #0f2350)",
            borderColor: "rgba(255,255,255,0.1)",
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="h-9 w-9 rounded-full grid place-items-center text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-white">
              <div className="text-sm font-semibold leading-tight">Anni · Anntel Assistant</div>
              <div className="text-[11px] opacity-70 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online now
              </div>
            </div>
          </div>

          <div className="h-[360px] overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug ${
                    m.role === "user"
                      ? "bg-blue-500 text-white rounded-br-sm"
                      : "bg-white/10 text-white border border-white/10 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
                {m.cta && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.cta.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to.split("?")[0]}
                        onClick={() => { track("chatbot_handoff", { topic: c.topic }); setOpen(false); }}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {QUICK.map((q) => (
              <button
                key={q.topic}
                onClick={() => { setMsgs((m) => [...m, { role: "user", text: q.label }]); pushFlow(q.topic); }}
                className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-white/10 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 h-10 rounded-full bg-white/5 border border-white/15 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              aria-label="Send"
              className="h-10 w-10 rounded-full grid place-items-center text-white hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #3b82f6, #1e3a8a)" }}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
