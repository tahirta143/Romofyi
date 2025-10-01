"use client";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-yellow-600 w-full p-6 mt-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Featured Products
        </h1>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 px-6 md:px-10">
        {loading ? (
          <p className="col-span-full text-center text-gray-600">Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-[#f2f2f2] rounded-lg shadow hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain mb-4"
                />
              ) : (
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-gray-300 text-gray-600 text-xs mb-4">
                  No Image
                </div>
              )}
              <h1 className="text-center text-sm sm:text-base font-medium">
                {product.title}
              </h1>
              <span className="text-blue-700 font-bold mt-1">
                ${product.price}
              </span>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No products available.
          </p>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-900 text-white rounded-full px-6 py-3 text-sm sm:text-base md:text-lg hover:bg-yellow-600 transition-all duration-500 ease-in-out hover:scale-105">
          See More
        </button>
      </div>
    </div>
  );
}

export default Products;
