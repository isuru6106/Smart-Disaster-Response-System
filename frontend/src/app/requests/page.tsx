"use client";

import { useEffect, useState } from "react";
import { getRequests } from "@/services/requestService";

import {
Phone,
MapPin,
User,
ShieldAlert,
Search,
Bell,
Activity
} from "lucide-react";

export default function RequestsPage() {

const [requests, setRequests] =
useState<any[]>([]);

const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

useEffect(() => {
loadRequests();
}, []);

const loadRequests = async () => {
try {

  const response =
    await getRequests();

  setRequests(
    response.data
  );

} catch (error) {

  console.error(error);

} finally {

  setLoading(false);

}

};

const filteredRequests =
requests.filter((request) =>

  request.citizenName
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    ) ||

  request.requestType
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    ) ||

  request.location
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
      Emergency Requests
    </h1>

    <p className="text-slate-400 mt-3">
      Real-time citizen emergency requests
    </p>

  </div>

  <div className="p-8">

    {/* Statistics */}

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Bell
          className="text-purple-400 mb-3"
        />

        <p className="text-slate-400">
          Total Requests
        </p>

        <h2 className="text-4xl font-bold">
          {requests.length}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <ShieldAlert
          className="text-red-400 mb-3"
        />

        <p className="text-slate-400">
          Pending Requests
        </p>

        <h2 className="text-4xl font-bold">

          {
            requests.filter(
              (request) =>
                request.status ===
                "PENDING"
            ).length
          }

        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Activity
          className="text-emerald-400 mb-3"
        />

        <p className="text-slate-400">
          Resolved Requests
        </p>

        <h2 className="text-4xl font-bold">

          {
            requests.filter(
              (request) =>
                request.status ===
                "APPROVED"
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
          placeholder="Search requests..."
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

    {/* Request Cards */}

    {loading ? (

      <div>
        Loading...
      </div>

    ) : (

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredRequests.map(
          (request) => (

            <div
              key={request.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
              border
              border-slate-800
              hover:border-purple-500
              transition
              "
            >

              <div className="flex justify-between">

                <div className="flex gap-3">

                  <ShieldAlert
                    className="
                    text-red-400
                    "
                  />

                  <h2 className="text-2xl font-bold">

                    {
                      request.requestType
                    }

                  </h2>

                </div>

                <span
                  className={`
                  px-3 py-1
                  rounded-full
                  text-sm

                  ${
                    request.status ===
                    "APPROVED"
                      ? "bg-green-500/20 text-green-400"
                      : request.status ===
                        "PENDING"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-red-500/20 text-red-400"
                  }
                  `}
                >

                  {
                    request.status
                  }

                </span>

              </div>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3">

                  <User
                    className="
                    text-blue-400
                    "
                    size={18}
                  />

                  {
                    request.citizenName
                  }

                </div>

                <div className="flex items-center gap-3">

                  <Phone
                    className="
                    text-green-400
                    "
                    size={18}
                  />

                  {
                    request.contactNumber
                  }

                </div>

                <div className="flex items-center gap-3">

                  <MapPin
                    className="
                    text-orange-400
                    "
                    size={18}
                  />

                  {
                    request.location
                  }

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
