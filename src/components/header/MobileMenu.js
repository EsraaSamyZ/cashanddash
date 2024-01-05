import React from "react";
import NavigationLinks from "./NavigationLinks";

export const MobileMenu = ({ isMenuOpen, handleNavLinkClick }) => (
  <div className={`fixed inset-y-0 left-0 z-40 w-48 h-full p-4 bg-white space-y-4 transform shadow-2xl ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
      <NavigationLinks classN="text-royal-blue items-center justify-between w-full md:flex md:w-auto md:order-1" handleNavLinkClick={handleNavLinkClick} />
  </div>
);
