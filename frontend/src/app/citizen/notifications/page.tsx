"use client";

import {
  Bell,
  AlertTriangle,
  Home,
  Package,
  CheckCircle
} from "lucide-react";

export default function CitizenNotificationsPage() {

  const notifications = [

    {
      id: 1,
      title: "Flood Warning",
      message: "Heavy flooding reported in Colombo district.",
      type: "danger",
      time: "5 mins ago"
    },

    {
      id: 2,
      title: "Shelter Available",
      message: "Malabe Community Hall is now accepting evacuees.",
      type: "info",
      time: "20 mins ago"
    },

    {
      id: 3,
      title: "Emergency Request Approved",
      message: "Your emergency assistance request has been approved.",
      type: "success",
      time: "1 hour ago"
    },

    {
      id: 4,
      title: "Resource Distribution",
      message: "Food and water supplies available at Kaduwela Center.",
      type: "warning",
      time: "2 hours ago"
    }

  ];

  return (

    <div className="min-h-screen bg-[#050B1F] text-white">

      {/* Header */}

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <div className="flex items-center gap-3">

          <Bell
            className="text-cyan-400"
            size={35}
          />

          <div>

            <h1 className="text-4xl font-bold">
              Notifications
            </h1>

            <p className="text-slate-400">
              Emergency alerts and updates
            </p>

          </div>

        </div>

      </div>

      <div className="p-8">

        <div className="space-y-5">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
              border border-slate-800
              "
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  {notification.type === "danger" && (
                    <AlertTriangle
                      className="text-red-400"
                      size={30}
                    />
                  )}

                  {notification.type === "info" && (
                    <Home
                      className="text-blue-400"
                      size={30}
                    />
                  )}

                  {notification.type === "success" && (
                    <CheckCircle
                      className="text-emerald-400"
                      size={30}
                    />
                  )}

                  {notification.type === "warning" && (
                    <Package
                      className="text-orange-400"
                      size={30}
                    />
                  )}

                  <div>

                    <h2 className="text-xl font-bold">
                      {notification.title}
                    </h2>

                    <p className="text-slate-400 mt-2">
                      {notification.message}
                    </p>

                  </div>

                </div>

                <span className="text-slate-500 text-sm">
                  {notification.time}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}