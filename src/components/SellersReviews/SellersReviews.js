import React from 'react'
import ReviewCard from './ReviewCard'
import GetOfferBtn from '../Shared/GetOfferBtn'

const SellersReviews = () => {
    return (
        <div className='items-center text-center w-4/5 mx-auto space-y-9'>

            <div className='flex justify-between items-center'>
                <div className='space-y-9 text-left w-3/4'>
                    <h2 className='text-black text-5xl font-extrabold'>What <span className='text-deep-crimson'>Sellers</span> are Saying</h2>
                    <p className='text-2xl w-4/5'>Whether you're in Ventura County, Santa Barbara County, or San Luis Obispo County, we've got you covered.</p>
                </div>
                <GetOfferBtn />
            </div>

            <div className='grid grid-cols-5 gap-3'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>

        </div>

    )
}

export default SellersReviews