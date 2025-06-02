import { IoPersonCircleSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import usawinlogo from "../assets/usawinlogo.png";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import IndianTime from "../reusableComponents/IndianTime";
import { currency } from "../../src/features/kits";
import Login from "../features/auth/Login";
import WalletModal from "./WalletModal";

import ProfileListModal from "../reusableComponents/Modal/ProfileListModal";
import LanguageModal from "./Modal/LanguageModal";
import NotificationModal from "./Modal/NotificationModal";
import useProfile from "../services/gameApi";
import DepositModal from "../pages/Wallet/depositModal/DepositModal";
import { useNavigate } from "react-router-dom";

const languages = [
  { name: "UAE", flag: "uaeFlag.webp" },
  { name: "ENG", flag: "engFlag.jpg" },
];

function Header({ audioRef, isAudioOn, setIsAudioOn }) {
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  

  const [toggleEye, setToggleEye] = useState(true);
  const [notificationModal, setNotificationModal] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [walletModal, setIsWalletModal] = useState(false);
  const [profileListModal, setIsProfileListModal] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isDepositModal, setIsDepositModal] = useState(false);

  const { myDetails } = useProfile(userId);

  const toggleAudio = () => {
    if (!audioRef?.current) return;

    audioRef.current.muted = isAudioOn;
    if (isAudioOn) audioRef.current.pause();
    setIsAudioOn(!isAudioOn);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const LanguageButton = () => (
    <button
      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
      className="w-[85px] hidden xsm:block"
    >
      <div className="w-full p-1 text-textGray flex items-center justify-center gap-1">
        <img
          className="h-4 w-6 object-cover"
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
        />
        <p>{selectedLanguage.name}</p>
        <MdKeyboardArrowDown size={20} />
      </div>
    </button>
  );

  return (
    <div className="border-b-[0.1px] h-full md:border-0 border-bg1">
      {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} />}
      {walletModal && <WalletModal setIsWalletModal={setIsWalletModal} />}
      {profileListModal && (
        <ProfileListModal setIsProfileListModal={setIsProfileListModal} />
      )}
      {isLanguageOpen && (
        <LanguageModal
          setIsLanguageOpen={setIsLanguageOpen}
          languages={languages}
          handleLanguageSelect={handleLanguageSelect}
        />
      )}
      {notificationModal && <NotificationModal />}
      {isDepositModal && (
        <DepositModal
          setIsDepositModal={setIsDepositModal}
          toggleEye={toggleEye}
          setToggleEye={setToggleEye}
        />
      )}

     
        <div className="bg-mainBg px-2 h-14 flex justify-between items-center">
          <img className="h-6" src={usawinlogo} alt="logo not found" onClick={()=>navigate('/')} />
          {!userId ? (
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setIsOpenLogin(true)}
                className=" hover:bg-bg4_dark text-white rounded text-[13px] px-2 py-1.5 underline"
              >
                SIGN IN
              </button>
              <LanguageButton />
              <div className="h-8 w-[0.3px] hidden xsm:block bg-bg1"></div>
              <div className="hidden xsm:flex items-center text-white rounded-md text-xs w-16 mr-4 py-1.5 bg-bg2 ">
                <IndianTime />
              </div>
              <div className="h-8 w-[0.3px] hidden xsm:block bg-bg1"></div>
              <button
                onClick={() => setNotificationModal(!notificationModal)}
                className={`transform transition-all duration-300 ease-in-out ${
                  // Added transition-all and ease-in-out
                  notificationModal ? "rotate-90" : "rotate-0"
                } 
               w-8 h-8 rounded-full flex items-center justify-center hover:bg-bg1 
  `}
                style={{
                  backgroundColor: notificationModal
                    ? "rgba(255, 255, 255, 0.6)"
                    : "", // Default background will come from Tailwind or be transparent
                  color: notificationModal ? "black" : "", // Default color from Tailwind or inherited
                }}
              >
                <PiDotsThreeOutlineVerticalFill className="text-base" />{" "}
                {/* Adjust icon size if needed */}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsDepositModal(!isDepositModal)}
                className="hidden xsm:flex items-center bg-bg4 hover:bg-bg4_dark text-black rounded text-sm px-2 py-1"
              >
                <span className="bg-black rounded-full w-4 h-4 flex items-center justify-center text-xs text-bg4">
                  $
                </span>
                &nbsp;DEPOSIT
              </button>
              <div className="h-8 w-[0.3px] bg-bg1"></div>
              <button
                onMouseEnter={() => setIsWalletModal(true)}
                onMouseLeave={() => setIsWalletModal(false)}
                className="relative group text-xs"
              >
                <div className="invisible group-hover:visible h-[3px] rounded-t-md w-full bg-bg4 absolute top-0"></div>
                <p>
                  {toggleEye
                    ? Number(myDetails?.data?.wallet)?.toFixed(2) ?? "0.00"
                    : "********"}
                  &nbsp;{toggleEye ? currency?.uae : ""}
                </p>
              </button>
              <div className="h-8 w-[0.3px] bg-bg1"></div>
              <button
                onMouseEnter={() => setIsProfileListModal(true)}
                onMouseLeave={() => setIsProfileListModal(false)}
                className="relative group"
              >
                <div className="invisible group-hover:visible h-[3px] rounded-t-md w-full bg-bg4 absolute top-0"></div>
                <IoPersonCircleSharp className="text-textGray" size={35} />
              </button>
              <div className="h-8 w-[0.3px] hidden xsm:block bg-bg1"></div>
              <LanguageButton />
              <div className="h-8 w-[0.3px] hidden xsm:block bg-bg1"></div>
              <div className="hidden xsm:flex items-center text-white rounded-md text-xs w-16 mr-4 py-1.5 bg-bg2">
                <IndianTime />
              </div>
              <div className="h-8 w-[0.3px] bg-bg1"></div>
              <button
                onClick={() => setNotificationModal(!notificationModal)}
                className={`transform transition-transform duration-200 ${
                  notificationModal
                    ? "bg-textGray2 rotate-180"
                    : "bg-bg2 rotate-0"
                } hover:bg-bg1 py-1.5 px-2.5 rounded-md`}
              >
                <PiDotsThreeOutlineVerticalFill />
              </button>
            </div>
          )}
        </div>
      
    </div>
  );
}

export default Header;
