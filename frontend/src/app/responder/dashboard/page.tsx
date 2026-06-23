"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  AlertTriangle,
  Bell,
  Package,
  Home,
  Activity,
  Users,
  Shield,
  User,
  LogOut
} from "lucide-react";

export default function ResponderDashboard() {
    const router = useRouter();

    const logout = () => {
  localStorage.clear();
  router.push("/login");
};

const userName =
localStorage.getItem("name") || "Responder";

const role =
localStorage.getItem("role") || "RESPONDER";


  const [incidentCount, setIncidentCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [resourceCount, setResourceCount] = useState(0);
  const [shelterCount, setShelterCount] = useState(0);

  const [incidents, setIncidents] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const incidentsRes =
        await axios.get(
          "http://localhost:8082/api/incidents"
        );

      const requestsRes =
        await axios.get(
          "http://localhost:8086/api/requests"
        );

      const resourcesRes =
        await axios.get(
          "http://localhost:8083/api/resources"
        );

      const sheltersRes =
        await axios.get(
          "http://localhost:8084/api/shelters"
        );

      setIncidentCount(
        incidentsRes.data.length
      );

      setRequestCount(
        requestsRes.data.length
      );

      setResourceCount(
        resourcesRes.data.length
      );

      setShelterCount(
        sheltersRes.data.length
      );

      setIncidents(
        incidentsRes.data.slice(0, 5)
      );

      setRequests(
        requestsRes.data.slice(0, 5)
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

          <h1 className="text-3xl font-bold text-orange-400">
            DisasterGuard
          </h1>

          <p className="text-slate-400">
            Emergency Operations Center
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

        {/* Banner */}

        <div
          className="
          bg-gradient-to-r
          from-orange-600
          via-red-600
          to-pink-600
          rounded-3xl
          p-10
          mb-8
        "
        >

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-5xl font-bold">
                Emergency Response Center
              </h2>

              <p className="mt-4 text-lg">
                Coordinate incidents, emergency requests,
                shelters and resources in real time.
              </p>

            </div>

            <Shield
              size={100}
              className="hidden md:block opacity-30"
            />

          </div>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

          <div className="bg-[#141D35] p-6 rounded-3xl hover:scale-105 transition">

            <AlertTriangle
              className="text-red-400 mb-3"
            />

            <p className="text-slate-400">
              Active Incidents
            </p>

            <h2 className="text-5xl font-bold text-red-400">
              {incidentCount}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl hover:scale-105 transition">

            <Bell
              className="text-purple-400 mb-3"
            />

            <p className="text-slate-400">
              Emergency Requests
            </p>

            <h2 className="text-5xl font-bold text-purple-400">
              {requestCount}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl hover:scale-105 transition">

            <Package
              className="text-orange-400 mb-3"
            />

            <p className="text-slate-400">
              Resources
            </p>

            <h2 className="text-5xl font-bold text-orange-400">
              {resourceCount}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl hover:scale-105 transition">

            <Home
              className="text-blue-400 mb-3"
            />

            <p className="text-slate-400">
              Shelters
            </p>

            <h2 className="text-5xl font-bold text-blue-400">
              {shelterCount}
            </h2>

          </div>

        </div>

        {/* Operations */}

        <h2 className="text-3xl font-bold mb-6">
          Operations
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">

          <Link href="/responder/incidents">
            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-red-500">

              <AlertTriangle
                className="text-red-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold">
                Manage Incidents
              </h3>

              <p className="text-slate-400 mt-2">
                Track and update disaster incidents.
              </p>

            </div>
          </Link>

          <Link href="/responder/requests">
            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-purple-500">

              <Bell
                className="text-purple-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold">
                Emergency Requests
              </h3>

              <p className="text-slate-400 mt-2">
                Review and approve citizen requests.
              </p>

            </div>
          </Link>

          <Link href="/responder/resources">
            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-orange-500">

              <Package
                className="text-orange-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold">
                Resource Allocation
              </h3>

              <p className="text-slate-400 mt-2">
                Manage supply distribution.
              </p>

            </div>
          </Link>

          <Link href="/responder/shelters">
            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-blue-500">

              <Home
                className="text-blue-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold">
                Shelter Monitoring
              </h3>

              <p className="text-slate-400 mt-2">
                Monitor shelter occupancy.
              </p>

            </div>
          </Link>

          <Link href="/responder/analytics">
            <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-emerald-500">

              <Activity
                className="text-emerald-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold">
                Analytics
              </h3>

              <p className="text-slate-400 mt-2">
                View disaster response metrics.
              </p>

            </div>
          </Link>

          <Link href="/responder/teams">

  <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-cyan-500">

    <Users
      className="text-cyan-400 mb-4"
      size={40}
    />

    <h3 className="text-xl font-bold">
      Response Teams
    </h3>

    <p className="text-slate-400 mt-2">
      Manage rescue and response teams.
    </p>

  </div>

</Link>


<Link href="/responder/notifications">

  <div className="bg-[#141D35] p-8 rounded-3xl hover:border hover:border-orange-500">

    <Bell
      className="text-orange-400 mb-4"
      size={40}
    />

    <h3 className="text-xl font-bold">
      Notifications
    </h3>

    <p className="text-slate-400 mt-2">
      View responder alerts.
    </p>

  </div>

</Link>

        </div>

        {/* Live Panels */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Incidents */}

          <div className="bg-[#141D35] rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Active Incidents
            </h2>

            <div className="space-y-4">

              {incidents.map((incident) => (

                <div
                  key={incident.id}
                  className="
                  bg-slate-900
                  rounded-xl
                  p-4
                  flex
                  justify-between
                "
                >

                  <div>

                    <h3 className="font-bold">
                      {incident.disasterType}
                    </h3>

                    <p className="text-slate-400">
                      {incident.location}
                    </p>

                  </div>

                  <span className="
                  bg-red-500/20
                  text-red-400
                  px-3 py-1
                  rounded-full
                  ">
                    {incident.severity}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Requests */}

          <div className="bg-[#141D35] rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Pending Requests
            </h2>

            <div className="space-y-4">

              {requests.map((request) => (

                <div
                  key={request.id}
                  className="
                  bg-slate-900
                  rounded-xl
                  p-4
                  flex
                  justify-between
                "
                >

                  <div>

                    <h3 className="font-bold">
                      {request.requestType}
                    </h3>

                    <p className="text-slate-400">
                      {request.location}
                    </p>

                  </div>

                  <span className="
                  bg-yellow-500/20
                  text-yellow-400
                  px-3 py-1
                  rounded-full
                  ">
                    {request.status}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}