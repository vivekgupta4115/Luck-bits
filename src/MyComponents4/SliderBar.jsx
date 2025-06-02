import React, { useEffect, useState } from "react";
import SliderImage1 from '../assets/sliderImage1.webp'
import SliderImage2 from '../assets/sliderImage2.webp'
import SliderImage3 from '../assets/sliderImage3.webp'

const images = [
  SliderImage1,
  SliderImage2,
  SliderImage3,
];

const SliderBar = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slide Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-[200px] sm:h-[300px] object-fill transition duration-500 p-3 rounded-[5px] md:h-[50vh]"
      />

      {/* Slide Count in top-right corner */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-sm sm:text-base px-2 py-1 rounded-md font-semibold">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default SliderBar;
