import React, { useState } from 'react'
import CustomSelectBox from '../Wallet/pages/CustomSelectBox'
import { IoSettingsSharp } from 'react-icons/io5'

function BetSlip() {
    const [category, setCategory] = useState("Accept any odds")
    return (
        <div className='w-full h-full text-text80'>
            <div className='bg-cardBg w-full flex items-center rounded-b px-2'>
                <IoSettingsSharp className='text-white' />
                <CustomSelectBox
                    seletedOptionBg="bg4"
                    titleBg="cardBg"
                    modalBg="bg2"
                    optionBg="bg1"
                    optionHoverBg="titleBg"
                    optionH="[100px]"
                    title=""
                    options={["Always ask", "Accept higher odds", "Accept any odds"]}
                    selected={category}
                    onChange={setCategory}
                    placeholder="Select category"
                />

            </div>
            <div className='mt-20 text-center'>Your betslip is empty</div>
        </div>
    )
}

export default BetSlip