import React from 'react';
import img from "./image1.gif";
import GetOfferBtn from '../GetOfferBtn';
import "./style.css"

const Hero = () => {
    const clipPath = `polygon(1500px 0px, 0px 0px, calc(50% - 750px) 700px, 1147.04px 824.453px, 1147.04px 824.453px, 1151.73359px 824.835999px, 1156.42952px 824.994712px, 1161.11753px 824.930513px, 1165.78736px 824.644776px, 1170.42875px 824.138875px, 1175.03144px 823.414184px, 1179.58517px 822.472077px, 1184.07968px 821.313928px, 1188.50471px 819.941111px, 1192.85px 818.355px, 1500px 700px, 1500px 0px)`; 

    return (
        <div className="relative" style={{ width: '1500px', height: '925px' }}>
            {/* Clipped Background div */}
            <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: clipPath,
                zIndex: '1'
            }}></div>

            <div className="relative z-10">
                <h2>Sell Your Car Today!</h2>
                <h1>Get More than Just an “Instant Cash Offer”</h1>
                <h2>Drive In, Cash Out!</h2>
                <GetOfferBtn />


            </div>

        </div>
    );
}




export default Hero;
