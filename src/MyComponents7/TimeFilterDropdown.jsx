import { useState } from "react";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/20/solid";

const timeOptions = [
  "All",
  "Today",
  "3 hours",
  "6 hours",
  "12 hours",
  "24 hours",
  "48 hours",
  "72 hours",
];

export default function TimeFilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center px-4 py-2 text-xsm font-medium text-hederColor3 bg-[#1A1F36] rounded-md hover:bg-[#2A2F4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1F36] focus:ring-white"
      >
        <ClockIcon className="w-4 h-4 mr-2 text-hederColor3" />
        {selected}
        <ChevronDownIcon className="w-4 h-4 ml-2 text-hederColor3" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 origin-top-right rounded-md bg-mainBg border-none shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {timeOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm text-hederColor3 hover:bg-[#1F2937] border-none ${
                  selected === option ? "bg-[#374151]" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
