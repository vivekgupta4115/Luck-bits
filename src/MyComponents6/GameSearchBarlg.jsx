import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GameSearchBarlg() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Debounce navigation (only navigate after 300ms of inactivity)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        navigate(`/virtualsports/search/${encodeURIComponent(searchTerm)}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, navigate]);

  return (
    <div className="hidden lg:block w-full p-2">
      
      <label className="text-white block mb-2 text-sm font-medium">GAMES</label>
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Game Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-headerBgSelected2 text-white placeholder-gray-400 rounded-md px-4 py-2 pr-10 text-sm outline-none"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
