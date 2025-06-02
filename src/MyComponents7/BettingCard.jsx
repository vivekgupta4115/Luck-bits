
import { useState } from "react";
import SportHeader from "./SportHeader";
import LeagueHeader from "./LeagueHeader";
import MarketSelector from "./MarketSelector";
import { sportsData, leagueData, matchData } from "./Data";

export default function BettingCard() {
  const [isSportOpen, setIsSportOpen] = useState(true);
  const [isLeagueOpen, setIsLeagueOpen] = useState(true);
  const [openLeagues, setOpenLeagues] = useState(
    sportsData.map(() => true) // one open state per sport
  );
  const toggleLeagueOpen = (index) => {
    setOpenLeagues((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };
  
  

  const [openSports, setOpenSports] = useState(
    sportsData.map(() => true) // default open state for each sport
  );

  const toggleSportOpen = (index) => {
    setOpenSports((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className="bg-mainBg text-white text-xs  mx-auto border border-borderColor rounded-md overflow-hidden mt-2">
      {sportsData.map((sport, sportIndex) => (
        <div key={sportIndex}>
          {/* Sport Header */}
          <SportHeader
            name={sport.name}
            iconColor={sport.iconColor}
            matchCount={sport.matchCount}
            isOpen={openSports[sportIndex]}
            toggleOpen={() => toggleSportOpen(sportIndex)}
          />

          {openSports[sportIndex] && (
            <>
              {/* Assuming same leagueData and matchData for simplicity */}
              <LeagueHeader
                country={leagueData.country}
                leagueName={leagueData.leagueName}
                isOpen={openLeagues[sportIndex]}
                toggleOpen={() => toggleLeagueOpen(sportIndex)}
              />

              {openLeagues[sportIndex] && ( matchData.map((match, matchIndex) => (
                <div key={matchIndex} className="bg-headerbg3 mb-2">
                  {/* Market Selector */}
                  <div className="flex items-center border-b border-borderColor bg-bg2">
                    <MarketSelector
                      options={match.marketOptions}
                      defaultOption={match.selectedMarket}
                    />
                    <div className="flex-1 flex justify-end text-center text-hederColor3 text-[10px]">
                      <div className="w-[20vw] border-l border-borderColor py-1">
                        W1
                      </div>
                      <div className="w-[20vw] border-l border-borderColor py-1">
                        W2
                      </div>
                    </div>
                  </div>

                  {/* Teams and Odds */}
                  <div className="bg-headerBgSelected2 px-[1px] py-1 text-[11px]">
                    <div className="flex border border-borderColor rounded overflow-hidden">
                      <div className="flex-1 py-2 px-2 bg-headerBg">
                        {match.teams.map((team, idx) => (
                          <p key={idx}>{team}</p>
                        ))}
                      </div>
                      {match.odds.map((odd, idx) => {
                        const movement = match.oddsMovement?.[idx]; // "up" or "down"
                        const isUp = movement === "up";

                        return (
                          <div
                            key={idx}
                            className="w-[20vw] bg-headerbg3 border-l border-borderColor flex flex-col justify-center items-center text-yellow-400 relative"
                          >
                            {odd}
                            {movement && (
                              <div
                                className={`absolute w-0 h-0 
            ${
              isUp
                ? "top-0 right-0 border-r-[6px] border-t-[6px] border-r-transparent border-t-green rotate-90"
                : "bottom-0 right-0 border-l-[6px] border-b-[6px] border-l-transparent border-b-red"
            }`}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Match Footer */}
                    <div className="flex justify-between items-center mt-1 text-[10px] text-hederColor3 bg-headerBg">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-white">{match.status}</span>
                        <span className="text-white">{match.statusName}</span>
                        <span>{match.matchScore}</span>
                        {match.roundScores.map((score, i) => (
                          <span key={i} className="text-gray-400">
                            {score}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs">+11</span>
                    </div>
                  </div>
                </div>
              )))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
