import React, { useState } from "react";
import Header2 from "../MyComponent/Header2";
import logo from "../assets/sports/download.png";
import { FaPlus } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import Game from "../MyComponent/Game";
import Table from "../MyComponent/Table";
import { MdOutlineWatchLater } from "react-icons/md";
// import Option from "../MyComponent/Option";
import SportsSearchOption from '../MyComponents13/sportsComponents/SportsSearchOption'
import Winner from "./Winner";
import { IoTrophy } from "react-icons/io5";



const Sports = () => {

  const [activeTab, setActiveTab] = useState(null);


  return (
    <div className="">
      <div className="mt-[10px] p-[7px]">
        <h3 className="text-[#ffffff] mb-[5px] text-[15px] leading-[16px] font-[400] uppercase">
          My Teams
        </h3>
        <div className="w-full flex items-center">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="w-[36px] h-[46px]">
              <div
                className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center
                          bg-[#000b23] overflow-hidden z-0 border border-[#3c455a]"
        >
        <img src={logo} alt={`team-logo-${index}`} width="30px"/>
      </div>
    </div>
  ))}
  {/* Add Icon at the end */}
  <div className="w-[36px] h-[46px] ">
    <div
      className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
              border border-[#3c455a] overflow-hidden z-0"
    >
      <FaPlus className="text-[#ffffff] text-[12px]" />
    </div>
  </div>
</div>

      </div>

      <div className="flex overflow-x-auto whitespace-nowrap space-x-3 mt-[10px] p-[7px] scrollbar-hide">
        {/* Upcoming Matches */}
        <button
          className={`w-auto h-[28px] ${
            activeTab === "upcoming"
              ? "bg-gradient-to-r from-[#026c90] to-[#0097b7] text-black"
              : "text-white/80 bg-[#263045]"
          } px-[15px] flex justify-center items-center text-[12px] font-[500] cursor-pointer border-none shrink-0 rounded-[4px]`}
          onClick={() => setActiveTab("upcoming")}
        >
          <FaCalendar
            className={`mr-1 ${
              activeTab === "upcoming" ? "text-black" : "text-[#0097b7]"
            }`}
          />
          <span>Upcoming Matches</span>
        </button>

        {/* Popular Matches */}
        <button
          className={`w-auto h-[28px] ${
            activeTab === "popularMatches"
              ? "bg-gradient-to-r from-[#3b26ac] to-[#583de3] text-black"
              : "text-white/80 bg-[#263045]"
          } px-[15px] flex justify-center items-center text-[12px] font-[500] cursor-pointer border-none shrink-0 rounded-[4px]`}
          onClick={() => setActiveTab("popularMatches")}
        >
          <IoTrophy
            className={`mr-1 ${
              activeTab === "popularMatches" ? "text-black" : "text-[#0097b7]"
            }`}
          />
          <span>Popular Matches</span>
        </button>

        {/* Popular Competitions */}
        <button
          className={`w-auto h-[28px] ${
            activeTab === "popularCompetitions"
              ? "bg-gradient-to-r from-[#0648a3] to-[#2275e9] text-black"
              : "text-white/80 bg-[#263045]"
          } px-[15px] flex justify-center items-center text-[12px] font-[500] cursor-pointer border-none shrink-0 rounded-[4px]`}
          onClick={() => setActiveTab("popularCompetitions")}
        >
          <IoTrophy
            className={`mr-1 ${
              activeTab === "popularCompetitions"
                ? "text-black"
                : "text-[#0097b7]"
            }`}
          />
          <span>Popular Competitions</span>
        </button>
      </div>

      {/* <SearchOption /> */}
      <SportsSearchOption/>

      <Game />

      <Winner />
    </div>
  );
};

export default Sports;
