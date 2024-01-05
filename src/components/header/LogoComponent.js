import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/svg/logo.inline.svg";

export const LogoComponent = ({ handleNavLinkClick }) => (
  <Link
    to="/"
    onClick={e => handleNavLinkClick(e, null)}
    className="flex flex-col items-center cursor-pointer">
    <div className="flex items-center space-x-3 rtl:space-x-reverse w-auto">
      <Logo />
    </div>
    <span className="text-white text-sm">By Carmotive</span>
  </Link>
);
