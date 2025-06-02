import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "All", count: 101, route: "/esports" },
  { label: "Upcoming", count: 91, route: "/esports/upcoming" },
  { label: "Live", count: 10, route: "/esports/live" },
  { label: "Results", count: null, route: "/esports/result" },
];

export default function HeaderTabs() {
  // const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const handleClick = (tab) => {
    setActiveTab(tab.label);
    navigate(tab.route);
  };

  return (
    <div className="flex bg-[#0d182f] text-[#c5c9ca] text-xs font-roboto uppercase shadow-sm sticky top-0 z-50 border-b border-[#1F2937]">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => handleClick(tab)}
          className={`relative flex flex-1 items-center justify-center h-10 transition-colors 
            ${
              activeTab === tab.label
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
        >
          <div className="flex items-center gap-1">
            <span>{tab.label}</span>
            {tab.count !== null && (
              <sup className="text-[10px] text-gray-400">{tab.count}</sup>
            )}
          </div>
          <span
            className={`absolute bottom-0 left-0 w-full h-[3px] transition-transform duration-300 ${
              activeTab === tab.label
                ? "bg-blue-500 scale-x-100"
                : "bg-transparent scale-x-0"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
