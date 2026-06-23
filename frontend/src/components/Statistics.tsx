"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

export default function Statistics() {

const [incidentCount, setIncidentCount] =
useState(0);

const [shelterCount, setShelterCount] =
useState(0);

const [resourceCount, setResourceCount] =
useState(0);

const [requestCount, setRequestCount] =
useState(0);

useEffect(() => {
loadStatistics();
}, []);

const loadStatistics = async () => {

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
      (sum: number, resource: any) =>
        sum +
        Number(resource.quantity || 0),
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

<section
  id="statistics"
  className="bg-slate-950 py-32"
>

  <div className="max-w-7xl mx-auto px-8">

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-[40px]
      p-12
    ">

      <h2 className="
        text-5xl
        font-bold
        text-center
        mb-16
      ">
        Live System Statistics
      </h2>

      <div className="
        grid
        md:grid-cols-4
        gap-8
      ">

        <div className="text-center">

          <h3 className="
            text-6xl
            font-bold
            text-red-400
          ">

            <CountUp
              end={incidentCount}
              duration={2}
              enableScrollSpy
            />

          </h3>

          <p className="
            text-slate-400
            mt-4
          ">
            Active Incidents
          </p>

        </div>

        <div className="text-center">

          <h3 className="
            text-6xl
            font-bold
            text-blue-400
          ">

            <CountUp
              end={shelterCount}
              duration={2}
              enableScrollSpy
            />

          </h3>

          <p className="
            text-slate-400
            mt-4
          ">
            Available Shelters
          </p>

        </div>

        <div className="text-center">

          <h3 className="
            text-6xl
            font-bold
            text-orange-400
          ">

            <CountUp
              end={resourceCount}
              duration={2}
              separator=","
              enableScrollSpy
            />

          </h3>

          <p className="
            text-slate-400
            mt-4
          ">
            Resources Available
          </p>

        </div>

        <div className="text-center">

          <h3 className="
            text-6xl
            font-bold
            text-emerald-400
          ">

            <CountUp
              end={requestCount}
              duration={2}
              enableScrollSpy
            />

          </h3>

          <p className="
            text-slate-400
            mt-4
          ">
            Emergency Requests
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

);

}
