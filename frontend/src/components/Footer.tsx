"use client";

import Link from "next/link";

import {
Shield,
Phone,
Mail,
MapPin,
AlertTriangle,
Home,
Package,
Bell
} from "lucide-react";

export default function Footer() {

return (


<footer className="
  bg-slate-950
  border-t
  border-slate-800
  py-16
">

  <div className="
    max-w-7xl
    mx-auto
    px-8
  ">

    <div className="
      grid
      md:grid-cols-4
      gap-12
    ">

      {/* Logo Section */}

      <div>

        <div className="
          flex
          items-center
          gap-3
          mb-4
        ">

          <div className="
            bg-emerald-500/20
            p-3
            rounded-xl
          ">

            <Shield
              className="
              text-emerald-400
              "
            />

          </div>

          <div>

            <h2 className="
              font-bold
              text-2xl
            ">
              DisasterGuard
            </h2>

            <p className="
              text-slate-400
              text-sm
            ">
              Smart Response System
            </p>

          </div>

        </div>

        <p className="
          text-slate-400
          leading-relaxed
        ">

          A modern disaster response platform
          for incident reporting, shelter
          management, emergency requests and
          resource coordination.

        </p>

      </div>

      {/* Services */}

      <div>

        <h3 className="
          font-bold
          text-lg
          mb-4
        ">
          Services
        </h3>

        <div className="
          space-y-3
          text-slate-400
        ">

          <div className="flex gap-2">

            <AlertTriangle
              size={18}
            />

            Incident Monitoring

          </div>

          <div className="flex gap-2">

            <Home
              size={18}
            />

            Shelter Management

          </div>

          <div className="flex gap-2">

            <Package
              size={18}
            />

            Resource Allocation

          </div>

          <div className="flex gap-2">

            <Bell
              size={18}
            />

            Emergency Requests

          </div>

        </div>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="
          font-bold
          text-lg
          mb-4
        ">
          Quick Links
        </h3>

        <div className="
          flex
          flex-col
          gap-3
          text-slate-400
        ">

          <Link href="/">
            Home
          </Link>

          <Link href="/login">
            Login
          </Link>

          <Link href="/register">
            Register
          </Link>

        </div>

      </div>

      {/* Contact */}

      <div>

        <h3 className="
          font-bold
          text-lg
          mb-4
        ">
          Contact
        </h3>

        <div className="
          space-y-4
          text-slate-400
        ">

          <div className="
            flex
            gap-2
          ">

            <Phone
              size={18}
            />

            011-457-8312

          </div>

          <div className="
            flex
            gap-2
          ">

            <Mail
              size={18}
            />

            support@disasterguard.com

          </div>

          <div className="
            flex
            gap-2
          ">

            <MapPin
              size={18}
            />

            Colombo, Sri Lanka

          </div>

        </div>

      </div>

    </div>

    <hr className="
      border-slate-800
      my-10
    " />

    <div className="
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-4
    ">

      <p className="
        text-slate-500
      ">
        © 2026 DisasterGuard.
        All Rights Reserved.
      </p>

      <div className="
        text-slate-500
      ">
        Smart Disaster Response &
        Resource Management System
      </div>

    </div>

  </div>

</footer>


);

}
