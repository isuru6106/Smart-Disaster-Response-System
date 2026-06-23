"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  AlertTriangle,
  Search,
  Trash2,
  RefreshCw
} from "lucide-react";

export default function IncidentManagementPage() {

  const [incidents, setIncidents] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8082/api/incidents"
        );

      setIncidents(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const deleteIncident = async (
    id: number
  ) => {

    try {

      await axios.delete(
        `http://localhost:8082/api/incidents/${id}`
      );

      loadIncidents();

    } catch (error) {

      console.error(error);

    }

  };

  const updateStatus = async (
    incident: any,
    newStatus: string
  ) => {

    try {

      await axios.put(
        `http://localhost:8082/api/incidents/${incident.id}`,
        {
          ...incident,
          status: newStatus
        }
      );

      loadIncidents();

    } catch (error) {

      console.error(error);

    }

  };

  const filteredIncidents =
    incidents.filter((incident) =>
      incident.disasterType
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      incident.location
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-red-400">
          Incident Management
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor and manage disaster incidents
        </p>

      </div>

      <div className="p-8">

        {/* Search */}

        <div className="bg-[#141D35] p-6 rounded-3xl mb-8">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search incidents..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
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

        {/* Table */}

        <div className="bg-[#141D35] rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-5 text-left">
                  Type
                </th>

                <th className="p-5 text-left">
                  Location
                </th>

                <th className="p-5 text-left">
                  Severity
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredIncidents.map(
                (incident) => (

                  <tr
                    key={incident.id}
                    className="
                    border-b
                    border-slate-800
                  "
                  >

                    <td className="p-5">

                      <div className="flex items-center gap-3">

                        <AlertTriangle
                          className="text-red-400"
                          size={18}
                        />

                        {incident.disasterType}

                      </div>

                    </td>

                    <td className="p-5">
                      {incident.location}
                    </td>

                    <td className="p-5">

                      <span
                        className="
                        bg-red-500/20
                        text-red-400
                        px-3
                        py-1
                        rounded-full
                      "
                      >
                        {incident.severity}
                      </span>

                    </td>

                    <td className="p-5">

                      <select
                        value={incident.status}
                        onChange={(e) =>
                          updateStatus(
                            incident,
                            e.target.value
                          )
                        }
                        className="
                          bg-slate-900
                          rounded-lg
                          px-3
                          py-2
                        "
                      >

                        <option>
                          Pending
                        </option>

                        <option>
                          In Progress
                        </option>

                        <option>
                          Resolved
                        </option>

                      </select>

                    </td>

                    <td className="p-5">

                      <div className="flex gap-3">

                        <button
                          onClick={() =>
                            updateStatus(
                              incident,
                              "Resolved"
                            )
                          }
                          className="
                          bg-emerald-500/20
                          p-2
                          rounded-lg
                        "
                        >

                          <RefreshCw
                            size={18}
                          />

                        </button>

                        <button
                          onClick={() =>
                            deleteIncident(
                              incident.id
                            )
                          }
                          className="
                          bg-red-500/20
                          p-2
                          rounded-lg
                        "
                        >

                          <Trash2
                            size={18}
                          />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}