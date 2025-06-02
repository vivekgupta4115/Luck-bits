import React, { useState } from 'react';
import { GiEuropeanFlag } from "react-icons/gi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineStarBorderPurple500, MdKeyboardArrowRight } from "react-icons/md";

const DropdownSection = ({ title = "Europe", count = 9, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full mx-auto mb-2">
      {/* Header */}
      <div
        className=' h-[36px] px-[10px] rounded-[4px] w-full flex justify-between items-center cursor-pointer bg-[#1a253a]'
        onClick={toggleDropdown}
      >
        <GiEuropeanFlag className='text-white/90 flex-shrink-0 me-[10px] w-[22px] h-[14px]' />
        <div className='flex justify-center flex-col flex-auto h-full overflow-hidden whitespace-nowrap overflow-ellipsis'>
          <p className='text-[14px] text-white/90 me-[10px]'>{title}</p>
        </div>
        <span className='text-white/75 text-[13px] flex-shrink-0'>{count}</span>
        {isOpen ? (
          <FaAngleUp className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
        ) : (
          <FaAngleDown className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
        )}
      </div>

      {/* Dropdown Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 pointer-events-none'
        } transform origin-top top-full left-0 w-full mt-0 px-1`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className='bg-[#313b4e] h-[35px] ps-[8px] pe-[10px] my-[2px] rounded-[4px] flex justify-between items-center'
          >
            <div className='flex items-center justify-center gap-x-3'>
              <MdOutlineStarBorderPurple500 className='text-white/70 h-[25px] text-[30px] leading-[25px]' />
              <div className='border border-r-[#000c24] h-[25px]'></div>
              <p className='text-white/90 text-[13px] text-center'>{item.title}</p>
            </div>
            <div className='flex justify-center items-center gap-x-2 text-white/70 text-[13px]'>
              <p>{item.count}</p>
              <MdKeyboardArrowRight className='text-[18px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSection;
