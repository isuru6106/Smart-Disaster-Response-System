"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Home, MapPin, Users } from "lucide-react";

export default function SheltersPage() {

  const [shelters, setShelters] = useState([]);

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

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      <div className="p-8">

        <h1 className="text-5xl font-bold mb-2">
          Available Shelters
        </h1>

        <p className="text-slate-400 mb-10">
          Find safe shelters during emergencies
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {shelters.map((shelter: any) => (

            <div
              key={shelter.id}
              className="bg-[#141D35] rounded-3xl p-8"
            >

              <Home
                className="text-blue-400 mb-4"
                size={35}
              />

              <h2 className="text-2xl font-bold mb-4">
                {shelter.shelterName}
              </h2>

              <div className="space-y-3">

                <p className="flex items-center gap-3">
                  <MapPin size={18} />
                  {shelter.location}
                </p>

                <p className="flex items-center gap-3">
                  <Users size={18} />
                  Capacity :
                  {shelter.capacity}
                </p>

                <p>
                  Occupied :
                  {" "}
                  {shelter.occupiedCount}
                </p>

                <span
                  className="
                  bg-emerald-500/20
                  text-emerald-400
                  px-3 py-1 rounded-full
                "
                >
                  {shelter.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}