import React from 'react'
import GoogleIcon from './Google.inline.svg'
import Stars from './stars.inline.svg'

const name = "Sarah W."
const city = "San Diago"
const reviewBody = "I was on the hunt for the perfect family SUV, and 805 CashandDash made it a breeze. "
const img = "https://via.placeholder.com/30x30"

const ReviewCard = () => {
    return (
        <div className="bg-white rounded-2xl border overflow-hidden p-5 space-y-3 text-left w-fit" style={{ boxShadow: '2px 6px 15px 0px rgba(0, 0, 0, 0.12)', }}>

            <div className='flex items-center justify-between'>

                <img className="w-8 h-8 object-cover rounded-full" src={img} alt="Card Image" />
                <div className='w-28'>
                    <h2 className="text-md text-gray-800 font-semibold">{name}</h2>
                    <p className="text-xs text-gray-600">{city}</p>
                </div>
                <GoogleIcon />
            </div>
            <Stars />
            <p className="text-sm w-44">{reviewBody}</p>

        </div>


    )
}

export default ReviewCard