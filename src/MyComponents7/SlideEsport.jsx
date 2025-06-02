import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import './SlideEsport.css';
export default function SlideEsport() {
    const gameMenuItems = [
        {
          id: "1",
          name: "Football",
          image: "/images/football-banner.jpg",
          selectedColor: "#0f881f",
          notificationCount: 12,
        },
        {
          id: "2",
          name: "Basketball",
          image: "/images/basketball-banner.jpg",
          selectedColor: "#f29f01",
          notificationCount: 5,
        },
        {
          id: "3",
          name: "Tennis",
          image: "/images/tennis-banner.jpg",
          selectedColor: "#9b983c",
          notificationCount: 15,
        },
        {
          id: "4",
          name: "Volleyball",
          image: "/images/volleyball-banner.jpg",
          selectedColor: "#d1b974",
          notificationCount: 23,
        },
        {
          id: "5",
          name: "Ice Hockey",
          image: "/images/icehockey-banner.jpg",
          selectedColor: "#4d9bbd",
          notificationCount: 35,
        },
        {
          id: "6",
          name: "Baseball",
          image: "/images/baseball-banner.jpg",
          selectedColor: "#59a5a2",
          notificationCount: 8,
        },
        {
          id: "7",
          name: "Table Tennis",
          image: "/images/tabletennis-banner.jpg",
          selectedColor: "#7d9622",
          notificationCount: 7,
        },
        {
          id: "8",
          name: "Badminton",
          image: "/images/badminton-banner.jpg",
          selectedColor: "#6cbca2",
          notificationCount: 16,
        },
        {
          id: "9",
          name: "Cricket",
          image: "/images/cricket-banner.jpg",
          selectedColor: "#1aa67a",
          notificationCount: 10,
        },
        {
          id: "10",
          name: "Darts",
          image: "/images/darts-banner.jpg",
          selectedColor: "#cc2837",
          notificationCount: 2,
        },
        {
          id: "11",
          name: "Counter Strike 2",
          image: "/images/cs2-banner.jpg",
          selectedColor: "#c6561e",
          notificationCount: 23,
        },
        {
          id: "12",
          name: "Dota 2",
          image: "/images/dota2-banner.jpg",
          selectedColor: "#960f12",
          notificationCount: 4,
        },
        {
          id: "13",
          name: "League of legends",
          image: "/images/lol-banner.jpg",
          selectedColor: "#034450",
          notificationCount: 45,
        },
        {
          id: "14",
          name: "King of Glory",
          image: "/images/kog-banner.jpg",
          selectedColor: "#70568a",
          notificationCount: 22,
        },
        {
          id: "15",
          name: "E-Football",
          image: "/images/efootball-banner.jpg",
          selectedColor: "#2d792e",
          notificationCount: 30,
        },
      ];
    
      const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);
      const [isSticky, setIsSticky] = useState(false);
      const scrollContainerRef = useRef(null);
      const selectedItemRef = useRef(null);
    
      useEffect(() => {
        const handleScroll = () => {
          const selected = selectedItemRef.current;
          const container = scrollContainerRef.current;
          if (!selected || !container) return;
    
          const selectedRect = selected.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
    
          const touchingLeft = selectedRect.left <= containerRect.left + 1;
          const touchingRight = selectedRect.right >= containerRect.right - 1;
    
          selected.classList.toggle("sticky-left", touchingLeft);
          selected.classList.toggle("sticky-right", touchingRight);
        };
    
        const container = scrollContainerRef.current;
        container?.addEventListener("scroll", handleScroll);
        handleScroll();
    
        return () => container?.removeEventListener("scroll", handleScroll);
      }, [selectedGame]);
      
    
      const getGameIcon = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes("football") && !lower.includes("e-football"))
          return faFutbol;
        if (lower.includes("basketball")) return faBasketballBall;
        if (lower.includes("tennis") && !lower.includes("table"))
          return faTableTennis;
        if (lower.includes("volleyball")) return faVolleyballBall;
        if (lower.includes("ice hockey")) return faHockeyPuck;
        if (lower.includes("baseball")) return faBaseballBall;
        if (lower.includes("table tennis")) return faTableTennisPaddleBall;
        if (lower.includes("badminton")) return faTableTennis;
        if (lower.includes("cricket")) return faGamepad;
        if (lower.includes("darts")) return faUsers;
        if (
          lower.includes("counter strike") ||
          lower.includes("dota") ||
          lower.includes("league") ||
          lower.includes("king") ||
          lower.includes("e-football")
        )
          return faHeadset;
        if (lower.includes("racing")) return faFlagCheckered;
        if (lower.includes("boxing")) return faFistRaised;
        return faGamepad;
      };
    
      useEffect(() => {
        if (selectedItemRef.current) {
          selectedItemRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "center", // or 'start', 'nearest', etc.
            block: "nearest",
          });
        }
      }, [selectedGame]);
      
    
      const handleGameSelect = (gameId) => {
        setSelectedGame(gameId);
      };
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div ref={scrollContainerRef} className="flex gap-4 px-0">
        {gameMenuItems.map((item) => {
          const isSelected = selectedGame === item.id;
          return (
            <div
              key={item.id}
              ref={isSelected ? selectedItemRef : null}
              onClick={() => handleGameSelect(item.id)}
              className={`relative flex-shrink-0 cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-lg transition-all duration-300`}
              style={{
                backgroundColor: item.selectedColor,
              }}
            >
              {/* Notification count badge */}
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#0B1120] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {item.notificationCount}
              </span>

              {/* Icon */}
              <FontAwesomeIcon
                icon={getGameIcon(item.name)}
                className="text-black text-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
