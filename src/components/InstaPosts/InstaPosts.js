import React from 'react'
import InstaCard from './InstaCard'

const InstaPosts = () => {
  return (
      <div className='items-center text-center w-4/5 mx-auto space-y-9'>

        <h2 className='text-black text-5xl font-extrabold'>Our Latest <span className='text-deep-crimson'>Dashers</span></h2>
        <p className='text-2xl w-4/5 mx-auto'>Whether you're in Ventura County, Santa Barbara County, or San Luis Obispo County, we've got you covered.</p>

        <div className='grid  grid-cols-3 gap-3'>
          <InstaCard />
          <InstaCard />
          <InstaCard />
          <InstaCard />
          <InstaCard />
          <InstaCard />
        </div>
        
      </div>
  )
}

export default InstaPosts