// PageLoader.jsx
import React from "react";

const PageLoader = ({ onScrollToTop }) => {
  return (
    <div
      className="fixed bottom-[7rem] left-1/2 -translate-x-1/2 z-50 cursor-pointer"
      onClick={onScrollToTop}
    >
      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col items-center gap-0.5 text-white text-sm ">
          <span className="animate-bounce">▲</span>
          <span className="animate-bounce delay-200">▲</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
