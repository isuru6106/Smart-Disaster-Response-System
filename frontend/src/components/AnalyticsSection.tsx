"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
AlertTriangle,
Building2,
Package,
Users
} from "lucide-react";

export default function AnalyticsSection() {

const [incidentCount, setIncidentCount] =
useState(0);

const [shelterCount, setShelterCount] =
useState(0);

const [resourceCount, setResourceCount] =
useState(0);

const [requestCount, setRequestCount] =
useState(0);

useEffect(() => {
loadAnalytics();
}, []);

const loadAnalytics = async () => {

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

  const requests =
    await axios.get(
      "http://localhost:8086/api/requests"
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

  setRequestCount(
    requests.data.length
  );

} catch (error) {

  console.error(error);

}

};

return (


<section className="bg-slate-950 py-32">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-20">

      <span className="
        bg-emerald-500/20
        text-emerald-400
        px-4 py-2
        rounded-full
      ">
        Live Analytics Dashboard
      </span>

      <h2 className="
        text-6xl
        font-bold
        mt-6
      ">
        Disaster Analytics
      </h2>

      <p className="
        text-slate-400
        mt-6
        text-lg
        max-w-2xl
        mx-auto
      ">
        Real-time analytics powered by
        incidents, shelters, resources
        and emergency requests.
      </p>

    </div>

    <div className="
      grid
      lg:grid-cols-2
      gap-8
    ">

      {/* Incidents */}

      <motion.div
        whileHover={{
          scale: 1.03
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <AlertTriangle
          size={40}
          className="
            text-red-400
            mb-6
          "
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
          Incidents Reported
        </p>

        <div className="
          mt-6
          h-2
          bg-slate-800
          rounded-full
        ">

          <div
            className="
              h-2
              bg-red-400
              rounded-full
            "
            style={{
              width: "75%"
            }}
          />

        </div>

      </motion.div>

      {/* Shelters */}

      <motion.div
        whileHover={{
          scale: 1.03
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <Building2
          size={40}
          className="
            text-blue-400
            mb-6
          "
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

        <div className="
          mt-6
          h-2
          bg-slate-800
          rounded-full
        ">

          <div
            className="
              h-2
              bg-blue-400
              rounded-full
            "
            style={{
              width: "65%"
            }}
          />

        </div>

      </motion.div>

      {/* Resources */}

      <motion.div
        whileHover={{
          scale: 1.03
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <Package
          size={40}
          className="
            text-orange-400
            mb-6
          "
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
          Emergency Resources
        </p>

        <div className="
          mt-6
          h-2
          bg-slate-800
          rounded-full
        ">

          <div
            className="
              h-2
              bg-orange-400
              rounded-full
            "
            style={{
              width: "90%"
            }}
          />

        </div>

      </motion.div>

      {/* Requests */}

      <motion.div
        whileHover={{
          scale: 1.03
        }}
        className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <Users
          size={40}
          className="
            text-emerald-400
            mb-6
          "
        />

        <h3 className="
          text-5xl
          font-bold
        ">

          <CountUp
            end={requestCount}
            duration={2}
          />

        </h3>

        <p className="
          text-slate-400
          mt-3
        ">
          Emergency Requests
        </p>

        <div className="
          mt-6
          h-2
          bg-slate-800
          rounded-full
        ">

          <div
            className="
              h-2
              bg-emerald-400
              rounded-full
            "
            style={{
              width: "80%"
            }}
          />

        </div>

      </motion.div>

    </div>

  </div>

</section>

);

}
