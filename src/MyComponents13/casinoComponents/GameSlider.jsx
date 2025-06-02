
import React, { useState, useRef, useEffect } from "react";
import "./GameSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// [Icons list omitted for brevity]
import {
  faFutbol,
  faBasketballBall,
  faGamepad,
  faTableTennis,
  faFlagCheckered,
  faFistRaised,
  faHeadset,
  faVolleyballBall,
  faHockeyPuck,
  faBaseballBall,
  faTableTennisPaddleBall,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export default function GameSlider() {
  const gameMenuItems = [
    /* same game item array as before */
    {
      id: "1",
      name: "All Games",
      image: "/images/football-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "2",
      name: "Ortak",
      image: "/images/basketball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "3",
      name: "B.F.T.H. Arena",
      image: "/images/tennis-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "4",
      name: "New",
      image: "/images/volleyball-banner.jpg",
      selectedColor: "#4795b1",
     
    },
    {
      id: "5",
      name: "Popular Games",
      image: "/images/icehockey-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "6",
      name: "New Year",
      image: "/images/baseball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "7",
      name: "Top Slots",
      image: "/images/tabletennis-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "8",
      name: "Betting Games",
      image: "/images/badminton-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "9",
      name: "Video Slots",
      image: "/images/cricket-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "10",
      name: "Jackpots",
      image: "/images/darts-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "11",
      name: "Table Games",
      image: "/images/cs2-banner.jpg",
      selectedColor: "#4795b1",
     
    },
    {
      id: "12",
      name: "Table Games",
      image: "/images/dota2-banner.jpg",
      selectedColor: "#4795b1",
  
    },
    {
      id: "13",
      name: "Scratch Games",
      image: "/images/lol-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "14",
      name: "Arcade Games",
      image: "/images/kog-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "15",
      name: "Video Poker",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "16",
      name: "Mini Games",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "17",
      name: "Crash Games",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "18",
      name: "Buy Feature",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "19",
      name: "FTN Mania",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "20",
      name: "Crypto Games",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "21",
      name: "Instant Game",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "22",
      name: "Virtual Betting",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "23",
      name: "Megaways",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "24",
      name: "Chinese New Year",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "24",
      name: "Valentine's Day",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
      
    },
    {
      id: "24",
      name: "St. Patrick's Day",
      image: "/images/efootball-banner.jpg",
      selectedColor: "#4795b1",
     
    },
  ];
  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);

  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  const getGameIcon = (gameName) => {
    const name = gameName.toLowerCase();
    if (name.includes("football") && !name.includes("e-football")) return faFutbol;
    if (name.includes("basketball")) return faBasketballBall;
    if (name.includes("tennis") && !name.includes("table")) return faTableTennis;
    if (name.includes("volleyball")) return faVolleyballBall;
    if (name.includes("ice hockey")) return faHockeyPuck;
    if (name.includes("baseball")) return faBaseballBall;
    if (name.includes("table tennis")) return faTableTennisPaddleBall;
    if (name.includes("badminton")) return faTableTennis; // Using TableTennis as placeholder
    if (name.includes("cricket")) return faGamepad;
    if (name.includes("darts")) return faUsers;
    if (name.includes("counter strike") || name.includes("dota") || name.includes("league of legends") || name.includes("king of glory") || name.includes("e-football")) return faHeadset;
    if (name.includes("sports")) return faHeadset; // General E-Sports
    if (name.includes("racing")) return faFlagCheckered;
    if (name.includes("boxing")) return faFistRaised;
    return faGamepad;
  };

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    console.log("selectedGame", selectedGame)
  };

  return (
    <div className="game-menu-wrapper">
      <div className="game-menu-outer-container ps-[0px]">
        <div className="game-menu-container" ref={scrollContainerRef}>
          {gameMenuItems.map((item) => {
            const isSelected = selectedGame === item.id;
            // const isThisSticky = isSelected && isSticky;

            return (
              <div
                key={item.id}
                ref={isSelected ? selectedItemRef : null}
                className={`game-item ${
                  isSelected ? "selected sticky-selected" : ""
                }`}
                onClick={() => handleGameSelect(item.id)}
                style={
                  isSelected
                    ? {
                        backgroundColor: item.selectedColor,
                        borderColor: item.selectedColor,
                      }
                    : {}
                }
              >
                <div className="game-item-content-wrapper">
                  <div className="game-item-overlay">
                    <div className="icon-container">
                      <FontAwesomeIcon
                        icon={getGameIcon(item.name)}
                        className="game-icon"
                        style={{
                          color: isSelected ? "#fff" : item.selectedColor,
                        }}
                      />
                      {item.notificationCount > 0 && (
                        <span className="notification-badge">
                          {item.notificationCount > 99
                            ? "99+"
                            : item.notificationCount}
                        </span>
                      )}
                    </div>
                    <h3
                      className="game-name"
                      style={isSelected ? { color: "#fff" } : {}}
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

