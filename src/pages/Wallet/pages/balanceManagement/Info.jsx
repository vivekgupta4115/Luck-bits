import { useState } from 'react'

function Info() {
    const [paymentMethod, setPaymentMethod] = useState(1)
    const paymentMethodHandler = (id) => {
        setPaymentMethod(id)
    }
    return (
        <div className='p-3 w-full'>

            <div className='w-full grid grid-cols-2 '>
                <button onClick={() => paymentMethodHandler(1)} className={`col-span-1 hover:bg-bg3 rounded-l h-8 text-xsm ${paymentMethod === 1 ? "bg-bg3 border-b border-bg4" : "bg-bg2"}`}>Deposit</button>
                <button onClick={() => paymentMethodHandler(2)} className={`col-span-1 hover:bg-bg3 rounded-r text-xsm ${paymentMethod === 2 ? "bg-bg3 border-b border-bg4" : "bg-bg2"}`}>Withdraw</button>
            </div>
        </div>
    )
}

export default Info