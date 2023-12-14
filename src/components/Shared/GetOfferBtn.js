import React from "react"
import ArrowIcon from "../../images/svg/GetOfferBtn.inline.svg"

const GetOfferBtn = () => {
    const handleClick = () => {
        window.location.href = 'https://www.kbb.com/instant-cash-offer/W/69724927/43A6F9B8-DB6C-48C0-A360-F658B2176E3E/';
    };

  return (
    <button
      type="button"
      className="text-xl text-white bg-deep-crimson hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-8 py-3 text-center inline-flex items-center justify-center w-52"
      onClick={handleClick}
    >
      <span className="mr-4">Get Offer</span>
      <ArrowIcon />
    </button>
  )
}

export default GetOfferBtn
