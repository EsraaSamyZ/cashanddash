import React, { useState, useEffect } from "react"
import Logo from "../../images/svg/logo.inline.svg"
import ArrowIcon from "../../images/svg/GetOfferBtn.inline.svg"
import { Link } from "gatsby"

const Navbar = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navbarClasses = `bg-dark-gray text-white fixed w-full z-20 top-0 start-0 border-b border-dark-gray ${isTop ? "bg-transparent" : ""
    }`

  return (
    <nav className={navbarClasses}>
      <div className="w-4/5 mx-auto flex flex-wrap items-center justify-between py-4">

        <div>
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse w-auto"
            onClick={e => handleNavLinkClick(e, "home")}
          >
            <Logo />
          </a>
          <span>by car motive</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-lg text-royal-blue bg-white border-royal-blue border hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center mr-4"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="hidden md:flex text-lg text-white bg-royal-blue hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center flex items-center"
            >
              <span className="mr-4">Get Offer</span>
              <ArrowIcon />
            </button>
          </div>
          {/* Navigation Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mr-4">
              <li>
                <Link
                  to="/"
                  // href="#home"
                  // onClick={(e) => handleNavLinkClick(e, 'home')}
                  className="block py-2 px-3 text-white bg-royal-blue rounded md:bg-transparent md:text-royal-blue md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  // href="#location"
                  // onClick={(e) => handleNavLinkClick(e, 'location')}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  Location
                </Link>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={e => handleNavLinkClick(e, "faqs")}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={e => handleNavLinkClick(e, "blog")}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
