import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from "gatsby"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

// const LocationSection = () => {
//     return (
//         <div id='location' className='w-4/5 mx-auto text-center space-y-9 pb-9'>
//             <h2 className='text-black text-3xl md:text-5xl font-extrabold mx-auto'>Our <span className='text-deep-crimson'>Location</span></h2>
//             <div className='lg:w-3/4 mx-auto'>
//                 <LoadScript
//                     googleMapsApiKey="YOUR_API_KEY"
//                 >
//                     <GoogleMap
//                         mapContainerStyle={containerStyle}
//                         center={center}
//                         zoom={10}
//                     >
//                         {/* Marker can be used to mark a specific location */}
//                         <Marker position={center} />
//                     </GoogleMap>
//                 </LoadScript>
//                 <p className='mt-4 text-lg md:text-xl'>
//                     Visit us at our location for more details and personalized service.
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default LocationSection;

const LocationSection = () => {
    return (
        <div id='location' className='w-4/5 mx-auto text-center space-y-9 py-24 '>
            <h2 className='text-black text-3xl md:text-5xl font-extrabold mx-auto'>Our <span className='text-deep-crimson'>Location</span></h2>
            <div className='lg:w-3/4 mx-auto'>
                {/* Placeholder for Google Map */}
                <div style={{ width: '100%', height: '400px', backgroundColor: '#e0e0e0' }}>
                    <p style={{ textAlign: 'center', paddingTop: '180px' }}>Map Placeholder</p>
                </div>
                <p className='mt-4 text-lg md:text-xl'>
                Visit Us for the Best Cars in Santa Maria
                </p>
                <p className='text-left'>Our doors at Carmotive SM are always open for you. Whether you're looking to explore our wide range of pre-owned vehicles, or need guidance on your next purchase, our friendly team is ready to assist.</p>

            </div>
            {/* <Link to="/">Go back to the homepage</Link> */}
        </div>
    );
}

export default LocationSection;

