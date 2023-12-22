import React, { useState } from "react"

const ArrowIcon = () => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
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

const Appointment = ({ setShowForm }) => {

  return (
    <div className="lg:w-2/5 bg-gray-200 p-2 lg:p-4 rounded-2xl">
      <div className="bg-dark-blue p-8 lg:p-16 space-y-8 rounded-2xl">
        <ol className="relative text-gray-200 border-s border-white">
          <li className="mb-4 ms-8 text-left">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-100 rounded-full -start-1.5"></span>
            <h3 className="font-bold text-base md:text-xl mb-2">
              Get Your KBB ICO Offer
            </h3>
            <p className="text-sm md:text-md">
              Submit your vehicles info in the tool above.
            </p>
          </li>
          <li className="mb-4 ms-8 text-left">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-100 rounded-full -start-1.5"></span>
            <h3 className="font-bold text-base md:text-xl mb-2">
              Receive our Cash & Dash Offer
            </h3>
            <p className="text-sm md:text-md">
              Within 24 hours, will contact with our Cash & Dash offer!
            </p>
          </li>
          <li className="mb-4 ms-8 text-left">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-100 rounded-full -start-1.5"></span>
            <h3 className="font-bold text-base md:text-xl mb-2">
              Make an appointment.
            </h3>
            <p className="text-sm md:text-md">
              Click the appointment button or wait for a call from us to
              schedule your appointment.
            </p>
          </li>
          <li className="mb-4 ms-8 text-left">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-100 rounded-full -start-1.5"></span>
            <h3 className="font-bold text-base md:text-xl mb-2">
              Drive In, Cash Out!
            </h3>
            <p className="text-sm md:text-md">Get paid today</p>
          </li>
        </ol>

        <button
          type="button"
          className="w-full text-s md:text-xl text-white bg-deep-crimson hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-4 md:px-8 py-3 text-center inline-flex items-center justify-center"
          onClick={() => setShowForm(true)}
        >
          <span className="mr-4">Schedule Appointment</span>
          <ArrowIcon />
        </button>


      </div>
    </div>
  )
}

export default Appointment
