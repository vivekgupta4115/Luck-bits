/* eslint-disable react/prop-types */
// Sidebar.jsx

import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { RiSettings5Fill, RiWallet3Fill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LuHistory } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const Sidebar = ({ setIsDepositModal, toggleEye, setToggleEye, setActiveSection, activeSection, fetchProfileDetails, myDetails }) => {
  const userId = localStorage.getItem('userId');
  const sections = {
    'MY PROFILE': ['Personal Details', 'Change Password'],
    'BALANCE MANAGEMENT': ['Deposit', 'Withdraw', 'Transaction History', 'Info'],
    'BET HISTORY': ['All','Open Bets','Cashed Out','Won','Lost','Returned','Won Return','Lost Return'],
    'BONUSES': ['Sport Bonuses','Casino Bonuses','Bonus History','Promo Code'],
    'MESSAGES': ['Inbox','Sent','New'],
  };
  const sectionIcons = {
    'MY PROFILE': <IoPersonCircleSharp className="text-[#D4D6DA]" size={25} />,
    'BALANCE MANAGEMENT': <RiSettings5Fill className="text-[#D4D6DA]" size={25} />,
    'BET HISTORY': <LuHistory className="text-[#D4D6DA]" size={22} />,
    'BONUSES': <PiHandWithdrawFill className="text-[#D4D6DA]" size={25} />,
    'MESSAGES': <TfiEmail className="text-[#D4D6DA]" size={22} />
  };
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPromoCode, setIsPromoCode] = useState(null);

  const handleToggle = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };
  useEffect(() => {
    fetchProfileDetails()
  }, [userId])

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("userId")
    setIsDepositModal(false)
    navigate("/")
  }
  const handlePromoCodeChange = (value) => {
    setIsPromoCode(value)
  }

  // console.log("myDetails", myDetails)
  return (
    <div className="w-80 overflow-auto hide-scrollbar bg-bg2 border-r border-gray p-2">
      {/* profile details */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#767C89] text-bg2 capitalize rounded-full text-[12px]">{myDetails?.data?.username?.slice(0, 2)}</div>
        <div className="flex flex-col">
          <p className="text-[14px]">kuldeep verma</p>
          <p className="text-[11px] text-lightGray flex items-center">59586555 &nbsp;<MdContentCopy size={14} /></p>
        </div>
      </div>
      {/* wallet section */}
      <div className="bg-[#39A447] flex flex-col justify-between w-full h-28 rounded-sm mt-2 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xsm text-textGray1">Main Balance</p>
            <p className="font-semibold text-[18px]">{toggleEye ? `0.00 INR` : `******`}</p>
          </div>
          <button className="bg-textGray text-textGray1 p-2 bg-opacity-20 rounded-sm">
            {toggleEye ? <FaEye size={20} onClick={() => setToggleEye(!toggleEye)} /> : <FaEyeSlash size={20} onClick={() => setToggleEye(!toggleEye)} />}
          </button>
        </div>
        <div className="flex items-center gap-3 text-[15px]">
          <button onClick={() => setActiveSection('Deposit')} className="flex items-center justify-center w-full rounded-[0.25rem] bg-textGray text-white py-1 bg-opacity-20 gap-1">
            <RiWallet3Fill size={20} />  DEPOSIT
          </button>
          <button  onClick={() => setActiveSection('Withdraw')} className="flex items-center justify-center rounded-[0.25rem] bg-textGray text-white py-1 w-full bg-opacity-20 gap-1">
            <PiHandWithdrawFill size={20} />  WITHDRAW
          </button>
        </div>
      </div>
      {/* bonus section */}
      <div className="bg-[#B69125] flex flex-col justify-between w-full h-24 rounded-sm mt-5 px-3 py-2.5">
        <div className="flex items-center">
          <div>
            <p className="text-xsm text-textGray1">Total Bonus Balance</p>
            <p className="font-semibold text-[18px]">{toggleEye ? `0.00 INR` : `******`}</p>
          </div>
        </div>
        <div className="w-full h-[0.1px] bg-textGray bg-opacity-20"></div>
        <div className="flex items-center text-xs justify-between mt-1">
          <p>Bonus Balance</p>
          <p className=" font-semibold">{toggleEye ? `0.00 INR` : `******`}</p>
        </div>
      </div>
      {/* all dropdowns  */}
      <div className="mt-8">
        {Object.entries(sections).map(([title, items]) => (
          <div key={title} className="my-2 text-[#ffffff99]  bg-bg1 rounded-md">
            <button
              onClick={() => handleToggle(title)}
              className="flex w-full items-center justify-between hover:bg-titleBg p-3 "
            >
              <div className="flex items-center gap-3 ">
              {sectionIcons[title] || <IoPersonCircleSharp size={25} />}
                <h2 className="text-[15px] text-white">{title}</h2>
              </div>
              <div>
                {openDropdown === title
                  ? <FiChevronUp size={20} />
                  : <FiChevronDown size={20} />
                }
              </div>
            </button>

            {openDropdown === title && (
              <div className="bg-[#313B4E] border-gray border-t-[0.1px] p-3">
                {items.map((item) => (
                  <div
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`cursor-pointer px-3 text-xs py-1.5 border-l-[2px] ${activeSection === item
                      ? 'border-bg4 text-white bg-gradient-to-r from-[#222D42] to-[#2C3549]'
                      : 'hover:text-white border-gray hover:border-gray'
                      }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-sm flex items-center gap-2 p-3 mx-5 bg-bg1">
        <div className="relative w-full">
          <input
            id="promocode"
            type="text"
            name="promocode"
            placeholder=" "
            className={`peer w-full px-4 py-0.5 h-14 rounded text-sm bg-titleBg text-white focus:outline-none`}
            value={isPromoCode}
            onChange={(e) => handlePromoCodeChange(e.target.value)}
          />
          <label
            htmlFor="promocode"
            className="absolute left-4 text-[#ffffff26]  text-xsm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xsm peer-focus:top-1 peer-focus:text-xsm peer-focus:text-textGray1"
          >
            Promo Code
          </label>
        </div>
        <button className="w-20 bg-[#3C4557] text-[#ffffff26]  text-xsm p-4 rounded">APPLY</button>
      </div>
      <div className="mt-6  text-[#ffffff99]">
        <button onClick={() => handleLogout()} className="w-full bg-bg1 px-3 flex items-center text-white py-4 rounded"><IoIosLogOut size={22} /> &nbsp; &nbsp; LOGOUT</button>
      </div>
    </div>
  );
};

export default Sidebar;
