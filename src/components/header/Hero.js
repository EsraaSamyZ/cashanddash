import React from 'react';
import img from "./image1.png";

const Hero = () => {
    const clipPath = `polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)`;

    return (
        <div className="relative" style={{ width: '1500px', height: '925px' }}>
            {/* Clipped Background div */}
            <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: clipPath, // Apply the clipping path here
                zIndex: '1'
            }}></div>

            {/* Content container */}
            <div className="relative z-10">
                {/* Content goes here */}
            </div>

            <svg className="absolute bottom-0 w-full z-10" height="125" viewBox="0 0 1500 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1147.04 124.453L0 0L1500 0L1192.85 118.355C1178.51 123.996 1162.67 126.105 1147.04 124.453Z" fill="transparent"/>
            </svg>
        </div>
    );
}

export default Hero;
