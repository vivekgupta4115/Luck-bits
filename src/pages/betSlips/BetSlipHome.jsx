import React, { useState } from 'react'
import useProfile from '../../services/gameApi';
import BetSlip from './BetSlip';
import OpenBets from './OpenBets';

function BetSlipHome() {
    const userId = localStorage.getItem("userId");
    const { myDetails } = useProfile(userId);
    const [paymentMethod, setPaymentMethod] = useState(1)
    const paymentMethodHandler = (id) => {
        setPaymentMethod(id)
    }
    return (
        <div>
            <div className='w-full grid grid-cols-2 mt-2'>
                <button onClick={() => paymentMethodHandler(1)} className={`col-span-1  rounded-tl h-8 text-xsm ${paymentMethod === 1 ? "bg-bg4 border-b border-bg4 text-bg2" : "bg-bg2 text-text80"}`}>BetSlip</button>
                <button onClick={() => paymentMethodHandler(2)} className={`col-span-1  rounded-tr text-xsm ${paymentMethod === 2 ? "bg-bg4 border-b border-bg4 text-bg2" : "bg-bg2 text-text80"}`}>Open Bets</button>
            </div>
            {
                paymentMethod === 1 ?
                    <BetSlip />
                    :
                    <OpenBets />
            }
        </div>
    )
}

export default BetSlipHome