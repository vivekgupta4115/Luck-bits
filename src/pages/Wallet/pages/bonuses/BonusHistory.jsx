
import { useState } from 'react'
import CustomSelectBox from '../CustomSelectBox'
import CustomDatePicker from '../../../../reusableComponents/datePicker/CustomDatePicker'

function BonusHistory() {
    const [gameCategory, setGameCategory] = useState("Sport")
    const [category, setCategory] = useState("1 Hours")
    return (
        <div className='p-4 w-full flex items-center'>
            <div className='bg-bg1 w-full rounded p-2'>
                <div className='bg grid grid-cols-2 gap-2 rounded-sm w-full'>
                    <CustomSelectBox
                        titleBg="titleBg"
                        modalBg="bg2"
                        optionBg="bg1"
                        optionHoverBg="titleBg"
                        optionH="[200px]"
                        title="Category"
                        options={['Sport','Casino']}
                        selected={gameCategory}
                        onChange={(val) => setGameCategory(val)}
                        placeholder="Select country"
                    />
                    <CustomSelectBox
                        titleBg="titleBg"
                        modalBg="bg2"
                        optionBg="bg1"
                        optionHoverBg="titleBg"
                        optionH="[200px]"
                        title="Period"
                        options={["1 Hours", "2 Hours",'3 Hours','6 Hours','12 Hours','24 Hours','48 Hours','72 Hours','Custom']}
                        selected={category}
                        onChange={(val) => setCategory(val)}
                        placeholder="Select category"
                    />

                </div>
                <div className='flex items-center justify-end mt-2'>
                    <button className="flex items-center text-nowrap bg-bg4 hover:bg-bg5 text-bg2 rounded-[0.25rem] text-xs w-60 justify-center py-2.5">SHOW</button>
                </div>
            </div>
        </div>
    )
}

export default BonusHistory

