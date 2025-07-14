'use client';

import { UsersData } from "@/mock/users-data";
import { IconUser, IconKey, IconLogout2, IconArticle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import '@/mock/hovering.css';

export default function HakAksesPage() {
  const router = useRouter();
  const Users = UsersData;

  const handleLogout = () => {
    router.push('/users');
  };

  const handleUsers = () => {
    router.push('/users/utama');
  };

  const handleNews = () => {
    router.push('/users/news');
  };

  return (
    <div className="sidebar-container">
      {/* SIDEBAR */}
      <div id="sidebar">
        <h1>Connect</h1>
        <div id="list-button">
          <button onClick={handleUsers} className="sidebar-button">
            <IconUser size={20} /> Users
          </button>
          <button className="sidebar-button active">
            <IconKey size={20} /> Hak Akses
          </button>
          <button onClick={handleNews} className="sidebar-button">
            <IconArticle size={20} /> News
          </button>
          <button onClick={handleLogout} className="sidebar-button">
            <IconLogout2 size={20} /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div id="content" className="flex flex-col flex-1 h-full p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Hak Akses</h1>
        <div className="space-y-3">
          {Users.map((user, index) => {
            const isInactive = user.status.toLowerCase() === 'tidak aktif';
            const isAdmin = user.roles.toLowerCase() === 'admin';
            const roleColor = isAdmin ? 'text-red-600' : 'text-blue-600';

            return (
              <div key={index} className="bg-white rounded-md shadow p-4 flex justify-between items-center">
                <p className={`text-lg font-medium ${isInactive ? 'text-red-600' : 'text-black'}`}>
                  {user.fullname}
                  {isInactive && <span className="ml-2 text-sm text-red-500">(Tidak Aktif)</span>}
                </p>
                <span className={`${roleColor} font-semibold`}>{user.roles}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
