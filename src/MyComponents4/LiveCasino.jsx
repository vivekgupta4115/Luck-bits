// import React from 'react'
// import SliderBar from './SliderBar'
// import GameGallery from './GameGallery'
// import FilterOption from './FilterOption'
// export default function Casino() {
//   return (
//     <div>
//       <SliderBar></SliderBar>
//       <FilterOption></FilterOption>
//       <GameGallery></GameGallery>
//     </div>
//   )
// }


import React, { useState, useEffect } from "react";
// import VirtualSearch from "./VirtualSearch";
// import VirtualGame from "./VirtualGame";
import LiveCasinoSearch from "./LiveCasinoSearch";
import LiveCasinoProviderToggle from "./LiveCasinoProviderToggle";
import LiveCasinoGameSearchBarlg from "./LiveCasinoGameSearchBarlg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderBar from './SliderBar'
import GameGallery from './GameGallery'
import FilterOption from './FilterOption'
import Loader from "../reusableComponents/Loader/Loader";





export default function Casino() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const bannerDataHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apis.slider);
      // console.log("resrresres", res)
      if (res?.data?.status === 200) {
        setLoading(false);
        setBannerData(res?.data?.data);
      } else {
        setLoading(false);
        toast.error(res?.data?.message);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    bannerDataHandler();
  }, []);


  return (
    <div>
      {loading && <Loader setLoading={setLoading} loading={loading} />}

      <SliderBar />
      <div className="w-full min-h-screen bg-[#07122C] flex flex-col lg:flex-row">
        {/* Sidebar Section for lg+ */}
        <div
          className={`hidden lg:flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "w-[15%] p-1" : "w-[4%] p-2"
          } border-r border-none relative`}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute left-3 top-8 z-10 bg-[#0b1a38] border border-gray-600 rounded-full p-1 hover:bg-[#11264d]"
          >
            {isSidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {/* <h1>Provider</h1> */}
          {/* Sidebar content */}
          {isSidebarOpen ? (
            <>
              <FilterOption />
              <LiveCasinoSearch />
              <LiveCasinoProviderToggle />
            </>
          ) : (
            <div className="flex flex-col justify-start items-center text-white mt-10 space-y-4">
              {/* Providers + Games Row */}
              {/* <div className="flex flex-col items-center space-y-2 space-x-15">
              <div className="flex items-center space-x-15 text-white text-xs font-medium">
                <ChevronRight size={14} />
                <span className="uppercase">Providers</span>
                <div className="h-4 w-px bg-gray-500" />
               
              </div>
            </div> */}
            </div>
          )}
        </div>

        {/* Right Column: Game Grid */}
        <div
          className={`w-full transition-all duration-300 ${
            isSidebarOpen ? "lg:w-[85%]" : "lg:w-[96%]"
          } p-2`}
        >
          <LiveCasinoGameSearchBarlg />
          <FilterOption />
          <GameGallery />
        </div>
      </div>
    </div>
  );
}