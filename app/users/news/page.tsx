'use client';

import { useRouter } from 'next/navigation';
import { IconUser, IconKey, IconLogout2, IconArticle } from "@tabler/icons-react";
import '@/mock/hovering.css';

export default function NewsPage() {
  const router = useRouter();

  const handleUsers = () => {
    router.push('/users/utama');
  };

  const handleHakAkses = () => {
    router.push('/users/hak_akses');
  };

  const handleLogout = () => {
    router.push('/users');
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
          <button onClick={handleHakAkses} className="sidebar-button">
            <IconKey size={20} /> Hak Akses
          </button>
          <button className="sidebar-button active">
            <IconArticle size={20} /> News
          </button>
          <button onClick={handleLogout} className="sidebar-button">
            <IconLogout2 size={20} /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div id="content" className="flex flex-col flex-1 h-full p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Berita Terbaru</h1>
        <div className="bg-white rounded-md shadow p-6">
          <p className="text-gray-700">
            Belum ada berita yang tersedia untuk saat ini. Silakan cek kembali nanti.
          </p>
        </div>
      </div>
    </div>
  );
}
