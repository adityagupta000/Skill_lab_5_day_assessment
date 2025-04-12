"use client";
import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-4">Dashboard</h1>
      <div className="container mx-auto p-4">
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="border p-4 my-2 rounded-lg">
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
