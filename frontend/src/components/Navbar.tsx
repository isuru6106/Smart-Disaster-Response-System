"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
Shield,
Menu,
User,
LogOut,
LayoutDashboard
} from "lucide-react";

export default function Navbar() {

const router = useRouter();

const [role, setRole] =
useState("");

const [userName, setUserName] =
useState("");

useEffect(() => {

setRole(
  localStorage.getItem("role") || ""
);

setUserName(
  localStorage.getItem("name") || ""
);

}, []);

const logout = () => {


localStorage.clear();

router.push("/login");


};

const dashboardLink =
role === "ADMIN"
? "/admin/dashboard"
: role === "RESPONDER"
? "/responder/dashboard"
: "/citizen/dashboard";

return (

<nav className="
  fixed
  top-0
  w-full
  z-50
  backdrop-blur-xl
  bg-slate-950/80
  border-b
  border-slate-800
">

  <div className="
    max-w-7xl
    mx-auto
    px-8
    h-20
    flex
    items-center
    justify-between
  ">

    {/* Logo */}

    <Link
      href="/"
      className="flex items-center gap-3"
    >

      <div className="
        bg-emerald-500
        p-2
        rounded-xl
      ">

        <Shield size={24} />

      </div>

      <div>

        <h1 className="
          font-bold
          text-xl
        ">
          DisasterGuard
        </h1>

        <p className="
          text-xs
          text-slate-400
        ">
          Smart Response System
        </p>

      </div>

    </Link>

    {/* Desktop Menu */}

    <div className="
      hidden
      md:flex
      items-center
      gap-8
      text-slate-300
    ">

      <Link
        href="/"
        className="
          hover:text-emerald-400
          transition
        "
      >
        Home
      </Link>

      <a
        href="#features"
        className="
          hover:text-emerald-400
          transition
        "
      >
        Features
      </a>

      <a
        href="#statistics"
        className="
          hover:text-emerald-400
          transition
        "
      >
        Statistics
      </a>

      {!role ? (

        <>
          <Link
            href="/login"
            className="
              hover:text-emerald-400
              transition
            "
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
              bg-emerald-500
              px-5
              py-2
              rounded-full
              text-white
              hover:bg-emerald-400
              transition
            "
          >
            Register
          </Link>
        </>

      ) : (

        <>
          <Link
            href={dashboardLink}
            className="
              flex
              items-center
              gap-2
              text-emerald-400
            "
          >

            <LayoutDashboard
              size={18}
            />

            Dashboard

          </Link>

          <div className="
            flex
            items-center
            gap-2
          ">

            <User
              size={18}
            />

            <span>
              {userName}
            </span>

          </div>

          <button
            onClick={logout}
            className="
              flex
              items-center
              gap-2
              text-red-400
              hover:text-red-300
            "
          >

            <LogOut
              size={18}
            />

            Logout

          </button>
        </>

      )}

    </div>

    {/* Mobile Menu */}

    <Menu
      className="
        md:hidden
        text-white
      "
    />

  </div>

</nav>

);

}
