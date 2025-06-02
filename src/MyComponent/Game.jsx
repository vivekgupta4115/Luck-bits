
import React, { useState, useRef, useEffect } from "react";
import "./Game1.css";
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
import {gameMenuItems} from "./Data";
export default function GameMenu({ maxItems }) {
  // const gameMenuItems = [
  //   /* same game item array as before */
  //   {
  //     id: "1",
  //     name: "Football",
  //     image: "/images/football-banner.jpg",
  //     selectedColor: "#0f881f",
  //     notificationCount: 12,
  //   },
  //   {
  //     id: "2",
  //     name: "Basketball",
  //     image: "/images/basketball-banner.jpg",
  //     selectedColor: "#f29f01",
  //     notificationCount: 5,
  //   },
  //   {
  //     id: "3",
  //     name: "Tennis",
  //     image: "/images/tennis-banner.jpg",
  //     selectedColor: "#9b983c",
  //     notificationCount: 15,
  //   },
  //   {
  //     id: "4",
  //     name: "Volleyball",
  //     image: "/images/volleyball-banner.jpg",
  //     selectedColor: "#d1b974",
  //     notificationCount: 23,
  //   },
  //   {
  //     id: "5",
  //     name: "Ice Hockey",
  //     image: "/images/icehockey-banner.jpg",
  //     selectedColor: "#4d9bbd",
  //     notificationCount: 35,
  //   },
  //   {
  //     id: "6",
  //     name: "Baseball",
  //     image: "/images/baseball-banner.jpg",
  //     selectedColor: "#59a5a2",
  //     notificationCount: 8,
  //   },
  //   {
  //     id: "7",
  //     name: "Table Tennis",
  //     image: "/images/tabletennis-banner.jpg",
  //     selectedColor: "#7d9622",
  //     notificationCount: 7,
  //   },
  //   {
  //     id: "8",
  //     name: "Badminton",
  //     image: "/images/badminton-banner.jpg",
  //     selectedColor: "#6cbca2",
  //     notificationCount: 16,
  //   },
  //   {
  //     id: "9",
  //     name: "Cricket",
  //     image: "/images/cricket-banner.jpg",
  //     selectedColor: "#1aa67a",
  //     notificationCount: 10,
  //   },
  //   {
  //     id: "10",
  //     name: "Darts",
  //     image: "/images/darts-banner.jpg",
  //     selectedColor: "#cc2837",
  //     notificationCount: 2,
  //   },
  //   {
  //     id: "11",
  //     name: "Counter Strike 2",
  //     image: "/images/cs2-banner.jpg",
  //     selectedColor: "#c6561e",
  //     notificationCount: 23,
  //   },
  //   {
  //     id: "12",
  //     name: "Dota 2",
  //     image: "/images/dota2-banner.jpg",
  //     selectedColor: "#960f12",
  //     notificationCount: 4,
  //   },
  //   {
  //     id: "13",
  //     name: "League of legends",
  //     image: "/images/lol-banner.jpg",
  //     selectedColor: "#034450",
  //     notificationCount: 45,
  //   },
  //   {
  //     id: "14",
  //     name: "King of Glory",
  //     image: "/images/kog-banner.jpg",
  //     selectedColor: "#70568a",
  //     notificationCount: 22,
  //   },
  //   {
  //     id: "15",
  //     name: "E-Football",
  //     image: "/images/efootball-banner.jpg",
  //     selectedColor: "#2d792e",
  //     notificationCount: 30,
  //   },
  // ];
  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);

  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  const displayedItems = maxItems
    ? gameMenuItems.slice(0, maxItems)
    : gameMenuItems;


  const getGameIcon = (gameName) => {
    const name = gameName.toLowerCase();
    if (name.includes("football") && !name.includes("e-football"))
      return faFutbol;
    if (name.includes("basketball")) return faBasketballBall;
    if (name.includes("tennis") && !name.includes("table"))
      return faTableTennis;
    if (name.includes("volleyball")) return faVolleyballBall;
    if (name.includes("ice hockey")) return faHockeyPuck;
    if (name.includes("baseball")) return faBaseballBall;
    if (name.includes("table tennis")) return faTableTennisPaddleBall;
    if (name.includes("badminton")) return faTableTennis; // Using TableTennis as placeholder
    if (name.includes("cricket")) return faGamepad;
    if (name.includes("darts")) return faUsers;
    if (
      name.includes("counter strike") ||
      name.includes("dota") ||
      name.includes("league of legends") ||
      name.includes("king of glory") ||
      name.includes("e-football")
    )
      return faHeadset;
    if (name.includes("sports")) return faHeadset; // General E-Sports
    if (name.includes("racing")) return faFlagCheckered;
    if (name.includes("boxing")) return faFistRaised;
    return faGamepad;
  };

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    console.log("selectedGame", selectedGame);
  };

  return (
    <div className="game-menu-wrapper">
      <div className="game-menu-outer-container">
        <div className="game-menu-container" ref={scrollContainerRef}>
          {displayedItems.map((item) => {
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

