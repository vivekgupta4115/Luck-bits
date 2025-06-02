// data.js
export const sportsData = [
  {
    name: "Counter-Strike 2",
    iconColor: "text-orange-500",
    matchCount: 3,
  },
  {
    name: "Dota 2",
    iconColor: "text-green-500",
    matchCount: 2,
  },
  {
    name: "Valorant",
    iconColor: "text-pink-500",
    matchCount: 4,
  },
];
  

export const leagueData = {
  country: {
    name: "World",
    code: "us", // flag code
  },
  leagueName: "ETERNITY LEAGUE",
};

// Data.js
export const matchData = [
  {
    marketOptions: ["Map 2 Winner", "Match Winner", "Handicap"],
    selectedMarket: "Map 2 Winner",
    teams: ["Rack Esports", "Delfi Esports"],
    odds: [2.62, 1.43],
    oddsMovement: ["down", "up"], // red for 2.62, green for 1.43
    matchScore: "1 : 0",
    roundScores: ["(13:6)", "(2:1)"],
    status: "🔴",
    statusName: "Map 2",
  },
  {
    marketOptions: ["Map 2 Winner", "Match Winner", "Handicap"],
    selectedMarket: "Match Winner",
    teams: ["Team Alpha", "Team Bravo"],
    odds: [1.95, 1.8],
    oddsMovement: ["up", "down"], // green for 1.95, red for 1.8
    matchScore: "0 : 1",
    roundScores: ["(10:13)", "(1:2)"],
    status: "🔴",
    statusName: "Timeout",
  },
];
  
  
