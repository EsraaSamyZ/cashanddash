import React from 'react'
import Video from './Video'
import Appointment from './Appointment'
import SectionShape from './sectionShape.inline.svg'

// const ContainerShape = () => (
//     <svg width="1500" height="149" viewBox="0 0 1500 149" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M1147.04 148.348L0 0L1500 0L1192.85 141.08C1178.51 147.803 1162.67 150.318 1147.04 148.348Z" fill="black" fill-opacity="0.08" />
//         <path d="M1147.04 124.453L0 0L1500 0L1192.85 118.355C1178.51 123.996 1162.67 126.105 1147.04 124.453Z" fill="#09183B" />
//     </svg>
// )

const Howto = () => {
    return (
        <>
            <div className='bg-midnight-blue items-center text-center'>
                <div className='w-4/5 mx-auto'>
                    <h2 className='text-black text-5xl font-extrabold'>How to <span className='text-deep-crimson'>CASH & DASH</span></h2>

                    <div className='py-12 flex items-center justify-between'>
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