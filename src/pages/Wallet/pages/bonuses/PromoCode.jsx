import React, { useState } from 'react'

function PromoCode() {
      const [isPromoCode, setIsPromoCode] = useState(null);
      const handlePromoCodeChange = (value) => {
        setIsPromoCode(value)
      }
    return (
        <div>
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
        </div>
    )
}

export default PromoCode