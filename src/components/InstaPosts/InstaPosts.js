// import React from 'react'
// import InstaCard from './InstaCard'

// const InstaPosts = () => {
//   return (
//       <div className='items-center text-center w-4/5 mx-auto space-y-9'>

//         <h2 className='text-black text-3xl md:text-5xl font-extrabold'>Our Latest <span className='text-deep-crimson'>Dashers</span></h2>
//         <p className='text-base md:text-2xl w-4/5 mx-auto'>Whether you're in Ventura County, Santa Barbara County, or San Luis Obispo County, we've got you covered.</p>

//         <div className='md:grid md:grid-cols-3 md:gap-3'>
//           <InstaCard />
//           <InstaCard />
//           <InstaCard />
//           <InstaCard />
//           <InstaCard />
//           <InstaCard />
//         </div>
        
//       </div>
//   )
// }

// export default InstaPosts

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import InstaCard from './InstaCard';
import 'swiper/swiper-bundle.min.css';


// install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

const InstaPosts = () => {
  return (
    <div className='items-center text-center w-4/5 mx-auto space-y-9'>
      <h2 className='text-black text-3xl md:text-5xl font-extrabold'>Our Latest <span className='text-deep-crimson'>Dashers</span></h2>
      <p className='text-base md:text-2xl w-4/5 mx-auto'>Whether you're in Ventura County, Santa Barbara County, or San Luis Obispo County, we've got you covered.</p>
      
      {/* Swiper for mobile view */}
      {/* <div className='md:hidden'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <InstaCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* Grid for non-mobile view */}
      <div className='hidden md:grid md:grid-cols-3 md:gap-3'>
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
      </div>
      
    </div>
  );
}

export default InstaPosts;
