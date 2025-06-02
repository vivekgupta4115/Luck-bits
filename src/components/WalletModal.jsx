/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function WalletModal({ setIsWalletModal }) {
    return (
        <div onMouseEnter={() => setIsWalletModal(true)} onMouseLeave={() => setIsWalletModal(false)} className="relative inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className='bg-mainBg px-2 pb-2 flex flex-col gap-0.5 absolute top-[43px] right-80 w-64 shadow-2xl rounded-md'>
                <Link to="/wallet/deposit" className='w-full mt-[17px] bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Deposit
                </Link>
                <Link to="/wallet/withdrawal" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Withdraw
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Transaction History
                </Link>
                <Link to="#" className='w-full bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white'>
                    <p className="bg-textGray2 rounded-full w-4 h-4 flex items-center justify-center text-xsm hover:bg-white text-mainBg">$</p> &nbsp;
                    Info
                </Link>
            </div>
        </div>
    )
}

export default WalletModal