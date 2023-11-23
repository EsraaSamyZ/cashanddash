import React from 'react';
import img from './image1.gif';
import Union from "./Hero.svg";
import GetOfferBtn from '../Shared/GetOfferBtn';

const MyComponent = () => {
    return (
        <div className="flex items-center" style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${img})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            maskImage: `url(${Union})`,
            maskSize: '100% 150%',
            WebkitMaskImage: `url(${Union})`,
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            MaskRepeat: 'no-repeat',
        }}>
            <div className="w-4/5 mx-auto">
                <div className="text-left py-32 w-1/2 space-y-6">
                    <h2 className='text-white text-4xl font-bold'>Sell Your Car Today!</h2>
                    <h1 className='text-white text-6xl font-bold'>Get More than Just an “Instant Cash Offer”</h1>
                    <h2 className='text-royal-blue text-4xl font-bold'>Drive In, Cash Out!</h2>
                    <GetOfferBtn />
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
