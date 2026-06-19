import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  "/", "/anntel-messaging", "/two-way-messaging", "/international-messaging",
  "/database-campaigns", "/otp-solutions", "/voice-services", "/email-services",
  "/rcs-business-messaging", "/whatsapp-marketing-service", "/whatsapp-api",
  "/smpp", "/chatbots", "/hlr-lookup", "/admin-reseller", "/anntel-digital", "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
