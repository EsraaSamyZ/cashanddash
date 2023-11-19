import React from "react"
import logo from "./logo.svg"

const ArrowIcon = () => (
  <svg
    width="18.5"
    height="20"
    viewBox="0 0 18.5 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5376 0.561278C16.4376 0.521278 16.3476 0.501279 16.2476 0.501279H5.97756C5.56756 0.501279 5.22756 0.841279 5.22756 1.25128C5.22756 1.66128 5.56756 2.00128 5.97756 2.00128H14.4376L1.71756 14.7213C1.42756 15.0113 1.42756 15.4913 1.71756 15.7813C2.00756 16.0713 2.48756 16.0713 2.77756 15.7813L15.4976 3.06128V11.5213C15.4976 11.9313 15.8376 12.2713 16.2476 12.2713C16.6576 12.2713 16.9976 11.9313 16.9976 11.5213V1.25128C16.9976 1.15128 16.9776 1.06128 16.9376 0.961278C16.8676 0.781278 16.7176 0.631278 16.5376 0.561278Z"
      fill="white"
    />
    <path
      d="M17.75 18.9988H0.75C0.34 18.9988 0 19.3388 0 19.7488C0 20.1588 0.34 20.4988 0.75 20.4988H17.75C18.16 20.4988 18.5 20.1588 18.5 19.7488C18.5 19.3388 18.16 18.9988 17.75 18.9988Z"
      fill="white"
    />
  </svg>
)

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 mx-20">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse h-17.5 w-auto"
        >
          <img src={logo} className="" alt="Cash and Dash Logo" />
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
