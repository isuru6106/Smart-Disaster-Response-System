"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  Search,
  Trash2,
  UserCog
} from "lucide-react";

export default function AdminUsersPage() {

  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = async (id: number) => {
    try {

      await axios.delete(
        `http://localhost:8081/api/users/${id}`
      );

      loadUsers();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-white p-10">

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">

        <div className="bg-emerald-500/20 p-4 rounded-2xl">
          <Users size={35} className="text-emerald-400" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            User Management
          </h1>

          <p className="text-slate-400">
            Manage registered users in the system
          </p>
        </div>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Total Users
          </h3>

          <p className="text-5xl font-bold text-emerald-400 mt-3">
            {users.length}
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Admin Users
          </h3>

          <p className="text-5xl font-bold text-blue-400 mt-3">
            {
              users.filter(
                (u) => u.role === "ADMIN"
              ).length
            }
          </p>
        </div>

        <div className="bg-[#141D35] p-8 rounded-3xl">
          <h3 className="text-slate-400">
            Citizens
          </h3>

          <p className="text-5xl font-bold text-orange-400 mt-3">
            {
              users.filter(
                (u) => u.role === "CITIZEN"
              ).length
            }
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#141D35] rounded-3xl p-6 mb-8">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              bg-slate-900
              rounded-xl
              py-4
              pl-12
              pr-4
              outline-none
            "
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-[#141D35] rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-900">

              <th className="p-5 text-left">
                ID
              </th>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Role
              </th>

              <th className="p-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="border-b border-slate-800 hover:bg-slate-900/50"
              >

                <td className="p-5">
                  {user.id}
                </td>

                <td className="p-5">
                  {user.name}
                </td>

                <td className="p-5">
                  {user.email}
                </td>

                <td className="p-5">

                  <span
                    className="
                      px-3 py-1 rounded-full
                      bg-emerald-500/20
                      text-emerald-400
                    "
                  >
                    {user.role}
                  </span>

                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-4">

                    <button
                      className="
                        bg-blue-500/20
                        p-3
                        rounded-xl
                        hover:bg-blue-500/40
                      "
                    >
                      <UserCog
                        size={18}
                        className="text-blue-400"
                      />
                    </button>

                    <button
                      onClick={() =>
                        deleteUser(user.id)
                      }
                      className="
                        bg-red-500/20
                        p-3
                        rounded-xl
                        hover:bg-red-500/40
                      "
                    >
                      <Trash2
                        size={18}
                        className="text-red-400"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}