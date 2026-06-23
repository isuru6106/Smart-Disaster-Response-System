"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Users,
  AlertTriangle,
  Home,
  Package,
  Bell,
  BarChart3,
  Shield,
  LogOut,
  UserCircle,
  Activity,
  Briefcase,
} from "lucide-react";

import {
  getUsers,
  getIncidents,
  getResources,
  getShelters,
  getRequests,
} from "@/services/adminService";

export default function AdminDashboard() {

  const router = useRouter();

  const [userCount, setUserCount] = useState(0);
  const [incidentCount, setIncidentCount] = useState(0);
  const [resourceCount, setResourceCount] = useState(0);
  const [shelterCount, setShelterCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {

      const users = await getUsers();
      const incidents = await getIncidents();
      const resources = await getResources();
      const shelters = await getShelters();
      const requests = await getRequests();

      setUserCount(users.data.length);
      setIncidentCount(incidents.data.length);
      setResourceCount(resources.data.length);
      setShelterCount(shelters.data.length);
      setRequestCount(requests.data.length);

    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {

    localStorage.clear();

    router.push("/login");

  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-[#121A31] border-r border-slate-800 p-6">

        <div className="mb-10">

          <h1 className="text-3xl font-bold text-emerald-400">
            DisasterGuard
          </h1>

          <p className="text-slate-400">
            Admin Portal
          </p>

        </div>

        <nav className="space-y-3">

          <a
            href="/admin/dashboard"
            className="flex items-center gap-4 bg-emerald-500/20 text-emerald-400 px-5 py-4 rounded-2xl"
          >
            <Shield size={22} />
            Dashboard
          </a>

          <a
            href="/admin/users"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <Users size={22} />
            Users
          </a>

          <a
            href="/admin/incidents"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <AlertTriangle size={22} />
            Incidents
          </a>

          <a
            href="/admin/shelters"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <Home size={22} />
            Shelters
          </a>

          <a
            href="/admin/resources"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <Package size={22} />
            Resources
          </a>

          <a
            href="/admin/requests"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <Bell size={22} />
            Requests
          </a>

          <a
            href="/admin/teams"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <Briefcase size={22} />
            Teams
          </a>

          <a
            href="/admin/analytics"
            className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <BarChart3 size={22} />
            Analytics
          </a>

          <a
  href="/admin/notifications"
  className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800 transition"
>
  <Bell size={22} />
  Notifications
</a>

        </nav>

        {/* ADMIN PROFILE */}

        <div className="mt-16 bg-slate-900 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <UserCircle
              size={45}
              className="text-emerald-400"
            />

            <div>

              <h3 className="font-bold">
                Administrator
              </h3>

              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                ADMIN
              </span>

            </div>

          </div>

          <button
            onClick={logout}
            className="
            mt-5
            w-full
            bg-red-500/20
            text-red-400
            py-3
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
            "
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="flex-1 p-10">

        <h1 className="text-6xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-400 text-xl mt-2 mb-10">
          Smart Disaster Response Management System
        </p>

        {/* SYSTEM STATUS */}

        <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-8 mb-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-bold">
                System Status
              </h2>

              <p className="mt-2 text-lg">
                All disaster services operational
              </p>

            </div>

            <Activity
              size={80}
              className="opacity-30"
            />

          </div>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="bg-[#141D35] rounded-3xl p-8">
            <Users className="text-emerald-400 mb-4" />
            <h3 className="text-slate-400">
              Total Users
            </h3>
            <p className="text-5xl font-bold text-emerald-400 mt-3">
              {userCount}
            </p>
          </div>

          <div className="bg-[#141D35] rounded-3xl p-8">
            <AlertTriangle className="text-red-400 mb-4" />
            <h3 className="text-slate-400">
              Incidents
            </h3>
            <p className="text-5xl font-bold text-red-400 mt-3">
              {incidentCount}
            </p>
          </div>

          <div className="bg-[#141D35] rounded-3xl p-8">
            <Home className="text-blue-400 mb-4" />
            <h3 className="text-slate-400">
              Shelters
            </h3>
            <p className="text-5xl font-bold text-blue-400 mt-3">
              {shelterCount}
            </p>
          </div>

          <div className="bg-[#141D35] rounded-3xl p-8">
            <Package className="text-orange-400 mb-4" />
            <h3 className="text-slate-400">
              Resources
            </h3>
            <p className="text-5xl font-bold text-orange-400 mt-3">
              {resourceCount}
            </p>
          </div>

          <div className="bg-[#141D35] rounded-3xl p-8">
            <Bell className="text-purple-400 mb-4" />
            <h3 className="text-slate-400">
              Requests
            </h3>
            <p className="text-5xl font-bold text-purple-400 mt-3">
              {requestCount}
            </p>
          </div>

        </div>

        {/* CHART SECTION */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-[#141D35] rounded-3xl p-8 h-96">

            <h2 className="text-3xl font-bold mb-5">
              Incident Analytics
            </h2>

            <div className="h-full flex items-center justify-center text-slate-500">
              Charts Coming Next
            </div>

          </div>

          <div className="bg-[#141D35] rounded-3xl p-8 h-96">

            <h2 className="text-3xl font-bold mb-5">
              Request Analytics
            </h2>

            <div className="h-full flex items-center justify-center text-slate-500">
              Charts Coming Next
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}