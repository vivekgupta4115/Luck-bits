import React from "react";

export default function ProviderSearch() {
  return (
    <div className="hidden lg:flex items-center w-full bg-headerBgSelected2 border border-[#2a3344] rounded-lg px-4 py-2">
      <input
        type="text"
        placeholder="Provider Search"
        className="bg-headerBgSelected2 text-sm text-gray-300 placeholder-gray-400 w-full focus:outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-300 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
        />
      </svg>
    </div>
  );
}
