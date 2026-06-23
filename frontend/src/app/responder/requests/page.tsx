"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Bell,
  Search,
  CheckCircle,
  XCircle,
  Phone,
  MapPin
} from "lucide-react";

export default function RequestManagementPage() {

  const [requests, setRequests] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8086/api/requests"
        );

      setRequests(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const updateStatus = async (
    request: any,
    status: string
  ) => {

    try {

      await axios.put(
        `http://localhost:8086/api/requests/${request.id}`,
        {
          ...request,
          status
        }
      );

      loadRequests();

    } catch (error) {

      console.error(error);

    }

  };

  const filteredRequests =
    requests.filter((request) =>
      request.citizenName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

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
          Emergency Requests
        </h1>

        <p className="text-slate-400 mt-2">
          Review and manage citizen requests
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

        {/* Requests */}

        <div className="grid gap-6">

          {filteredRequests.map((request) => (

            <div
              key={request.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
            "
            >

              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-3 mb-3">

                    <Bell
                      className="text-purple-400"
                    />

                    <h2 className="text-xl font-bold">
                      {request.requestType}
                    </h2>

                  </div>

                  <p className="mb-2">
                    Citizen :
                    {" "}
                    <strong>
                      {request.citizenName}
                    </strong>
                  </p>

                  <p className="flex items-center gap-2 mb-2">

                    <Phone size={16} />

                    {request.contactNumber}

                  </p>

                  <p className="flex items-center gap-2">

                    <MapPin size={16} />

                    {request.location}

                  </p>

                </div>

                <span
                  className={`
                  px-3 py-1 rounded-full
                  ${
                    request.status === "Approved"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : request.status === "Rejected"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }
                `}
                >
                  {request.status}
                </span>

              </div>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    updateStatus(
                      request,
                      "Approved"
                    )
                  }
                  className="
                  flex items-center gap-2
                  bg-emerald-500/20
                  text-emerald-400
                  px-4 py-2 rounded-xl
                "
                >

                  <CheckCircle size={18} />

                  Approve

                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      request,
                      "Rejected"
                    )
                  }
                  className="
                  flex items-center gap-2
                  bg-red-500/20
                  text-red-400
                  px-4 py-2 rounded-xl
                "
                >

                  <XCircle size={18} />

                  Reject

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}