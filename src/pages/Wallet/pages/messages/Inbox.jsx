import React, { useState } from 'react'
import CustomDatePicker from '../../../../reusableComponents/datePicker/CustomDatePicker'

function Inbox() {
    return (
        <div className='p-4 w-full flex items-center'>
            <div className='bg-bg1 w-full rounded p-2'>
                <div className='bg grid grid-cols-2 gap-2 rounded-sm w-full'>
                    
                    <CustomDatePicker title="Start Date" w="full"/>
                    <CustomDatePicker title="End Date" w="full" />

                </div>
                <div className='flex items-center justify-end mt-2'>
                    <button className="flex items-center text-nowrap bg-bg4 hover:bg-bg5 text-bg2 rounded-[0.25rem] text-xs w-60 justify-center py-2.5">SHOW</button>
                </div>
            </div>
        </div>
    )
}

export default Inbox

