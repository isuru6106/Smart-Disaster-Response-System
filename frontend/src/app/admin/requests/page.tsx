"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bell,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

export default function AdminRequestsPage() {

  const [requests, setRequests] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8086/api/requests"
      );

      setRequests(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const filteredRequests = requests.filter(
    (request) =>
      request.citizenName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      request.requestType
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  const pendingCount = requests.filter(
    (r) => r.status === "Pending"
  ).length;

  const approvedCount = requests.filter(
    (r) => r.status === "Approved"
  ).length;

  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">

        <div className="bg-purple-500/20 p-4 rounded-2xl">
          <Bell size={35} className="text-purple-400" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            Emergency Requests
          </h1>

          <p className="text-slate-400">
            Manage citizen emergency requests
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Requests
          </h3>

          <p className="text-5xl font-bold text-purple-400 mt-3">
            {requests.length}
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Pending
          </h3>

          <p className="text-5xl font-bold text-yellow-400 mt-3">
            {pendingCount}
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Approved
          </h3>

          <p className="text-5xl font-bold text-emerald-400 mt-3">
            {approvedCount}
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#141D35] p-6 rounded-3xl mb-8">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search requests..."
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
                Citizen
              </th>

              <th className="p-5 text-left">
                Contact
              </th>

              <th className="p-5 text-left">
                Request Type
              </th>

              <th className="p-5 text-left">
                Location
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredRequests.map((request) => (

              <tr
                key={request.id}
                className="border-b border-slate-800"
              >

                <td className="p-5">
                  {request.citizenName}
                </td>

                <td className="p-5">
                  {request.contactNumber}
                </td>

                <td className="p-5">
                  {request.requestType}
                </td>

                <td className="p-5">
                  {request.location}
                </td>

                <td className="p-5">

                  {request.status === "Approved" ? (

                    <span className="
                      bg-emerald-500/20
                      text-emerald-400
                      px-3 py-1 rounded-full
                    ">
                      Approved
                    </span>

                  ) : (

                    <span className="
                      bg-yellow-500/20
                      text-yellow-400
                      px-3 py-1 rounded-full
                    ">
                      Pending
                    </span>

                  )}

                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-3">

                    <button
                      className="
                        bg-emerald-500/20
                        p-3 rounded-xl
                      "
                    >
                      <CheckCircle
                        size={18}
                        className="text-emerald-400"
                      />
                    </button>

                    <button
                      className="
                        bg-red-500/20
                        p-3 rounded-xl
                      "
                    >
                      <XCircle
                        size={18}
                        className="text-red-400"
                      />
                    </button>

                    <button
                      className="
                        bg-blue-500/20
                        p-3 rounded-xl
                      "
                    >
                      <AlertCircle
                        size={18}
                        className="text-blue-400"
                      />
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