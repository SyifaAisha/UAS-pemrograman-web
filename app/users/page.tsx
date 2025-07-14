'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { placeholders, users } from "@/mock/id_login";

interface Placeholder {
  id: string;
  placeholder: string;
}

interface User {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>(
    placeholders.reduce((acc, { id }) => ({ ...acc, [id]: '' }), {})
  );

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = formData;

    const isValidUser = users.some(
      (user: User) => user.username === username && user.password === password
    );

    if (isValidUser) {
      router.push('/users/utama');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        {placeholders.map(({ id, placeholder }: Placeholder) => (
          <div key={id} className="mb-4">
            <input
              type={id === 'password' ? 'password' : 'text'}
              name={id}
              id={id}
              placeholder={placeholder}
              value={formData[id]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default Login;
