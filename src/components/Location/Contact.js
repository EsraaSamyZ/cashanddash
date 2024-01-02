import React from "react";
import EmailIcon from "../../images/svg/emailIcon.inline.svg"
import MapIcon from "../../images/svg/maps.inline.svg"

const Contact = () => {
  return (
    <div className="flex flex-col text-left lg:items-center lg:justify-center text-lg">

        <div>
          <a href="https://maps.google.com/?saddr=Current Location&daddr=1921 N Broadway Suite A, Santa Maria, CA 93459" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer mt-4" aria-label="Link with map">
            <div className="flex items-center border-2 border-deep-crimson rounded-full p-3 mr-4">
              <MapIcon className="h-10 w-10"/>
            </div>
            <div>
              <p className="font-bold text-xl">ADDRESS</p>
              <p>1921 N BROADWAY<br />SANTA MARIA, CA, 93459</p>
            </div>
          </a>
          <a href="mailto:Info@805cashanddash.com" className="flex items-center cursor-pointer mt-4" aria-label="Link with email">
            <div className="flex items-center border-2 border-deep-crimson rounded-full p-3 mr-4">
              <EmailIcon className="h-10 w-10" />
            </div>
            <div>
              <p className="font-bold text-xl">EMAIL</p>
              <p>Info@805cashanddash.com</p>
            </div>
          </a>
        </div>

        <div className="mt-4 bg-deep-crimson p-10 rounded-xl mt-8">
          <p className="font-bold text-xl text-white">OPENING HOURS</p>
          <div className="mt-6">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
              <div key={day} className="flex flex-wrap justify-between my-1">
                <span className="text-white">{day.toLowerCase()}:</span>
                <span className="text-white ml-4">9:00 AM to 5:00 PM</span>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
};

export default Contact;
