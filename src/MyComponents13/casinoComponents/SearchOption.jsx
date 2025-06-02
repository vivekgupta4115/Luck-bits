
import React, { useState } from "react";
// import "./SearchOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SearchImage from '../../assets/casinoImages/imagesSearch'
import { MdOutlineApproval } from "react-icons/md";
import { MdLineWeight } from "react-icons/md";
import Cards from "./Cards";
import ShowBtnCard from "./ShowBtnCard";

import CasinoGameIcon1 from "../../assets/casinoImages/casinoImages/casinoGameIcon1.gif";
import CasinoGameIcon2 from "../../assets/casinoImages/casinoImages/casinoGameIcon2.webp";

import {
  faVideo,
  faGlobe,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { MdOutlineWatchLater } from "react-icons/md";


export default function SearchOption() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpin] = useState(false);
  
  const toggleColor = () => {
    setIsActive(!isActive);
  };

  const hendalItems = () => {
    setIsActive(!isActive);
    setIsOpin(!isOpen);
  }

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setQuery(""); // clear query when closing
  };

  return (
    <>
      <div className="options-bar-container">
        {!isSearchOpen && (
          <div className="options-left ps-[12px]">
            {/* <button className={`ms-[10px] w-auto bg-none h-[28px] pt-[0px] pr-[15px] pl-[15px] flex justify-center items-center  rounded-[4px] 
              text-[12px] font-[500] cursor-pointer`}
            style={{border:"solid 1px rgba(255, 255, 255 , .6)"}}
            ><MdOutlineApproval /> All Providers</button> */}
            <a href="">
              <div
                className="flex justify-center items-center gap-2 w-auto h-[32px] pl-[4px] pr-[12px] rounded-[4px] bg-[#152036]"
                style={{ border: "solid 1px rgba(255, 255, 255 , .6)" }}
              >
                <MdOutlineApproval className="text-[18px]" />
                <p className="text-[12px]">All Provider</p>
              </div>
            </a>
          </div>
        )}

        <div className="options-right pe-[12px]" style={{ flex: 1 }}>
          <div className="search-container">
            {/* Search Input */}
            <div
              className={`search-wrapper relative ${
                isSearchOpen ? "show" : "hide"
              }`}
            >
              <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a competition or team"
              />
            </div>

            {/* Search Toggle Button */}
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

            {/* Toggle Button for ShowBtnCard / Cards */}
            <button
              className={`w-[33px] h-[33px] flex justify-center items-center ms-[8px] flex-shrink-0
               rounded-[4px] ${isActive ? "bg-[#55BFE2]" : "bg-[#152036]"}`}
              style={{ border: "solid 1px rgba(255, 255, 255 , .2)" }}
              onClick={hendalItems}
            >
              <MdLineWeight />
            </button>
          </div>
        </div>
      </div>
      {/* Conditional Component Rendering */}
      <div className="mt-4">{isOpen ? <ShowBtnCard /> : <Cards />}</div>
    </>
  );
}

