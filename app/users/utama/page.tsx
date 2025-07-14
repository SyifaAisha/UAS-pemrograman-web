'use client';

import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import UserCard from "@/components/ui/user-card";
import { UsersData } from "@/mock/users-data";
import { IconKey, IconLogout2, IconUser } from "@tabler/icons-react";
import { IconArticle } from "@tabler/icons-react";
import '@/mock/hovering.css';

export default function UsersPage() {
  const Users = UsersData;
  const router = useRouter();

  const handleLogout = () => {
    router.push('/users'); // Kembali ke halaman login
  };
  const handleNews = () => {
    router.push('/users/news');
  };

  const handleHakAkses = () => {
    router.push('/users/hak_akses'); // Arahkan ke halaman Hak Akses
  };

  return (
    <div className="sidebar-container">
      {/* SIDEBAR */}
      <div id="sidebar">
        <h1>Connect</h1>
        <div id="list-button">
          <button className="sidebar-button hvr-grow-custom">
            <IconUser /> Users
          </button>
          <button onClick={handleHakAkses} className="sidebar-button hvr-grow-custom">
            <IconKey /> Hak Akses
          </button>
          <button onClick={handleNews} className="sidebar-button">
            <IconArticle /> News
          </button>
          <button onClick={handleLogout} className="sidebar-button hvr-grow-custom">
            <IconLogout2 /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div id="content" className="flex flex-col flex-1 h-full p-6 overflow-y-auto">
        <Input placeholder="Cari User" className="mb-4" />
        <div id="list-user" className="flex flex-col w-full">
          {Users.map((User, index) => (
            <UserCard
              key={index}
              fullname={User.fullname}
              email={User.email}
              roles={User.roles}
              status={User.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
