
import React, { useState } from 'react'
import CustomSelectBox from '../CustomSelectBox'
import { IoMdSearch, IoMdClose } from "react-icons/io";

function Lost() {
    const [searchText, setSearchText] = useState("");
    const [selectedBetType, setSelectedBetType] = useState("All");
    const [selectedPeriod, setSelectedPeriod] = useState("24 Hours");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const clearInput = () => {
        setSearchText("");
    };
    return (
        <div className='p-4 w-full flex flex-col items-center'>
            <div className='bg-bg1 w-full rounded p-2'>
                <div className='bg grid grid-cols-4 gap-2 rounded-sm w-full'>
                    <div className="relative w-full">
                        <input
                            id="betId"
                            type="text"
                            name="betId"
                            placeholder=" "
                            className="peer w-full px-4 py-0.5 h-14 rounded text-sm bg-titleBg text-white focus:outline-none"
                        // value={formData.betId}
                        // onChange={handleChange}
                        />
                        <label
                            htmlFor="betId"
                            className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                        >
                            Bet Id
                        </label>
                    </div>
                    <div className="relative w-full">
                        <input
                            id="sportName"
                            type="text"
                            name="sportName"
                            placeholder=" "
                            className="peer w-full px-4 py-0.5 h-14 rounded text-sm bg-titleBg text-white focus:outline-none"
                            value={searchText}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="sportName"
                            className="absolute left-4 text-textGray2 text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
                        >
                            Sport Name
                        </label>

                        <button
                            type="button"
                            onClick={clearInput}
                            className="absolute right-4 top-5 text-textGray2"
                        >
                            {searchText ? <IoMdClose className='text-white ' size={18} /> : <IoMdSearch size={16} />}
                        </button>
                    </div>
                    {/* Country */}
                    <div className="w-full">
                        <CustomSelectBox
                            modalBg="[#0D182F]"
                            optionBg="bg1"
                            optionHoverBg="titleBg"
                            optionH="[200px]"
                            titleBg="titleBg"
                            title="Bet Type"
                            options={["All", "Single",'Multiple','System','Bet Builder']}
                            selected={selectedBetType}
                            onChange={(val) => setSelectedBetType(val)}
                            placeholder="Select bet type"
                        />
                    </div>
                    <div className="w-full">
                        <CustomSelectBox
                            modalBg="[#0D182F]"
                            optionBg="bg1"
                            optionHoverBg="titleBg"
                            optionH="[200px]"
                            titleBg="titleBg"
                            title="Period"
                            options={["24 Hours", "72 Hours",'One Week','30 Days','Custom']}
                            selected={selectedPeriod}
                            onChange={(val) => setSelectedPeriod(val)}
                            placeholder="Select period"
                        />
                    </div>
                </div>
                <div className='flex items-center justify-end mt-2'>
                    <button className="flex items-center text-nowrap bg-bg4 hover:bg-bg5 text-bg2 rounded-[0.25rem] text-xs w-60 justify-center py-2.5">SHOW</button>
                </div>
            </div>
            <p className="text-xsm text-[#ffffffb3] text-center mt-10">no bets to show</p>
        </div>
    )
}

export default Lost

