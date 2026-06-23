"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Home,
  Search,
  Trash2,
  Eye,
  Building2,
  Users
} from "lucide-react";

export default function AdminSheltersPage() {

  const [shelters, setShelters] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadShelters();
  }, []);

  const loadShelters = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8084/api/shelters"
      );

      setShelters(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const filteredShelters = shelters.filter(
    (shelter) =>
      shelter.name?.toLowerCase().includes(search.toLowerCase()) ||
      shelter.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">

        <div className="bg-blue-500/20 p-4 rounded-2xl">
          <Home size={35} className="text-blue-400" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            Shelter Management
          </h1>

          <p className="text-slate-400">
            Monitor and manage shelters
          </p>
        </div>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Shelters
          </h3>

          <p className="text-5xl font-bold text-blue-400 mt-3">
            {shelters.length}
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Capacity
          </h3>

          <p className="text-5xl font-bold text-emerald-400 mt-3">

            {shelters.reduce(
              (sum, shelter) =>
                sum + (shelter.capacity || 0),
              0
            )}

          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Available Space
          </h3>

          <p className="text-5xl font-bold text-orange-400 mt-3">

            {shelters.reduce(
              (sum, shelter) =>
                sum + (shelter.availableSpace || 0),
              0
            )}

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
            placeholder="Search shelters..."
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
                Shelter
              </th>

              <th className="p-5 text-left">
                Location
              </th>

              <th className="p-5 text-left">
                Capacity
              </th>

              <th className="p-5 text-left">
                Available
              </th>

              <th className="p-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredShelters.map((shelter) => (

              <tr
                key={shelter.id}
                className="border-b border-slate-800"
              >

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <Building2
                      className="text-blue-400"
                      size={18}
                    />

                    {shelter.name}

                  </div>

                </td>

                <td className="p-5">
                  {shelter.location}
                </td>

                <td className="p-5">
                  {shelter.capacity}
                </td>

                <td className="p-5">

                  <span className="text-orange-400">

                    <Users
                      size={16}
                      className="inline mr-2"
                    />

                    {shelter.availableSpace}

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