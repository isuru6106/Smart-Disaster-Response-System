"use client";

import { useEffect, useState } from "react";
import { getIncidents } from "@/services/incidentService";

import {
AlertTriangle,
MapPin,
ShieldAlert,
Search,
Activity
} from "lucide-react";

export default function IncidentsPage() {

const [incidents, setIncidents] =
useState<any[]>([]);

const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

useEffect(() => {
loadIncidents();
}, []);

const loadIncidents = async () => {

try {

  const response =
    await getIncidents();

  setIncidents(
    response.data
  );

} catch (error) {

  console.error(error);

} finally {

  setLoading(false);

}

};

const filteredIncidents =
incidents.filter((incident) =>

  incident.disasterType
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    ) ||

  incident.location
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

);

return (

<div className="min-h-screen bg-[#050B1F] text-white">

  {/* Header */}

  <div className="bg-[#121A31] border-b border-slate-800 p-8">

    <h1 className="text-5xl font-bold">
      Incident Management
    </h1>

    <p className="text-slate-400 mt-3">
      Real-time disaster monitoring center
    </p>

  </div>

  <div className="p-8">

    {/* Statistics */}

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-[#141D35] rounded-3xl p-6">

        <AlertTriangle
          className="text-red-400 mb-3"
        />

        <p className="text-slate-400">
          Total Incidents
        </p>

        <h2 className="text-4xl font-bold">
          {incidents.length}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <ShieldAlert
          className="text-orange-400 mb-3"
        />

        <p className="text-slate-400">
          Active Incidents
        </p>

        <h2 className="text-4xl font-bold">

          {
            incidents.filter(
              (incident) =>
                incident.status ===
                "ACTIVE"
            ).length
          }

        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Activity
          className="text-emerald-400 mb-3"
        />

        <p className="text-slate-400">
          High Severity
        </p>

        <h2 className="text-4xl font-bold">

          {
            incidents.filter(
              (incident) =>
                incident.severity ===
                "HIGH"
            ).length
          }

        </h2>

      </div>

    </div>

    {/* Search */}

    <div className="bg-[#141D35] rounded-3xl p-6 mb-8">

      <div className="relative">

        <Search
          className="
          absolute
          left-4
          top-4
          text-slate-400
          "
        />

        <input
          type="text"
          placeholder="Search incidents..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
          w-full
          bg-slate-900
          rounded-xl
          py-4
          pl-12
          pr-4
          "
        />

      </div>

    </div>

    {/* Incident Cards */}

    {loading ? (

      <div>
        Loading...
      </div>

    ) : (

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredIncidents.map(
          (incident) => (

            <div
              key={incident.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
              border
              border-slate-800
              hover:border-red-500
              transition
              "
            >

              <div className="flex justify-between">

                <div className="flex gap-3">

                  <AlertTriangle
                    className="
                    text-red-400
                    "
                  />

                  <h2 className="text-2xl font-bold">

                    {
                      incident.disasterType
                    }

                  </h2>

                </div>

                <span
                  className={`
                  px-3 py-1
                  rounded-full
                  text-sm

                  ${
                    incident.severity ===
                    "HIGH"
                      ? "bg-red-500/20 text-red-400"
                      : incident.severity ===
                        "MEDIUM"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-green-500/20 text-green-400"
                  }
                  `}
                >

                  {
                    incident.severity
                  }

                </span>

              </div>

              <p className="text-slate-400 mt-4">

                {
                  incident.description
                }

              </p>

              <div className="mt-5 space-y-3">

                <div className="flex gap-2 items-center">

                  <MapPin
                    size={18}
                  />

                  {
                    incident.location
                  }

                </div>

                <div>

                  Status :

                  <span
                    className="
                    ml-2
                    text-cyan-400
                    font-semibold
                    "
                  >

                    {
                      incident.status
                    }

                  </span>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    )}

  </div>

</div>

);

}
