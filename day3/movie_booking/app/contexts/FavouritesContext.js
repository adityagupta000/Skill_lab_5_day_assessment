import { useState, useEffect } from "react";

const FavoriteComponent = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Loaded favorites:", savedFavorites);
    setFavorites(savedFavorites);
  }, []);

  const addToFavorite = (item) => {
    const updatedFavorites = [...favorites, item];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    console.log("Updated favorites:", updatedFavorites);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <button onClick={() => addToFavorite("Item 1")}>Add to Favorite</button>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteComponent;
