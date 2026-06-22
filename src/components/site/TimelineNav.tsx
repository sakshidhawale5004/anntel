import { Link } from "@tanstack/react-router";
import { MessageSquare, MessagesSquare, Phone, Bot, Mail, Shield } from "lucide-react";

const links = [
  { label: "Messaging", to: "/anntel-messaging", icon: MessageSquare },
  { label: "WhatsApp", to: "/whatsapp-api", icon: MessagesSquare },
  { label: "Voice", to: "/voice-services", icon: Phone },
  { label: "Email", to: "/email-services", icon: Mail },
  { label: "Chatbots", to: "/chatbots", icon: Bot },
  { label: "OTP", to: "/otp-solutions", icon: Shield },
];

export function TimelineNav() {
  return (
    <section className="w-full bg-[#050b1f] py-24 border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-[#740001]/10 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Our Platform Pipeline</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto">Explore our interconnected communication solutions</p>
        </div>
        
        <div className="relative flex items-center justify-between max-w-5xl mx-auto px-4 md:px-12 mt-20 mb-10">
          {/* Horizontal Connecting Line */}
          <div className="absolute left-4 right-4 md:left-12 md:right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#740001] to-transparent z-0 opacity-80" />
          
          {links.map((link, idx) => {
            return (
              <div key={link.to} className="relative z-10 flex flex-col items-center group">
                {/* Label above */}
                <div className="absolute -top-12 whitespace-nowrap text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-white">
                  {link.label}
                </div>
                
                {/* Diamond Node */}
                <Link
                  to={link.to}
                  className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all duration-500 rotate-45 bg-[#050b1f] border border-white/20 hover:border-[#740001] hover:bg-[#740001] shadow-none hover:shadow-[0_0_25px_rgba(116,0,1,0.6)]"
                >
                  <div className="-rotate-45 text-white/40 group-hover:text-white transition-colors duration-300">
                    <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </Link>
                
                {/* Active Indicator Dot Below */}
                <div className="absolute -bottom-8 w-1 h-1 rounded-full bg-[#740001] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(116,0,1,1)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
