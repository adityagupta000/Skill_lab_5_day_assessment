"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/Context/CartContext";
import { useFavorites } from "@/app/Context/FavoriteContext";

export default function Navbar() {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  return (
    <nav className="bg-gray p-3 text-white ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image
            src="/1.png"
            alt="Logo"
            width={80}
            height={80}
           
          />
        </div>

        <div className="flex items-center gap-6">
          <Link href="/favorites" className="flex items-center gap-1">
            <span>Favorites</span>
            <span className="bg-white text-black rounded-full px-2 py-0.5 text-xs">
              {favorites.length}
            </span>
          </Link>

          <Link href="/cart" className="flex items-center gap-1">
            <span>Cart</span>
            <span className="bg-white text-black rounded-full px-2 py-0.5 text-xs">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}