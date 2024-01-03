import React from "react"
import FooterSection from "../../images/svg/moiuntains.svg"
import FooterSection_ from "../../images/svg/moiuntains_.svg"
import GetOfferBtn from "../Shared/GetOfferBtn"
import ContactUsBtn from "../Shared/ContactUsBtn"
import LogoColor from "../../images/svg/logoColor.inline.svg"
import FbLogo from "../../images/svg/fb.inline.svg"
import InstaLogo from "../../images/svg/insta.inline.svg"
import FooterLinks from "./FooterLinks"

const Footer = () => {
  return (
    <>
      <img
        src={FooterSection_}
        className="md:hidden block -mb-[1px]"
        style={{ width: "100%" }}
        alt="Services Section"
      />
      <img
        src={FooterSection}
        className="hidden md:block -mb-[1px]"
        style={{ width: "100%" }}
        alt="Services Section"
      />

      <div className="bg-midnight-blue">
        <div className="text-center py-8 md:py-16 space-y-12 md:space-y-24">
          <div className="space-y-8 w-4/5 mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold">
              Stay Connected with The Central Coast's Premier Car Buyer
            </h2>
            <p className="text-base md:text-2xl text-white">
              Whether you're in Santa Maria, Lompoc, San Luis Obispo, or
              anywhere else in the 805 area, 805 CashandDash is your go-to
              destination for buying and selling cars.{" "}
            </p>
          </div>

          <div className="md:space-x-3 md:space-y-0 space-y-3 flex flex-col md:flex-row justify-center items-center">
            <ContactUsBtn className={"text-xl text-dark-gray bg-white border border-dark-gray hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-8 py-3 text-center w-56"} />
            <GetOfferBtn />
          </div>
        </div>

        <FooterLinks />

        <div className="bg-royal-blue">
          <div className="py-11 space-y-6 text-center mx-auto">
            <div className="flex flex-col items-center">
              <LogoColor className="mx-auto" />
              <span className="text-xl text-white">By Carmotive</span>
            </div>
            <p className="text-light-gray md:text-xl w-3/5 mx-auto">
              Are you looking to buy or sell a car in the 805 area code? 805
              CashandDash is your go-to destination for buying and selling cars.
            </p>
            <div className="flex space-x-3 justify-center mx-auto">
              <a href="https://www.fb.com/805cashndash/" aria-label="Facebook"><FbLogo /></a>
              <a href="https://www.instagram.com/805cashndash/" aria-label="Instagram"><InstaLogo /></a>
            </div>
          </div>

          <hr className="w-4/5 mx-auto" />
          <div className="py-5 text-light-gray text-xs md:text-base text-center">
            <p>
              © 2023 Central Coast Driven Auto Purchases. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
