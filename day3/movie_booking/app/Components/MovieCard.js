"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFavorites } from "../contexts/MovieBookContext";
import { useState, useEffect } from "react";

export default function MovieCard({ movie }) {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
    setTimeout(() => {
      router.push("/favourite");
    }, 100);
  };

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleViewDetails = () => {
    router.push(`/movie/${movie.imdbID}`);
  };

  const handleClosePopup = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showPopup]);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <>
      <div
        className="bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative w-full pt-[100%]">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback-poster.jpg"}
            alt={movie.Title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 p-2 bg-gray-200 rounded-t-lg"
            loading="lazy"
            priority={false}
          />

          {isFavorite && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              ♥
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-lg mb-1 line-clamp-1 text-black">
            {movie.Title}
          </h3>
          <p className="text-sm text-black mb-2">{movie.Year}</p>
          {movie.Plot && (
            <p className="text-sm text-black line-clamp-2 mb-3">{movie.Plot}</p>
          )}

          <div className="mt-auto">
            <button
              className={`p-2 w-full rounded-md ${
                isFavorite
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white font-medium transition-colors duration-200`}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 relative">
              <div className="relative h-96 md:h-[600px] w-full">
                <Image
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "/fallback-poster.jpg"
                  }
                  alt={movie.Title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="bg-gray-100 p-4"
                  priority={true}
                />
              </div>
            </div>

            <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-black">
                  {movie.Title}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-black">
                    {movie.Year}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-black">
                    {movie.Type}
                  </span>
                  {movie.Rated && (
                    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-black">
                      {movie.Rated}
                    </span>
                  )}
                </div>

                {movie.Plot && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-1 text-black">Plot</h3>
                    <p className="text-black">{movie.Plot}</p>
                  </div>
                )}

                {movie.Actors && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-1 text-black">Cast</h3>
                    <p className="text-black">{movie.Actors}</p>
                  </div>
                )}

                {movie.Director && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-1 text-black">Director</h3>
                    <p className="text-black">{movie.Director}</p>
                  </div>
                )}
              </div>

              <div className="mt-auto space-y-3">
                <button
                  className={`w-full p-3 ${
                    isFavorite
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-800 hover:bg-gray-900"
                  } text-white rounded-lg font-medium transition-colors`}
                  onClick={(e) => {
                    handleFavoriteClick(e);
                    setShowPopup(false);
                  }}
                >
                  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>

                <button
                  className="w-full p-3 bg-gray-200 hover:bg-gray-300 text-black rounded-lg font-medium transition-colors"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>

            <button
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              onClick={() => setShowPopup(false)}
            >
              <span className="text-black font-bold">&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
