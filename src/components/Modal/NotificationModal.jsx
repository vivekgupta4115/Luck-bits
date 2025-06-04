/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { ImFileText } from "react-icons/im";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";

const settings = [
  {
    value: "Decimal",
    label: "Odds Format",
  },
  {
    value: "English",
    label: "Language",
  },
  {
    value: "12h",
    label: "Time format",
  },
];

const BitSlip = [
  {
    value: "Always ask",
    labels:"FaAngleDown"
  },
]

function NotificationModal({ setIsWalletModal }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [expandedSetting, setExpandedSetting] = useState(null);
  const [expandedSettingBitSlip, setExpandedSettingBitSlip] = useState(null);
  const [selectedBitSlip, setSelectedBitSlip] = useState("");

  const handleExpand = (settingLabel) => {
    setExpandedSetting(prev => (prev === settingLabel ? null : settingLabel));
  };

   const handleExpandBitSlip = (BitSlipLabel) => {
    setExpandedSettingBitSlip(prev => (prev === BitSlipLabel ? null : BitSlipLabel));
  };


  const handleOpenModalSetting = () => {
    setIsOpenModal("setting");

  };
  const handleOpenModalNotification = () => {
    setIsOpenModal("notification");
  }
  const handleOpenModalStar = () => {
    setIsOpenModal("star")
  }
  const handleOpenModalBetSlip = () => {
    setIsOpenModal("betSlip");
  };
  
  const handleCloseModal = () => {
   setIsOpenModal(null);
  };

  const settingOptions = {
    "Odds Format": ["Decimal", "Fractional", "American", "Hongkong", "Malay"],
    "Language": ["English", "Italiano", "Russian", "Português"],
    "Time format": ["12h", "24h"]
  };

  const BitSlipOptions = {
    "FaAngleDown": ["Always ask", "Accept Higher odds", "Accept Any odds"]
  }

  const betAmounts = ["100000","200000","100000"]


  return (
    <>
      <div
        onMouseEnter={() => setIsWalletModal(true)}
        onMouseLeave={() => setIsWalletModal(false)}
        className="relative inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      >
        <div className="bg-bg3 mt-2 flex flex-col gap-0.5 absolute top-[48px] h-[15.4rem] overflow-y-auto hide-scrollbar right-1 w-[50px] shadow-2xl rounded-md">
          <div
            className="w-full flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4"
            style={{ transition: "background 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgb(225 225 225 / 85%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <IoMdNotifications size={22} onClick={handleOpenModalNotification}/>
          </div>

          <div className="w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <FaRegStar size={22} onClick={handleOpenModalStar}/>
          </div>

          <div className="relative w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <IoMdSettings size={22} onClick={handleOpenModalSetting}/>
          </div>

          <div className="w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <ImFileText size={22} onClick={handleOpenModalBetSlip}/>
          </div>
        </div>
      </div>


      {/* Fullscreen Modal 1*/}
      {isOpenModal === "notification" && (
        <div className="fixed mt-12 inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`
              bg-[#000c24] w-full md:w-1/2 h-full p-6 overflow-auto relative
              transform transition-transform duration-300 ease-in-out
              translate-x-0
            `}
          >
            <div className="flex gap-x-5">
              <button
              onClick={handleCloseModal}
              className=" top-2rem -right-40rem text-white/90 lg:text-xl font-bold xs2:text-[16px] xs:leading-[18px]"
            >
              ✕ 
              </button>
              <h2 className="lg:text-xl xs2:text-[16px] xs:leading-[18px]">WHAT'S NEW</h2>
              </div>
              <div className="flex justify-center items-center xs2:mt-[7rem] mt-[10rem] md2:mt-[15rem] lg:mt-[18rem]">
                <p className="text-[13px] leading-[16px] text-white/70">You have no new notifications</p>
              </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal 2*/}
      {isOpenModal === "star" && (
        <div className="fixed mt-12 inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`
              bg-[#000c24] w-full md:w-1/2 h-full p-6 overflow-auto relative
              transform transition-transform duration-300 ease-in-out
              translate-x-0
            `}
          >
            <div className="flex gap-x-5">
              <button
              onClick={handleCloseModal}
              className=" top-2rem -right-40rem text-white/90 lg:text-xl font-bold xs2:text-[16px] xs:leading-[18px]"
            >
              ✕ 
              </button>
              <h2 className="lg:text-xl xs2:text-[16px] xs:leading-[18px]">FAVORITES</h2>
              </div>
              <div className="flex flex-col justify-center items-center text-[13px] leading-[16px] mt-[2rem] max-w-[370px] m-auto">
                <p className=" text-white/70">Please sign in to continue!</p>
                <button className="text-black bg-[rgba(85,191,226,1)] mt-[20px] w-full h-[2rem] rounded-md">
                  <span>SIGN IN</span>
                </button>
              </div>
          </div>
        </div>
      )}

       {/* Fullscreen Modal 3*/}
      {isOpenModal === "setting" && (
        <div className="fixed mt-12 inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div
            className={`
              bg-[#000c24] w-full md:w-1/2 h-full p-6 overflow-auto relative
              transform transition-transform duration-300 ease-in-out
              translate-x-0
            `}
          >
            <div className="flex gap-x-5">
              <button
              onClick={handleCloseModal}
              className="top-2rem -right-40rem text-white/90 lg:text-xl font-bold xs2:text-[16px] xs:leading-[18px]"
            >
              ✕ 
              </button>
              <h2 className="text-xl">SETTING</h2> 
            </div>

              <div className="grid grid-cols-1 md2:grid-cols-2 gap-[10px] mt-4 mb-4">
                {settings.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="h-[52px] w-full caret-[rgba(255,255,255,0.9)] pe-[30px] text-white/90 text-[14px] rounded-[4px] bg-white/15 pt-5 px-[15px] pb-1 flex items-center relative cursor-pointer"
                      onClick={() => handleExpand(item.label)}
                    >
                      <span className="overflow-hidden whitespace-nowrap text-ellipsis">{item.value}</span>
                      <FaAngleDown className="right-[14px] absolute top-[50%] translate-y-[-50%] text-white/80" />
                      <span className="top-[10px] text-[12px] leading-[15px] left-[15px] absolute w-[calc(100%-48px)] text-start pointer-events-none text-white/40">
                        {item.label}
                      </span>
                    </div>

                   {expandedSetting === item.label && settingOptions[item.label] && (
                      <div className="absolute top-full left-0 bg-[#000C24] mt-1 rounded-md text-white/90 text-sm shadow-lg z-50 w-full flex flex-col gap-[2px]">
                        {settingOptions[item.label].map((option, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-2 bg-white/20 cursor-pointer rounded-[4px]"
                            onClick={() => {
                              settings[index].value = option;
                              setExpandedSetting(null);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}

      {isOpenModal === "betSlip" && (
        <div className="fixed mt-[10rem] inset-0 z-500 flex justify-center items-center">
          <div
            className={`
              bg-[#000c24] w-full md:w-1/3 h-[66vh] p-6 overflow-auto relative
              transform transition-transform duration-300 ease-in-out border border-white/10 hide-scrollbar overflow-y-auto
              translate-y-0
            `}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-white/70 lg:text-[18px] font-bold xs2:text-[16px] xs:leading-[18px]"
            >
              ✕ 
            </button>

            <div className="mt-3">
              <div className="flex justify-center bg-white/20 rounded-t-md border-b-2 border-[#3498db]">
                <h2 className="text-[12px] p-3">BitSlip</h2>
              </div>

              <div className="relative">
                {BitSlip.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="bg-white/5 rounded-b-md h-[36px] flex items-center gap-3 text-[16px] pt-6 pb-6 ps-1 cursor-pointer"
                    onClick={() => handleExpandBitSlip(item.labels)}
                  >
                    <IoMdSettings className="text-white/70 text-[18px]" />
                    <span className="text-white/70">{item.value}</span>
                    <FaAngleDown className="text-white/70" />
                  </div>

                  {expandedSettingBitSlip === item.labels && (
                    <div className="absolute top-full left-0 border border-white/30 rounded-[8px] bg-[#000C24] text-white/90 text-sm shadow-lg z-50  flex flex-col ">
                      {BitSlipOptions[item.labels].map((option, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-2 cursor-pointer ${
                          selectedBitSlip === option ? "bg-blue-400 text-white/90" : 
                          "text-white/60"}`}
                          onClick={() => {
                            BitSlip[index].value = option;
                            setExpandedSettingBitSlip(null);
                            setSelectedBitSlip(option);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
                
              </div>

              <div className="w-[100%] h-[7rem]">
                <div className="flex justify-center items-center h-full">
                  <h2 className="text-[13px] leading-[16px] text-white/70">Your betslip is empty</h2>
                </div>
              </div>

              <div className="bg-[#aa7f0033] rounded-md">
                <div className="mt-[2px] min-h-[2.3rem] flex items-center gap-3 p-2">
                  <TbAlertTriangleFilled className="text-[#aa7f00] text-[18px]" />
                  <span className="text-[12px]">To place your bet, please</span>
                  <a href="">
                    <span className="text-[12px] cursor-pointer underline">Sign in</span>
                  </a>
                  <span className="text-[12px]">or</span> 
                </div>
              </div>

              <div className="bg-white/5 mt-[2px] rounded-[4px] w-fll h-[3rem]">
                <div className="flex items-center w-full gap-1 h-full ps-2 pe-2">
                  {betAmounts.map((amount, index) => (
                    <button key={index} className="h-[36px] bg-white/10 w-full rounded-[4px]">
                      {amount}
                    </button>
                  ))}
                  <div className="h-[36px] bg-white/10 w-full rounded-[4px] flex justify-center items-center">
                    <MdModeEdit className="text-[16px] " />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 mt-[2px] w-full p-[5px] rounded-[4px]">
                <button className="text-white/30 px-[10px] bg-white/10 h-[36px] w-full flex justify-center items-center rounded-[4px]">
                  <span>Bet Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default NotificationModal;

