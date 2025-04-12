"use client";
import { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import { useSearch } from "./contexts/SearchContext";

const API_KEY = "38c0eda6";

export default function Home() {
  const { search, searchQuery } = useSearch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if (!searchQuery.trim()) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&page=1`
        );
        const data = await response.json();

        if (data.Response === "True" && Array.isArray(data.Search)) {
          const detailedMovies = await Promise.all(
            data.Search.map(async (movie) => {
              try {
                const movieResponse = await fetch(
                  `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
                );
                const movieData = await movieResponse.json();
                return movieData;
              } catch (err) {
                console.error(
                  `Error fetching details for ${movie.Title}:`,
                  err
                );
                return movie;
              }
            })
          );
          setMovies(detailedMovies);
        } else {
          setError(`No results found for "${searchQuery}"`);
          setMovies([]);
        }
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searchQuery]);

  const filteredMovies = movies.filter((movie) => {
    const searchLower = search.toLowerCase().trim();

    if (!searchLower) return true;

    return (
      (movie.Title && movie.Title.toLowerCase().includes(searchLower)) ||
      (movie.Plot && movie.Plot.toLowerCase().includes(searchLower)) ||
      (movie.Actors && movie.Actors.toLowerCase().includes(searchLower)) ||
      (movie.Director && movie.Director.toLowerCase().includes(searchLower)) ||
      (movie.Year && movie.Year.includes(searchLower))
    );
  });

  return (
    <div className="container-fluid mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {searchQuery === "pokemon"
          ? "Pokemon Movies"
          : `Movies: ${searchQuery}`}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-600 mb-4">{error}</p>
        </div>
      ) : (
        <>
          <p className="mb-4 text-black">
            Found {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "movie" : "movies"}
            {search ? ` matching "${search}"` : ""}
          </p>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center text-black py-10 bg-gray-100 rounded-lg">
              No movies found matching your search.
            </div>
          )}
        </>
      )}
    </div>
  );
}
