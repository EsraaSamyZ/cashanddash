import React from 'react'
import Icon from './icon1.inline.svg'

const ServicesCard = () => {
    return (
        <div className='flex flex-start bg-white space-x-6 h-48 w-1/2 p-7 rounded-2xl border'>
                <Icon />
                <div className='text-left space-y-3'>
                    <h4 className='font-semibold text-2xl'>Free CarFax Vehicle History Report</h4>
                    <p>Bring your vehicle to our location and get a free carfax report!</p>
                </div>
        </div>
    )
}

export default ServicesCard