"use client";
import { useCart } from "@/app/Context/CartContext";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 border-b pb-4 text-white">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-6xl mb-4">Cart Is Empty</div>
          <p className="text-xl text-black mb-6">Your cart is empty</p>
          <a
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
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
                    <div className="flex items-center mb-4 sm:mb-0">
                      <span className="mr-4 text-black">Quantity:</span>
                      <div className="flex items-center border rounded">
                        <button
                          className="px-3 py-1 border-r hover:bg-gray-100 text-black"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, (item.quantity || 1) - 1)
                            )
                          }
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-black">
                          {item.quantity || 1}
                        </span>
                        <button
                          className="px-3 py-1 border-l hover:bg-gray-100 text-black"
                          onClick={() =>
                            updateQuantity(item.id, (item.quantity || 1) + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between items-center text-xl mb-6">
              <span className="font-semibold text-black">Total:</span>
              <span className="font-bold text-black">₹ {totalPrice}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <a
                href="/products"
                className="px-6 py-3 bg-gray-200 text-black rounded-lg text-center hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </a>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
