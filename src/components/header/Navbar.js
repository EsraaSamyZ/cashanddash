import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import Logo from "../../images/svg/logo.inline.svg";
import ArrowIcon from "../../images/svg/GetOfferBtn.inline.svg";
import { Link } from "gatsby";
import ContactUsBtn from "../Shared/ContactUsBtn";

const Navbar = () => {
  const location = useLocation();
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleButtonRef = useRef();;

  // Handle scroll for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, toggleButtonRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = (e, targetId) => {
    if (location.pathname === '/' && targetId) {
      e.preventDefault();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset = 150;
        const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth"
        });
      }
    } else if (location.pathname === '/' && !targetId) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
    closeMenu();
  };

  const handleOfferClick = () => {
    window.location.href =
      "https://www.kbb.com/instant-cash-offer/W/69724927/43A6F9B8-DB6C-48C0-A360-F658B2176E3E/";
    closeMenu();
  };

  const navbarClasses = `bg-dark-gray text-white fixed w-full z-20 top-0 start-0 border-b border-dark-gray ${location.pathname === '/' && isTop ? "bg-transparent" : ""}`;

  return (
    <nav className={navbarClasses}>
      <div className="w-4/5 mx-auto flex flex-wrap items-center justify-between py-2">
        <Link className="flex flex-col items-center cursor-pointer"
          to="/"
          onClick={(e) => handleNavLinkClick(e)}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse w-auto">
            <Logo />
          </div>
          <span className="text-sm">By Carmotive</span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          ref={toggleButtonRef}
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Side Menu for Mobile View */}
        <div ref={menuRef} className={`fixed inset-y-0 left-0 z-40 w-48 h-full p-4 bg-white transform shadow-2xl ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavLinkClick(e)}
                className="block py-2 px-3 text-royal-blue rounded"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavLinkClick(e, "faqs")}
                className="block py-2 px-3 text-royal-blue rounded"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="block py-2 px-3 text-royal-blue rounded"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block py-2 px-3 text-royal-blue rounded"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="space-y-4 mt-4">

            <ContactUsBtn className="w-full text-lg text-royal-blue bg-white border-royal-blue border hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center" />
            <button
              type="button"
              className="w-full text-lg text-white bg-royal-blue hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center flex items-center justify-center"
              onClick={handleOfferClick}
            >
              <span className="mr-4">Get Offer</span>
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Main Navbar for Larger Screens */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Buttons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ContactUsBtn className="text-lg text-royal-blue bg-white border-royal-blue border hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center mr-4" />
            <button
              type="button"
              className="text-lg text-white bg-royal-blue hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center flex items-center"
              onClick={handleOfferClick}
            >
              <span className="mr-4">Get Offer</span>
              <ArrowIcon />
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mr-4">
              <li>
                <Link
                  to="/"
                  onClick={(e) => handleNavLinkClick(e)}
                  className="block py-2 px-3 text-white bg-royal-blue rounded md:bg-transparent md:text-royal-blue md:p-0"
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={(e) => handleNavLinkClick(e, "faqs")}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );


};

export default Navbar;
