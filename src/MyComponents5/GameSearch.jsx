// import React, { useState } from "react";

// export default function GameSearch() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [showGamesText, setShowGamesText] = useState(true);

//   const toggleSearch = () => {
//     if (isSearchOpen) {
//       // Closing: Wait for transition to finish (1 second)
//       setTimeout(() => setShowGamesText(true), 1000);
//     } else {
//       setShowGamesText(false);
//     }
//     setIsSearchOpen((prev) => !prev);
//     if (isSearchOpen) setQuery("");
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className="flex flex-wrap items-center justify-between p-2 lg:w-[88%] gap-2 w-full ">
//         {/* Filter Button - Only show when search is fully closed */}
//         {showGamesText === true && (
//           <>
//             <button className="flex items-center gap-2 px-0 py-2 text-hederColor2 text-xsm  uppercase transition-all duration-300 lg:border lg:p-2 lg:rounded lg:border-borderColor">
//               {/* Search Icon - only visible on lg and up */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5 text-white hidden lg:block"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
//                 />
//               </svg>
//             </button>
//             <span>Games</span>
//           </>
//         )}

//         {/* Search Section */}
//         <div className="flex items-center gap-2 flex-1 justify-end">
//           {/* Grouped Input + Toggle */}
//           <div className="flex items-center gap-0 bg-headerBgSelected2">
//             {/* Search Input - Always rendered */}
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search..."
//               className={`transition-all duration-[1000ms] ease-in-out bg-headerBgSelected2 border border-none hover:border-borderColor rounded-lg text-white text-xsm
//               ${
//                 isSearchOpen
//                   ? "w-[80vw] opacity-100 p-2"
//                   : "w-0 opacity-0 overflow-hidden"
//               }
//             `}
//               style={{ transitionProperty: "width, opacity" }}
//               autoFocus={isSearchOpen}
//             />

//             {/* Toggle Button */}
//             <button
//               onClick={toggleSearch}
//               className="p-2 border border-borderColor hover:bg-[#1a1f2e] rounded-lg lg:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isSearchOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function GameSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showGamesText, setShowGamesText] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    if (isSearchOpen) {
      // Delay showing "Games" until after transition
      setTimeout(() => setShowGamesText(true), 1000);
      setQuery("");
    } else {
      setShowGamesText(false);
    }
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap items-center justify-between p-2 lg:w-[88%] gap-2 w-full ">
        {/* Filter Button - Only show when search is fully closed */}
        {!isSearchOpen && showGamesText && (
          <button
            onClick={() => setShowSearch(!showSearch)}
            className={`flex items-center gap-2 px-0 py-2 text-hederColor2 text-xsm uppercase transition-all duration-300 lg:border lg:p-2 lg:rounded lg:border-borderColor ${
              showSearch ? "hidden" : ""
            }`}
          >
            {/* Search Icon - only visible on lg and up */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white hidden lg:block"
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
            <span>Games</span>
          </button>
        )}

        {/* Search Section */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <div className="flex items-center gap-0 bg-headerBgSelected2">
            {/* Search Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search casino game"
              className={`transition-all duration-[1000ms] ease-in-out bg-headerBgSelected2 border border-none hover:border-borderColor rounded-lg text-white text-xsm ${
                isSearchOpen
                  ? "w-[80vw] opacity-100 p-2"
                  : "w-0 opacity-0 overflow-hidden"
              }`}
              style={{ transitionProperty: "width, opacity" }}
              autoFocus={isSearchOpen}
            />

            {/* Toggle Button (shown on small screens) */}
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

            {/* Close "X" button (shown on large screens only when search is open) */}
            {isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="p-2 text-white hidden lg:block"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        {showSearch && (
          <div className="w-full mt-[-24px] flex items-center   rounded  px-0 py-0 justify-start relative overflow-hidden">
            <div
              className="w-80 flex bg-mainBg px-2 py-1 border border-borderColor rounded transition-all duration-[1000ms]"
            //   className={`absolute right-0 top-0 h-full bg-headerBgSelected2 transition-all duration-1000 ease-in-out
            //   ${
            //     showSearch
            //       ? "translate-x-0 opacity-100 w-[80%]"
            //       : "translate-x-full opacity-0 w-[80%]"
            //   }
            // `}
            >
              <button
                onClick={() => setShowSearch(false)}
                className="mr-2 text-gray-300"
              >
                ✕
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search casino game"
                className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
