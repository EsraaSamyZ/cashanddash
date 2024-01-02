import React from "react"
import ReviewCard from "./ReviewCard"
import GetOfferBtn from "../Shared/GetOfferBtn"

const SellersReviews = () => {
    return (
        <div className="items-center text-center w-4/5 mx-auto space-y-9">

            <div className="space-y-9 md:space-y-0 text-center md:text-left md:flex md:justify-between md:items-center">
                <div className="space-y-9 md:w-3/4">
                    <h2 className="text-black text-3xl md:text-5xl font-extrabold">What <span className="text-deep-crimson">Sellers</span> are Saying</h2>
                    <p className="text-base md:text-2xl md:w-4/5">Whether you're in Ventura County, Santa Barbara County, or San Luis Obispo County, we've got you covered.</p>
                </div>
                <GetOfferBtn />
            </div>

            {/* <div className="grid md:grid-cols-3 lg:grid-cols-5 md:gap-3 lg:gap-6 w-fit mx-auto"> */}
            <div className="flex flex-row flex-wrap items-center justify-center">
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