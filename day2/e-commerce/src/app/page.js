import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-4 shadow-md bg-white">
      <div>
        <Image src="/1.png" alt="Flipkart Logo" width={90} height={20} />
      </div>

      <div className="flex-grow mx-8 max-w-xl">
        <div className="flex items-center bg-gray-100 rounded-sm">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full px-4 py-2 bg-transparent rounded-lg outline-none text-gray-700 placeholder-gray-500"
          />
          <button className="px-4 py-2 text-blue-600 hover:bg-gray-200 rounded-r-sm border-l border-red-300">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button className="px-4 py-1 text-white-200 bg-red-500 rounded-sm">
            Home
          </button>
          <a href="/Login">
            <button className="px-4 py-1 text-white-200 bg-green-500 rounded-sm">
              Login
            </button>
          </a>
          <button className="px-4 py-1 text-white bg-blue-200 bg-blue-500 rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

