"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      router.push("/Product");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md w-80 flex flex-col items-center">
        <Image
          src="/1.png"
          alt="Logo"
          width={80}
          height={30}
          className="mb-4"
        />
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          Login
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-black rounded"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-black rounded"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 mt-4 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
