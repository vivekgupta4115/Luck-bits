
import React, { useState } from "react";
import "./SportsSearchOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faGlobe,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { MdOutlineWatchLater } from "react-icons/md";

const timeOptions = ["All", "Today", "3 hours", "6 hours", "12 hours"];

export default function SportsSearchOption() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");


  const [isActive, setIsActive] = useState(false)
  
  const toggleColor = () => {
    setIsActive(!isActive);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setQuery(""); // clear query when closing
  };

  return (
    <div className="options-bar-container">
      {!isSearchOpen && (
        <div className="flex items-center gap-2">
          <div className='max-w-[48%] h-[28px] relative'>
                         <label for="" className='h-[100%] caret-[#feffff] flex items-center relative border-none'>
                             <MdOutlineWatchLater className='left-[12px] flex absolute  text-[14px] leading-[28px] 
                                 text-[#feffff] pointer-events-none'/>
                                 <select className='ps-[34px] text-[12px] w-[100%] h-[100%] text-[#fff] bg-[#263045] whitespace-nowrap overflow-ellipsis rounded-[4px] p-[20px 15px 4px]'>
                                    {timeOptions.map((option, index) => (
                                      <option key={index} value={option === "All" ? "" : option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                         </label>
                     </div>
          <button className={`ms-[10px] w-auto bg-none h-[28px] pt-[0px] pr-[15px] pl-[15px] flex justify-center items-center  rounded-[4px] 
            ${isActive ? "bg-slate-50 text-black" : "text-white/90"} text-[12px] font-[500] cursor-pointer`}
            style={{border:"solid 1px rgba(255, 255, 255 , .6)"}}
            onClick={toggleColor}>BB</button>
        </div>
      )}

      <div className="options-right" style={{ flex: 1 }}>
        <div className="search-container">
          <div className={`search-wrapper ${isSearchOpen ? "show" : "hide"}`}>
            <input
              type="text"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a competition or team"
            />
          </div>

          <button
            className="option-button search-button"
            aria-label="Search"
            onClick={toggleSearch}
          >
            <FontAwesomeIcon
              icon={isSearchOpen ? faTimes : faSearch}
              className="option-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}


