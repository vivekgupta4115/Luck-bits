import React from 'react'
import { useEffect, useState } from 'react'

import logo1 from "../../assets/casinoImages/casinoImages/image1.webp";
import logo2 from '../../assets/casinoImages/casinoImages/image2.webp'
import logo3 from '../../assets/casinoImages/casinoImages/image3.webp'
import logo4 from '../../assets/casinoImages/casinoImages/image4.webp'
import logo5 from '../../assets/casinoImages/casinoImages/image5.webp'
import logo6 from '../../assets/casinoImages/casinoImages/image6.webp'
import logo7 from '../../assets/casinoImages/casinoImages/image7.webp'
import logo8 from '../../assets/casinoImages/casinoImages/image8.webp'
import logo9 from '../../assets/casinoImages/casinoImages/image9.webp'
import logo10 from '../../assets/casinoImages/casinoImages/image10.webp'

const images = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="w-full mt-2 mx-auto relative ">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[200px] rounded-[4px]  object-fill transition-all duration-700 ease-in-out"
      />
      {/* Image counter */}
      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;