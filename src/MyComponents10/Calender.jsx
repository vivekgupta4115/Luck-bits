import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const weeks = [
  [27, 28, 29, 30, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31, null, null, null, null, null, null],
];

export default function Calendar() {
  const [selected, setSelected] = useState(27);

  return (
    <div className="w-64 pt-2 bg-[#1E2632] text-white rounded shadow">
      <div className="flex items-center mb-2">
        <button className="text-gray-400 hover:text-white">
          <ChevronLeft size={16} />
        </button>
        <div className="flex space-x-1 ml-2">
          <select className="bg-[#2D3748] text-white text-sm rounded px-2 py-1 focus:outline-none">
            <option>May</option>
          </select>
          <select className="bg-[#2D3748] text-white text-sm rounded px-2 py-1 focus:outline-none">
            <option>2025</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-sm text-gray-400">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-sm mt-2 bg-mainBg">
        {weeks.flat().map((day, index) => (
          <div
            key={index}
            className={`p-1.5 m-0.5 rounded-full cursor-pointer transition-all
              ${day === selected ? "bg-blue-500 text-black" : ""}
              ${day === null ? "invisible" : "hover:bg-gray-700"}`}
            onClick={() => day && setSelected(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
