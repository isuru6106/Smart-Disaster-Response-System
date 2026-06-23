"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Package,
  MapPin,
  Boxes
} from "lucide-react";

export default function ResourcesPage() {

  const [resources, setResources] = useState([]);

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

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      <div className="p-8">

        <h1 className="text-5xl font-bold mb-2">
          Emergency Resources
        </h1>

        <p className="text-slate-400 mb-10">
          Available resources across disaster regions
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {resources.map((resource: any) => (

            <div
              key={resource.id}
              className="bg-[#141D35] rounded-3xl p-8"
            >

              <Package
                size={35}
                className="text-orange-400 mb-4"
              />

              <h2 className="text-2xl font-bold mb-4">
                {resource.resourceName}
              </h2>

              <div className="space-y-3">

                <p className="flex gap-3 items-center">
                  <Boxes size={18} />
                  Quantity :
                  {resource.quantity}
                </p>

                <p className="flex gap-3 items-center">
                  <MapPin size={18} />
                  {resource.location}
                </p>

                <span
                  className="
                  bg-emerald-500/20
                  text-emerald-400
                  px-3 py-1 rounded-full
                "
                >
                  {resource.availability}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}