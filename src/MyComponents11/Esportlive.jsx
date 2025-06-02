import React from "react";

// import SearchBar from "./UpcomingSearch";
// import HeaderTabs from "./UpcomingHeaders";
import SlideEsport from "../MyComponents7/SlideEsport";
import MarketSelector from "../MyComponents7/MarketSelector";
import MarketGameCard from "../MyComponents7/BettingCard";
// import MarketGameCard from "./BettingCard";

export default function Esportlive() {
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
