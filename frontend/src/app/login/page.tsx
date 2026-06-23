"use client";

import { useState } from "react";
import { loginUser } from "@/services/authService";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
e.preventDefault();

try {

const response = await loginUser(formData);

console.log(response.data);

toast.success(response.data.message);

const role = response.data.role;

localStorage.setItem(
  "role",
  role
);

if (response.data.name) {

  localStorage.setItem(
    "name",
    response.data.name
  );

}

if (role === "ADMIN") {

  router.push("/admin/dashboard");

} else if (role === "RESPONDER") {

  router.push("/responder/dashboard");

} else {

  router.push("/citizen/dashboard");

}

} catch {

toast.error(
  "Invalid email or password"
);


}
};


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[150px]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-10 rounded-3xl"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500/20 p-4 rounded-2xl">
            <Shield size={50} className="text-emerald-400" />
          </div>
        </div>

        <h1 className="text-white text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Login to DisasterGuard
        </p>

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
          className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
          required
        />

        <div className="relative mb-6">

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
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
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

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 py-4 rounded-xl text-white font-bold transition"
        >
          Login
        </button>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-emerald-400"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}