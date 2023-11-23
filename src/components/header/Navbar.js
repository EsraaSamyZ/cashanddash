import React from "react"
import Logo from "../../images/svg/logo.inline.svg"
import ArrowIcon from '../../images/svg/GetOfferBtn.inline.svg'


const Navbar = () => {
  return (
    <nav className="bg-transparent bg-black text-white fixed w-full z-20 top-0 start-0 border-b border-dark-gray">
      <div className="w-4/5 mx-auto flex flex-wrap items-center justify-between py-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse w-auto"
        >
          <Logo/>
        </a>
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
              className="text-lg text-white bg-royal-blue hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 text-center flex items-center"
            >
              <span className="mr-4">Get Offer</span>
              <ArrowIcon />
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mr-4">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-royal-blue rounded md:bg-transparent md:text-royal-blue md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-royal-blue md:p-0"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
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
