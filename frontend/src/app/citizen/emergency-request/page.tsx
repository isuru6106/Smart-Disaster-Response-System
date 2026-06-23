"use client";

import { useState } from "react";
import axios from "axios";
import {
  Bell,
  User,
  Phone,
  MapPin,
  Ambulance
} from "lucide-react";
import toast from "react-hot-toast";

export default function EmergencyRequestPage() {

  const [formData, setFormData] = useState({
    citizenName: "",
    contactNumber: "",
    requestType: "Medical",
    location: "",
    status: "Pending"
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8086/api/requests",
        formData
      );

      toast.success(
        "Emergency Request Submitted"
      );

      setFormData({
        citizenName: "",
        contactNumber: "",
        requestType: "Medical",
        location: "",
        status: "Pending"
      });

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to submit request"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}
      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-purple-400">
          Emergency Request
        </h1>

        <p className="text-slate-400 mt-2">
          Request immediate assistance
        </p>

      </div>

      <div className="max-w-4xl mx-auto p-10">

        <form
          onSubmit={handleSubmit}
          className="bg-[#141D35] rounded-3xl p-10"
        >

          {/* Citizen Name */}
          <div className="mb-6">

            <label className="block mb-2">
              Full Name
            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-4 text-emerald-400"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.citizenName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    citizenName: e.target.value
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

          {/* Contact */}
          <div className="mb-6">

            <label className="block mb-2">
              Contact Number
            </label>

            <div className="relative">

              <Phone
                size={20}
                className="absolute left-4 top-4 text-blue-400"
              />

              <input
                type="text"
                placeholder="0771234567"
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contactNumber: e.target.value
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

          {/* Request Type */}
          <div className="mb-6">

            <label className="block mb-2">
              Request Type
            </label>

            <div className="relative">

              <Ambulance
                size={20}
                className="absolute left-4 top-4 text-red-400"
              />

              <select
                value={formData.requestType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    requestType: e.target.value
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
                <option>Medical</option>
                <option>Food</option>
                <option>Water</option>
                <option>Shelter</option>
                <option>Rescue</option>
              </select>

            </div>

          </div>

          {/* Location */}
          <div className="mb-8">

            <label className="block mb-2">
              Current Location
            </label>

            <div className="relative">

              <MapPin
                size={20}
                className="absolute left-4 top-4 text-orange-400"
              />

              <input
                type="text"
                placeholder="Enter location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value
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

          <button
            type="submit"
            className="
              w-full
              bg-purple-500
              hover:bg-purple-400
              transition
              py-4
              rounded-xl
              font-bold
            "
          >
            Submit Emergency Request
          </button>

        </form>

      </div>

    </div>
  );
}