import React from 'react';
import ArrowIcon from '../../images/svg/GetOfferBtn.inline.svg'

const GetOfferBtn = () => {
    return (
        <button type="button" className="text-xl text-white bg-deep-crimson hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-8 py-3 text-center inline-flex items-center justify-center w-52">
            <span className='mr-4'>Get Offer</span>
            <ArrowIcon />
        </button>
    );
}

export default GetOfferBtn;
