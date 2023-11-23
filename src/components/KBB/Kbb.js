import React from 'react'
import Form from './form'
import KbbText from './KbbText'
import bg from '../../images/bg-kbb.png'


const Kbb = () => {
    return (
        // <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div>
            <div className="w-4/5 mx-auto md:flex md:items-center md:justify-between py-8 md:space-x-32 space-y-8 md:space-y-0">
                <Form />
                <KbbText />
            </div>

        </div>
    );
};

export default Kbb;
