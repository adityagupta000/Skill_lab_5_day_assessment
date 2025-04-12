"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/chat");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-400">
      <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome</h1>
      <p className="text-lg text-white opacity-90">Your personalized AI assistance</p>
      <button
        onClick={handleStart}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200 shadow-lg"
      >
        Get Started
      </button>
    </div>
  );
}