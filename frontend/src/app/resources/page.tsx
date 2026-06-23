"use client";

import { useEffect, useState } from "react";
import { getResources } from "@/services/resourceService";

import {
Package,
MapPin,
Boxes,
ShieldCheck,
Search,
Activity
} from "lucide-react";

export default function ResourcesPage() {

const [resources, setResources] =
useState<any[]>([]);

const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

useEffect(() => {
loadResources();
}, []);

const loadResources = async () => {

try {

  const response =
    await getResources();

  setResources(
    response.data
  );

} catch (error) {

  console.error(error);

} finally {

  setLoading(false);

}


};

const filteredResources =
resources.filter((resource) =>

  resource.resourceName
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    ) ||

  resource.location
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

);

const totalQuantity =
resources.reduce(
(sum, resource) =>
sum + Number(resource.quantity || 0),
0
);

return (

<div className="min-h-screen bg-[#050B1F] text-white">

  {/* Header */}

  <div className="bg-[#121A31] border-b border-slate-800 p-8">

    <h1 className="text-5xl font-bold">
      Resource Management
    </h1>

    <p className="text-slate-400 mt-3">
      Track emergency resources in real time
    </p>

  </div>

  <div className="p-8">

    {/* Statistics */}

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Package
          className="text-emerald-400 mb-3"
        />

        <p className="text-slate-400">
          Total Resources
        </p>

        <h2 className="text-4xl font-bold">
          {resources.length}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Boxes
          className="text-blue-400 mb-3"
        />

        <p className="text-slate-400">
          Total Quantity
        </p>

        <h2 className="text-4xl font-bold">
          {totalQuantity}
        </h2>

      </div>

      <div className="bg-[#141D35] rounded-3xl p-6">

        <Activity
          className="text-orange-400 mb-3"
        />

        <p className="text-slate-400">
          Available Resources
        </p>

        <h2 className="text-4xl font-bold">

          {
            resources.filter(
              (resource) =>
                resource.availability
                  ?.toLowerCase() ===
                "available"
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
          placeholder="Search resources..."
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

    {/* Resource Cards */}

    {loading ? (

      <div>
        Loading...
      </div>

    ) : (

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredResources.map(
          (resource) => (

            <div
              key={resource.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
              border
              border-slate-800
              hover:border-emerald-500
              transition
              "
            >

              <div className="flex justify-between">

                <div className="flex gap-3">

                  <Package
                    className="
                    text-emerald-400
                    "
                  />

                  <h2 className="text-2xl font-bold">

                    {
                      resource.resourceName
                    }

                  </h2>

                </div>

                <span
                  className={`
                  px-3 py-1
                  rounded-full
                  text-sm

                  ${
                    resource.availability
                      ?.toLowerCase() ===
                    "available"
                      ? "bg-green-500/20 text-green-400"
                      : resource.availability
                          ?.toLowerCase() ===
                        "limited"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-red-500/20 text-red-400"
                  }
                  `}
                >

                  {
                    resource.availability
                  }

                </span>

              </div>

              <div className="mt-5 space-y-4">

                <div className="flex items-center gap-3">

                  <MapPin
                    className="
                    text-blue-400
                    "
                    size={18}
                  />

                  {
                    resource.location
                  }

                </div>

                <div className="flex items-center gap-3">

                  <Boxes
                    className="
                    text-orange-400
                    "
                    size={18}
                  />

                  Quantity :

                  <span className="font-bold text-orange-400">

                    {
                      resource.quantity
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
