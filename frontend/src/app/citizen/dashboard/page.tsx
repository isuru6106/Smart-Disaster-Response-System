"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


import {
  AlertTriangle,
  Home,
  Package,
  Bell,
  MapPin,
  Activity,
  Shield,
  User,
  LogOut,
  ClipboardList,
  FileText
} from "lucide-react";

export default function CitizenDashboard() {
    const router = useRouter();

    const logout = () => {
  localStorage.clear();
  router.push("/login");
};

const userName =
  localStorage.getItem("name") || "Citizen";

const role =
  localStorage.getItem("role") || "CITIZEN";

  const [incidentCount, setIncidentCount] = useState(0);
  const [shelterCount, setShelterCount] = useState(0);
  const [resourceCount, setResourceCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  const [shelters, setShelters] = useState<any[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const incidents =
        await axios.get(
          "http://localhost:8082/api/incidents"
        );

      const sheltersRes =
        await axios.get(
          "http://localhost:8084/api/shelters"
        );

      const resources =
        await axios.get(
          "http://localhost:8083/api/resources"
        );

      const requests =
        await axios.get(
          "http://localhost:8086/api/requests"
        );

      setIncidentCount(
        incidents.data.length
      );

      setShelterCount(
        sheltersRes.data.length
      );

      setResourceCount(
        resources.data.length
      );

      setRequestCount(
        requests.data.length
      );

      setShelters(
        sheltersRes.data.slice(0, 5)
      );

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}

      <div className="bg-[#121A31] border-b border-slate-800 px-8 py-5 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-emerald-400">
            DisasterGuard
          </h1>

          <p className="text-slate-400">
            Citizen Portal
          </p>

        </div>

        <div className="flex items-center gap-4">

         <div className="flex items-center gap-3">

  <User
    className="text-emerald-400"
    size={30}
  />

  <div>

    <p className="font-semibold">
      {userName}
    </p>

    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
      {role}
    </span>

  </div>

</div>

          <button
  onClick={logout}
  className="bg-red-500/20 p-3 rounded-xl hover:bg-red-500/40"
>

            <LogOut size={18} />

          </button>

        </div>

      </div>

      <div className="p-8">

        {/* Welcome Banner */}

        <div
          className="
          bg-gradient-to-r
          from-emerald-600
          via-cyan-600
          to-blue-600
          rounded-3xl
          p-10
          mb-8
          shadow-xl
        "
        >

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-5xl font-bold mb-3">
                Welcome Back 👋
              </h2>

              <p className="text-lg opacity-90">
                Monitor incidents, request assistance,
                locate shelters and access emergency resources.
              </p>

            </div>

            <Shield
              size={100}
              className="hidden md:block opacity-30"
            />

          </div>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">

          <div className="bg-[#141D35] rounded-3xl p-6 hover:scale-105 transition">

            <AlertTriangle
              className="text-red-400 mb-3"
            />

            <p className="text-slate-400">
              Active Incidents
            </p>

            <h3 className="text-5xl font-bold text-red-400 mt-2">
              {incidentCount}
            </h3>

          </div>

          <div className="bg-[#141D35] rounded-3xl p-6 hover:scale-105 transition">

            <Home
              className="text-blue-400 mb-3"
            />

            <p className="text-slate-400">
              Shelters
            </p>

            <h3 className="text-5xl font-bold text-blue-400 mt-2">
              {shelterCount}
            </h3>

          </div>

          <div className="bg-[#141D35] rounded-3xl p-6 hover:scale-105 transition">

            <Package
              className="text-orange-400 mb-3"
            />

            <p className="text-slate-400">
              Resources
            </p>

            <h3 className="text-5xl font-bold text-orange-400 mt-2">
              {resourceCount}
            </h3>

          </div>

          <div className="bg-[#141D35] rounded-3xl p-6 hover:scale-105 transition">

            <Bell
              className="text-purple-400 mb-3"
            />

            <p className="text-slate-400">
              Requests
            </p>

            <h3 className="text-5xl font-bold text-purple-400 mt-2">
              {requestCount}
            </h3>

          </div>

        </div>

        {/* System Status */}

        <div className="bg-[#141D35] rounded-3xl p-8 mb-10">

          <div className="flex items-center gap-4">

            <Activity
              size={35}
              className="text-emerald-400"
            />

            <div>

              <h2 className="text-2xl font-bold">
                System Status
              </h2>

              <p className="text-slate-400">
                All disaster monitoring services are operational.
              </p>

            </div>

          </div>

        </div>

        {/* Citizen Services */}

        <h2 className="text-3xl font-bold mb-6">
          Citizen Services
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">

          <Link href="/citizen/report-incident">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-red-500 cursor-pointer">

              <AlertTriangle
                className="text-red-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Report Incident
              </h3>

              <p className="text-slate-400 mt-2">
                Report floods, fires and other disasters.
              </p>

            </div>

          </Link>

          <Link href="/citizen/emergency-request">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-purple-500 cursor-pointer">

              <Bell
                className="text-purple-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Emergency Help
              </h3>

              <p className="text-slate-400 mt-2">
                Request rescue and emergency support.
              </p>

            </div>

          </Link>

          <Link href="/citizen/my-requests">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-pink-500 cursor-pointer">

              <ClipboardList
                className="text-pink-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                My Requests
              </h3>

              <p className="text-slate-400 mt-2">
                Track submitted requests.
              </p>

            </div>

          </Link>

          <Link href="/citizen/shelters">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-blue-500 cursor-pointer">

              <Home
                className="text-blue-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Find Shelter
              </h3>

              <p className="text-slate-400 mt-2">
                View shelter availability.
              </p>

            </div>

          </Link>

          <Link href="/citizen/resources">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-orange-500 cursor-pointer">

              <Package
                className="text-orange-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Resources
              </h3>

              <p className="text-slate-400 mt-2">
                Check available supplies.
              </p>

            </div>

          </Link>

          <Link href="/incidents">

            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-yellow-500 cursor-pointer">

              <FileText
                className="text-yellow-400 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                View Incidents
              </h3>

              <p className="text-slate-400 mt-2">
                Browse current incidents.
              </p>

            </div>

          </Link>

          <Link href="/citizen/notifications">

  <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-cyan-500 cursor-pointer">

    <Bell
      className="text-cyan-400 mb-4"
      size={40}
    />

    <h3 className="font-bold text-xl">
      Notifications
    </h3>

    <p className="text-slate-400 mt-2">
      View emergency alerts and updates.
    </p>

  </div>

</Link>

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Alerts */}

          <div className="bg-[#141D35] rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Recent Alerts
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-900 p-4 rounded-xl">
                Flood Warning - Colombo
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                Heavy Rain - Gampaha
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                Road Closure - Kandy
              </div>

            </div>

          </div>

          {/* Shelters */}

          <div className="bg-[#141D35] rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Nearby Shelters
            </h2>

            <div className="space-y-4">

              {shelters.map((shelter) => (

                <div
                  key={shelter.id}
                  className="
                  bg-slate-900
                  rounded-xl
                  p-4
                  flex
                  justify-between
                  items-center
                "
                >

                  <div>

                    <h3 className="font-bold">
                      {shelter.shelterName}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Capacity : {shelter.capacity}
                    </p>

                  </div>

                  <MapPin className="text-blue-400" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
