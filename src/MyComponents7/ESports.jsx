import React from "react";
import TimeFilterDropdown from "./TimeFilterDropdown";
import SearchBar from "./SearchBar";
import HeaderTabs from "./HeaderTabs";
import SlideEsport from "./SlideEsport";
import MarketSelector from "./MarketSelector";
import MarketGameCard from "./BettingCard";

export default function ESports() {
  return (
    <div className="bg-[#0B1120]  text-hederColor3">

      <div className="w-full">
        <SlideEsport />
      </div>
      <div className="w-full">
        <MarketSelector />
      </div>
      <div className="w-full">
        <MarketGameCard />
      </div>
    </div>
  );
}
