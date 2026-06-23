"use client";

import { useState } from "react";

import {
  Users,
  Plus,
  Phone,
  MapPin,
  Trash2
} from "lucide-react";

export default function ResponseTeamsPage() {

  const [teams, setTeams] = useState([
    {
      id: 1,
      teamName: "Rescue Team Alpha",
      leader: "John Silva",
      contact: "0771234567",
      location: "Colombo",
      status: "Available"
    }
  ]);

  const [newTeam, setNewTeam] = useState({
    teamName: "",
    leader: "",
    contact: "",
    location: "",
    status: "Available"
  });

  const addTeam = () => {

    const team = {
      id: Date.now(),
      ...newTeam
    };

    setTeams([...teams, team]);

    setNewTeam({
      teamName: "",
      leader: "",
      contact: "",
      location: "",
      status: "Available"
    });

  };

  const deleteTeam = (id: number) => {

    setTeams(
      teams.filter(
        (team) => team.id !== id
      )
    );

  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white">

      <div className="bg-[#121A31] border-b border-slate-800 p-6">

        <h1 className="text-4xl font-bold text-cyan-400">
          Response Teams
        </h1>

        <p className="text-slate-400 mt-2">
          Manage emergency response teams
        </p>

      </div>

      <div className="p-8">

        {/* Add Team */}

        <div className="bg-[#141D35] rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Create Response Team
          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            <input
              placeholder="Team Name"
              value={newTeam.teamName}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  teamName: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              placeholder="Leader"
              value={newTeam.leader}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  leader: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              placeholder="Contact"
              value={newTeam.contact}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  contact: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <input
              placeholder="Location"
              value={newTeam.location}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  location: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            />

            <select
              value={newTeam.status}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  status: e.target.value
                })
              }
              className="bg-slate-900 p-4 rounded-xl"
            >
              <option>Available</option>
              <option>Deployed</option>
              <option>Busy</option>
            </select>

          </div>

          <button
            onClick={addTeam}
            className="
            mt-6
            bg-cyan-500
            hover:bg-cyan-400
            px-6 py-3
            rounded-xl
            flex items-center gap-2
            "
          >
            <Plus size={18} />
            Create Team
          </button>

        </div>

        {/* Teams */}

        <div className="grid lg:grid-cols-2 gap-6">

          {teams.map((team) => (

            <div
              key={team.id}
              className="
              bg-[#141D35]
              rounded-3xl
              p-6
              "
            >

              <div className="flex items-center gap-3 mb-4">

                <Users
                  className="text-cyan-400"
                />

                <h2 className="text-2xl font-bold">
                  {team.teamName}
                </h2>

              </div>

              <div className="space-y-3">

                <p>
                  Leader:
                  {" "}
                  <strong>
                    {team.leader}
                  </strong>
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  {team.contact}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {team.location}
                </p>

                <span
                  className={`
                  px-3 py-1 rounded-full
                  ${
                    team.status === "Available"
                    ? "bg-green-500/20 text-green-400"
                    : team.status === "Deployed"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-red-500/20 text-red-400"
                  }
                  `}
                >
                  {team.status}
                </span>

              </div>

              <button
                onClick={() =>
                  deleteTeam(team.id)
                }
                className="
                mt-5
                bg-red-500/20
                text-red-400
                px-4 py-2
                rounded-xl
                flex items-center gap-2
                "
              >
                <Trash2 size={18} />
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}