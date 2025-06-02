import { useState, useRef, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { Filter, CalendarDays, ChevronDown, ChevronUp, X } from "lucide-react";

const allSports = [
  "Football",
  "Ice Hockey",
  "Basketball",
  "Tennis",
  "Volleyball",
  "American Football",
  "Aussie Rules",
  "Badminton",
  "Baseball",
  "Beach Football",
  "Beach Volleyball",
  "Boxing",
  "Cricket",
  "Table Tennis",
  "Golf",
  "Rugby",
  "Handball",
  "Hockey",
  "Squash",
  "Snooker",
  "Wrestling",
  "Fencing",
  "Archery",
  "Swimming",
  "Athletics",
  "Gymnastics",
  "Skateboarding",
  "Surfing",
  "Karate",
  "Judo",
  "Taekwondo",
  "Motorsport",
  "Cycling",
  "Rowing",
  "Sailing",
  "Darts",
  "Esports",
  "Lacrosse",
  "Softball",
  "Polo",
  "Kickboxing",
  "Weightlifting",
  "Speed Skating",
  "Biathlon",
  "Triathlon",
  "Horse Racing",
];

const competitions = [
  "All",
  "Champions League",
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
  "Ligue 1",
  "Europa League",
  "Conference League",
  "FA Cup",
  "EFL Cup",
  "Copa del Rey",
  "DFB-Pokal",
  "Coppa Italia",
  "Supercopa de España",
  "UEFA Super Cup",
  "FIFA Club World Cup",
  "MLS",
  "Brasileirão",
  "Argentine Primera División",
  "Eredivisie",
  "Portuguese Primeira Liga",
  "Scottish Premiership",
  "Turkish Süper Lig",
  "Greek Super League",
  "AFC Champions League",
  "CAF Champions League",
  "Indian Super League",
  "Saudi Pro League",
  "Chinese Super League",
  "World Cup",
  "Euro Cup",
  "Copa América",
  "African Cup of Nations",
  "Asian Cup",
  "Gold Cup",
  "Nations League",
];



export default function FilterOption() {
  const [startDate, setStartDate] = useState("2025-05-24");
  const [endDate, setEndDate] = useState("2025-05-24");
  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedCompetition, setSelectedCompetition] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [sportQuery, setSportQuery] = useState("");

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const resetFilters = () => {
    setStartDate("2025-05-24");
    setEndDate("2025-05-24");
    setSelectedSport("Football");
    setSelectedCompetition("All");
    setSportQuery("");
  };

  const filteredSports = allSports.filter((sport) =>
    sport.toLowerCase().includes(sportQuery.toLowerCase())
  );

const [isSportOpen, setIsSportOpen] = useState(false); 

const [competitionQuery, setCompetitionQuery] = useState("");
const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);

const filteredCompetitions = competitions.filter((comp) =>
  comp.toLowerCase().includes(competitionQuery.toLowerCase())
);

