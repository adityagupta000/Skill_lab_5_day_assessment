"use client";
import { useFavorites } from "../contexts/MovieBookContext";
import MovieCard from "../Components/MovieCard";
import { useSearch } from "../contexts/SearchContext";

export default function Favorites() {
  const { favorites } = useFavorites();
  const { search } = useSearch();

  const filteredFavorites = favorites.filter((movie) => {
    const title = movie.title || '';
    const desc = movie.desc || '';
    const query = search || '';

    return (
      title.toLowerCase().includes(query.toLowerCase()) ||
      desc.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredFavorites.length > 0 ? (
  filteredFavorites.map((movie, index) => (
    <MovieCard key={movie.id || `fav-${index}`} movie={movie} />
  ))
) : (
  <p>No favorite movies found matching your search.</p>
)}

      </div>
    </div>
  );
}
