import React from 'react'
import Form from './Form'
import KbbText from './KbbText'
import sectionShape from '../../images/svg/shape.svg'

const Kbb = () => {
    return (
        <>
            {/* <div className="w-4/5 mx-auto flex flex-col-reverse md:flex md:items-center md:justify-between pt-36 md:pt-56 md:pb-24 pb-8 md:space-x-32 space-y-8 md:space-y-0"> */}
            <div className="w-4/5 mx-auto py-12 flex flex-col-reverse md:flex-row md:items-center md:justify-between pt-36">
                <Form className=""/>
                <KbbText className=""/>
            </div>
            <img src={sectionShape} className='transform rotate-180 -mb-[1px]' style={{ width: '100%' }} />
        </>
    );
};

export default Kbb;
