"use client";
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("pokemon");

  const value = {
    search,
    setSearch,
    searchQuery,
    setSearchQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
