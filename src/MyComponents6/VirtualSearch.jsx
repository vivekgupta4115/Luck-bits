import React, { useState } from "react";

export default function GameSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showGamesText, setShowGamesText] = useState(true);

  const toggleSearch = () => {
    if (isSearchOpen) {
      // Closing: Wait for transition to finish (1 second)
      setTimeout(() => setShowGamesText(true), 1000);
    } else {
      setShowGamesText(false);
    }
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setQuery("");
  };

  return (
    <div className="flex flex-wrap items-center justify-between p-2 w-full gap-2 lg:hidden">
      {/* Filter Button - Only show when search is fully closed */}
      {showGamesText && (
        <button className="flex items-center gap-2 px-0 py-2 text-hederColor2 text-sm font-bold uppercase transition-all duration-3000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          <span>Select provider</span>
        </button>
      )}

      {/* Search Section */}
      <div className="flex items-center gap-2 flex-1 justify-end">
        {/* Grouped Input + Toggle */}
        <div className="flex items-center gap-0 bg-headerBgSelected2">
          {/* Search Input - Always rendered */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className={`transition-all duration-[1000ms] ease-in-out bg-headerBgSelected2 border border-none hover:border-borderColor rounded-lg  text-white text-xsm
              ${
                isSearchOpen
                  ? "w-[80vw] opacity-100 p-2"
                  : "w-0 opacity-0 overflow-hidden"
              }
            `}
            style={{ transitionProperty: "width, opacity" }}
            autoFocus={isSearchOpen}
          />

          {/* Toggle Button */}
          <button
            onClick={toggleSearch}
            className="p-2 border border-borderColor hover:bg-[#1a1f2e] rounded-lg lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSearchOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
