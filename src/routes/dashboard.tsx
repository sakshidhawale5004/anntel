import { createFileRoute } from "@tanstack/react-router";
import { getRegistrationsList, getContactsList } from "@/lib/db";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  loader: async () => {
    const registrations = await getRegistrationsList();
    const contacts = await getContactsList();
    return { registrations, contacts };
  },
});

function Dashboard() {
  const { registrations, contacts } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SiteNav />
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-4xl font-display font-medium text-gray-900 mb-8 pt-10">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Registrations</h2>
            <div className="text-6xl font-display text-[#740001] font-bold">
              {registrations.length}
            </div>
            <p className="text-sm text-gray-500 mt-4">Free credit registrations.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Contacts</h2>
            <div className="text-6xl font-display text-[#740001] font-bold">
              {contacts.length}
            </div>
            <p className="text-sm text-gray-500 mt-4">Contact form submissions.</p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Registrations Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Registration Signups</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-sm text-gray-500">
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Phone</th>
                    <th className="px-6 py-4 font-medium">State</th>
                    <th className="px-6 py-4 font-medium">SMS Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {registrations.length === 0 && (
                    <tr><td colSpan={6} className="px-6 py-8 text-center text-gray-500">No registrations yet.</td></tr>
                  )}
                  {registrations.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{r.createdAt ? new Date(r.createdAt).toLocaleString() : '-'}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{r.fullName}</td>
                      <td className="px-6 py-4">{r.email}</td>
                      <td className="px-6 py-4">{r.phoneNumber}</td>
                      <td className="px-6 py-4">{r.state}</td>
                      <td className="px-6 py-4">{r.typeOfSms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Contact Form Submissions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-sm text-gray-500">
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Phone</th>
                    <th className="px-6 py-4 font-medium">Company</th>
                    <th className="px-6 py-4 font-medium">Interest</th>
                    <th className="px-6 py-4 font-medium">Project</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {contacts.length === 0 && (
                    <tr><td colSpan={7} className="px-6 py-8 text-center text-gray-500">No contact submissions yet.</td></tr>
                  )}
                  {contacts.map((c, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{c.createdAt ? new Date(c.createdAt).toLocaleString() : '-'}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{c.first} {c.last}</td>
                      <td className="px-6 py-4">{c.email}</td>
                      <td className="px-6 py-4">{c.phone}</td>
                      <td className="px-6 py-4">{c.company}</td>
                      <td className="px-6 py-4">{c.interest}</td>
                      <td className="px-6 py-4 max-w-xs truncate" title={c.project}>{c.project}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <SiteFooter />
    </div>
  );
}
