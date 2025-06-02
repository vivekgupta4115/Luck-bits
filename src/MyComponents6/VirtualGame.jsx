import React, { useState } from "react";
import VirtualImages1 from "../assets/virtualImages1.gif";
import VirtualImages2 from "../assets/virtualImages2.gif";
import VirtualImages3 from "../assets/virtualImages3.gif";

import VirtualImages4 from "../assets/virtualImages4.gif";
import VirtualImages5 from "../assets/virtualImages5.gif";


const images = [
  { src: VirtualImages2, title: "Football" },
  { src: VirtualImages1, title: "Penalty Kick" },
  { src: VirtualImages2, title: "Horse Racing" },
  { src: VirtualImages3, title: "Cycle Racing" },
  { src: VirtualImages2, title: "Drag Racing" },
  { src: VirtualImages1, title: "Drag Racing" },
  { src: VirtualImages5, title: "Drag Racing" },
  { src: VirtualImages4, title: "VIP Ortak" },
  { src: VirtualImages1, title: "Richie Wheel" },
  { src: VirtualImages5, title: "Dreamz Dealer" },
  { src: VirtualImages2, title: "Football" },
  { src: VirtualImages5, title: "Penalty Kick" },
  { src: VirtualImages2, title: "Horse Racing" },
  { src: VirtualImages3, title: "Cycle Racing" },
  { src: VirtualImages4, title: "Drag Racing" },
  { src: VirtualImages1, title: "Drag Racing" },
];

const VirtualGame = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="p-4">
      <div
        className="grid gap-2 
        grid-cols-1
        xs2:grid-cols-2
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        xl:grid-cols-6 
        mx-auto"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative rounded-[10px] overflow-hidden shadow-lg cursor-pointer aspect-[4/3]`}
            onClick={() => handleClick(index)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between text-white p-2">
                {/* Top Icons */}
                <div className="flex justify-between text-xl">
                  <div>☆</div>
                  <div>ⓘ</div>
                </div>

                {/* Title */}
                <div className="text-center text-sm font-semibold">
                  {img.title}
                </div>

                {/* Buttons */}
                <div className="flex w-full mt-2 gap-[2px]">
                  <button className="bg-sky-400 w-1/2 rounded-l text-black font-semibold hover:bg-sky-300">
                    PLAY
                  </button>
                  <button className="border border-white w-1/2  rounded-r text-white hover:bg-white hover:text-black">
                    DEMO
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualGame;
