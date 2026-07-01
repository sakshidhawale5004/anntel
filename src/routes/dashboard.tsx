import { createFileRoute, useRouter } from "@tanstack/react-router";
import { 
  getRegistrationsList, 
  getContactsList, 
  updateContactStatus, 
  deleteContact, 
  deleteRegistration,
  type Registration,
  type ContactSubmission
} from "@/lib/db";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useState, useEffect } from "react";
import { 
  Shield, Lock, User, Eye, EyeOff, LogOut, Search, Calendar, Clock, 
  MessageSquare, Gift, ArrowUpRight, Phone, Mail, Building, Trash2, 
  CheckCircle2, RefreshCw, BarChart3, Users, Sparkles, Filter, AlertCircle, ExternalLink
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  loader: async () => {
    const registrations = await getRegistrationsList();
    const contacts = await getContactsList();
    return { registrations, contacts };
  },
});

function formatDate(dateStr?: string) {
  if (!dateStr) return "-";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch {
    return dateStr;
  }
}

function getStatusBadgeClass(status?: string) {
  const st = status || "New Appointment";
  switch (st) {
    case "Scheduled":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Completed":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "Contacted":
      return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    default:
      return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  }
}

function Dashboard() {
  const { registrations, contacts } = Route.useLoaderData();
  const router = useRouter();
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Dashboard UI State
  const [activeTab, setActiveTab] = useState<"appointments" | "registrations" | "analytics">("appointments");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Check auth session on mount
  useEffect(() => {
    const session = localStorage.getItem("anntel_admin_session");
    if (session === "active") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      if (username.trim().toLowerCase() === "admin" && password === "admin123") {
        if (rememberMe) {
          localStorage.setItem("anntel_admin_session", "active");
        }
        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid username or password. Use demo credentials (admin / admin123).");
      }
      setIsLoggingIn(false);
    }, 600);
  };

  const handleLogout = () => {
    localStorage.removeItem("anntel_admin_session");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await router.invalidate();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleStatusChange = async (index: number, newStatus: string) => {
    try {
      await updateContactStatus({ data: { index, status: newStatus } });
      await router.invalidate();
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleDeleteContact = async (index: number) => {
    if (!window.confirm("Are you sure you want to delete this appointment request?")) return;
    try {
      await deleteContact({ data: { index } });
      await router.invalidate();
    } catch (err) {
      console.error("Failed to delete contact", err);
    }
  };

  const handleDeleteRegistration = async (index: number) => {
    if (!window.confirm("Are you sure you want to delete this registration?")) return;
    try {
      await deleteRegistration({ data: { index } });
      await router.invalidate();
    } catch (err) {
      console.error("Failed to delete registration", err);
    }
  };

  // Filtered lists
  const filteredContacts = contacts.filter((c) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      c.first?.toLowerCase().includes(q) || 
      c.last?.toLowerCase().includes(q) || 
      c.email?.toLowerCase().includes(q) || 
      c.company?.toLowerCase().includes(q) || 
      c.interest?.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "ALL" || (c.status || "New Appointment") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredRegistrations = registrations.filter((r) => {
    const q = searchQuery.toLowerCase();
    return !q || 
      r.fullName?.toLowerCase().includes(q) || 
      r.email?.toLowerCase().includes(q) || 
      r.phoneNumber?.toLowerCase().includes(q) || 
      r.state?.toLowerCase().includes(q);
  });

  // Analytics counts
  const interestCounts = contacts.reduce((acc, curr) => {
    const key = curr.interest || "General Consultation";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalAppointments = contacts.length + registrations.length;
  const scheduledAppointments = contacts.filter(c => c.status === "Scheduled" || c.status === "New Appointment" || !c.status).length;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col justify-between selection:bg-red-500 selection:text-white" style={{ background: "#050b1f" }}>
        <SiteNav />
        <div className="relative flex-1 flex items-center justify-center py-16 px-4 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-[#ef4444]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-[#3b82f6]/15 blur-[100px] pointer-events-none" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none">
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <div className="relative w-full max-w-md z-10 animate-in fade-in zoom-in-95 duration-500">
            {/* Header Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-red-300 mb-4 shadow-lg">
                <Shield className="h-3.5 w-3.5 text-red-400 animate-pulse" /> Secure Executive Portal
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-white font-semibold tracking-tight mb-2">
                Admin Login
              </h1>
              <p className="text-sm text-white/60">
                Sign in with username and password to access client appointments and registrations.
              </p>
            </div>

            {/* Glass Card */}
            <div className="rounded-3xl border border-white/10 p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl" style={{ background: "linear-gradient(180deg, rgba(15,31,61,0.85) 0%, rgba(10,23,48,0.95) 100%)" }}>
              <form onSubmit={handleLogin} className="space-y-5">
                {loginError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Enter admin username"
                      className="w-full h-12 rounded-xl border border-white/15 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter security password"
                      className="w-full h-12 rounded-xl border border-white/15 pl-11 pr-11 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500/50"
                    />
                    <span>Remember session</span>
                  </label>
                  <a href="#help" onClick={(e) => { e.preventDefault(); setUsername("admin"); setPassword("admin123"); }} className="text-red-400 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full h-12 rounded-xl font-semibold text-white bg-gradient-to-r from-[#ff5722] to-[#f44336] hover:from-[#e64a19] hover:to-[#d32f2f] shadow-[0_0_25px_rgba(255,87,34,0.4)] hover:shadow-[0_0_35px_rgba(255,87,34,0.6)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {isLoggingIn ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying Credentials...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Demo Helper Box */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-white/70 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-red-400 font-semibold flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Demo Access Credentials
                    </div>
                    <div>User: <strong className="text-white font-mono">admin</strong> | Pass: <strong className="text-white font-mono">admin123</strong></div>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setUsername("admin"); setPassword("admin123"); }}
                    className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    Auto-Fill
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  // Logged-in Dashboard View
  return (
    <div className="min-h-screen text-white selection:bg-red-500 selection:text-white" style={{ background: "#050b1f" }}>
      <SiteNav />

      {/* Top Executive Header */}
      <div className="border-b border-white/10 bg-[#0a1730]/80 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-5 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">Anntel Executive Workspace</h1>
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Live System
                </span>
              </div>
              <p className="text-xs text-white/50">Viewing client appointment bookings, consultation requests & registrations</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 transition-all"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-red-400" : ""}`} />
              <span>Refresh</span>
            </button>
            
            <div className="h-6 w-[1px] bg-white/10" />

            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-semibold text-white">Super Administrator</div>
                <div className="text-[10px] text-white/50">Session Active</div>
              </div>
              <button
                onClick={handleLogout}
                title="Logout from dashboard"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-300 text-xs font-semibold transition-all cursor-pointer shadow-lg"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-8 py-10 space-y-8">
        
        {/* KPI SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl border border-white/10 p-6 relative overflow-hidden group hover:border-red-500/40 transition-all" style={{ background: "linear-gradient(135deg, rgba(15,31,61,0.8) 0%, rgba(10,23,48,0.9) 100%)" }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">Total Appointments</span>
              <div className="h-9 w-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Calendar className="h-4 w-4" />
              </div>
            </div>
            <div className="font-display text-4xl font-bold text-white mb-1">{totalAppointments}</div>
            <div className="text-xs text-white/50 flex items-center gap-1">
              <span className="text-green-400 font-semibold flex items-center">↗ 100%</span> active client requests
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 relative overflow-hidden group hover:border-blue-500/40 transition-all" style={{ background: "linear-gradient(135deg, rgba(15,31,61,0.8) 0%, rgba(10,23,48,0.9) 100%)" }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">Contact Bookings</span>
              <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <MessageSquare className="h-4 w-4" />
              </div>
            </div>
            <div className="font-display text-4xl font-bold text-white mb-1">{contacts.length}</div>
            <div className="text-xs text-white/50">Direct consultation requests</div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 relative overflow-hidden group hover:border-green-500/40 transition-all" style={{ background: "linear-gradient(135deg, rgba(15,31,61,0.8) 0%, rgba(10,23,48,0.9) 100%)" }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">Free Credit Signups</span>
              <div className="h-9 w-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <Gift className="h-4 w-4" />
              </div>
            </div>
            <div className="font-display text-4xl font-bold text-white mb-1">{registrations.length}</div>
            <div className="text-xs text-white/50">500 free trial registrations</div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 relative overflow-hidden group hover:border-purple-500/40 transition-all" style={{ background: "linear-gradient(135deg, rgba(15,31,61,0.8) 0%, rgba(10,23,48,0.9) 100%)" }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50">Pending Follow-Up</span>
              <div className="h-9 w-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="font-display text-4xl font-bold text-white mb-1">{scheduledAppointments}</div>
            <div className="text-xs text-purple-300/80 font-medium">Requires sales action</div>
          </div>
        </div>

        {/* TABS BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "appointments"
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Appointments & Contacts</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === "appointments" ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}>
                {contacts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("registrations")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "registrations"
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Gift className="h-4 w-4" />
              <span>Free 500 Credits</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === "registrations" ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}>
                {registrations.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "analytics"
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Analytics Overview</span>
            </button>
          </div>

          {/* Search & Filters */}
          {activeTab !== "analytics" && (
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search clients, company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 rounded-xl border border-white/15 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-white/5"
                />
              </div>

              {activeTab === "appointments" && (
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-11 rounded-xl border border-white/15 px-3 pr-8 text-sm text-white bg-[#0a1730] focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="New Appointment">New Appointment</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              )}
            </div>
          )}
        </div>

        {/* TAB 1: APPOINTMENTS & CONTACTS */}
        {activeTab === "appointments" && (
          <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, rgba(15,31,61,0.6) 0%, rgba(10,23,48,0.8) 100%)" }}>
            <div className="px-6 py-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white">Client Appointments & Consultation Bookings</h3>
                <p className="text-xs text-white/50">Users who filled out the contact form requesting consultations or sales meetings.</p>
              </div>
              <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                Showing {filteredContacts.length} of {contacts.length} entries
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40 bg-white/[0.02]">
                    <th className="px-6 py-4 font-semibold">Submitted On</th>
                    <th className="px-6 py-4 font-semibold">Client / Company</th>
                    <th className="px-6 py-4 font-semibold">Contact Info</th>
                    <th className="px-6 py-4 font-semibold">Service Interest</th>
                    <th className="px-6 py-4 font-semibold">Appointment Slot</th>
                    <th className="px-6 py-4 font-semibold">Project Notes</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-16 text-center text-white/40">
                        <MessageSquare className="h-10 w-10 mx-auto mb-3 opacity-30" />
                        <div className="font-semibold text-base text-white/60 mb-1">No appointment requests found</div>
                        <p className="text-xs">Try clearing search query or fill out the contact form to generate a new entry.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((c, i) => {
                      const isCustomDate = c.appointmentDate && !c.appointmentDate.includes("ASAP") && !c.appointmentDate.includes("Not specified");
                      return (
                        <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-white/60 font-mono">
                            {formatDate(c.createdAt)}
                          </td>
                          
                          <td className="px-6 py-4">
                            <div className="font-semibold text-white group-hover:text-red-400 transition-colors">
                              {c.first} {c.last}
                            </div>
                            <div className="text-xs text-white/50 flex items-center gap-1 mt-0.5">
                              <Building className="h-3 w-3 text-white/30 shrink-0" />
                              <span>{c.company || "Individual / None"}</span>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="text-white font-medium flex items-center gap-1.5">
                              <Phone className="h-3 w-3 text-red-400 shrink-0" />
                              <span>{c.phone || "No phone"}</span>
                            </div>
                            <div className="text-xs text-white/50 flex items-center gap-1.5 mt-0.5">
                              <Mail className="h-3 w-3 text-blue-400 shrink-0" />
                              <span className="truncate max-w-[160px]" title={c.email}>{c.email}</span>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/15">
                              {c.interest || "General Consultation"}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            {isCustomDate ? (
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 font-medium text-xs shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                                <span>{formatDate(c.appointmentDate)}</span>
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300/90 text-xs font-medium">
                                <Clock className="h-3.5 w-3.5 text-amber-400" />
                                <span>Flexible / ASAP</span>
                              </div>
                            )}
                          </td>

                          <td className="px-6 py-4 max-w-xs">
                            <p className="text-xs text-white/70 line-clamp-2 italic bg-white/5 p-2 rounded-lg border border-white/5" title={c.project}>
                              "{c.project || "No project notes provided"}"
                            </p>
                          </td>

                          <td className="px-6 py-4">
                            <select
                              value={c.status || "New Appointment"}
                              onChange={(e) => handleStatusChange(i, e.target.value)}
                              className={`h-8 rounded-lg px-2.5 text-xs font-bold border transition-all cursor-pointer focus:outline-none ${getStatusBadgeClass(c.status)}`}
                            >
                              <option value="New Appointment" className="bg-[#0a1730] text-amber-300">New Appointment</option>
                              <option value="Scheduled" className="bg-[#0a1730] text-green-300">Scheduled</option>
                              <option value="Contacted" className="bg-[#0a1730] text-purple-300">Contacted</option>
                              <option value="Completed" className="bg-[#0a1730] text-blue-300">Completed</option>
                            </select>
                          </td>

                          <td className="px-6 py-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-2">
                              {c.phone && (
                                <a
                                  href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${c.first}, contacting you regarding your appointment request at Anntel.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Chat on WhatsApp"
                                  className="h-8 w-8 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 flex items-center justify-center transition-colors"
                                >
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              )}
                              {c.email && (
                                <a
                                  href={`mailto:${c.email}?subject=${encodeURIComponent("Anntel Consultation Appointment")}`}
                                  title="Send Email"
                                  className="h-8 w-8 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 flex items-center justify-center transition-colors"
                                >
                                  <Mail className="h-3.5 w-3.5" />
                                </a>
                              )}
                              <button
                                onClick={() => handleDeleteContact(i)}
                                title="Delete record"
                                className="h-8 w-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 flex items-center justify-center transition-colors cursor-pointer"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATIONS */}
        {activeTab === "registrations" && (
          <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ background: "linear-gradient(180deg, rgba(15,31,61,0.6) 0%, rgba(10,23,48,0.8) 100%)" }}>
            <div className="px-6 py-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white">Free 500 Credits Registrations</h3>
                <p className="text-xs text-white/50">Users who signed up through the website onboarding dialog.</p>
              </div>
              <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                Showing {filteredRegistrations.length} of {registrations.length} entries
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40 bg-white/[0.02]">
                    <th className="px-6 py-4 font-semibold">Registered On</th>
                    <th className="px-6 py-4 font-semibold">Full Name</th>
                    <th className="px-6 py-4 font-semibold">Email Address</th>
                    <th className="px-6 py-4 font-semibold">Phone Number</th>
                    <th className="px-6 py-4 font-semibold">State / Region</th>
                    <th className="px-6 py-4 font-semibold">SMS Type</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {filteredRegistrations.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-16 text-center text-white/40">
                        <Gift className="h-10 w-10 mx-auto mb-3 opacity-30" />
                        <div className="font-semibold text-base text-white/60 mb-1">No registration signups found</div>
                        <p className="text-xs">Try clearing search query or use the registration pop-up on the website.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredRegistrations.map((r, i) => (
                      <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-white/60 font-mono">
                          {formatDate(r.createdAt)}
                        </td>
                        <td className="px-6 py-4 font-semibold text-white group-hover:text-red-400 transition-colors">
                          {r.fullName}
                        </td>
                        <td className="px-6 py-4 text-white/80">{r.email}</td>
                        <td className="px-6 py-4 font-medium text-white">{r.phoneNumber}</td>
                        <td className="px-6 py-4 text-white/80">{r.state}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                            {r.typeOfSms}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDeleteRegistration(i)}
                            title="Delete registration"
                            className="h-8 w-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 inline-flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ANALYTICS OVERVIEW */}
        {activeTab === "analytics" && (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in">
            <div className="rounded-3xl border border-white/10 p-8 shadow-xl" style={{ background: "linear-gradient(180deg, rgba(15,31,61,0.6) 0%, rgba(10,23,48,0.8) 100%)" }}>
              <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-red-400" />
                Service Interest Distribution
              </h3>
              <p className="text-xs text-white/50 mb-6">Breakdown of communication channels requested by clients in consultations.</p>

              <div className="space-y-4">
                {Object.entries(interestCounts).length === 0 ? (
                  <div className="text-center py-8 text-white/40 text-sm">No data available yet.</div>
                ) : (
                  Object.entries(interestCounts).map(([interest, count]) => {
                    const percentage = Math.round((count / (contacts.length || 1)) * 100);
                    return (
                      <div key={interest} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-white font-medium">{interest}</span>
                          <span className="text-white/60 text-xs font-mono">{count} ({percentage}%)</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-1000"
                            style={{ width: `${Math.max(percentage, 5)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 p-8 shadow-xl flex flex-col justify-between" style={{ background: "linear-gradient(180deg, rgba(15,31,61,0.6) 0%, rgba(10,23,48,0.8) 100%)" }}>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Lead Source & Channel Health
                </h3>
                <p className="text-xs text-white/50 mb-6">Overview of client onboarding pipelines across Anntel cloud services.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-white/50 mb-1">Direct Sales Consultations</div>
                    <div className="text-2xl font-bold text-white">{contacts.length}</div>
                    <div className="text-[11px] text-green-400 mt-1">High conversion intent</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-white/50 mb-1">Free Trial Onboardings</div>
                    <div className="text-2xl font-bold text-white">{registrations.length}</div>
                    <div className="text-[11px] text-blue-400 mt-1">Product-led growth</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-red-900/40 to-blue-900/40 border border-white/10 text-xs text-white/80 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Automated SLA Monitoring</strong>
                  All incoming appointment requests trigger instant notifications to the sales team via SMS and WhatsApp.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <SiteFooter />
    </div>
  );
}
