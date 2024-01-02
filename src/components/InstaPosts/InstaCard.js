import React from "react"
import Heart from "../../images/svg/heart.inline.svg"
import Bubble from "../../images/svg/msg.inline.svg"
import Save from "../../images/svg/save.inline.svg"
import Share from "../../images/svg/share.inline.svg"
import Quotes from "../../images/svg/quotes.inline.svg"

const InstaCard = ({ 
  username, 
  caption = "The leading local buyer of vehichles in the central coast area!",
  date, 
  img, 
  link 
}) => {

  return (
    <div className="bg-light-gray bg-opacity-50 md:bg-white rounded-2xl border overflow-hidden mx-12 md:m-0 p-2.5 space-y-3 text-left md:shadow-custom">
      <a href={link}>
        <img
          className="aspect-square object-cover rounded-2xl mx-auto border md:border-0"
          src={img}
          alt="Card Image"
        />
        <div className="space-y-3 px-2">
          <h2 className="text-sm md:text-base text-gray-800">
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
          <div className="flex flex-row">
            <Quotes className="m-1" />
            <div className="space-y-3">
              <p className="text-xs md:text-base line-clamp-2">{caption}</p>
              <p className="text-xs md:text-sm text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default InstaCard
