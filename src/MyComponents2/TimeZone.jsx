
import React, { useState, useRef, useEffect } from "react";
import "./TimeZone.css";
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
export default function TimeZone() {
  const gameMenuItems = [
    /* same game item array as before */
    {
      id: "1",
      name: "THURSADAY",
      image: "24.05 THU",
      selectedColor: "white",
      notificationCount: 12,
    },
    {
      id: "2",
      name: "FRIDAY",
      image: "00.05 FRI",
      selectedColor: "white",
      notificationCount: 5,
    },
    {
      id: "3",
      name: "SATURDAY",
      image: "01.05 SAT",
      selectedColor: "#9b983c",
      notificationCount: 15,
    },
    {
      id: "4",
      name: "SUNDAY",
      image: "02.05 SUN",
      selectedColor: "#d1b974",
      notificationCount: 23,
    },
    {
      id: "5",
      name: "MONDAY",
      image: "03.05 MON",
      selectedColor: "#4d9bbd",
      notificationCount: 35,
    },
    {
      id: "6",
      name: "TUESDAY",
      image: "04.05 TUE",
      selectedColor: "#59a5a2",
      notificationCount: 8,
    },
    {
      id: "7",
      name: "WEDNESDAY",
      image: "05.05 WED",
      selectedColor: "#7d9622",
      notificationCount: 7,
    },
    {
      id: "8",
      name: "THURSDAY",
      image: "06.05 THU",
      selectedColor: "#6cbca2",
      notificationCount: 16,
    },
    {
      id: "9",
      name: "FRIDAY",
      image: "07.05 FRI",
      selectedColor: "#1aa67a",
      notificationCount: 10,
    },
    {
      id: "10",
      name: "SATURDAY",
      image: "08.05 SAT",
      selectedColor: "#cc2837",
      notificationCount: 2,
    },
  ];
  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);

  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    console.log("selectedGame", selectedGame)
  };

  return (
    <div className="game-menu-wrapper">
      <div className="game-menu-outer-container">
        <div className="game-menu-container" ref={scrollContainerRef}>
          {gameMenuItems.map((item) => {
            const isSelected = selectedGame === item.id;
            // const isThisSticky = isSelected && isSticky;

            return (
              <div
                key={item.id}
                ref={isSelected ? selectedItemRef : null}
                className={`game-item1 ${
                  isSelected ? "selected sticky-selected" : ""
                }`}
                onClick={() => handleGameSelect(item.id)}
                style={
                  isSelected
                    ? {
                        backgroundColor: "white",
                        borderColor: "white",
                      }
                    : {}
                }
              >
                <div className="game-item-content-wrapper">
                  <div className="game-item-overlay">
                    <div className="icon-container1">
                      <div
                        className="game-image-text"
                        style={{
                          color: isSelected ? "black" : "white",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {item.image}
                      </div>
                      {/* {item.notificationCount > 0 && (
                        <span className="notification-badge">
                          {item.notificationCount > 99
                            ? "99+"
                            : item.notificationCount}
                        </span>
                      )} */}
                    </div>

                    {/* <h3
                      className="game-name"
                      style={isSelected ? { color: "#fff" } : {}}
                    >
                      {item.name}
                    </h3> */}
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

