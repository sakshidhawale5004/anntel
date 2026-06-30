import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Anntel" },
      { name: "description", content: "Learn more about Anntel, our mission, and the global brands that trust our cloud communication solutions." },
    ],
  }),
  component: About,
});

const clientLogos = [
  "/L&T.jpg",
  "/202402053114902_202410.png",
  "/kotak.jpg",
  "/5-removebg-preview.png",
  "/4-removebg-preview2-1.png",
  "/3-removebg-preview-1.png",
  "/2-removebg-preview3-1.png",
  "/1-removebg-preview3-1.png"
];

function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      
      <main className="flex-grow">
        {/* HERO */}
        <section className="relative w-full bg-[#02163b] text-white pt-32 pb-20">
          <div className="container mx-auto px-5 lg:px-8 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-medium mb-6">
              About Anntel
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We empower businesses with seamless, reliable cloud communication solutions to connect with their customers globally.
            </p>
          </div>
        </section>

        {/* Client Logos Marquee */}
        <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
          <div className="container mx-auto px-5 lg:px-8 mb-10 text-center">
             <h2 className="text-3xl font-display font-medium text-[#02163b]">Trusted by Leading Brands</h2>
          </div>
          <div className="flex gap-16 animate-marquee whitespace-nowrap items-center w-max">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="Client Logo" 
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 container mx-auto px-5 lg:px-8">
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
             <div>
               <h2 className="text-3xl font-display text-[#02163b] mb-6">Our Mission</h2>
               <p className="text-gray-700 leading-relaxed text-lg">
                 At Anntel, we believe that communication is the foundation of every successful business relationship. Our mission is to provide scalable, secure, and innovative communication APIs that enable companies of all sizes to engage with their customers on their preferred channels.
               </p>
             </div>
             <div>
               <h2 className="text-3xl font-display text-[#02163b] mb-6">Why Choose Us?</h2>
               <p className="text-gray-700 leading-relaxed text-lg">
                 With a robust infrastructure, 99.95% uptime SLA, and ISO-grade security, Anntel is built for scale. Whether you need transactional SMS, rich WhatsApp messaging, or AI-powered chatbots, our developer-friendly platform ensures seamless integration and unparalleled reliability.
               </p>
             </div>
           </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
