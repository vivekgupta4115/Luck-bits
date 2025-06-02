import React from 'react'
import { FaReceipt } from 'react-icons/fa6';
import { GiTrebuchet } from 'react-icons/gi';
import { IoMdStopwatch } from 'react-icons/io';
import { IoFootball, IoGameController } from 'react-icons/io5';
import { LiaDiceD6Solid } from 'react-icons/lia';
import { MdOutlineCasino } from 'react-icons/md';
import { PiListBold } from 'react-icons/pi';
import { RiRadioButtonLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
// const gameCategoryTabs = [
//   { icon: <RiRadioButtonLine className='text-gray' size={20} />, name: "Live", isNotify: true, route: "#" },
//   { icon: <IoFootball className='text-gray' size={20} />, name: "Sports", isNotify: false, route: "#" },
//   { icon: <MdOutlineCasino className='text-gray' size={20} />, name: "Bet slips", isNotify: false, route: "#" },
//   { icon: <MdOutlineCasino className='text-gray' size={20} />, name: "Casino", isNotify: false, route: "#" },
//   // { icon: <PiListBold className='text-gray' size={20} />, name: "Menu", isNotify: false, route: "#" },
//   // { icon: <LiaDiceD6Solid className='text-gray' size={20} />, name: "GAMES", isNotify: false },
//   // { icon: <IoGameController className='text-gray' size={20} />, name: "E-SPORTS", isNotify: false },
//   // { icon: <IoGameController className='text-gray' size={20} />, name: "VIRTUAL SPORTS", isNotify: false },
//   // { icon: <GiTrebuchet className='text-gray' size={20} />, name: "TREBUCHET", isNotify: false },
// ];

function MobileFooter({onOpenModal}) {
  const navigate = useNavigate()
  const handleNavigation = (route) => {
    navigate(route)
  }
  return (
    <div className='flex items-center justify-between w-full h-full border-t pt-1'>
      <button
        onClick={() => handleNavigation("/live")}
        className={`relative  px-4 flex flex-col items-center justify-center h-full gap-1 ${"hover:border-t-[2px]  border-bg4 text-white"
          }`}
      >
        <div><RiRadioButtonLine className='text-[#ffffff80]' size={22} /></div>
        <div
          className="flex items-center text-nowrap rounded-full text-xs xsm:text-[15px] text-textGray transition"
        >
          Live
        </div>
        <div className="absolute top-0 z-50 right-1 bg-red text-white text-[10px] p-0.5 rounded-full">
          121
        </div>
      </button>
      <button
        onClick={() => handleNavigation("/sports")}
        className={`relative  px-4 flex flex-col items-center justify-center h-full gap-1 ${"hover:border-t-[2px]  border-bg4 text-white"
          }`}
      >
        <div><IoMdStopwatch className='text-[#ffffff80]' size={22} /></div>
        <div
          className="flex items-center text-nowrap rounded-full text-xs xsm:text-[15px] text-textGray transition"
        >
          Sports
        </div>
      </button>
      <button
        onClick={() => onOpenModal("betSlip")}
        className={`relative  px-4 flex flex-col items-center justify-center h-full gap-1 ${"hover:border-t-[2px]  border-bg4 text-white"
          }`}
      >
        <div><FaReceipt className='text-[#ffffff80]' size={22} /></div>
        <div
          className="flex items-center text-nowrap rounded-full text-xs xsm:text-[15px] text-textGray transition"
        >
          Bet Slips
        </div>
      </button>
      <button
        onClick={() => handleNavigation("/casino")}
        className={`relative  px-4 flex flex-col items-center justify-center h-full gap-1 ${"hover:border-t-[2px]  border-bg4 text-white"
          }`}
      >
        <div><MdOutlineCasino className='text-[#ffffff80]' size={22} /></div>
        <div
          className="flex items-center text-nowrap rounded-full text-xs xsm:text-[15px] text-textGray transition"
        >
          Casino
        </div>
      </button>
      <button
        onClick={() => onOpenModal("menu")}
        className={`relative  px-4 flex flex-col items-center justify-center h-full gap-1 ${"hover:border-t-[2px]  border-bg4 text-white"
          }`}
      >
        <div><PiListBold className='text-[#ffffff80]' size={22} /></div>
        <div
          className="flex items-center text-nowrap rounded-full text-xs xsm:text-[15px] text-textGray transition"
        >
          Menu
        </div>
      </button>
    </div>
  )
}

export default MobileFooter