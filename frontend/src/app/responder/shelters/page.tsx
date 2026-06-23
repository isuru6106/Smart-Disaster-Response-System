"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Home,
  Search,
  Save,
  Trash2,
  Users,
  Building2,
  Plus
} from "lucide-react";

export default function ShelterManagementPage() {

  const [shelters, setShelters] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [newShelter, setNewShelter] = useState({
    shelterName: "",
    location: "",
    capacity: 0,
    occupiedCount: 0,
    status: "Open"
  });

  useEffect(() => {
    loadShelters();
  }, []);

  const loadShelters = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8084/api/shelters"
        );

      setShelters(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const addShelter = async () => {

    try {

      await axios.post(
        "http://localhost:8084/api/shelters",
        newShelter
      );

      setNewShelter({
        shelterName: "",
        location: "",
        capacity: 0,
        occupiedCount: 0,
        status: "Open"
      });

      loadShelters();

    } catch (error) {

      console.error(error);

    }

  };

  const updateShelter = async (
    shelter: any
  ) => {

    try {

      await axios.put(
        `http://localhost:8084/api/shelters/${shelter.id}`,
        shelter
      );

      loadShelters();

    } catch (error) {

      console.error(error);

    }

  };

  const deleteShelter = async (
    id: number
  ) => {

    try {

      await axios.delete(
        `http://localhost:8084/api/shelters/${id}`
      );

      loadShelters();

    } catch (error) {

      console.error(error);

    }

  };

  const filteredShelters =
    shelters.filter((shelter) =>
      shelter.shelterName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      shelter.location
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  const totalCapacity =
    shelters.reduce(
      (sum, shelter) =>
        sum + shelter.capacity,
      0
    );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-blue-400">
          Shelter Management
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor shelters and occupancy levels
        </p>

      </div>

      <div className="p-8">

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <Building2
              className="text-blue-400 mb-3"
            />

            <p className="text-slate-400">
              Total Shelters
            </p>

            <h2 className="text-4xl font-bold">
              {shelters.length}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <Users
              className="text-emerald-400 mb-3"
            />

            <p className="text-slate-400">
              Total Capacity
            </p>

            <h2 className="text-4xl font-bold">
              {totalCapacity}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <Home
              className="text-orange-400 mb-3"
            />

            <p className="text-slate-400">
              Open Shelters
            </p>

            <h2 className="text-4xl font-bold">
              {
                shelters.filter(
                  (s) =>
                    s.status === "Open"
                ).length
              }
            </h2>

          </div>

        </div>

        {/* Add Shelter */}

        <div className="bg-[#141D35] rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Add New Shelter
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            <input
              type="text"
              placeholder="Shelter Name"
              value={newShelter.shelterName}
              onChange={(e) =>
                setNewShelter({
                  ...newShelter,
                  shelterName: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Location"
              value={newShelter.location}
              onChange={(e) =>
                setNewShelter({
                  ...newShelter,
                  location: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              type="number"
              placeholder="Capacity"
              value={newShelter.capacity}
              onChange={(e) =>
                setNewShelter({
                  ...newShelter,
                  capacity: Number(e.target.value)
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              type="number"
              placeholder="Occupied"
              value={newShelter.occupiedCount}
              onChange={(e) =>
                setNewShelter({
                  ...newShelter,
                  occupiedCount: Number(e.target.value)
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <select
              value={newShelter.status}
              onChange={(e) =>
                setNewShelter({
                  ...newShelter,
                  status: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            >
              <option>Open</option>
              <option>Full</option>
              <option>Closed</option>
            </select>

          </div>

          <button
            onClick={addShelter}
            className="
            mt-6
            bg-blue-500
            hover:bg-blue-400
            px-6 py-3
            rounded-xl
            flex items-center gap-2
            "
          >

            <Plus size={18} />

            Add Shelter

          </button>

        </div>

        {/* Search */}

        <div className="bg-[#141D35] p-6 rounded-3xl mb-8">

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

        {/* Shelter Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          {filteredShelters.map(
            (shelter, index) => (

              <div
                key={shelter.id}
                className="
                bg-[#141D35]
                rounded-3xl
                p-6
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <Home
                    className="text-blue-400"
                  />

                  <h2 className="text-2xl font-bold">
                    {shelter.shelterName}
                  </h2>

                </div>

                <div className="space-y-4">

                  <input
                    type="text"
                    value={shelter.location}
                    readOnly
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  />

                  <input
                    type="number"
                    value={shelter.occupiedCount}
                    onChange={(e) => {

                      const updated =
                        [...shelters];

                      updated[index]
                        .occupiedCount =
                        Number(e.target.value);

                      setShelters(updated);

                    }}
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  />

                  <div className="bg-slate-900 p-4 rounded-xl">
                    Capacity : {shelter.capacity}
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl">
                    Occupied : {shelter.occupiedCount}
                  </div>

                  <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded-xl font-semibold">
                    Available Space :
                    {" "}
                    {shelter.capacity -
                      shelter.occupiedCount}
                  </div>

                  <select
                    value={shelter.status}
                    onChange={(e) => {

                      const updated =
                        [...shelters];

                      updated[index]
                        .status =
                        e.target.value;

                      setShelters(updated);

                    }}
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  >
                    <option>Open</option>
                    <option>Full</option>
                    <option>Closed</option>
                  </select>

                </div>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={() =>
                      updateShelter(shelter)
                    }
                    className="
                    bg-emerald-500/20
                    text-emerald-400
                    px-4 py-2 rounded-xl
                    flex items-center gap-2
                    "
                  >

                    <Save size={18} />

                    Save

                  </button>

                  <button
                    onClick={() =>
                      deleteShelter(
                        shelter.id
                      )
                    }
                    className="
                    bg-red-500/20
                    text-red-400
                    px-4 py-2 rounded-xl
                    flex items-center gap-2
                    "
                  >

                    <Trash2 size={18} />

                    Delete

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}