const sportDropdownRef = useRef(null);
const competitionDropdownRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      sportDropdownRef.current &&
      !sportDropdownRef.current.contains(event.target)
    ) {
      setIsSportOpen(false);
    }
    if (
      competitionDropdownRef.current &&
      !competitionDropdownRef.current.contains(event.target)
    ) {
      setIsCompetitionOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <div className="p-1 pb-4 rounded-lg w-100">
      <div className="flex items-center gap-2 text-[12px] font-100 border-gray-600 pt-[8px] pl-[5px] pr-[5px] pb-[7px] justify-between w-90 bg-headerBg rounded-[5px]">
        <div className="flex gap-2 text-white">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </div>
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="bg-headerBg mt-[-9px]">
            <div className="!m-2  !p-0 w-[95%] h-[2px] border-[#111] bg-mainBg" />
            <div className="grid grid-cols-2 gap-2 w-100 m-2">
              <div className="w-50 bg-headerbg3 rounded-lg mt-2">
                <label className="text-xsm block pt-2 pl-2 text-hederColor2">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    ref={startDateRef}
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2  pt-0 rounded bg-headerbg3 text-white focus:outline-none  text-xsm"
                  />
                  <CalendarDays
                    className="absolute right-2 top-0 h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => startDateRef.current?.showPicker()}
                  />
                </div>
              </div>

              <div className="w-50 bg-headerbg3 rounded-lg mt-2">
                <label className="text-xsm block pt-2 pl-2 text-hederColor2">
                  End Date
                </label>
                <div className="relative">
                  <input
                    ref={endDateRef}
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2 pt-0 rounded bg-headerbg3 text-white focus:outline-none text-xsm"
                  />
                  <CalendarDays
                    className="absolute right-2 top-0 h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => endDateRef.current?.showPicker()}
                  />
                </div>
              </div>
            </div>

            {/* Sport Dropdown with Search */}
            {/* Sport Dropdown with Search and Modal Style */}
            <div className="bg-headerBg">
              <div className="w-100 m-2">
                <div className="relative w-50 bg-headerbg3 rounded-[6px] mt-2 h-[7vh] lg:h-[4vh] md2:h-[6vh] 3xl:h-[2vh]">
                  <label className="text-xsm block pt-1 pl-2 text-hederColor2">
                    Sport
                  </label>

                  <div ref={sportDropdownRef}>
                    <Listbox
                      value={selectedSport}
                      onChange={(value) => {
                        setSelectedSport(value);
                        setIsSportOpen(false);
                      }}
                      as="div"
                      open={isSportOpen}
                    >
                      <div className="relative">
                        <Listbox.Button
                          className="w-full p-2 pt-0 rounded bg-gray-800 text-white flex justify-between items-center text-xsm"
                          onClick={(e) => {
                            e.preventDefault();
                            setTimeout(() => setIsSportOpen(true), 0);
                          }}
                        >
                          {selectedSport}
                          <ChevronDown className="h-4 w-4 text-gray-400 pointer-events-none" />
                        </Listbox.Button>

                        {/* Blur + dark overlay (click to close) */}
                        {isSportOpen && (
                          <div
                            className="fixed inset-0 z-40 backdrop-blur-sm bg-black bg-opacity-40 transition duration-300"
                            onClick={() => setIsSportOpen(false)}
                          />
                        )}

                        {isSportOpen && (
                          <div
                            className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-40 transition duration-300"
                            onClick={() => {
                              setIsSportOpen(false);
                            }} // Clicking outside closes modal
                          >
                            <div
                              className="relative mt-[10vh] w-full bg-[#0c1327] rounded-lg shadow-lg max-h-[80vh] overflow-auto z-50 md2:w-[50%] lg:mt-[10vh] xs3:w-[80%] xs3:mt-[10vh]"
                              onClick={(e) => e.stopPropagation()} // Prevent background click
                            >
                              {/* Close Button */}
                              <div className="sticky top-0 z-20 flex justify-end bg-[#0c1327] rounded-t-lg p-2">
                                <button
                                  onClick={() => {
                                    setIsSportOpen(false);
                                    setSportQuery("");
                                  }}
                                >
                                  <X className="w-5 h-5 lg:h-10 lg:w-10 text-gray hover:text-white" />
                                </button>
                              </div>

                              {/* Search Bar */}
                              <div className="sticky top-0 flex justify-center bg-[#0c1327] pt-1 w-100">
                                <div className="flex items-center w-80 md2:w-[93%] lg:w-[95%] xs2:w-[93%] xs3:w-[91%] bg-[#1c253f] rounded-md px-3 py-2">
                                  <input
                                    type="text"
                                    placeholder="Search Sport"
                                    value={sportQuery}
                                    onChange={(e) =>
                                      setSportQuery(e.target.value)
                                    }
                                    className="flex-grow bg-[#1c253f] text-sm text-white placeholder-gray-400 focus:outline-none"
                                  />
                                  <svg
                                    className="w-4 h-5 text-gray-400 ml-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                                    />
                                  </svg>
                                </div>
                              </div>

                              {/* Sport Options */}
                              <div className="p-3 pt-0">
                                {filteredSports.length > 0 ? (
                                  filteredSports.map((sport) => (
                                    <Listbox.Option
                                      key={sport}
                                      value={sport}
                                      className="cursor-pointer bg-[#1c253f] text-white p-3 border border-b border-black border-t-0 hover:bg-[#2a3550] transition-colors"
                                    >
                                      {sport}
                                    </Listbox.Option>
                                  ))
                                ) : (
                                  <div className="text-white px-4 py-3">
                                    No matches found
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Listbox>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition Dropdown */}
            <div className="bg-headerBg">
              <div className="w-100 m-2">
                <div className="relative w-50 bg-headerbg3 rounded-[6px] mt-2 h-[7vh] lg:h-[4vh] md2:h-[6vh] 3xl:h-[2vh]">
                  <label className="text-xsm block pt-1 pl-2 text-hederColor2">
                    Competition
                  </label>

                  <div ref={competitionDropdownRef}>
                    <Listbox
                      value={selectedCompetition}
                      onChange={(value) => {
                        setSelectedCompetition(value);
                        setIsCompetitionOpen(false);
                      }}
                      as="div"
                      open={isCompetitionOpen}
                    >
                      <div className="relative">
                        <Listbox.Button
                          className="w-full p-2 pt-0 rounded bg-gray-800 text-white flex justify-between items-center text-xsm"
                          onClick={(e) => {
                            e.preventDefault();
                            setTimeout(() => setIsCompetitionOpen(true), 0);
                          }}
                        >
                          {selectedCompetition}
                          <ChevronDown className="h-4 w-4 text-gray-400 pointer-events-none" />
                        </Listbox.Button>
                        {/* Blur + dark overlay (click to close) */}
                        {isCompetitionOpen && (
                          <div
                            className="fixed inset-0 z-40 backdrop-blur-sm bg-black bg-opacity-40 transition duration-300"
                            onClick={() => setIsCompetitionOpen(false)}
                          />
                        )}

                        {isCompetitionOpen && (
                          <div
                            className="fixed inset-0 z-40 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-40 transition duration-300"
                            onClick={() => setIsCompetitionOpen(false)} // Clicking outside closes
                          >
                            {/* Modal itself */}
                            <div
                              className="relative mt-[10vh] w-full bg-[#0c1327] rounded-lg shadow-lg max-h-[80vh] overflow-auto z-50 md2:w-[50%] md2:mt-[10vh] lg:mt-[10vh] xs3:w-[80%] xs3:mt-[10vh]"
                              onClick={(e) => e.stopPropagation()} // Prevent background click
                            >
                              {/* Close Button */}
                              <div className="sticky top-0 z-20 flex justify-end bg-[#0c1327] rounded-t-lg p-2">
                                <button
                                  onClick={() => {
                                    setIsCompetitionOpen(false);
                                    setCompetitionQuery("");
                                  }}
                                >
                                  <X className="w-5 h-5 text-gray hover:text-white lg:h-10 lg:w-10" />
                                </button>
                              </div>

                              {/* Search Bar */}
                              <div className="sticky top-0 flex justify-center bg-[#0c1327] pt-1">
                                <div className="flex items-center w-80 md2:w-[93%] lg:w-[95%] xs2:w-[93%] xs3:w-[91%] bg-[#1c253f] rounded-md px-3 py-2">
                                  <input
                                    type="text"
                                    placeholder="Search Competition"
                                    value={competitionQuery}
                                    onChange={(e) =>
                                      setCompetitionQuery(e.target.value)
                                    }
                                    className="flex-grow bg-[#1c253f] text-sm text-white placeholder-gray-400 focus:outline-none"
                                  />
                                  <svg
                                    className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                                    />
                                  </svg>
                                </div>
                              </div>

                              {/* Competition Options */}
                              <div className="p-3 pt-0">
                                {filteredCompetitions.length > 0 ? (
                                  filteredCompetitions.map((comp) => (
                                    <Listbox.Option
                                      key={comp}
                                      value={comp}
                                      className="cursor-pointer bg-[#1c253f] text-white p-3 border border-b border-black border-t-0 hover:bg-[#2a3550] transition-colors"
                                    >
                                      {comp}
                                    </Listbox.Option>
                                  ))
                                ) : (
                                  <div className="text-white px-4 py-3">
                                    No matches found
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Listbox>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-2 mt-2 w-100">
              <button
                onClick={resetFilters}
                className="w-[95%] md2:w-[98%] p-2 border border-gray-500 rounded text-white text-xsm"
              >
                RESET
              </button>
              <button className="w-[95%] md2:w-[98%]  p-2 bg-sky-500 hover:bg-sky-600 rounded text-black mb-2 text-xsm">
                SHOW
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
