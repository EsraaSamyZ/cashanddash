import React from 'react'
import FooterSection from './moiuntains.inline.svg'
import GetOfferBtn from '../Shared/GetOfferBtn'
import ContactUsBtn from '../Shared/ContactUsBtn'
import LogoColor from './logoColor.inline.svg'

const Footer = () => {
  return (
    <footer >
      <FooterSection />
      <div className='bg-midnight-blue'>
        <div className='w-4/5 mx-auto'>

          <div className='text-center py-16 space-y-24'>
            <div className='space-y-8'>
              <h2 className='text-white text-5xl font-extrabold w-4/5 mx-auto'>Stay Connected with The Central Coast's Premier Car Buyer</h2>
              <p className='text-2xl text-white'>Whether you're in Santa Maria, Lompoc, San Luis Obispo, or anywhere else in the 805 area, 805 CashandDash is your go-to destination for buying and selling cars. </p>
            </div>
            <div className='space-x-3'>
              <ContactUsBtn />
              <GetOfferBtn />
            </div>
          </div>

          <div className="text-white py-16">
            <div className="container mx-auto flex flex-wrap justify-evenly ">

              {/* Navigation */}
              <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5">
                <h3 className="text-2xl font-semibold mb-5">Navigation</h3>
                <ul className='text-xl text-light-gray'>
                  <li className='mb-3'>Home</li>
                  <li className='mb-3'>About Us</li>
                  <li className='mb-3'>How It Works</li>
                  <li className='mb-3'>Reviews</li>
                  <li className='mb-3'>FAQs</li>
                  <li className='mb-3'>Contact Us in Santa Maria, CA</li>
                </ul>
              </div>

              {/* What We Do */}
              <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5">
                <h3 className="text-2xl font-semibold mb-5">What We Do</h3>
                <ul className='text-xl text-light-gray'>
                  <li className='mb-3'>Instant Car Offer</li>
                  <li className='mb-3'>Quick Sale Process</li>
                  <li className='mb-3'>Free Car Inspection</li>
                  <li className='mb-3'>Flexible Appointments</li>
                  <li className='mb-3'>Eco-Friendly Disposals for Vehicles</li>
                </ul>
              </div>

              {/* Legal */}
              <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5">
                <h3 className="text-2xl font-semibold mb-5">Legal</h3>
                <ul className='text-xl text-light-gray'>
                  <li className='mb-3'>Terms and Conditions</li>
                  <li className='mb-3'>Privacy Policy</li>
                  <li className='mb-3'>Cookies Policy</li>
                  <li className='mb-3'>Sitemap</li>
                </ul>
              </div>

              {/* Talk To Us */}
              <div className="text-xl w-full sm:w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5">
                <h3 className="text-2xl text-light-gray font-semibold mb-5">Talk To Us</h3>
                <p className='mb-3'>123 Driven St., Santa Maria, CA 93458</p>
                <p className='mb-3'>contact@centralcoast-drivenautopurchases.com</p>
                <p className='mb-3'>(805) XXX-XXXX</p>
                <a href="#" className='mb-3 block'>Contact Us</a>
                <a href="#" className='mb-3 block'>Facebook</a>
                <a href="#" className='mb-3 block'>Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-royal-blue'>

          <div className='py-11 space-y-6 text-center'>
            <LogoColor className='mx-auto' />
            <p className='text-light-gray text-xl w-3/5 mx-auto'>Are you looking to buy or sell a car in the 805 area code? 805 CashandDash is your go-to destination for buying and selling cars.</p>
            {/* fb & insta logos */}
          </div>

          <hr className='w-4/5 mx-auto' />
          <div className='py-5 text-light-gray text-base text-center'>
            <p>© 2023 Central Coast Driven Auto Purchases. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer