import React from 'react'
import { Link } from 'react-router-dom'

function OpenBets() {
    return (
        <div>
            <Link className='text-xsm w-full flex items-center justify-end mt-2 text-textb3 underline'>Go to bet Hisotry</Link>
            <p className='text-textb3 text-center mt-20'>You have no open bets at this moment</p>
        </div>
    )
}

export default OpenBets