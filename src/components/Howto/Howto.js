import React, { useState } from 'react';
import Video from './Video'
import Appointment from './Appointment'
import AppointmentForm from './AppointmentForm';
import sectionShape from '../../images/svg/shape.svg'


const Howto = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className='bg-midnight-blue items-center text-center'>
                <div className='w-4/5 mx-auto'>
                    <h2 className=' text-white text-3xl md:text-5xl font-extrabold font-extrabold'>How to <span className='text-deep-crimson'>CASH & DASH</span></h2>

                    <div className='py-12 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
                        <Appointment  setShowForm={setShowForm} />
                        <Video />
                    </div>
                    </div>
            </div>
            <img src={sectionShape} className='-mt-[1px]' style={{ width: '100%' }} />

            {showForm && <AppointmentForm setShowForm={setShowForm} />}
        </>
    )
}

export default Howto