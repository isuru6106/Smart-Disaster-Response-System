"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  AlertTriangle,
  Search,
  Trash2,
  Eye
} from "lucide-react";

export default function AdminIncidentsPage() {

  const [incidents, setIncidents] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/api/incidents"
      );

      setIncidents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredIncidents = incidents.filter(
    (incident) =>
      incident.location?.toLowerCase().includes(search.toLowerCase()) ||
      incident.disasterType?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      <div className="flex items-center gap-4 mb-10">
        <AlertTriangle size={40} className="text-red-400" />
        <div>
          <h1 className="text-5xl font-bold">
            Incident Management
          </h1>
          <p className="text-slate-400">
            Manage disaster incidents
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3>Total Incidents</h3>
          <p className="text-5xl font-bold text-red-400 mt-3">
            {incidents.length}
          </p>
        </div>

      </div>

      <input
        type="text"
        placeholder="Search incidents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900 rounded-xl p-4 mb-8"
      />

      <div className="bg-[#141D35] rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900">
            <tr>
              <th className="p-5 text-left">Type</th>
              <th className="p-5 text-left">Location</th>
              <th className="p-5 text-left">Severity</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredIncidents.map((incident) => (

              <tr
                key={incident.id}
                className="border-b border-slate-800"
              >
                <td className="p-5">
                  {incident.disasterType}
                </td>

                <td className="p-5">
                  {incident.location}
                </td>

                <td className="p-5">
                  {incident.severity}
                </td>

                <td className="p-5">
                  {incident.status}
                </td>

                <td className="p-5">
                  <div className="flex justify-center gap-3">

                    <button className="bg-blue-500/20 p-3 rounded-xl">
                      <Eye size={18}/>
                    </button>

                    <button className="bg-red-500/20 p-3 rounded-xl">
                      <Trash2 size={18}/>
                    </button>

                  </div>
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}