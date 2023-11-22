import React from 'react'
import ServicesCard from './ServicesCard'
import ServicesSection from './servicesSection.inline.svg'

const Services = () => {
    return (
        <div className='my-9 bg-light-gray'>
            <ServicesSection />
            <div className='w-4/5 mx-auto space-y-9 text-center py-9'>
                <h2 className='text-black text-5xl font-extrabold w-4/5 mx-auto'>Complimentary <span className='text-deep-crimson'>Services</span> When You Sell Your Car to 805 Cash & Dash</h2>
                <p className='text-2xl w-4/5 mx-auto'>Searching for your dream car has never been easier. Here's what you can expect when you use our platform to buy a car</p>
                <div className='flex flex-wrap'>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </div>
            </div>
            <ServicesSection className='transform rotate-180'/>
        </div>
    )
}

export default Services