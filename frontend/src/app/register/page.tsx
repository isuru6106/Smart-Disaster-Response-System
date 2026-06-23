"use client";

import { useState } from "react";
import { registerUser } from "@/services/authService";
import {
  UserPlus,
  Eye,
  EyeOff
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "CITIZEN",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);

      toast.success(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "CITIZEN",
      });

    } catch {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-10 rounded-3xl"
      >

        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500/20 p-4 rounded-2xl">
            <UserPlus
              size={50}
              className="text-emerald-400"
            />
          </div>
        </div>

        <h1 className="text-white text-4xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Join DisasterGuard Platform
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
          required
        />

        <div className="relative mb-4">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-4 text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        <select
          value={formData.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
          className="w-full p-4 mb-6 rounded-xl bg-slate-800 border border-slate-700 text-white"
        >
          <option value="CITIZEN">
            Citizen
          </option>
          <option value="RESPONDER">
            Responder
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 py-4 rounded-xl text-white font-bold transition"
        >
          Create Account
        </button>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-400"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}