import React from "react"
import { Link } from "gatsby"
import Map from "./Map"
import Contact from "./Contact"

const LocationSection = () => {
  return (
    <div
      id="location"
      className="w-4/5 mx-auto text-center space-y-9 pt-36 pb-8 "
    >
      <h2 className="text-black text-3xl md:text-5xl font-extrabold mx-auto">
        Our <span className="text-deep-crimson">Location</span>
      </h2>

      <div className="lg:w-4/5 mx-auto space-y-6">
        <p className="text-left text-gray-700 text-lg leading-loose mt-2">
          <strong className="block text-lg mt-6">Reach Out Today</strong>
          Don't hesitate to contact us at 805 Cash&Dash SM for any questions or
          to schedule a visit. Call us at (805) 500-1000, drop by our Santa
          Maria location, or fill out our online contact form. Your next used
          car awaits, and we are here to ensure you drive away with confidence
          and satisfaction.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          <div className="h-96 md:h-auto md:w-2/3 shadow-lg">
            <Map />
          </div>
          <div className="md:w-1/3">
            <Contact />
          </div>
        </div>

        <div className="text-left">
          <p className="text-gray-700 text-lg leading-loose mt-2">
            <strong className="block text-lg mt-6">
              Contact 805 Cash&Dash SM in Santa Maria, CA Get in Touch with Your
              Trusted Used Car Dealership
            </strong>
            For inquiries about the finest selection of used cars for sale in
            Santa Maria, 805 Cash&Dash SM is your go-to destination. We are
            committed to providing you with top-tier customer service and the
            best-used car buying experience in the area. Visit Us for the Best
            Used Cars in Santa Maria Our doors at 805 Cash&Dash SM are always
            open for you. Whether you're looking to explore our wide range of
            pre-owned vehicles, or need guidance on your next purchase, our
            friendly team is ready to assist.
            <strong className="block text-lg mt-6">
              Address: 1911 N Broadway, Santa Maria, CA 93454
            </strong>
            Come and see for yourself why we are renowned for offering the
            best-used cars in Santa Maria. Our knowledgeable staff are here to
            answer any questions and guide you through our seamless car-buying
            process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LocationSection
