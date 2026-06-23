"use client";

import { useState } from "react";
import axios from "axios";
import {
  AlertTriangle,
  MapPin,
  FileText,
  ShieldAlert
} from "lucide-react";
import toast from "react-hot-toast";

export default function ReportIncidentPage() {

  const [formData, setFormData] = useState({
    disasterType: "",
    description: "",
    location: "",
    severity: "Low",
    status: "Pending"
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8082/api/incidents",
        formData
      );

      toast.success(
        "Incident Report Submitted Successfully"
      );

      setFormData({
        disasterType: "",
        description: "",
        location: "",
        severity: "Low",
        status: "Pending"
      });

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to submit incident"
      );

    }
  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}
      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-red-400">
          Report Incident
        </h1>

        <p className="text-slate-400 mt-2">
          Report emergencies and disasters immediately
        </p>

      </div>

      <div className="max-w-4xl mx-auto p-10">

        <form
          onSubmit={handleSubmit}
          className="bg-[#141D35] rounded-3xl p-10"
        >

          {/* Disaster Type */}
          <div className="mb-6">

            <label className="block mb-2 text-slate-300">
              Disaster Type
            </label>

            <div className="relative">

              <AlertTriangle
                className="absolute left-4 top-4 text-red-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Flood, Fire, Landslide..."
                value={formData.disasterType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    disasterType: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-slate-900
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
                required
              />

            </div>

          </div>

          {/* Location */}
          <div className="mb-6">

            <label className="block mb-2 text-slate-300">
              Location
            </label>

            <div className="relative">

              <MapPin
                className="absolute left-4 top-4 text-blue-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Enter incident location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-slate-900
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
                required
              />

            </div>

          </div>

          {/* Description */}
          <div className="mb-6">

            <label className="block mb-2 text-slate-300">
              Description
            </label>

            <div className="relative">

              <FileText
                className="absolute left-4 top-4 text-orange-400"
                size={20}
              />

              <textarea
                rows={5}
                placeholder="Describe the situation..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-slate-900
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
                required
              />

            </div>

          </div>

          {/* Severity */}
          <div className="mb-8">

            <label className="block mb-2 text-slate-300">
              Severity Level
            </label>

            <div className="relative">

              <ShieldAlert
                className="absolute left-4 top-4 text-yellow-400"
                size={20}
              />

              <select
                value={formData.severity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    severity: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-slate-900
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

            </div>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              bg-red-500
              hover:bg-red-400
              transition
              py-4
              rounded-xl
              text-lg
              font-bold
            "
          >
            Submit Incident Report
          </button>

        </form>

      </div>

    </div>
  );
}