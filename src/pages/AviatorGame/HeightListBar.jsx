/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrlUsaWin } from '../../services/api'
import { toast } from 'react-toastify'

function HeightListBar({ hotAirData, betApiHitted, refreshHeightList, setRefreshHeightList }) {
    const [getData, setGetData] = useState(null)
    // console.log("refreshHeightList",refreshHeightList)
    const getPreviousResult = async () => {
        // console.log("first")
        try {
            const res = await axios.get(`${baseUrlUsaWin}/userapi/aviator_last_five_result`)
            // alert("hittedd")
            // console.log("first", res)
            if (res?.data?.status === 200 || res?.data?.status === "200") {
                setGetData(res?.data?.data)
            }
        } catch (err) {
            if (err?.response?.data?.status === 500) {
                console.log("Server problem")
            } else {
                console.log("err?.response?.data?.message", err?.response?.data?.message)
                toast.error(err?.response?.data?.message, {
                    className: 'custom-toast custom-toast-error',
                })
            }
        }
    }
    useEffect(() => {
        if (hotAirData?.status === 0) {
            getPreviousResult()
        }
    }, [hotAirData?.status])
    // console.log("hotAirData",hotAirData)
    const colors = ["text-[#F85050]", "text-blue-500", "text-green", "text-yellow", "text-purple-500", "text-pink-500"];

    return (
        <div className='overflow-x-auto hide-scrollbar w-full flex items-center gap-2'>
            {getData?.map((item, i) => (
                <div key={i} className={`bg-blackAviator2 rounded-full px-3 py-0.5 text-xsm ${colors[i % colors.length]}`}
                >
                    {Number(item?.price)?.toFixed(2)}
                </div>
            ))}
        </div>
    )
}

export default HeightListBar