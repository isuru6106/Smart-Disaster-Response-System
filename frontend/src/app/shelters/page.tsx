"use client";

import { useEffect, useState } from "react";
import { getShelters } from "@/services/shelterService";

import {
House,
MapPin,
Building2,
Users,
Shield,
Search,
Activity
} from "lucide-react";

export default function SheltersPage() {

const [shelters, setShelters] =
useState<any[]>([]);

const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

useEffect(() => {
loadShelters();
}, []);

const loadShelters = async () => {

try {

  const response =
    await getShelters();

  setShelters(
    response.data
  );

} catch (error) {

  console.error(
    "Error loading shelters:",
    error
  );

} finally {

  setLoading(false);

}

};

const filteredShelters =
shelters.filter((shelter) =>

  shelter.shelterName
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    ) ||

  shelter.location
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

);

const totalCapacity =
shelters.reduce(
(sum, shelter) =>
sum + Number(shelter.capacity || 0),
0
);

const totalOccupied =
shelters.reduce(
(sum, shelter) =>
sum +
Number(
shelter.occupiedCount || 0
),
0
);

const totalAvailable =
totalCapacity - totalOccupied;

return (

<div className="min-h-screen bg-[#050B1F] text-white">

  {/* Header */}

  <div className="bg-[#121A31] border-b border-slate-800 p-8">

    <h1 className="text-5xl font-bold">
      Shelter Management
    </h1>

    <p className="text-slate-400 mt-3">
      Monitor shelter availability and occupancy
    </p>

  </div>

  <div className="p-8">

    {/* Statistics */}

    <div className="grid md:grid-cols-4 gap-6 mb-8">

      <div className="bg-[#141D35] rounded-3xl p-6">

        <House
          className="text-blue-400 mb-3"
        />

        <p className="text-slate-400">
          Shelters
        </p>

        <h2 className="text-4xl font-bold">
          {shelters.length}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Building2
          className="text-cyan-400 mb-3"
        />

        <p className="text-slate-400">
          Total Capacity
        </p>

        <h2 className="text-4xl font-bold">
          {totalCapacity}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Users
          className="text-orange-400 mb-3"
        />

        <p className="text-slate-400">
          Occupied
        </p>

        <h2 className="text-4xl font-bold">
          {totalOccupied}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Activity
          className="text-emerald-400 mb-3"
        />

        <p className="text-slate-400">
          Available Spaces
        </p>

        <h2 className="text-4xl font-bold">
          {totalAvailable}
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
          placeholder="Search shelters..."
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

    {/* Shelter Cards */}

    {loading ? (

      <div>
        Loading...
      </div>

    ) : (

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredShelters.map(
          (shelter) => {

            const available =
              shelter.capacity -
              shelter.occupiedCount;

            const occupancy =
              (shelter.occupiedCount /
                shelter.capacity) *
              100;

            return (

              <div
                key={shelter.id}
                className="
                bg-[#141D35]
                rounded-3xl
                p-6
                border
                border-slate-800
                hover:border-blue-500
                transition
                "
              >

                <div className="flex justify-between">

                  <div className="flex gap-3">

                    <House
                      className="
                      text-blue-400
                      "
                    />

                    <h2 className="text-2xl font-bold">

                      {
                        shelter.shelterName
                      }

                    </h2>

                  </div>

                  <span
                    className={`
                    px-3 py-1
                    rounded-full
                    text-sm

                    ${
                      shelter.status
                        ?.toLowerCase() ===
                      "open"
                        ? "bg-green-500/20 text-green-400"
                        : shelter.status
                            ?.toLowerCase() ===
                          "full"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-red-500/20 text-red-400"
                    }
                    `}
                  >

                    {
                      shelter.status
                    }

                  </span>

                </div>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center gap-3">

                    <MapPin
                      className="
                      text-cyan-400
                      "
                      size={18}
                    />

                    {
                      shelter.location
                    }

                  </div>

                  <div className="flex items-center gap-3">

                    <Building2
                      className="
                      text-blue-400
                      "
                      size={18}
                    />

                    Capacity :

                    <span className="font-bold text-blue-400">

                      {
                        shelter.capacity
                      }

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Users
                      className="
                      text-orange-400
                      "
                      size={18}
                    />

                    Occupied :

                    <span className="font-bold text-orange-400">

                      {
                        shelter.occupiedCount
                      }

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Shield
                      className="
                      text-emerald-400
                      "
                      size={18}
                    />

                    Available :

                    <span className="font-bold text-emerald-400">

                      {available}

                    </span>

                  </div>

                  <div>

                    <div className="flex justify-between text-sm text-slate-400 mb-2">

                      <span>
                        Occupancy
                      </span>

                      <span>
                        {
                          occupancy.toFixed(
                            0
                          )
                        }%
                      </span>

                    </div>

                    <div className="w-full bg-slate-900 rounded-full h-3">

                      <div
                        className="
                        bg-emerald-500
                        h-3
                        rounded-full
                        "
                        style={{
                          width:
                            `${occupancy}%`
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            );

          }
        )}

      </div>

    )}

  </div>

</div>

);

}
