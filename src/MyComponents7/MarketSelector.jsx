import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const timeOptions = ["Winner", "Handicap", "Total"];

export default function MarketSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Winner");

  return (
    <div className="relative inline-block text-left w-full bg-bg2  pl-2 py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[50vw] flex items-center justify-between px-3 py-1 text-xs font-medium uppercase text-[#cacedb] bg-bg1 rounded-[4px] hover:bg-[#2a2f4a] border border-[#2f3b53] focus:outline-none"
      >
        <span className="truncate">{selected}</span>
        <ChevronDownIcon className="w-4 h-4 text-[#cacedb]" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-[164px] bg-mainBg rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {timeOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs uppercase text-[#cacedb] hover:bg-[#1f2937] ${
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
