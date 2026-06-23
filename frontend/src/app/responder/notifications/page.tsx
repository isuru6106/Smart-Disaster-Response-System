"use client";

import {
  Bell,
  AlertTriangle,
  Package,
  Home,
  Users
} from "lucide-react";

export default function ResponderNotificationsPage() {

  const notifications = [

    {
      id: 1,
      title: "New Incident Reported",
      message: "Flood incident reported in Colombo.",
      icon: "incident",
      time: "2 mins ago"
    },

    {
      id: 2,
      title: "Emergency Request Received",
      message: "Medical assistance requested in Kandy.",
      icon: "request",
      time: "10 mins ago"
    },

    {
      id: 3,
      title: "Low Resource Alert",
      message: "Water supplies running low at Gampaha Center.",
      icon: "resource",
      time: "30 mins ago"
    },

    {
      id: 4,
      title: "Shelter Full",
      message: "Malabe Community Hall reached capacity.",
      icon: "shelter",
      time: "1 hour ago"
    },

    {
      id: 5,
      title: "Response Team Deployed",
      message: "Team Alpha deployed to flood zone.",
      icon: "team",
      time: "2 hours ago"
    }

  ];

  return (

    <div className="min-h-screen bg-[#050B1F] text-white">

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <div className="flex items-center gap-3">

          <Bell
            className="text-orange-400"
            size={35}
          />

          <div>

            <h1 className="text-4xl font-bold">
              Responder Notifications
            </h1>

            <p className="text-slate-400">
              Real-time responder alerts
            </p>

          </div>

        </div>

      </div>

      <div className="p-8 space-y-5">

        {notifications.map((item) => (

          <div
            key={item.id}
            className="
            bg-[#141D35]
            rounded-3xl
            p-6
            border border-slate-800
            "
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                {item.icon === "incident" && (
                  <AlertTriangle
                    className="text-red-400"
                    size={30}
                  />
                )}

                {item.icon === "request" && (
                  <Bell
                    className="text-purple-400"
                    size={30}
                  />
                )}

                {item.icon === "resource" && (
                  <Package
                    className="text-orange-400"
                    size={30}
                  />
                )}

                {item.icon === "shelter" && (
                  <Home
                    className="text-blue-400"
                    size={30}
                  />
                )}

                {item.icon === "team" && (
                  <Users
                    className="text-cyan-400"
                    size={30}
                  />
                )}

                <div>

                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {item.message}
                  </p>

                </div>

              </div>

              <span className="text-slate-500">
                {item.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}