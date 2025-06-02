import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const matchData = [
  {
    league: "1. Deild (Iceland)",
    logo: "🌐", // Replace with image if available
    matches: [
      {
        home: "HK Kopavogur",
        away: "UMF Njardvik",
        score: "1 - 3",
        halftime: "1:3 (1:1)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Keflavik",
        away: "Leiknir Reykjavik",
        score: "6 - 0",
        halftime: "6:0 (2:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "IR Reykjavik",
        away: "UMF Selfoss",
        score: "2 - 0",
        halftime: "2:0 (0:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Fylkir Reykjavik",
        away: "Throttur Reykjavik",
        score: "1 - 2",
        halftime: "1:2 (0:1)",
        date: "24.05.2025",
        time: "00:45",
      },
    ],
  },
  {
    league: "2. Bundesliga (Germany)",
    logo: "🇩🇪",
    matches: [
      {
        home: "HK Kopavogur",
        away: "UMF Njardvik",
        score: "1 - 3",
        halftime: "1:3 (1:1)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Keflavik",
        away: "Leiknir Reykjavik",
        score: "6 - 0",
        halftime: "6:0 (2:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "IR Reykjavik",
        away: "UMF Selfoss",
        score: "2 - 0",
        halftime: "2:0 (0:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Fylkir Reykjavik",
        away: "Throttur Reykjavik",
        score: "1 - 2",
        halftime: "1:2 (0:1)",
        date: "24.05.2025",
        time: "00:45",
      },
    ],
  },
  {
    league: "3. Deild (Iceland)",
    logo: "🌐", // Replace with image if available
    matches: [
      {
        home: "HK Kopavogur",
        away: "UMF Njardvik",
        score: "1 - 3",
        halftime: "1:3 (1:1)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Keflavik",
        away: "Leiknir Reykjavik",
        score: "6 - 0",
        halftime: "6:0 (2:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "IR Reykjavik",
        away: "UMF Selfoss",
        score: "2 - 0",
        halftime: "2:0 (0:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Fylkir Reykjavik",
        away: "Throttur Reykjavik",
        score: "1 - 2",
        halftime: "1:2 (0:1)",
        date: "24.05.2025",
        time: "00:45",
      },
    ],
  },
  {
    league: "4. Deild (Iceland)",
    logo: "🌐", // Replace with image if available
    matches: [
      {
        home: "HK Kopavogur",
        away: "UMF Njardvik",
        score: "1 - 3",
        halftime: "1:3 (1:1)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Keflavik",
        away: "Leiknir Reykjavik",
        score: "6 - 0",
        halftime: "6:0 (2:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "IR Reykjavik",
        away: "UMF Selfoss",
        score: "2 - 0",
        halftime: "2:0 (0:0)",
        date: "24.05.2025",
        time: "00:45",
      },
      {
        home: "Fylkir Reykjavik",
        away: "Throttur Reykjavik",
        score: "1 - 2",
        halftime: "1:2 (0:1)",
        date: "24.05.2025",
        time: "00:45",
      },
    ],
  },
];

export default function Dropdown() {
  const [openLeague, setOpenLeague] = useState(null);

  return (
    <div className="w-full  mx-auto bg-mainBg text-white rounded overflow-auto">
      {matchData.map((league, idx) => (
        <div key={idx} className="">
          <div
            onClick={() => setOpenLeague(openLeague === idx ? null : idx)}
            className="flex items-center justify-between px-1 py-1 cursor-pointer bg-bg1 hover:bg-[#1c253f]"
          >
            <div className="flex items-center gap-2">
              <span>{league.logo}</span>
              <span className="text-[12px]">{league.league}</span>
            </div>
            {openLeague === idx ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>

          <div className="!m-0 !p-0 w-[96vw] h-[5px] border-[#111]" />

          {/* Expanded Matches */}
          {openLeague === idx && league.matches.length > 0 && (
            <div className="bg-[#101a33] px-1 py-2">
              {league.matches.map((match, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-bg1 rounded-md pl-2 pr-1 pt-1 pb-0 mb-3 shadow-sm"
                >
                  {/* Teams and scores */}
                  <div className="flex justify-between">
                    <div className="flex flex-col text-[10px]">
                      <span className="text-white">{match.home}</span>
                      <span className="text-white">{match.away}</span>
                    </div>
                    <div className="flex flex-col items-end  text-[10px]">
                      <span className="text-yellow ">
                        {match.score.split(" - ")[0]}
                      </span>
                      <span className="text-yellow ">
                        {match.score.split(" - ")[1]}
                      </span>
                    </div>
                  </div>

                  {/* Halftime */}
                  <div className="text-[10px] text-hederColor2 mt-1">
                    {match.halftime}
                  </div>

                  {/* Date, time and VIEW button */}
                  <div className="!m-0 !p-0 w-[96vw] h-[0.5px] border-t border-[#111] relative left-1/2 -translate-x-1/2" />

                  <div className="flex items-center justify-between mt-1 text-[10px] text-hederColor2">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{match.date}</span>
                      <div className="!m-0 !p-0 w-[1px] h-[12px] border-[#111] bg-black" />
                      <span className="ml-0">{match.time}</span>
                    </div>
                    <button className="flex items-center gap-1 text-hederColor3 font-[12px] hover:underline">
                      VIEW
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
