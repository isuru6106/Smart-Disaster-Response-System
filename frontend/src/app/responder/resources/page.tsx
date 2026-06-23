"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Package,
  Search,
  Save,
  Trash2,
  Plus,
  MapPin,
  Boxes
} from "lucide-react";

export default function ResourceManagementPage() {

  const [resources, setResources] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [newResource, setNewResource] = useState({
    resourceName: "",
    quantity: 0,
    location: "",
    availability: "Available"
  });

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

  const addResource = async () => {

    try {

      await axios.post(
        "http://localhost:8083/api/resources",
        newResource
      );

      setNewResource({
        resourceName: "",
        quantity: 0,
        location: "",
        availability: "Available"
      });

      loadResources();

    } catch (error) {

      console.error(error);

    }

  };

  const updateResource = async (
    resource: any
  ) => {

    try {

      await axios.put(
        `http://localhost:8083/api/resources/${resource.id}`,
        resource
      );

      loadResources();

    } catch (error) {

      console.error(error);

    }

  };

  const deleteResource = async (
    id: number
  ) => {

    try {

      await axios.delete(
        `http://localhost:8083/api/resources/${id}`
      );

      loadResources();

    } catch (error) {

      console.error(error);

    }

  };

  const filteredResources =
    resources.filter((resource) =>
      resource.resourceName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      resource.location
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  const totalQuantity =
    resources.reduce(
      (sum, resource) =>
        sum + resource.quantity,
      0
    );

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-orange-400">
          Resource Management
        </h1>

        <p className="text-slate-400 mt-2">
          Manage emergency supplies and inventory
        </p>

      </div>

      <div className="p-8">

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <Package
              className="text-orange-400 mb-3"
            />

            <p className="text-slate-400">
              Total Resources
            </p>

            <h2 className="text-4xl font-bold">
              {resources.length}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <Boxes
              className="text-blue-400 mb-3"
            />

            <p className="text-slate-400">
              Inventory Units
            </p>

            <h2 className="text-4xl font-bold">
              {totalQuantity}
            </h2>

          </div>

          <div className="bg-[#141D35] p-6 rounded-3xl">

            <MapPin
              className="text-emerald-400 mb-3"
            />

            <p className="text-slate-400">
              Locations
            </p>

            <h2 className="text-4xl font-bold">
              {
                new Set(
                  resources.map(
                    (r) => r.location
                  )
                ).size
              }
            </h2>

          </div>

        </div>

        {/* Add Resource */}

        <div className="bg-[#141D35] rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Add New Resource
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Resource Name"
              value={newResource.resourceName}
              onChange={(e) =>
                setNewResource({
                  ...newResource,
                  resourceName:
                    e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              type="number"
              placeholder="Quantity"
              value={newResource.quantity}
              onChange={(e) =>
                setNewResource({
                  ...newResource,
                  quantity:
                    Number(
                      e.target.value
                    )
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Location"
              value={newResource.location}
              onChange={(e) =>
                setNewResource({
                  ...newResource,
                  location:
                    e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <select
              value={newResource.availability}
              onChange={(e) =>
                setNewResource({
                  ...newResource,
                  availability:
                    e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            >
              <option>Available</option>
              <option>Limited</option>
              <option>Out of Stock</option>
            </select>

          </div>

          <button
            onClick={addResource}
            className="
            mt-6
            bg-orange-500
            hover:bg-orange-400
            px-6 py-3
            rounded-xl
            flex items-center gap-2
            "
          >

            <Plus size={18} />

            Add Resource

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

        {/* Resource Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          {filteredResources.map(
            (resource, index) => (

              <div
                key={resource.id}
                className="
                bg-[#141D35]
                rounded-3xl
                p-6
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <Package
                    className="text-orange-400"
                  />

                  <h2 className="text-2xl font-bold">
                    {resource.resourceName}
                  </h2>

                </div>

                <div className="space-y-4">

                  <input
                    type="number"
                    value={resource.quantity}
                    onChange={(e) => {

                      const updated =
                        [...resources];

                      updated[index].quantity =
                        Number(
                          e.target.value
                        );

                      setResources(
                        updated
                      );

                    }}
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  />

                  <input
                    type="text"
                    value={resource.location}
                    readOnly
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  />

                  <select
                    value={
                      resource.availability
                    }
                    onChange={(e) => {

                      const updated =
                        [...resources];

                      updated[index]
                        .availability =
                        e.target.value;

                      setResources(
                        updated
                      );

                    }}
                    className="
                    w-full
                    bg-slate-900
                    p-4
                    rounded-xl
                    "
                  >

                    <option>
                      Available
                    </option>

                    <option>
                      Limited
                    </option>

                    <option>
                      Out of Stock
                    </option>

                  </select>

                </div>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={() =>
                      updateResource(
                        resource
                      )
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
                      deleteResource(
                        resource.id
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