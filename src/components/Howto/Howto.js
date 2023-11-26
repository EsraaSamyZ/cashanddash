import React, { useState } from 'react';
import Video from './Video'
import Appointment from './Appointment'
import SectionShape from '../../images/svg/sectionShape.inline.svg'
import AppointmentForm from './AppointmentForm';


const Howto = () => {
    const [showForm, setShowForm] = useState(false);
    console.log(showForm)

    return (
        <>
            {/* <SectionShape  className='transform rotate-180 -mb-[1px]'/> */}
            <div className='bg-midnight-blue items-center text-center'>
                <div className='w-4/5 mx-auto'>
                    <h2 className=' text-white text-3xl md:text-5xl font-extrabold font-extrabold'>How to <span className='text-deep-crimson'>CASH & DASH</span></h2>

                    <div className='py-12 flex flex-col-reverse lg:flex lg:flex-row lg:items-center lg:justify-between'>
                        <Appointment setShowForm={setShowForm} />
                        <Video />
                    </div>
                    </div>
            </div>
            <SectionShape className='-mt-[1px]' />

            {showForm && <AppointmentForm setShowForm={setShowForm} />}
        </>
    )
}

export default Howto