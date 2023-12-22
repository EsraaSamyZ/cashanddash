import React from "react"
import Heart from "../../images/svg/heart.inline.svg"
import Bubble from "../../images/svg/msg.inline.svg"
import Save from "../../images/svg/save.inline.svg"
import Share from "../../images/svg/share.inline.svg"
import Quotes from "../../images/svg/quotes.inline.svg"

const InstaCard = ({ 
  username, 
  caption = "The leading local buyer of vehichles in the central coast area!", // Default caption
  date, 
  img, 
  link 
}) => {

  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden p-2.5 space-y-3 text-left w-fit"
      style={{ boxShadow: "2px 6px 15px 0px rgba(0, 0, 0, 0.12)" }}
    >
      <a href={link}>
        <img
          className="w-96 h-72 object-cover rounded-2xl mx-auto"
          src={img}
          alt="Card Image"
        />
        <div className="space-y-3 px-2">
          <h2 className="text-md text-gray-800">
            Liked by <span className="font-semibold">{username}</span>
          </h2>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <Heart />
              <Bubble />
              <Share />
            </div>
            <Save />
          </div>
          <div className="flex">
            <Quotes className="m-1" />
            <div className="space-y-3">
              <p className="text-md w-72 line-clamp-2">{caption}</p>
              <p className="text-sm text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default InstaCard
