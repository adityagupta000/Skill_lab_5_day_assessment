"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearch } from "../contexts/SearchContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { search, setSearch, setSearchQuery } = useSearch();
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    setInput(search);
  }, [search]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchQuery(input.trim());
      router.push("/");
    }
  };

  const handleClearSearch = () => {
    setInput("");
    setSearch("");
    setSearchQuery("pokemon");
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Cobra</Link>
        </div>

        <form className="relative w-1/2 sm:w-72" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={input}
            onChange={handleSearchChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {input && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✕
            </button>
          )}
        </form>

        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/favourite" className="text-white hover:text-gray-300">
            Favorites
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
