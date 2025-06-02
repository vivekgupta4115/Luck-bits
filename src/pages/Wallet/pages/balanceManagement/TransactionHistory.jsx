import React, { useState } from 'react';
import CustomSelectBox from '../CustomSelectBox';
import CustomDatePicker from '../../../../reusableComponents/datePicker/CustomDatePicker';
import Modal from './Modal'; // Make sure this exists
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineContentCopy } from 'react-icons/md';

const mockTransactions = [
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6500,
        entries: [
            {
                date: "01.05.2025, 10:50",
                amount: "-5000.00 LBP",
            },
            {
                date: "08.01.2025, 10:50",
                amount: "-7000.00 LBP",
            },
            {
                date: "10.10.2026, 10:50",
                amount: "-10000.00 LBP",
            },
        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6500,
        entries: [
            {
                date: "01.05.2025, 10:50",
                amount: "-5000.00 LBP",
            },
            {
                date: "08.01.2025, 10:50",
                amount: "-7000.00 LBP",
            },
            {
                date: "10.10.2026, 10:50",
                amount: "-10000.00 LBP",
            },
        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6500,
        entries: [
            {
                date: "01.05.2025, 10:50",
                amount: "-5000.00 LBP",
            },
            {
                date: "08.01.2025, 10:50",
                amount: "-7000.00 LBP",
            },
            {
                date: "10.10.2026, 10:50",
                amount: "-10000.00 LBP",
            },
        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [

        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [
            {
                date: "01.05.2025, 10:50",
                amount: "-5000.00 LBP",
            },
            {
                date: "08.01.2025, 10:50",
                amount: "-7000.00 LBP",
            },
            {
                date: "10.10.2026, 10:50",
                amount: "-10000.00 LBP",
            },
        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [

        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [

        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [

        ],
    },
    {
        id: 1,
        date: "01.05.2025, 10:50",
        transactionIds: ["176255137376", "245201662735"],
        type: "Blast Bet",
        finalBalance: "685684646.00",
        amount: 6250.02,
        entries: [

        ],
    },

];

function TransactionHistory() {
    const [transactionType, setTransactionType] = useState("");
    const [category, setCategory] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [openEntryIndex, setOpenEntryIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenEntryIndex(openEntryIndex === index ? null : index);
    };

    return (
        <div className='p-4 w-full flex flex-col gap-4'>
            {/* Filter Box */}
            <div className='bg-bg1 w-full rounded p-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <CustomSelectBox
                        titleBg="titleBg"
                        modalBg="bg2"
                        optionBg="bg1"
                        optionHoverBg="titleBg"
                        optionH="[200px]"
                        title="Transaction Type"
                        options={["All", "Withdrawal Request", "Deposit", "Casino"]}
                        selected={transactionType}
                        onChange={setTransactionType}
                        placeholder="Select Transaction"
                    />
                    <CustomSelectBox
                        titleBg="titleBg"
                        modalBg="bg2"
                        optionBg="bg1"
                        optionHoverBg="titleBg"
                        optionH="[200px]"
                        title="Category"
                        options={["Main Category", "Casino"]}
                        selected={category}
                        onChange={setCategory}
                        placeholder="Select category"
                    />
                    <CustomDatePicker title="Start Date" selectedDate={startDate} onChange={setStartDate} />
                    <CustomDatePicker title="End Date" selectedDate={endDate} onChange={setEndDate} />
                </div>
                <div className='flex items-center justify-end mt-2'>
                    <button className="flex items-center text-nowrap bg-bg4 hover:bg-bg5 text-bg2 rounded-[0.25rem] text-xs w-60 justify-center py-2.5">SHOW</button>
                </div>
            </div>

            {/* Transactions List */}
            <div className="space-y-1">
                {/* Fixed Header */}
                <div className='grid grid-cols-4 text-xsm bg-bg2 p-1.5'>
                    <div className='col-span-1 flex items-center'>Date And ID</div>
                    <div className='col-span-1 flex items-center'>Type</div>
                    <div className='col-span-1 flex items-center'>Amount</div>
                    <div className='col-span-1 flex items-center'>Final Balance</div>
                </div>

                {/* Scrollable Data */}
                <div className='overflow-auto hide-scrollbar max-h-[600px] pr-1'>
                    {mockTransactions.map((trans, index) => (
                        <div key={index} className=' border-b-[1px] border-mainBg'>
                            {/* Parent Transaction Row */}
                            <div className='grid grid-cols-4 text-xsm bg-bg2 cursor-pointer'>
                                <div className='col-span-1 p-1.5'>
                                    <p>{trans.date}</p>
                                    <div className="text-xs text-[#ffffff99]">
                                        {trans.transactionIds.map((id) => (
                                            <div key={id} className="flex items-center gap-2">
                                                <span>ID: {id}</span>
                                                <button className="text-sm hover:text-blue-300">
                                                    <MdOutlineContentCopy />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-span-1 flex items-center'>{trans?.type}</div>
                                <div className='col-span-1 flex items-center text-yellow'>{trans?.amount}</div>
                                <div className='col-span-1 flex items-center w-full justify-between px-1 text-green'>
                                    {trans?.finalBalance}
                                    {trans.entries.length > 0 && (
                                        <button
                                            className='w-[40px] flex items-center justify-center bg-bg1 h-full'
                                            onClick={() => handleToggle(index)}
                                        >
                                            {openEntryIndex === index ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Toggleable Entry Section */}
                            {openEntryIndex === index && trans.entries.length > 0 && (
                                <div className="bg-[#0D182F] px-20 py-2 text-xsm text-white">
                                    <div className='grid grid-cols-2 pb-1 mb-1 bg-[#313A4E]'>
                                        <div className='font-semibold text-center border-r-[1px] border-mainBg'>Date</div>
                                        <div className='font-semibold text-center'>Amount</div>
                                    </div>
                                    {trans.entries.map((entry, idx) => (
                                        <div
                                            key={idx}
                                            className='grid grid-cols-2 py-1 bg-[#192439] border-b-[1px] border-mainBg'
                                        >
                                            <div className='text-center border-r-[1px] border-mainBg'>{entry.date}</div>
                                            <div className='text-center'>{entry.amount}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default TransactionHistory;
