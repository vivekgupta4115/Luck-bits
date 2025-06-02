import React from "react";

export default function LiveCasinoGameSearchBarlg() {
  return (
    <div className="hidden lg:block w-full p-4 ">
      <label className="text-white block mb-2 text-sm font-medium">GAMES</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Game Search"
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
