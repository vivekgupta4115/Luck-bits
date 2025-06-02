import React from 'react';
import CasinoGameIcon1 from "../../assets/casinoImages/casinoImages/casinoGameIcon1.gif";
import CasinoGameIcon2 from "../../assets/casinoImages/casinoImages/casinoGameIcon2.webp";
import CasinoGameIcon3 from "../../assets/casinoImages/casinoImages/casinoGameIcon3.gif";

const BfthArena = () => {
  const gameIcons = [
    CasinoGameIcon1,
    CasinoGameIcon2,
    CasinoGameIcon3,
    CasinoGameIcon1,
    CasinoGameIcon1,
    CasinoGameIcon2,
  ];

  return (
    <div>
      <div className="w-full px-[16px]">
        <div className="w-full">
          {/* Card Header */}
          <div className="mb-[20px] w-full rounded-[8px] mt-3 p-[7px] bg-[#0B162E] overflow-hidden border border-white/10">
            <div className="w-full flex justify-between items-center py-[10px] border-b border-white/15">
              <div className="flex items-center px-2">
                <h2 className="text-[16px] text-white">O</h2>
                <h2 className="ms-[7px] text-[16px] leading-[20px] pe-[10px] overflow-hidden whitespace-nowrap text-ellipsis">
                  B.F.T.H. Arena
                </h2>
              </div>
              <a href="#" className="text-white/50 text-[14px]">All (+4)</a>
            </div>

            {/* Game Icons Grid */}
            <div className="overflow-x-auto  overflow-y-hidden pt-[10px] scrollbar-hide"
            style={{ gridTemplatecolumns: 'repeat(auto-fill, minmax(150px,1fr))' }}>
              <div className="grid grid-flow-col grid-rows-2 gap-[10px]">
                {gameIcons.map((icon, index) => (
                  <div key={index} className="min-w-[150px] w-full relative">
                    <div className="w-full h-full bg-white/10 rounded-[8px] overflow-hidden">
                      <img src={icon} alt={`Casino game ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BfthArena;
