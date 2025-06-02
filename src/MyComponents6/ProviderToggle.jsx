import React, { useState } from "react";
import VirtualImages1 from "../assets/virtualImages1.gif";

export default function ProviderToggle() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="hidden lg:flex lg:flex-col w-full p-2 px-0">
      {/* Top Right Toggle Button */}
      <div className="w-full flex justify-end mb-2">
        <button
          onClick={handleToggle}
          className="text-white bg-transparent hover:scale-110 transition-transform"
        >
          {/* Grid Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-sky-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            alt='list view'
          >
            <path d="M3 3h4v4H3V3zm5 0h4v4H8V3zm5 0h4v4h-4V3zM3 8h4v4H3V8zm5 0h4v4H8V8zm5 0h4v4h-4V8zM3 13h4v4H3v-4zm5 0h4v4H8v-4zm5 0h4v4h-4v-4z" />
          </svg>
        </button>
      </div>

      {/* Left Section: Icon or Full Name */}
      <div>
        {isExpanded ? (
          <div className=" text-white px-2 py-2 rounded-md text-sm border border-borderColor bg-headerBgSelected2">
            PASCAL GAMING
          </div>
        ) : (
          <div className=" p-4 rounded-md">
            <img src={VirtualImages1} alt="Pascal Logo" className="w-16 h-16" />
          </div>
        )}
      </div>
    </div>
  );
}
