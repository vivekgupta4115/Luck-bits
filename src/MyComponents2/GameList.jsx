import React, { useState } from "react";
import "./GameList.css"; 

const games = [
  "All",
  "Football",
  "Basketball",
  "Tennis",
  "Volleyball",
  "Ice Hockey",
  "Handball",
  "Baseball",
  "Table Tennis",
  "Cricket",
  "Rugby",
  "Golf",
  "Boxing",
  "MMA",
  "Wrestling",
  "Fencing",
  "Snooker",
  "Hockey",
  "Badminton",
  "E-Sports",
];

const gameIcons = {
  All: "🎮",
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Volleyball: "🏐",
  "Ice Hockey": "🏒",
  Handball: "🤾",
  Baseball: "⚾",
  "Table Tennis": "🏓",
  Cricket: "🏏",
  Rugby: "🏉",
  Golf: "🏌️",
  Boxing: "🥊",
  MMA: "🤼",
  Wrestling: "🤼‍♂️",
  Fencing: "🤺",
  Snooker: "🎱",
  Hockey: "🏑",
  Badminton: "🏸",
  "E-Sports": "🕹️",
};
  
  

const GameList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGames, setSelectedGames] = useState(["Football"]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (game) => {
    if (game === "All") {
      if (selectedGames.length === games.length - 1) {
        setSelectedGames([]);
      } else {
        setSelectedGames(games.filter((g) => g !== "All"));
      }
    } else {
      setSelectedGames((prev) =>
        prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
      );
    }
  };

  const isSelected = (game) => selectedGames.includes(game);

  return (
    <div className="dropdown-container">
      <div onClick={toggleDropdown} className="dropdown-header">
        <label className="dropdown-label">Sport</label>
        <div className="dropdown-selected">
          <span className="dropdown-text">
            {selectedGames.length === games.length - 1
              ? "All games are selected"
              : selectedGames.length > 0
              ? selectedGames.join(", ")
              : "Select"}
          </span>
          <span className="dropdown-arrow">&#9662;</span>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {games.map((game, index) => (
            <div
              key={index}
              onClick={() => handleSelect(game)}
              className="dropdown-item"
            >
              <div className="game-item2">
                <span className="game-icon2">{gameIcons[game]}</span>
                <span className="game-name2">{game}</span>
              </div>
              <input
                type="checkbox"
                readOnly
                checked={
                  game === "All"
                    ? selectedGames.length === games.length - 1
                    : isSelected(game)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameList;
