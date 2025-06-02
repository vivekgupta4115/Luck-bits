import React, { useState } from 'react'

import SliderImage1 from "../../assets/casinoImages/casinoImages/imagelogo1.gif";
import SliderImage2 from "../../assets/casinoImages/casinoImages/imagelogo2.webp";
import SliderImage3 from "../../assets/casinoImages/casinoImages/imagelogo3.webp";

import GameGallery1 from "../../assets/casinoImages/casinoImages/imagelogo4.webp";
import GameGallery2 from "../../assets/casinoImages/casinoImages/imagelogo4.webp";
import GameGallery3 from "../../assets/casinoImages/casinoImages/imagelogo4.webp";
import GameGallery4 from "../../assets/casinoImages/casinoImages/imagelogo4.webp";
import GameGallery5 from "../../assets/casinoImages/casinoImages/imagelogo4.webp";



const images = [
  { src: SliderImage1, title: "Golden Tree" },
  { src: SliderImage2, title: "Honey-Money" },
  { src: SliderImage3, title: "Wild Weed" },
  { src: GameGallery1, title: "Lucky Asia" },
  { src: GameGallery2, title: "Blast" },
  { src: GameGallery3, title: "Fruits Safari" },
  { src: GameGallery4, title: "Crash" },
  { src: GameGallery5, title: "Gravity" },
];

const Cards = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
        <div className="p-4">
      <div
        className="grid gap-2 
        grid-cols-2
        xs3:grid-cols-2 
        sm3:grid-cols-3 
        sm:grid-cols-4 
        x5:grid-cols-5 
        x6:grid-cols-6 
        mx-auto"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-[10px] overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
            onClick={() => handleClick(index)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white  p-2">
                <div className="absolute top-2 left-2 text-xl">☆</div>
                <div className="absolute top-2 right-1 text-[18px] text-[#fffc]">ⓘ</div>
                <div className="text-xsm m-auto text-center">{img.title}</div>
                <div className='flex justify-between w-full gap-[8px] items-center'>
                    <button className="bg-sky-400    rounded text-black font-[100px] hover:bg-sky-300 w-full h-[32px]">
                  PLAY
                </button>
                <button className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] rounded text-[#ffffff] font-[100px] hover:bg-sky-300 w-full h-[32px]">
                  Demo
                </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Cards



