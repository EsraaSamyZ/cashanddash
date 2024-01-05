import React from "react";
import NavigationLinks from "./NavigationLinks";
import ContactUsBtn from "../Shared/ContactUsBtn";
import GetOfferBtn from "../Shared/GetOfferBtn";


export const DesktopMenu = ({ handleNavLinkClick }) => (
  <div className="hidden md:flex items-center space-x-3">
      <NavigationLinks classN="text-white items-center justify-between w-full md:flex md:w-auto" handleNavLinkClick={handleNavLinkClick} />
      <ContactUsBtn className="text-lg text-royal-blue bg-white border-royal-blue border hover:text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center mr-4" />
      <GetOfferBtn className="text-lg text-white bg-deep-crimson hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center flex items-center" />
  </div>
);
