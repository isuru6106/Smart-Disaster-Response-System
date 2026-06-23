"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

import {
Shield,
AlertTriangle,
Building2,
Package
} from "lucide-react";

export default function Hero() {

const [incidentCount, setIncidentCount] =
useState(0);

const [shelterCount, setShelterCount] =
useState(0);

const [resourceCount, setResourceCount] =
useState(0);

useEffect(() => {
loadStats();
}, []);

const loadStats = async () => {


try {

  const incidents =
    await axios.get(
      "http://localhost:8082/api/incidents"
    );

  const shelters =
    await axios.get(
      "http://localhost:8084/api/shelters"
    );

  const resources =
    await axios.get(
      "http://localhost:8083/api/resources"
    );

  setIncidentCount(
    incidents.data.length
  );

  setShelterCount(
    shelters.data.length
  );

  const totalResources =
    resources.data.reduce(
      (
        sum: number,
        resource: any
      ) =>
        sum +
        Number(
          resource.quantity || 0
        ),
      0
    );

  setResourceCount(
    totalResources
  );

} catch (error) {

  console.error(error);

}


};

return (


<section className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

  {/* Background Effects */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[150px]" />

  <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/20 blur-[150px]" />

  <div className="max-w-7xl mx-auto px-8 pt-40 relative z-10">

    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
    >

      <span className="
        bg-emerald-500/20
        text-emerald-400
        px-5 py-2
        rounded-full
        text-sm
        font-medium
      ">
        Real-Time Disaster Monitoring
      </span>

      {/* Animated Title */}

     {/* Animated Typing Title */}

<div className="mt-8">

  <h1 className="text-7xl md:text-8xl font-bold leading-tight">

    <TypeAnimation
      sequence={[
        "Respond Faster.",
      ]}
      speed={40}
      cursor={false}
      repeat={0}
      className="text-white"
    />

    <br />

    <span className="text-emerald-400">

      <TypeAnimation
        sequence={[
          1200,
          "Save More Lives."
        ]}
        speed={40}
        cursor={true}
        repeat={0}
      />

    </span>

  </h1>

</div>

      <p className="
        text-slate-400
        text-xl
        mt-8
        max-w-3xl
        leading-relaxed
      ">
        Integrated disaster response platform for
        incident reporting, shelter coordination,
        emergency requests and intelligent
        resource management across affected regions.
      </p>

      {/* Buttons */}

      <div className="
        flex
        flex-wrap
        gap-5
        mt-12
      ">

        <Link href="/register">

          <button className="
            bg-emerald-500
            hover:bg-emerald-400
            transition
            px-8
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            shadow-emerald-500/20
          ">
            Register Now
          </button>

        </Link>

        <Link href="/login">

          <button className="
            border
            border-slate-700
            hover:border-emerald-400
            hover:text-emerald-400
            transition
            px-8
            py-4
            rounded-2xl
          ">
            Login
          </button>

        </Link>

      </div>

    </motion.div>

    {/* Statistics Cards */}

    <div className="
      grid
      md:grid-cols-4
      gap-6
      mt-24
    ">

      <motion.div
        whileHover={{
          scale: 1.05
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-7
        "
      >

        <AlertTriangle
          className="
            text-red-400
            mb-5
          "
          size={34}
        />

        <h3 className="
          text-5xl
          font-bold
        ">

          <CountUp
            end={incidentCount}
            duration={2}
          />

        </h3>

        <p className="
          text-slate-400
          mt-3
        ">
          Active Incidents
        </p>

      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-7
        "
      >

        <Building2
          className="
            text-blue-400
            mb-5
          "
          size={34}
        />

        <h3 className="
          text-5xl
          font-bold
        ">

          <CountUp
            end={shelterCount}
            duration={2}
          />

        </h3>

        <p className="
          text-slate-400
          mt-3
        ">
          Available Shelters
        </p>

      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-7
        "
      >

        <Package
          className="
            text-orange-400
            mb-5
          "
          size={34}
        />

        <h3 className="
          text-5xl
          font-bold
        ">

          <CountUp
            end={resourceCount}
            duration={2}
            separator=","
          />

        </h3>

        <p className="
          text-slate-400
          mt-3
        ">
          Resources Available
        </p>

      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-7
        "
      >

        <Shield
          className="
            text-emerald-400
            mb-5
          "
          size={34}
        />

        <h3 className="
          text-5xl
          font-bold
        ">
          24/7
        </h3>

        <p className="
          text-slate-400
          mt-3
        ">
          Monitoring
        </p>

      </motion.div>

    </div>

  </div>

</section>

);

}
