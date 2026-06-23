"use client";

import Link from "next/link";

import {
Phone,
ShieldAlert,
Bell,
AlertTriangle
} from "lucide-react";

export default function EmergencyCTA() {

return (

<section className="py-28 bg-slate-950">

  <div className="max-w-7xl mx-auto px-8">

    <div className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-red-600
      via-orange-500
      to-red-500
      rounded-[40px]
      p-16
    ">

      {/* Background Glow */}

      <div className="
        absolute
        top-0
        right-0
        w-72
        h-72
        bg-white/10
        rounded-full
        blur-3xl
      " />

      <div className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        gap-10
      ">

        <div>

          <div className="
            flex
            items-center
            gap-4
            mb-5
          ">

            <div className="
              bg-white/20
              p-4
              rounded-2xl
            ">

              <ShieldAlert
                size={40}
              />

            </div>

            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
            ">
              Emergency Response
            </h2>

          </div>

          <p className="
            text-xl
            opacity-90
            max-w-3xl
          ">

            Report emergencies, request
            assistance and connect with
            disaster response teams instantly.
            Our system operates 24/7 to ensure
            rapid response during critical situations.

          </p>

          <div className="
            flex
            flex-wrap
            gap-6
            mt-8
          ">

            <div className="
              flex
              items-center
              gap-2
            ">

              <Bell size={18} />

              Real-Time Alerts

            </div>

            <div className="
              flex
              items-center
              gap-2
            ">

              <AlertTriangle size={18} />

              Incident Reporting

            </div>

            <div className="
              flex
              items-center
              gap-2
            ">

              <Phone size={18} />

              24/7 Support

            </div>

          </div>

        </div>

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
        ">

          <Link href="/register">

            <button className="
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              transition
            ">

              Register Now

            </button>

          </Link>

          <Link href="/login">

            <button className="
              bg-black/20
              border
              border-white/30
              px-8
              py-4
              rounded-2xl
              font-bold
              backdrop-blur-lg
              hover:bg-black/30
              transition
              flex
              items-center
              gap-3
            ">

              <Phone size={20} />

              Send SOS

            </button>

          </Link>

        </div>

      </div>

    </div>

  </div>

</section>


);

}
