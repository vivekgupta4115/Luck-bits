import React, { useState } from 'react'

const GameItems = () => {
    const [isActive, setIsActive] = useState("all")

  return (
        <div>
            <div>
                <div className='flex flex-row overflow-x-auto bg-[#000c24] text-[12px] leading-[14px] text-white/50 whitespace-nowrap
                     pl-[16px] pr-[16px] gap-[8px] scrollbar-hide'>
                <button className={` ${
                    isActive == "all" ? "bg-white/80 text-[rgba(0,12,36,.9)]" : "bg-white/10"} px-[12px] rounded-[4px] h-[30px] w-auto`}
                    onClick={() => setIsActive("all")}>All</button>
                <button className={`${
                    isActive == "upcoming" ? "bg-white/80 text-[rgba(0,12,36,.9)]" : "bg-white/10"} px-[12px] rounded-[4px] h-[30px] w-auto`}
                    onClick={() => setIsActive("upcoming")}>Upcoming</button>
                <button className={` ${
                    isActive == "live" ? "bg-white/80 text-[rgba(0,12,36,.9)]" : "bg-white/10"} px-[12px] rounded-[4px] h-[30px] w-auto`}
                    onClick={() => setIsActive("live")}>Live</button>
                <button className={`${
                    isActive == "finished" ? "bg-white/80 text-[rgba(0,12,36,.9)]" : "bg-white/10"} px-[12px] rounded-[4px] h-[30px] w-auto`}
                    onClick={() => setIsActive("finished")}>Finished</button>
                <button className={`${
                    isActive == "registration" ? "bg-white/80 text-[rgba(0,12,36,.9)]" : "bg-white/10"} px-[12px] rounded-[4px] h-[30px] w-auto`}
                    onClick={() => setIsActive("registration")}>Registration Started</button>
                
                </div>
                
            </div>
        </div>
  )
}

export default GameItems