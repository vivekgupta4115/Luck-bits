/* eslint-disable react/prop-types */
import { IoIosLogOut } from "react-icons/io"
import { IoPersonCircleSharp } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

function ProfileListModal({ setIsProfileListModal }) {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("userId")
        setIsProfileListModal(false)
        navigate("/")
    }
    return (
        <div onMouseEnter={() => setIsProfileListModal(true)} onMouseLeave={() => setIsProfileListModal(false)} className="relative inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className='bg-mainBg px-2 pb-2 flex flex-col gap-0.5 absolute top-[43px] right-64 w-64 shadow-2xl rounded-md'>
                <Link to="/wallet/deposit" className='w-full mt-[17px] bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <IoPersonCircleSharp className='text-textGray group-hover:shadow-2xl' size={20} /> &nbsp;
                    My Profile
                </Link>
                <Link to="/wallet/withdrawal" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Balance Management
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Bet History
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Info
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Bonuses
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Messages
                </Link>
                <button onClick={() => handleLogout()} className='w-full mt-2 hover:bg-gray  bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="rounded-full w-4 h-4 flex items-center justify-center text-xsm text-gray"><IoIosLogOut className="text-textGray" size={20} /></p> &nbsp;
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileListModal