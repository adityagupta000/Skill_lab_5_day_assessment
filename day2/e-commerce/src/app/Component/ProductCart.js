"use client";

import { useCart } from "@/app/Context/CartContext";
import { useFavorites } from "@/app/Context/FavoriteContext";

export default function ProductCard({ product, showRemoveButton = false }) {
  const { cart, addToCart } = useCart();
  const { favorites, toggleFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="p-3 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-contain"
          />
        </div>
      </div>

      <div className="space-y-1 text-center">
        <h2 className="text-sm font-semibold text-black truncate">
          {product.name}
        </h2>
        <p className="text-gray-800 font-medium">₹{product.price}</p>
        <div className="pt-2 flex space-x-1">
          <button
            onClick={() => addToCart(product)}
            className={`flex-1 px-2 py-1 text-sm rounded-md text-white transition-colors ${
              isInCart
                ? "bg-black text-white"
                : "bg-black hover:bg-gray-800 text-white"
            }`}
          >
            {isInCart ? "✓ Added" : "Add To Cart"}
          </button>

          {showRemoveButton ? (
            <button
              onClick={() => removeFavorite(product.id)}
              className="flex-1 px-2 py-1 text-sm bg-white text-black border border-black rounded-md hover:bg-gray-100 transition-colors"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => toggleFavorite(product)}
              className={`flex-1 px-2 py-1 text-sm rounded-md transition-colors ${
                isFavorite
                  ? "bg-white text-black border border-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {isFavorite ? "Favorited" : "♡"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
