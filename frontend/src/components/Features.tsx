"use client";

import {
AlertTriangle,
Building2,
Package,
Bell,
Shield,
Users,
Activity,
Globe
} from "lucide-react";

const features = [
{
icon: AlertTriangle,
title: "Incident Management",
desc: "Track, monitor and manage disaster incidents in real time with centralized coordination."
},
{
icon: Building2,
title: "Shelter Management",
desc: "Monitor shelter availability, occupancy levels and emergency accommodation facilities."
},
{
icon: Package,
title: "Resource Tracking",
desc: "Manage emergency supplies, equipment and resource allocation across regions."
},
{
icon: Bell,
title: "Emergency Requests",
desc: "Receive, process and respond to citizen emergency requests instantly."
},
{
icon: Users,
title: "Responder Teams",
desc: "Coordinate rescue teams and emergency personnel during disaster operations."
},
{
icon: Activity,
title: "Live Monitoring",
desc: "Real-time monitoring dashboard with incident updates and response activities."
},
{
icon: Globe,
title: "Regional Coverage",
desc: "Support disaster response operations across multiple locations and districts."
},
{
icon: Shield,
title: "24/7 Protection",
desc: "Continuous disaster monitoring and emergency response readiness."
}
];

export default function Features() {

return (

<section
  id="features"
  className="bg-slate-950 py-32"
>

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">

      <span className="
        bg-emerald-500/20
        text-emerald-400
        px-5 py-2
        rounded-full
        text-sm
      ">
        System Capabilities
      </span>

      <h2 className="
        text-5xl
        md:text-6xl
        font-bold
        mt-6
      ">
        Core Services
      </h2>

      <p className="
        text-slate-400
        mt-6
        text-xl
        max-w-3xl
        mx-auto
      ">
        Comprehensive disaster management tools
        designed to improve response efficiency,
        resource allocation and citizen safety.
      </p>

    </div>

    <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-8
    ">

      {features.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="
            bg-slate-900/80
            backdrop-blur-xl
            border
            border-slate-800
            p-8
            rounded-3xl
            hover:border-emerald-500
            hover:-translate-y-2
            transition-all
            duration-300
            "
          >

            <div className="
              w-16 h-16
              rounded-2xl
              bg-emerald-500/20
              flex items-center
              justify-center
              mb-6
            ">

              <Icon
                size={32}
                className="text-emerald-400"
              />

            </div>

            <h3 className="
              text-2xl
              font-bold
              mb-4
            ">
              {item.title}
            </h3>

            <p className="
              text-slate-400
              leading-relaxed
            ">
              {item.desc}
            </p>

          </div>

        );

      })}

    </div>

  </div>

</section>

);

}
