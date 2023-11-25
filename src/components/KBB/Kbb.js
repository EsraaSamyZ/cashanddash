import React from 'react'
import Form from './Form'
import KbbText from './KbbText'
import bg from '../../images/bg-kbb.png'
import SectionShape from '../../images/svg/sectionShape.inline.svg'

const Kbb = () => {
    return (
        <>
            <div className="w-4/5 mx-auto md:flex md:items-center md:justify-between pt-36 md:pt-56 md:pb-24 pb-8 md:space-x-32 space-y-8 md:space-y-0">
                <Form />
                <KbbText />
            </div>
            <SectionShape className='transform rotate-180 -mb-[1px]' />
        </>
    );
};

export default Kbb;
