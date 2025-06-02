import React from 'react'
import tourentImg from "../../assets/casinoImages/casinoImages/toutentImg.jpg";

const TopGameTourant = () => {
  return (
    <div>
        <div className='w-[100%] pl-[16px] pr-[16px]'>
            <div className='w-[100%] mb-[24px] mt-5'>
                <h2 className='text-[12px] leading-[14px] text-[rgba(255,255,255,1)]
                  font-[400] mb-[16px] text-shadow-glow uppercase'>Top Games Tournament</h2>

                <div className='w-[100%] flex gap-[8px]'>
                    <div className='relative w-[100%] min-w-[194px] max-w-[194px] '>
                        <button className='absolute h-[19px] top-[5px] lef-[-5px] bg-[rgba(85,191,226,1)]
                           flex items-center z-1 pt-[8px] pb-[8px] text-[rgba(255,255,255,1) text-[10px] px-1'>UPCOMING</button>
                        <img src={tourentImg} alt=""/>
                    </div>
                    <div className='relative w-[100%] p-[6px] bg-[rgba(255,255,255,.05)] rounded-[4px] border border-[rgba(255,255,255,.05)]'>
                        <span></span>
                        <span></span>
                        <div className='w-[100%]'>
                            <p className='mb-[4px] text-[12px] leading-[14px] text-center text-[rgba(255,255,255,.6)]'>Prize Funds</p>
                            <p className='text-[14px] leading-[16px] font-bold text-shadow-[0_0px_4px_rgb(85_191_226_1)]
                               mb-[8px] text-center text-[rgba(255,215,0)]'
                               >517,655,590.91 LBP
                            </p>
                            <div className='mb-[8px] w-[100]'>
                                <span className='mb-1 text-[12px] leading-3 block text-center text-[#109121]'>
                                    Starts in
                                </span>
                                <div className='flex justify-center w-[100%]'>
                                    <div className='relative pe-[4px] flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>00 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>DAY</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>10 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>HRS</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>17 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>MINS</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>07</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>SECS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[100%] pl-2 pr-2'>
                            <button className='bg-[rgba(85,191,226,1)] text-[rgba(0,0,0,1)] h-[32px]
                               w-[100%] rounded-[4px] text-[14px] leading-[16px] pl-[15px] pe-[15px]'>JOIN NOW</button>
                        </div>
                    </div>
                </div>
            </div>

        {/* second card----2 */}
            <div className='w-[100%] mb-[24px] mt-5'>
                <h2 className='text-[12px] leading-[14px] text-[rgba(255,255,255,1)]
                  font-[400] mb-[16px] text-shadow-glow uppercase'>Top Games Tournament</h2>

                <div className='w-[100%] flex gap-[8px]'>
                    <div className='relative w-[100%] min-w-[194px] max-w-[194px] '>
                        <button className='absolute h-[19px] top-[5px] lef-[-5px] bg-[rgba(85,191,226,1)]
                           flex items-center z-1 pt-[8px] pb-[8px] text-[rgba(255,255,255,1) text-[10px] px-1'>UPCOMING</button>
                        <img src={tourentImg} alt=""/>
                    </div>
                    <div className='relative w-[100%] p-[6px] bg-[rgba(255,255,255,.05)] rounded-[4px] border border-[rgba(255,255,255,.05)]'>
                        <span></span>
                        <span></span>
                        <div className='w-[100%]'>
                            <p className='mb-[4px] text-[12px] leading-[14px] text-center text-[rgba(255,255,255,.6)]'>Prize Funds</p>
                            <p className='text-[14px] leading-[16px] font-bold text-shadow-[0_0px_4px_rgb(85_191_226_1)]
                               mb-[8px] text-center text-[rgba(255,215,0)]'
                               >517,655,590.91 LBP
                            </p>
                            <div className='mb-[8px] w-[100]'>
                                <span className='mb-1 text-[12px] leading-3 block text-center text-[#ff3449]'>
                                    Ends in
                                </span>
                                <div className='flex justify-center w-[100%]'>
                                    <div className='relative pe-[4px] flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>00 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>DAY</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>10 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>HRS</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>17 :</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>MINS</p>
                                    </div>
                                    <div className='relative ps-1 pe-1 flex flex-col items-center'>
                                        <span className='text-[14px] leading-[16px] text-[rgba(255,255,255,1)]'>07</span>
                                        <p className='text-[8px] leading-2 text-[rgba(255,255,255,1)]'>SECS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[100%] pl-2 pr-2'>
                            <button className='bg-[rgba(85,191,226,1)] text-[rgba(0,0,0,1)] h-[32px]
                               w-[100%] rounded-[4px] text-[14px] leading-[16px] pl-[15px] pe-[15px]'>JOIN NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopGameTourant