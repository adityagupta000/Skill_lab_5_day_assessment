"use client"; // Ensure this runs on the client side

import { useFavorites } from "@/app/Context/FavoriteContext";
import { useCart } from "@/app/Context/CartContext";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 border-b pb-4 text-white">
        Favourite
      </h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-6xl mb-4">No Favourite</div>
          <p className="text-xl text-black mb-6">No favourite items yet.</p>
          <a
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <div className="sm:w-1/4 mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-48 object-contain rounded-md"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="text-black mt-2">{item.desc}</p>
                  <p className="font-bold text-lg mt-4 text-black">
                    ${item.price}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
