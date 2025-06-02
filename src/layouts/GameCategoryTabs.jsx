// components/GameCategoryTabs.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { RiRadioButtonLine } from "react-icons/ri";
import {
  IoFootball,
  IoGameController,
  IoLockClosedOutline,
  IoStarOutline,
  IoTennisball,
} from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineCasino, MdOutlineTimer } from "react-icons/md";
import { GiTrebuchet } from "react-icons/gi";



const GameCategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const gameCategoryTabs = [
    {
      icon: <RiRadioButtonLine size={20} />,
      name: "LIVE",
      isTop: false,
      route: "live/livepage",
      hoverMenu: ["Event View", "Live Calendar", "Result"],
    },
    {
      icon: <IoFootball size={20} />,
      name: "Sports",
      isTop: false,
      route: "sports",
      hoverMenu: ["Event View", "Live Calendar", "Result"],
    },
    {
      icon: <IoFootball size={20} />,
      name: "Casino",
      isTop: false,
      route: "casino",
      hoverMenu: ["Home", "Tournaments", "Jackpots"],
    },
    {
      icon: <MdOutlineCasino size={20} />,
      name: "LIVE CASINO",
      isTop: false,
      route: "livecasino",
    },
    {
      icon: <IoFootball size={20} />,
      name: "Games",
      isTop: false,
      route: "gamepage",
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

  return (
    <div className="w-full px-0">
      <div className="w-full overflow-x-auto rounded-md flex items-center z-10 min-h-12 hide-scrollbar relative">
        <div className="flex pt-1 h-full items-center hide-scrollbar whitespace-nowrap  gap-2">
          {gameCategoryTabs.map((tab) => {
            const currentPath = location.pathname.split("/")[1];
            const tabPath = tab.route?.split("/")[0]; // Safe optional chaining

            const isActive = tabPath && currentPath === tabPath;

            return (
             <div key={tab.name} className="relative h-full group  ">
              <button
                onClick={() => tab.route && navigate(`/${tab.route}`)}
                className={`relative px-4 flex items-center h-full gap-1 hover:border-t-4 border-t-[#34aadc] rounded-tl-lg   ${
                  isActive ? "border-blue-500 text-white" : "border-transparent"
                }`}
              >
                <div>{tab.icon}</div>
                <div className="text-xs xsm:text-[15px] text-textGray">
                  {tab.name}
                </div>
                {tab.isTop && (
                  <div className="absolute top-1 -right-2.5 bg-purple-900 text-white text-[10px] px-1 rounded">
                    Top
                  </div>
                )}
              </button>

              {/* Hover Menu */}
              {tab.hoverMenu && (
                <div className="fixed z-10 hidden group-hover:flex flex-col bg-gray-800 text-white/100 text-xs rounded shadow-lg 
                     w-[235px] h-[110px] bg-[#000C24] px-[16px] gap-1 ">
                  {tab.hoverMenu.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap rounded-[4px] p-[10px]
                        bg-gradient-to-r from-white/15 to-white/5 h-[30px] flex  items-center text-[16px] hover:border-l-2 
                           hover:border-l-[#34aadc]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
           </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameCategoryTabs;
