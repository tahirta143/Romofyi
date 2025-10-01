"use client";
import React, { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch news from backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/news");
        const data = await res.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-yellow-600 w-full p-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Latest News
        </h1>
      </div>

      {/* Loader */}
      {loading ? (
        <p className="text-center mt-10 text-lg md:text-xl">Loading news...</p>
      ) : (
        <div className="mt-12 space-y-12 px-4 md:px-12">
          {news.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-10 space-y-6 md:space-y-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-72 h-48 object-cover rounded-md shadow-md"
              />
              <div className="max-w-2xl text-center md:text-left">
                <h1 className="font-bold text-xl md:text-2xl">{item.title}</h1>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-gray-600 text-sm sm:text-base">
                  <p>7 July 2019</p>
                  <p className="cursor-pointer hover:text-blue-600">
                    Like Comment
                  </p>
                </div>
                <p className="mt-4 text-gray-700 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Newsletter */}
      <div className="bg-gray-100 mt-16 py-12 px-4 flex flex-col items-center text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Subscribe To The Newsletter
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 h-10 border-2 p-2 rounded-full focus:outline-none"
          />
          <button className="bg-blue-950 text-white w-full sm:w-40 rounded-full h-10 hover:bg-yellow-600 transition duration-500 ease-in-out hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
