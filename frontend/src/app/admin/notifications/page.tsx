"use client";

import {
Bell,
AlertTriangle,
Users,
Shield,
UserPlus,
Activity
} from "lucide-react";

export default function AdminNotificationsPage() {

const notifications = [

{
  id: 1,
  title: "New User Registered",
  message: "A new citizen account has been created.",
  type: "user",
  time: "2 mins ago"
},

{
  id: 2,
  title: "High Severity Incident",
  message: "Flood incident reported with HIGH severity.",
  type: "danger",
  time: "10 mins ago"
},

{
  id: 3,
  title: "Responder Assigned",
  message: "Responder Team Alpha assigned to Incident #12.",
  type: "team",
  time: "20 mins ago"
},

{
  id: 4,
  title: "System Status",
  message: "All disaster response services operational.",
  type: "system",
  time: "1 hour ago"
},

{
  id: 5,
  title: "Emergency Request Surge",
  message: "Unusual increase in emergency requests detected.",
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
        className="text-emerald-400"
        size={35}
      />

      <div>

        <h1 className="text-4xl font-bold">
          Admin Notifications
        </h1>

        <p className="text-slate-400">
          System alerts and activity monitoring
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

              {notification.type === "user" && (
                <UserPlus
                  className="text-cyan-400"
                  size={30}
                />
              )}

              {notification.type === "danger" && (
                <AlertTriangle
                  className="text-red-400"
                  size={30}
                />
              )}

              {notification.type === "team" && (
                <Users
                  className="text-orange-400"
                  size={30}
                />
              )}

              {notification.type === "system" && (
                <Shield
                  className="text-emerald-400"
                  size={30}
                />
              )}

              {notification.type === "warning" && (
                <Activity
                  className="text-yellow-400"
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
