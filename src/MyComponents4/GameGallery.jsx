import React, { useState } from "react";
import {images} from './CasinoGalleryData'

const GameGallery = ( {maxItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
    const displayedItems = maxItems ? images.slice(0, maxItems) : images;

  return (
    <div className="p-4">
      <div
        className="grid gap-4 lg:gap-2
  xs3:grid-cols-2 
  sm3:grid-cols-3 
  sm:grid-cols-4 
  x5:grid-cols-5 
  x6:grid-cols-6 
  lg:grid-cols-5 

   mx-auto"
      >
        {displayedItems.map((img, index) => (
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
                <div className="absolute top-2 right-1 text-xl">ⓘ</div>
                <div className="text-xsm m-auto text-center">{img.title}</div>
                <button className="bg-sky-400 px-6 py-2   rounded text-black font-[100px] hover:bg-sky-300 w-[144px] h-[37px]">
                  PLAY
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGallery;
