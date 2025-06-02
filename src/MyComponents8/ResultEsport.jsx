import React from "react";

import SearchBar from "./SearchBar";
import HeaderTabs from "./HeaderTabs";
import SlideEsport from "./SlideEsport";
import MarketSelector from "./MarketSelector";
import Result from "./ResultofEsport";
// import MarketGameCard from "./BettingCard";

export default function ResultEsport() {
  return (
    <div className="bg-[#0B1120]  text-hederColor3">
      {/* Filters and Search */}
      <div className="w-full">
        <Result />
      </div>
    </div>
  );
}
