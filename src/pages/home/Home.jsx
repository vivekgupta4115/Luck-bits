import { useEffect, useRef, useState } from "react"
import ImageCarousel from "../../reusableComponents/ImageCarousel";
import { RiRadioButtonLine } from "react-icons/ri";
import apis from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../reusableComponents/Loader/Loader";
import { MdKeyboardArrowRight, MdOutlineCasino, MdOutlineTimer } from "react-icons/md";
import { IoFootball, IoGameController, IoLockClosedOutline, IoStarOutline, IoTennisball } from "react-icons/io5";
import { LiaDiceD6Solid } from "react-icons/lia";
import { GiTrebuchet } from "react-icons/gi";
import football from "../../assets/sports/football.webp"
import avi from "../../assets/aviator/aviator.webp"
import esports from "../../assets/sports/esports.webp"
import liveCasino from "../../assets/sports/liveCasino.webp"
import casino from "../../assets/sports/casino.webp"
import { FaBaseballBatBall } from "react-icons/fa6";
import SelectBox from "../../reusableComponents/SelectBox";
import { BsExclamationCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import IndianTime from "../../reusableComponents/IndianTime";
import LanguageModal from "../../components/Modal/LanguageModal";
import ListModal from "../../reusableComponents/Modal/ListModal";

import { useNavigate } from "react-router-dom";
import GameMenu from "../../MyComponent/Game"
import SliderBar from "../../MyComponents4/SliderBar";
import GameGallery from "../../MyComponents4/GameGallery";  
import AllGames from "../../MyComponents5/AllGames";
import Table2 from "../../MyComponents2/Table2";



const gameCategoryTabs = [
  {
    icon: <RiRadioButtonLine size={20} />,
    name: "LIVE",
    isTop: false,
    route: "live/livepage",
  },
  {
    icon: <IoFootball size={20} />,
    name: "Games",
    isTop: false,
    route: "gamepage",
  },
  {
    icon: <MdOutlineCasino size={20} />,
    name: "LIVE CASINO",
    isTop: false,
    route: "livecasino",
  },
  // { icon: <MdOutlineCasino size={20} />, name: "LIVE CASINO", isTop: false },
  {
    icon: <MdOutlineCasino size={20} />,
    name: "E-SPORT",
    isTop: true,
    route: "esports",
  },
  // {
  //   icon: <LiaDiceD6Solid size={20} />,
  //   name: "GAMES",
  //   isTop: false,
  //   // route: "virtualsports",
  // },
  // { icon: <IoGameController size={20} />, name: "E-SPORTS", isTop: false },
  {
    icon: <IoGameController size={20} />,
    name: "VIRTUAL SPORTS",
    isTop: false,
    route: "virtualsports",
  },
  { icon: <GiTrebuchet size={20} />, name: "TREBUCHET", isTop: false },
];
const upcomingMatchesTabs = [
    { name: "0-15" },
    { name: "15-30" },
    { name: "30-60" },
];
const upcomingMatchesData = {
    "0-15": [
        {
            number: 12,
            sport: "Football",
            bg: "footballBg",
            iconColor: "footballIcon",
            icon: <FaBaseballBatBall size={20} />,
            matches: [
                { id: 1, team1: "A", team2: "B", time: "2:00 PM" },
                { id: 2, team1: "C", team2: "D", time: "2:30 PM" },
            ],
        },
        {
            number: 7,
            sport: "Tennis",
            bg: "tennisBg",
            iconColor: "tennisIcon",
            icon: <IoTennisball size={20} />,
            matches: [
                { id: 1, player1: "P1", player2: "P2", time: "3:00 PM" },
            ],
        },
    ],
    "15-30": [
        {
            number: 5,
            sport: "Football",
            bg: "footballBg",
            iconColor: "footballIcon",
            icon: <FaBaseballBatBall size={20} />,
            matches: [
                { id: 1, team1: "E", team2: "F", time: "2:45 PM" },
            ],
        },
        {
            number: 3,
            sport: "Tennis",
            bg: "tennisBg",
            iconColor: "tennisIcon",
            icon: <IoTennisball size={20} />,
            matches: [
                { id: 1, player1: "P3", player2: "P4", time: "4:00 PM" },
            ],
        },
    ],
    "30-60": [
        {
            number: 2,
            sport: "Football",
            bg: "footballBg",
            iconColor: "footballIcon",
            icon: <FaBaseballBatBall size={20} />,
            matches: [
                { id: 1, team1: "G", team2: "H", time: "5:00 PM" },
            ],
        },
        {
            number: 6,
            sport: "Tennis",
            bg: "tennisBg",
            iconColor: "tennisIcon",
            icon: <IoTennisball size={20} />,
            matches: [
                { id: 1, player1: "P5", player2: "P6", time: "5:30 PM" },
            ],
        },
    ],
};
const cards = [
    { img: football, name: "SPORT" },
    { img: esports, name: "ESPORTS" },
    { img: liveCasino, name: "LIVE CASINO" },
    { img: casino, name: "CASINO" },
];
const matches = [
    {
        id: 1,
        date: "22.04.25, 19:20",
        team1: "Oman Club",
        team2: "Al-Khabourah SC",
        odds: { w1: "2.36", x: "2.99", w2: "2.92" },
        locked: true
    },
    {
        id: 2,
        date: "22.04.25, 19:25",
        team1: "Al Urooba",
        team2: "Al Wahda Abu Dhabi",
        odds: { w1: "8.40", x: "5.10", w2: "1.27" },
        locked: false
    },
    {
        id: 3,
        date: "22.04.25, 19:25",
        team1: "Al Sharjah SC",
        team2: "Ajman Club",
        odds: { w1: "1.41", x: "4.40", w2: "6.20" },
        locked: false
    },
    {
        id: 4,
        date: "22.04.25, 19:30",
        team1: "Al Wehdat SC Amman",
        team2: "Moghayer Al Sarhan",
        odds: { w1: "1.08", x: "7.80", w2: "21.00" },
        locked: false
    },
    {
        id: 5,
        date: "21.04.25, 16:30",
        team1: "Al Wehdat SC Amman",
        team2: "Moghayer Al Sarhan",
        odds: { w1: "1.08", x: "7.80", w2: "21.00" },
        locked: false
    },
    {
        id: 6,
        date: "21.04.25, 13:30",
        team1: "Al Wehdat SC Amman",
        team2: "Moghayer Al Sarhan",
        odds: { w1: "1.08", x: "7.80", w2: "21.00" },
        locked: false
    },
    {
        id: 7,
        date: "21.04.25, 13:30",
        team1: "Kd",
        team2: "dk",
        odds: { w1: "1.08", x: "7.80", w2: "21.00" },
        locked: false
    },
];
function Home() {
    const navigate = useNavigate();
    
  const goToLivePage = (route) => {
    console.log("name is ",route)
    navigate(`/${route}`);
  };
    const [loading, setLoading] = useState(false);
    const [isOpenHeaderModal, setIsOpenHeaderModal] = useState(null);
    const [headerModalList, setHeaderModalList] = useState([])
    const [bannerData, setBannerData] = useState([])
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [activeSportTabs, setActiveSportTabs] = useState({
        "0-15": 0,
        "15-30": 0,
        "30-60": 0,
    });
    const hoverTimeout = useRef(null);
    const [activeMatchesTab, setActiveMatchesTab] = useState("0-15");
    const [seletedData, setSeletedData] = useState("");
    const modalRef = useRef();
    
    const isHome = location.pathname === "";
    // const { gameName } = useSelector((state) => state.AllGamesContainer);
    const userId = localStorage.getItem("userId");

    // const buttonRef = useRef(null);
    // const fixedScrollHeight = 500
    const bannerDataHandler = async () => {
        setLoading(true)
        try {
            const res = await axios.get(apis.slider)
            // console.log("resrresres", res)
            if (res?.data?.status === 200) {
                setLoading(false)
                setBannerData(res?.data?.data)
            } else {
                setLoading(false)
                toast.error(res?.data?.message)
            }
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }
    useEffect(() => {
        bannerDataHandler()
    }, [])
    // useEffect(() => {
    //     if (gameName && buttonRef.current) {
    //         const buttonPosition = buttonRef.current.getBoundingClientRect().top + window.scrollY;
    //         const positionToScroll = Math.max(buttonPosition - fixedScrollHeight, 0);
    //         window.scrollTo({
    //             top: positionToScroll,
    //             behavior: "smooth",
    //         });
    //     }
    // }, [gameName]);

    function getBgClass(bg) {
        switch (bg) {
            case "footballBg":
                return "bg-footballBg";
            case "tennisBg":
                return "bg-tennisBg";
            default:
                return "bg-bg2";
        }
    }

    function getTextColor(iconColor) {
        switch (iconColor) {
            case "footballIcon":
                return "text-tennisIcon";
            case "tennisIcon":
                return "text-footballIcon";
            default:
                return "text-white";
        }
    }
    const gamesData = [
        { route: "/aviator", name: "Aviator", img: avi },
        // { route: "/lottery/wingo", name: "wingo", img: "wingo.jpeg" },
        // { route: "/lottery/trxwingo", name: "trx wingo", img: "trx.png" },
        // { route: "/dragonSplash", name: "Dragon Tiger", img: "dt.png" },
        // { route: "/andarbahar", name: "Andarbahar", img: "ab.png" },
        // { route: "/plinko", name: "Plinko", img: "plinko.png" },
        // { route: "/aviator", name: "Slots", img: "/images/slots.png" },
        // { route: "/aviator", name: "Dragon Tiger", img: "/images/dragontiger.png" },
        // { route: "/aviator", name: "Teen Patti", img: "/images/teenpatti.png" },
        // { route: "/aviator", name: "Andar Bahar", img: "/images/andarbahar.png" }
    ];

    // console.log("selectedData", seletedData)
    const headerModalArrays = [
        [
            {
                name: "Event view",
                route: "#",
            },
            {
                name: "Live calenders",
                route: "#",
            },
            {
                name: "Results",
                route: "#",
            },
        ],
        [
            {
                name: "Event view",
                route: "#",
            },
            {
                name: "Live calenders",
                route: "#",
            },
            {
                name: "Results",
                route: "#",
            },
        ],
        [
            {
                name: "Home",
                route: "#",
            },
            {
                name: "Tournaments",
                route: "#",
            },
            {
                name: "Jackpots",
                route: "#",
            },
        ],
        null,null,null,null,null
    ]
    const toggleHeaderModalList = (index, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setIsOpenHeaderModal(index);
        setHeaderModalList(headerModalArrays[index] || []);
        setModalPosition({ top: rect.bottom, left: rect.left });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpenHeaderModal(null);
            }
        };

        if (isOpenHeaderModal !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenHeaderModal]);
    const handleMouseEnter = (index, event) => {
        clearTimeout(hoverTimeout.current); // Cancel any pending close
        toggleHeaderModalList(index, event); // Show modal & set position
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsOpenHeaderModal(null); // Close modal after delay
        }, 200); // Delay in ms — tweak if needed
    };

    return (
      <div>
        {loading && <Loader setLoading={setLoading} loading={loading} />}
        <div className="w-full px-1">
          {/* <div className="w-full overflow-x-auto xsm:bg-bg1 rounded-md flex items-center h-12">
            <div className="flex pt-1 h-full items-center hide-scrollbar whitespace-nowrap  gap-2">
              {gameCategoryTabs.map((tab, i) => (
                <div
                  onMouseLeave={handleMouseLeave}
                  key={tab?.name}
                  className="relative h-full"
                >
                  <button
                    // onMouseEnter={(e) => toggleHeaderModalList(i, e)}
                    onClick={()=>{goToLivePage(tab.route);}}
                    className={`relative px-4 flex items-center h-full gap-1 ${
                      isOpenHeaderModal === i
                        ? "border-t-[2px] bg-mainBg  border-bg4 text-white"
                        : ""
                    }`}
                  >
                    <div>{tab?.icon}</div>
                    <div className="flex items-center rounded-full text-xs xsm:text-[15px] text-textGray transition">
                      {tab.name}
                    </div>
                    {tab?.isTop && (
                      <div className="absolute top-1 -right-2.5 bg-purple-900 text-white text-[10px] px-1 rounded">
                        Top
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div> */}

          <div className="rounded-xl xsm:px-1">
            {bannerData?.length > 0 ? (
              <ImageCarousel
                imagesData={bannerData}
                height="h-[15vh] lg:h-[50vh] xl:h-[60vh]"
              />
            ) : (
              <SliderBar />
            )}
          </div>
          {/* cards game */}
          {/* <div className="w-full xsm:flex flex-wrap items-center gap-3 mt-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative transition-transform duration-200 hover:scale-105  xsm:w-[32.5%] 3xl:w-[24.5%] h-64  rounded-md overflow-hidden group cursor-pointer"
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-fit "
                />
              </div>
            ))}
          </div> */}
          {/* featured games */}
          <div className="text-xsm p-2">
            <h1 className="font-semibold text-textGray1">FEATURED GAMES</h1>
            <div className="h-28 text-xsm w-full flex items-center font- text-textGray1 justify-center">
              There are no featured games at the moment
            </div>
          </div>
          {/* trending games */}
          {/* <div className="text-xsm p-2">
            <h1 className="font-semibold text-white">TRENDING GAMES</h1>
            <div className="w-full xsm:flex flex-wrap items-center gap-2 mt-2">
              {gamesData.map((game, index) => (
                <div
                  key={index}
                  className="relative 3xl:w-[19.5%] h-64 rounded-md overflow-hidden group cursor-pointer"
                >
                  <img
                    src={game.img}
                    alt={game.name}
                    className="w-full h-full object-fit"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                    <IoStarOutline size={24} />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                    <BsExclamationCircle size={24} />
                  </div>
                  <Link to={game?.route}>
                    <button className="absolute text-black py-1 px-2 rounded-[0.25rem] text-xsm bottom-2 left-[40%] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-bg4">
                      PLAY
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div> */}
          {/* upcoming matches */}
          <div className="text-xsm p-2">
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-xsm text-textGray1">
                  UPCOMING MATCHES
                </h1>
                <button className="text-hederColor2 flex items-center text-xsm">
                  More <MdKeyboardArrowRight size={25} />{" "}
                </button>
              </div>
              <div className="w-full md:flex items-center justify-between gap-2 mt-3">
                <div className="flex gap-1 items-center hide-scrollbar whitespace-nowrap mb-2 md:hidden">
                  {upcomingMatchesTabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveMatchesTab(tab.name)}
                      className={`py-1.5 w-[100vw] rounded-md flex items-center justify-center ${
                        activeMatchesTab !== tab.name
                          ? "border-[0.1px] border-textGray text-textGray"
                          : "text-bg2 bg-white"
                      } text-xs transition`}
                    >
                      {tab.name}M
                    </button>
                  ))}
                </div>

                {/*  Match Icons */}
                {/* <div className="xsm:flex items-center gap-2 w-full">
                  {upcomingMatchesData[activeMatchesTab].map((item, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        setActiveSportTabs((prev) => ({
                          ...prev,
                          [activeMatchesTab]: i,
                        }))
                      }
                      className={`relative w-10 h-10 flex items-center justify-center rounded-[0.25rem] transition-all duration-300 ${
                        activeSportTabs[activeMatchesTab] === i
                          ? getBgClass(item.bg)
                          : `bg-bg2 ${getTextColor(item.iconColor)}`
                      }`}
                    >
                      {item.icon}
                      {item.number && (
                        <div className="absolute top-0 right-0 text-[12px] bg-bg2 text-white rounded-full h-5 w-5 flex items-center justify-center leading-none translate-x-1/2 -translate-y-1/2">
                          {item.number}
                        </div>
                      )}
                    </div>
                  ))}
                </div> */}
                <GameMenu maxItems={5} />

                {/*  Upcoming tab - visible on md and up screens only (keeps original position) */}
                <div className="hidden md:flex gap-1 items-center lg:justify-between hide-scrollbar whitespace-nowrap">
                  {upcomingMatchesTabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveMatchesTab(tab.name)}
                      className={`py-1.5 w-[72px] rounded-md flex items-center justify-center ${
                        activeMatchesTab !== tab.name
                          ? "border-[0.1px] border-textGray text-textGray"
                          : "text-bg2 bg-white"
                      } text-xs transition`}
                    >
                      {tab.name}M
                    </button>
                  ))}
                </div>
              </div>
              {/* table */}
              {/* <div className="flex flex-col mt-2">
                <div className="flex w-full items-center my-2 rounded-md hide-scrollbar overflow-x-auto md:overflow-x-hidden">
                  <div className="flex items-center gap-[1px] w-full  ">
                    <div className="w-[150px] sm:w-[200px] py-[6px] bg-[#2E374B] text-xsm flex items-center justify-between gap-1 flex-shrink-0">
                      <SelectBox
                        options={["WINNER", "HANDICAP", "TOTALS"]}
                        label="Winner"
                        width="w-[150px] sm:w-[171px]"
                        setSelectedData={setSeletedData}
                      />
                    </div>
                    <div className="h-8 w-[0.3px] -ml-5 bg-black"></div>
                    <div className="flex-1 px-1 sm:px-4 py-[15.5px] bg-[#2E374B] flex flex-col text-white text-xsm">
                      <span className="text-nowrap"></span>
                      <span className="text-nowrap"></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[1px] -mr-5 text-yellow-400 text-xsm">
                    <div className=" flex items-center bg-[#565F6E]  py-[6px] justify-center w-[100px]">
                      W1{" "}
                    </div>
                    <div className=" flex items-center bg-[#565F6E]  py-[6px] justify-center w-[100px]">
                      X
                    </div>
                    <div className=" flex items-center bg-[#565F6E]  py-[6px] justify-center w-[100px]">
                      W2{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 max-h-[300px] hide-scrollbar overflow-y-auto z-10">
                  {matches.map((match) => (
                    <div
                      key={match.id}
                      className="group flex w-full items-center gap-[1px] rounded-md hide-scrollbar overflow-x-auto sm:overflow-x-hidden flex-shrink-0"
                    >
                
                      <div className="flex items-center w-full bg-[#222D42] group-hover:bg-[#565F6E]">
                        <div className="w-[150px] sm:w-[200px] px-2 py-2 text-xsm flex items-center gap-1 flex-shrink-0">
                          <MdOutlineTimer size={16} /> {match.date}
                        </div>
                        <div className="h-10 w-[0.1px] -ml-5 bg-[#3A4456]"></div>
                        <div className="flex-1 px-1 sm:px-4 py-2 flex flex-col text-white text-xsm">
                          <span className="text-nowrap">{match.team1}</span>
                          <span className="text-nowrap">{match.team2}</span>
                        </div>
                        <div className="px-2">
                          <p>{match?.locked ? "" : "52+"}</p>
                          <div className="flex items-center gap-1">
                            <span>
                              {match?.locked ? (
                                <IoLockClosedOutline size={18} />
                              ) : (
                                ""
                              )}
                            </span>
                            <IoStarOutline />
                          </div>
                        </div>
                      </div>
                
                      <div className="flex items-center gap-[1px] -mr-5 text-[#ffd700] text-xsm">
                        {[match.odds.w1, match.odds.x, match.odds.w2].map(
                          (odds, idx) => (
                            <div
                              key={idx}
                              className="group/odds relative flex items-center justify-center bg-[#3A4456] w-[100px] py-[18px] hover:bg-bg4 group-hover:bg-[#565F6E]"
                            >
                              <span className="relative z-10 text-[#ffd700] group-hover/odds:text-white hover:text-white">
                                {match.locked ? (
                                  <IoLockClosedOutline size={18} />
                                ) : odds ? (
                                  odds
                                ) : (
                                  "-"
                                )}
                              </span>
                              <div className="absolute inset-0 hover:bg-bg4"></div>
                            </div>
                          )
                        )}
                      </div>
                   
                    </div>
                  ))}
                </div>
              </div> */}
              <Table2></Table2>
            </div>
          </div>
          {/*casino games */}
          <div className="mb-1">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xsm text-textGray1 uppercase">
                Casino Games
              </h1>
              <button
                className="text-hederColor2 flex items-center text-xsm"
                onClick={() => navigate("/")}
              >
                More <MdKeyboardArrowRight size={25} />{" "}
              </button>
            </div>
            <div className="w-full flex flex-wrap items-center gap-3 mt-0">
              <GameGallery
                maxItems={4}
                className={isHome ? "grid-cols-2" : "grid-cols-1"}
              />
            </div>
          </div>
          {/* Live casino games */}
          <div className="mb-1">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xsm text-textGray1 uppercase">
                Live casino Games
              </h1>
              <button
                className="text-hederColor2 flex items-center text-xsm"
                onClick={() => navigate("/livecasino")}
              >
                More <MdKeyboardArrowRight size={25} />{" "}
              </button>
            </div>

            <div className="w-full flex flex-wrap items-center gap-3 mt-0">
              <GameGallery maxItems={3} />
            </div>
          </div>
          {/* games */}
          <div className="mb-1">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xsm text-textGray1 uppercase">
                Games
              </h1>
              <button
                className="text-hederColor2 flex items-center text-xsm"
                onClick={() => navigate("/gamepage")}
              >
                More <MdKeyboardArrowRight size={25} />{" "}
              </button>
            </div>
            <div className="w-full flex flex-wrap items-center gap-3 mt-0">
              <AllGames maxItems={2} />
            </div>
          </div>
          {/* <div className="flex items-center justify-end gap-2 px-28">
            <div className="flex justify-center items-center text-nowrap text-white rounded-md text-xs w-16 mr-4 py-1.5 bg-bg2">
              <IndianTime />
            </div>
            <div className="h-8 w-[0.3px] bg-bg1"></div>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="w-[85px]"
            >
              <div className="flex items-center justify-center gap-2">
                <img
                  className="h-4 w-6 object-fit"
                  src="indFlag.png"
                  alt="df"
                />
                <p>IND</p>
              </div>
            </button>
            {isLanguageOpen && <LanguageModal />}
          </div> */}
        </div>
        {isOpenHeaderModal !== null && (
          <div
            ref={modalRef}
            style={{
              position: "absolute",
              top: modalPosition.top + 4,
              left: modalPosition.left - 10,
            }}
            onMouseEnter={() => clearTimeout(hoverTimeout.current)}
            onMouseLeave={handleMouseLeave}
            className="px-2 flex flex-col gap-0.5 hide-scrollbar shadow-2xl rounded-md z-50"
          >
            <ListModal
              isOpen={true}
              data={headerModalList}
              className="w-full shadow-2xl hover:border-l-[4px] border-bg4 gap-0 bg-gradient-to-r from-bg3 to-bg2 flex flex-col items- rounded-[0.25rem] pr-10 pl-2 py-1 text-textGray2 hover:text-white cursor-pointer"
              renderItem={{
                key: (item, index) => Object.values(item).join("-") + index,
                content: (item) => <span>{Object.values(item)[0]}</span>,
              }}
            />
          </div>
        )}

        {/* <ScrollToTopButton /> */}
      </div>
    );
}

export default Home;
