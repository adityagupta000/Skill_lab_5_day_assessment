"use client"; // Ensure this runs on the client side

import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add/remove favorite
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((item) => item.id === product.id)) {
        return prevFavorites.filter((item) => item.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

// Hook to use FavoriteContext
export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
}
