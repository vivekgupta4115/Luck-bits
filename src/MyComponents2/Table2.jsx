import React, { useState, useEffect, useRef } from "react";
// import "./Table2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faLock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import PageLoader from "./PageLoader";
import ScrollToTopButton from "./PageLoader";
import ScrollButton from "./ScrollButton.jsx";

import {
  faFutbol,
  faBasketball,
  faTableTennisPaddleBall,
  faVolleyball,
  faHockeyPuck,
  faBaseball,
  faHandPaper,
  faGolfBallTee,
  faGamepad,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const gameIcons = {
  All: faGamepad,
  Football: faFutbol,
  Basketball: faBasketball,
  Tennis: faTableTennisPaddleBall,
  Volleyball: faVolleyball,
  "Ice Hockey": faHockeyPuck,
  Handball: faHandPaper, // best available
  Baseball: faBaseball,
  "Table Tennis": faTableTennisPaddleBall,
  Cricket: faCircleQuestion, // Placeholder, no cricket icon in free pack
  Rugby: faCircleQuestion, // Same
  Golf: faGolfBallTee, // faBoxingGlove is Pro only
  MMA: faCircleQuestion,
  Wrestling: faCircleQuestion,
  Fencing: faCircleQuestion,
  Snooker: faCircleQuestion,
  Hockey: faHockeyPuck,
  Badminton: faCircleQuestion,
  "E-Sports": faGamepad,
};

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const marketOptions = [
  { id: "WINNER", label: "WINNER", headers: ["W1", "X", "W2"] },
  { id: "HANDICAP", label: "HANDICAP", headers: ["HOME", "AWAY"] },
  { id: "TOTAL", label: "TOTAL", headers: ["OVER", "UNDER"] },
];

const sampleMatchData = {
  1: [
    {
      id: "match1",
      team1: "Izumrud-pro",
      team2: "Djoker-pro",
      score1: "0",
      score2: "0",
      gameLogo: faVolleyball,
      gameLogoColor: "green", // Red
      timeLogo: "⏱️ ",
      time2: "13:30 ",
      time: "0:0, (0:0) 3'",
      odds: [2.35, 4, 1],
      flags: ["red", "green", "red"], // flags for each odds box
      isLive: true,
      isLocked: false,
      lockedValue: "+207",
    },
  ],
  2: [
    {
      id: "match2",
      team1: "Ethiopian Coffee",
      team2: "Saint George",
      score1: "1",
      score2: "1",
      gameLogo: faVolleyball,
      gameLogoColor: "green",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "2nd Half | 7:5, (4:2) 5'",
      odds: ["1.85", "3.20", "4.00"],
      flags: ["red", "none", "green"],
      isLive: true,
      isLocked: true,
      lockedValue: "+40",
    },
  ],
  3: [
    {
      id: "match3",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faVolleyball,
      gameLogoColor: "green",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["green", "green", "red"],
      isLive: false,
      isLocked: true,
      lockedValue: "+55",
    },
  ],
  4: [
    {
      id: "match4",
      team1: "Nepal Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faBasketball,
      gameLogoColor: "orange",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["none", "none", "none"],
      isLive: false,
      isLocked: true,
      lockedValue: "+15",
    },
  ],
  5: [
    {
      id: "match5",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faVolleyball,
      gameLogoColor: "red",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["green", "green", "red"],
      isLive: false,
      isLocked: false,
      lockedValue: "+65",
    },
  ],
  6: [
    {
      id: "match6",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faVolleyball,
      gameLogoColor: "red",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["red", "green", "red"],
      isLive: false,
      isLocked: true,
      lockedValue: "+55",
    },
  ],
  7: [
    {
      id: "match7",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faBasketball,
      gameLogoColor: "orange",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["red", "red", "green"],
      isLive: false,
      isLocked: false,
      lockedValue: "+55",
    },
  ],
  8: [
    {
      id: "match8",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      gameLogo: faVolleyball,
      gameLogoColor: "red",
      timeLogo: " ⏱️ ",
      time2: "13:30 ",
      time: "FT ",
      odds: ["2.05", "4.20", "2.00"],
      flags: ["green", "green", "red"],
      isLive: false,
      isLocked: true,
      lockedValue: "+55",
    },
  ],
};

const leagueData = [
  {
    id: "1",
    country: "Russia",
    league: "Liga Pro",
    flag: "../public/flag/Russia flag.png",
  },
  {
    id: "2",
    country: "Ethiopia",
    league: "Premier League",
    flag: "../public/flag/Ethiopia flag.png",
  },
  {
    id: "3",
    country: "Indonesia",
    league: "Liga 4",
    flag: "../public/flag/Indonasia flag.png", // Corrected path
  },
  {
    id: "4",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
  {
    id: "5",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
  {
    id: "6",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
  {
    id: "7",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
  {
    id: "8",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
];

export default function Table2() {
  const [selectedMarket, setSelectedMarket] = useState(marketOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // State to manage which league items are expanded
  const [expandedLeagues, setExpandedLeagues] = useState({});

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMarketSelect = (market) => {
    setSelectedMarket(market);
    setIsDropdownOpen(false);
  };

  // Function to toggle league expansion
  const toggleLeagueExpansion = (leagueId) => {
    setExpandedLeagues((prev) => ({
      ...prev,
      [leagueId]: !prev[leagueId],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("windows", window);
    setTimeout(() => {
      console.log("Scrolled to:", window.scrollY);
    }, 500);
  };

  return (
    <div className="market-display-wrapper">
      <div className="market-header">
        <div className="market-selector-container" ref={dropdownRef}>
          <button className="market-selector-button" onClick={toggleDropdown}>
            <span>{selectedMarket.label}</span>
            <FontAwesomeIcon
              icon={isDropdownOpen ? faChevronUp : faChevronDown}
              className="dropdown-chevron text-gray"
            />
          </button>
          {isDropdownOpen && (
            <ul className="market-dropdown-list">
              {marketOptions.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleMarketSelect(option)}
                  className={selectedMarket.id === option.id ? "active" : ""}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="h-[15px] bg-mainBg w-[1px] m-0 border-t border-b border-mainBg"></div>
        <div className="flex items-center justify-between w-1/2 border border-black px-[5px] py-[1px]">
          {selectedMarket.headers.map((header) => (
            <span key={header} className="column-header-item">
              {header}
            </span>
          ))}
        </div>
      </div>
      {/* MODIFIED LEAGUE LIST SECTION */}
      <div className="market-league-separator"></div>
      <div className="league-list">
        {leagueData.map((league) => {
          const isExpanded = !!expandedLeagues[league.id];
          const matches = sampleMatchData[league.id] || []; // Get matches for this league

          return (
            // <div key={league.id} className="league-item-container">
            <div>
              <div className="match-details-container">
                {matches.map((match) => (
                  <div key={match.id} className="match-row">
                    <div className="grid grid-cols-[auto_1fr] items-stretch px-0 bg-[#1a253a] rounded ">
                      <div className="match-info">
                        <div className="team-names text-xsm">
                          <span>{match.team1}</span>
                          <span>{match.team2}</span>
                        </div>
                        {/* <div className="team-scores">
                          <span>{match.score1}</span>
                          <span>{match.score2}</span>
                        </div> */}
                      </div>

                      <div
                        className={`match-odds headers-${selectedMarket.headers.length} grid gap-[0px] items-center`}
                      >
                        {selectedMarket.headers.map((headerKey, index) => (
                          <div
                            key={headerKey}
                            className="bg-bg6 text-transparent px-[5px] py-[10px] text-center text-xsm min-h-[55px] flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out border border-black border-t-0 relative"
                          >
                            <div className="odds-value text-yellow">
                              {match.odds?.[index] ?? ""}
                            </div>
                            {match.flags?.[index] === "green" && (
                              <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-b-[10px] border-b-limegreen rotate-[-93deg] text-green"></div>
                            )}
                            {match.flags?.[index] === "red" && (
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className="red-arrow"
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="col-span-full flex justify-between items-center !pt-[1px] pl-1 pr-[5px] mt-0 border-t border-black/90 text-xs text-white/60">
                        <div className="match-time">
                          {/* <span>{match.time}</span> */}
                          <span className="game-icon2">
                            <FontAwesomeIcon
                              icon={match.gameLogo}
                              style={{ color: match.gameLogoColor }}
                              className="text-xsm"
                            />
                          </span>
                          <span className="text-xsm">{match.timeLogo}</span>
                          <span className="text-xsm">{match.time2}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            src={league.flag}
                            alt={`${league.country} flag`}
                            className="w-5 h-3 object-cover rounded-sm"
                          />
                          <div className="h-[15px] bg-mainBg w-[1px] m-0 border-t border-b border-[#111]"></div>
                          {match.isLocked ? (
                            <FontAwesomeIcon
                              icon={faLock}
                              className="text-gray-500"
                            />
                          ) : (
                            <span className="text-xsm text-gray-700">
                              {match.lockedValue}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[5px] bg-mainBg w-full m-0 border-t border-b border-[#111]"></div>
            </div>
            // </div>
          );
        })}
      </div>
      {/* {console.log("window.scrollY: ", window.scrollY)} */}
      {/* <button onClick={handleScrollToTop}>Top</button>
      <PageLoader onScrollToTop={handleScrollToTop} />
      <ScrollButton /> */}
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
