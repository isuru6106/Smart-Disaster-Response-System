"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const incidentData = [
  { name: "High", value: 15 },
  { name: "Medium", value: 25 },
  { name: "Low", value: 40 },
];

const requestData = [
  { name: "Pending", value: 20 },
  { name: "Approved", value: 45 },
  { name: "Rejected", value: 10 },
];

const shelterData = [
  { shelter: "Colombo", capacity: 500 },
  { shelter: "Galle", capacity: 350 },
  { shelter: "Kandy", capacity: 420 },
  { shelter: "Jaffna", capacity: 280 },
];

const resourceData = [
  { name: "Food", value: 500 },
  { name: "Water", value: 300 },
  { name: "Medicine", value: 200 },
  { name: "Tents", value: 150 },
];

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      <h1 className="text-5xl font-bold mb-3">
        Analytics Dashboard
      </h1>

      <p className="text-slate-400 mb-10">
        Disaster response statistics and insights
      </p>

      {/* Top Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Incidents
          </h3>

          <p className="text-5xl font-bold text-red-400 mt-3">
            80
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Requests
          </h3>

          <p className="text-5xl font-bold text-purple-400 mt-3">
            75
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Shelters
          </h3>

          <p className="text-5xl font-bold text-blue-400 mt-3">
            24
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Resources
          </h3>

          <p className="text-5xl font-bold text-orange-400 mt-3">
            1150
          </p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Incident Severity */}
        <div className="bg-[#141D35] p-8 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Incident Severity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incidentData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {incidentData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* Request Status */}
        <div className="bg-[#141D35] p-8 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Request Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={requestData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* Shelter Capacity */}
        <div className="bg-[#141D35] p-8 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Shelter Capacity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={shelterData}>
              <XAxis dataKey="shelter" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="capacity" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* Resource Distribution */}
        <div className="bg-[#141D35] p-8 rounded-3xl">

          <h2 className="text-2xl font-bold mb-6">
            Resource Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={resourceData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {resourceData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}