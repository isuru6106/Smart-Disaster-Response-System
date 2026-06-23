"use client";

import Link from "next/link";
import {
  AlertTriangle,
  Home,
  Package,
  ShieldAlert,
  Users
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <h1 className="text-6xl font-bold mb-4">
          Smart Disaster Response System
        </h1>

        <p className="text-slate-400 text-xl mb-12">
          Emergency Management Dashboard
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link href="/incidents">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-red-500 transition">
              <AlertTriangle size={40} className="text-red-400 mb-4" />
              <h2 className="text-2xl font-bold">Incidents</h2>
              <p className="text-slate-400 mt-2">
                View disaster incidents
              </p>
            </div>
          </Link>

          <Link href="/shelters">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500 transition">
              <Home size={40} className="text-emerald-400 mb-4" />
              <h2 className="text-2xl font-bold">Shelters</h2>
              <p className="text-slate-400 mt-2">
                Monitor shelter availability
              </p>
            </div>
          </Link>

          <Link href="/resources">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500 transition">
              <Package size={40} className="text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold">Resources</h2>
              <p className="text-slate-400 mt-2">
                Track emergency resources
              </p>
            </div>
          </Link>

          <Link href="/requests">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-purple-500 transition">
              <ShieldAlert size={40} className="text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold">Requests</h2>
              <p className="text-slate-400 mt-2">
                Manage emergency requests
              </p>
            </div>
          </Link>

          <Link href="/register">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500 transition">
              <Users size={40} className="text-cyan-400 mb-4" />
              <h2 className="text-2xl font-bold">Register User</h2>
              <p className="text-slate-400 mt-2">
                Create new account
              </p>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}