import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ImageCarousel = ({ imagesData, height }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const handlePrev = () => {
        const prevSlide = currentSlide === 0 ? imagesData.length - 1 : currentSlide - 1;
        setCurrentSlide(prevSlide);
    };

    const handleNext = () => {
        const nextSlide = currentSlide === imagesData.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlide);
    };
    return (
        <div className="relative w-full rounded-xl h-full">
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
                ref={carouselRef}
                // stopOnHover={true}
                onChange={(index) => setCurrentSlide(index)}
                swipeable
                emulateTouch
                dynamicHeight={false}
                selectedItem={currentSlide}
            >
                {imagesData?.map((image, index) => (
                    <img key={index} className={`rounded-lg object-fit w-full ${height}`} src={image?.image} alt="df" />
                ))}
            </Carousel>
            <div className="absolute top-1 text-xsm right-2 rounded-xl bg-black text-textGray1 flex items-center justify-between w-20 py-0.5">
                <button onClick={handlePrev} className="border-[0.1px] border-bg2 rounded-full"> <MdChevronLeft size={20} /> </button>
                {imagesData?.length > 0 ? (currentSlide + 1) : 0}/{imagesData?.length}
                <button onClick={handleNext} className="border-[0.1px] border-bg2 rounded-full"> <MdChevronRight size={20} /> </button>
            </div>
           
        </div>

    );
};

export default ImageCarousel;
