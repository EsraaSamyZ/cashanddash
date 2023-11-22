import React from 'react'
import FooterSection from '../../images/svg/moiuntains.inline.svg'
import GetOfferBtn from '../Shared/GetOfferBtn'
import ContactUsBtn from '../Shared/ContactUsBtn'
import LogoColor from '../../images/svg/logoColor.inline.svg'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer >
      <FooterSection />
      <div className='bg-midnight-blue'>

        <div className='text-center py-8 md:py-16 space-y-12 md:space-y-24'>

          <div className='space-y-8 w-4/5 mx-auto'>
            <h2 className='text-white text-3xl md:text-5xl font-extrabold'>Stay Connected with The Central Coast's Premier Car Buyer</h2>
            <p className='text-base md:text-2xl text-white'>Whether you're in Santa Maria, Lompoc, San Luis Obispo, or anywhere else in the 805 area, 805 CashandDash is your go-to destination for buying and selling cars. </p>
          </div>

          <div className='md:space-x-3 space-y-3'>
            <ContactUsBtn />
            <GetOfferBtn />
          </div>

        </div>

        <FooterLinks />

        <div className='bg-royal-blue'>

          <div className='py-11 space-y-6 text-center'>
            <LogoColor className='mx-auto' />
            <p className='text-light-gray md:text-xl w-3/5 mx-auto'>Are you looking to buy or sell a car in the 805 area code? 805 CashandDash is your go-to destination for buying and selling cars.</p>
            {/* fb & insta logos */}
          </div>

          <hr className='w-4/5 mx-auto' />
          <div className='py-5 text-light-gray text-xs md:text-base text-center'>
            <p>© 2023 Central Coast Driven Auto Purchases. All Rights Reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer