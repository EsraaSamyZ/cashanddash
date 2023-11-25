// import React from 'react';
// import img from './image1.gif';
// import Union from '../../images/svg/Hero.svg';
// import GetOfferBtn from '../Shared/GetOfferBtn';
// import video from '../../images/Amir_Trim.webm';

// const HeroComponent = () => {
//     return (
//         <>
//             <div id='home' className='relative' style={{ width: '100%' }}>
//                 <div className='flex items-center h-full' style={{
//                     backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.71) 40%, rgba(97, 97, 97, 0.30) 100%), url(${img})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center bottom',
//                     backgroundRepeat: 'no-repeat',
//                     maskImage: `url(${Union})`,
//                     WebkitMaskImage: `url(${Union})`,
//                     WebkitMaskRepeat: 'no-repeat',
//                     MaskRepeat: 'no-repeat',
//                 }}>
//                     <div className='w-4/5 mx-auto'>
//                         <div className='text-center md:text-left py-32 lg:w-1/2 space-y-6 md:py-64'>
//                             <h2 className='text-white text-3xl md:text-4xl font-bold'>Sell Your Car Today!</h2>
//                             <h1 className='text-white text-5xl md:text-6xl font-bold'>Get More than Just an “Instant Cash Offer”</h1>
//                             <h2 className='text-royal-blue text-3xl md:text-4xl font-bold'>Drive In, Cash Out!</h2>
//                             <GetOfferBtn />
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>

//     );
// };

// export default HeroComponent;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import img from './image1.gif';
import Union from '../../images/svg/Hero.svg';
import GetOfferBtn from '../Shared/GetOfferBtn';

const HeroComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "Amir_Trim.webm" }) {
                publicURL
            }
        }
    `);

    const videoSrc = data.file.publicURL;

    return (
        <div id='home' className='relative' style={{ width: '100%' }}>
            <div className='flex items-center h-full' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                maskImage: `url(${Union})`,
                WebkitMaskImage: `url(${Union})`,
                WebkitMaskRepeat: 'no-repeat',
                MaskRepeat: 'no-repeat',
                width: '100%',
                position: 'absolute',
                zIndex: -1
            }}>
                <video autoPlay loop muted style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -2
                }}>
                    <source src={videoSrc} type="video/webm" />
                </video>

                <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.71) 40%, rgba(97, 97, 97, 0.30) 100%)`,
                zIndex: -2
            }}>
            </div>


            </div>

            <div className='w-4/5 mx-auto'>
                <div className='text-center md:text-left py-32 lg:w-1/2 space-y-6 md:py-64'>
                    <h2 className='text-white text-3xl md:text-4xl font-bold'>Sell Your Car Today!</h2>
                    <h1 className='text-white text-5xl md:text-6xl font-bold'>Get More than Just an “Instant Cash Offer”</h1>
                    <h2 className='text-royal-blue text-3xl md:text-4xl font-bold'>Drive In, Cash Out!</h2>
                    <GetOfferBtn />
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
