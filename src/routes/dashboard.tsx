import { createFileRoute } from "@tanstack/react-router";
import { getRegistrationCount } from "@/lib/db";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  loader: async () => {
    const count = await getRegistrationCount();
    return { count };
  },
});

function Dashboard() {
  const { count } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-4xl font-display font-medium text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Appointments</h2>
          <div className="text-6xl font-display text-[#740001] font-bold">
            {count}
          </div>
          <p className="text-sm text-gray-500 mt-4">Total free credit registrations made via the Login popup.</p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
