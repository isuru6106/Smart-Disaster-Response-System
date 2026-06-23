"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Package,
  Search,
  Trash2,
  Eye,
  Boxes
} from "lucide-react";

export default function AdminResourcesPage() {

  const [resources, setResources] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8083/api/resources"
      );

      setResources(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const filteredResources = resources.filter(
    (resource) =>
      resource.resourceName
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">

        <div className="bg-orange-500/20 p-4 rounded-2xl">
          <Package size={35} className="text-orange-400" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            Resource Management
          </h1>

          <p className="text-slate-400">
            Manage disaster response resources
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Resources
          </h3>

          <p className="text-5xl font-bold text-orange-400 mt-3">
            {resources.length}
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Quantity
          </h3>

          <p className="text-5xl font-bold text-emerald-400 mt-3">
            {
              resources.reduce(
                (sum, r) => sum + (r.quantity || 0),
                0
              )
            }
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Available Items
          </h3>

          <p className="text-5xl font-bold text-blue-400 mt-3">
            {resources.length}
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#141D35] p-6 rounded-3xl mb-8">

        <div className="relative">

          <Search
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search resources..."
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
                Resource
              </th>

              <th className="p-5 text-left">
                Quantity
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

            {filteredResources.map((resource) => (

              <tr
                key={resource.id}
                className="border-b border-slate-800"
              >

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <Boxes
                      className="text-orange-400"
                      size={18}
                    />

                    {resource.resourceName}

                  </div>

                </td>

                <td className="p-5">
                  {resource.quantity}
                </td>

                <td className="p-5">
                  {resource.location}
                </td>

                <td className="p-5">

                  <span className="
                    px-3 py-1 rounded-full
                    bg-emerald-500/20
                    text-emerald-400
                  ">
                    Available
                  </span>

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