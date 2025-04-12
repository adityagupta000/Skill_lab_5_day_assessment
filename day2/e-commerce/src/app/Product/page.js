import Navbar from "@/app/Component/Navbar";
import ProductCard from "@/app/Component/ProductCart";

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function Home() {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
}
