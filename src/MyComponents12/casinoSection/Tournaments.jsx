import React from 'react'
import DarkLightMode from '../../myComponents13/casinoComponents/DarkLightMode'
import GameItems from '../../myComponents13/casinoComponents/GameItems'
import TopGameTourant from '../../myComponents13/casinoComponents/TopGameTourant'
import Header2 from '../../MyComponent/Header2'

const Tournaments = () => {
  return (
    <div>
        <div className='flex justify-end pe-[16px] ms-auto mb-[16px] w-full pt-[14px]'>
            <div className='flex justify-center items-center'>
                <p className='me-[8px] text-white/60 text-[14px] leading-[16px]'>Show only free</p>
                <DarkLightMode/>
            </div>
        </div>
        <GameItems/>
        <TopGameTourant/>
    </div>
  )
}

export default Tournaments