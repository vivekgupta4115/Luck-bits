// import React from "react";
// import VirtualSearch from "./VirtualSearch";
// import VirtualGame from "./VirtualGame";
// import ProviderSearch from "./ProviderSearch";
// import ProviderToggle from "./ProviderToggle";
// import GameSearchBarlg from "./GameSearchBarlg";

// export default function VirtualSports() {
//   return (
//     <div className="w-full min-h-screen bg-[#07122C] flex flex-col lg:flex-row">
//       {/* Left Column: Search Section */}
//       <div className="w-full lg:w-[15%] p-4 border-r border-none">
//         <VirtualSearch />
//         <ProviderSearch />
//         <ProviderToggle />
//       </div>

//       {/* Right Column: Game Grid */}
//       <div className="w-full lg:w-[85%] p-4">
//         <GameSearchBarlg />
//         <VirtualGame />
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import VirtualSearch from "./VirtualSearch";
import VirtualGame from "./VirtualGame";
import ProviderSearch from "./ProviderSearch";
import ProviderToggle from "./ProviderToggle";
import GameSearchBarlg from "./GameSearchBarlg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VirtualSports() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#07122C] flex flex-col lg:flex-row">
      {/* Sidebar Section for lg+ */}
      {/* Sidebar Section for lg+ */}
      <div
        className={`hidden lg:flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "w-[15%] p-4 pr-1" : "w-[8%] p-4"
        } border-r border-none relative bg-[#07122C]`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute left-3 top-6 z-10 bg-[#0b1a38] border border-gray-600 rounded-full p-1 hover:bg-[#11264d]"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>

        {/* Header: Providers | Games (Always Visible) */}
        <div className="flex items-center justify-between text-white uppercase text-sm font-semibold px-8 py-2">
          <div className="flex items-center space-x-4">
            {/* <ChevronLeft size={16} /> */}
            <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:pointer">
              Providers
            </span>
          </div>
          {/* <span className="text-gray-400">Games</span> */}
        </div>

        {/* Sidebar Content */}
        {isSidebarOpen && (
          <div className="flex flex-col space-y-4 mt-2">
            <ProviderSearch />
            <ProviderToggle />
          </div>
        )}
      </div>

      {/* Right Column: Game Grid */}
      <div
        className={`w-full transition-all duration-300 ${
          isSidebarOpen ? "lg:w-[85%] lg:pl-1" : "lg:w-[96%]"
        } p-4`}
      >
        <GameSearchBarlg />
        <VirtualSearch />
        <VirtualGame />
      </div>
    </div>
  );
}
