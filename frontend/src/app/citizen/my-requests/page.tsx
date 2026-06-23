"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bell,
  Search,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";

export default function MyRequestsPage() {

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
      request.requestType
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      request.location
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}
      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-purple-400">
          My Emergency Requests
        </h1>

        <p className="text-slate-400 mt-2">
          Track your emergency assistance requests
        </p>

      </div>

      <div className="p-10">

        {/* Search */}
        <div className="bg-[#141D35] p-6 rounded-3xl mb-8">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
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
                  Name
                </th>

                <th className="p-5 text-left">
                  Request Type
                </th>

                <th className="p-5 text-left">
                  Location
                </th>

                <th className="p-5 text-left">
                  Contact
                </th>

                <th className="p-5 text-left">
                  Status
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
                    {request.requestType}
                  </td>

                  <td className="p-5">
                    {request.location}
                  </td>

                  <td className="p-5">
                    {request.contactNumber}
                  </td>

                  <td className="p-5">

                    {request.status === "Approved" ? (

                      <span className="
                        bg-emerald-500/20
                        text-emerald-400
                        px-3 py-1 rounded-full
                      ">
                        <CheckCircle
                          size={16}
                          className="inline mr-2"
                        />
                        Approved
                      </span>

                    ) : request.status === "Rejected" ? (

                      <span className="
                        bg-red-500/20
                        text-red-400
                        px-3 py-1 rounded-full
                      ">
                        <XCircle
                          size={16}
                          className="inline mr-2"
                        />
                        Rejected
                      </span>

                    ) : (

                      <span className="
                        bg-yellow-500/20
                        text-yellow-400
                        px-3 py-1 rounded-full
                      ">
                        <Clock
                          size={16}
                          className="inline mr-2"
                        />
                        Pending
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}