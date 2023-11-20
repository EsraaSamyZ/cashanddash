import React from 'react'
import Form from './form'
import KbbText from './KbbText'
import bg from './bg-kbb.png'

const ContainerShape = () => (
    <svg width="1498" height="149" viewBox="0 0 1498 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M350.957 0.651642L1498 149H-2L305.148 7.92041C319.486 1.19679 335.333 -1.31767 350.957 0.651642Z" fill="black" fill-opacity="0.08" />
        <path d="M350.957 24.5467L1498 149H-2L305.148 30.6446C319.486 25.004 335.333 22.8946 350.957 24.5467Z" fill="#09183B" />
    </svg>
)

const Kbb = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="border flex items-center justify-between py-8 mx-20">
                <Form />
                <KbbText />
            </div>
            <ContainerShape />
        </div>
    );
};

export default Kbb;
