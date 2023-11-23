import React from 'react'
import Video from './Video'
import Appointment from './Appointment'
import SectionShape from '../../images/svg/sectionShape.inline.svg'


const Howto = () => {
    return (
        <>
            <SectionShape  className='transform rotate-180'/>
            <div className='bg-midnight-blue items-center text-center'>
                <div className='w-4/5 mx-auto'>
                    <h2 className=' text-white text-3xl md:text-5xl font-extrabold font-extrabold'>How to <span className='text-deep-crimson'>CASH & DASH</span></h2>

                    <div className='py-12 flex flex-col-reverse lg:flex lg:flex-row lg:items-center lg:justify-between'>
                        <Appointment />
                        <Video />
                    </div>
                    </div>
            </div>
            <SectionShape />
        </>
    )
}

export default Howto