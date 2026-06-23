"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6"
];

export default function AnalyticsPage() {

  const [incidentData, setIncidentData] =
    useState<any[]>([]);

  const [requestData, setRequestData] =
    useState<any[]>([]);

  const [resourceData, setResourceData] =
    useState<any[]>([]);

  const [shelterData, setShelterData] =
    useState<any[]>([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {

    try {

      const incidents =
        await axios.get(
          "http://localhost:8082/api/incidents"
        );

      const requests =
        await axios.get(
          "http://localhost:8086/api/requests"
        );

      const resources =
        await axios.get(
          "http://localhost:8083/api/resources"
        );

      const shelters =
        await axios.get(
          "http://localhost:8084/api/shelters"
        );

      processIncidentData(
        incidents.data
      );

      processRequestData(
        requests.data
      );

      processResourceData(
        resources.data
      );

      processShelterData(
        shelters.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  const processIncidentData = (
    incidents: any[]
  ) => {

    const counts: any = {};

    incidents.forEach((i) => {

      counts[i.severity] =
        (counts[i.severity] || 0) + 1;

    });

    setIncidentData(

      Object.keys(counts).map(
        (key) => ({
          name: key,
          value: counts[key]
        })
      )

    );

  };

  const processRequestData = (
    requests: any[]
  ) => {

    const counts: any = {};

    requests.forEach((r) => {

      counts[r.status] =
        (counts[r.status] || 0) + 1;

    });

    setRequestData(

      Object.keys(counts).map(
        (key) => ({
          status: key,
          count: counts[key]
        })
      )

    );

  };

  const processResourceData = (
    resources: any[]
  ) => {

    setResourceData(

      resources.map((r) => ({
        name: r.resourceName,
        quantity: r.quantity
      }))

    );

  };

  const processShelterData = (
    shelters: any[]
  ) => {

    setShelterData(

      shelters.map((s) => ({
        name: s.shelterName,
        occupied: s.occupiedCount
      }))

    );

  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-emerald-400">
          Analytics Dashboard
        </h1>

        <p className="text-slate-400">
          Disaster Response Insights
        </p>

      </div>

      <div className="p-8 grid lg:grid-cols-2 gap-8">

        {/* Incidents */}

        <div className="bg-[#141D35] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Incident Severity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={incidentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >

                {incidentData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                          COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Requests */}

        <div className="bg-[#141D35] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Request Status
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={requestData}
            >

              <XAxis dataKey="status" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#8b5cf6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Resources */}

        <div className="bg-[#141D35] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Resource Inventory
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={resourceData}
            >

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="quantity"
                fill="#f97316"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Shelters */}

        <div className="bg-[#141D35] p-6 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Shelter Occupancy
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={shelterData}
            >

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="occupied"
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}