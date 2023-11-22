import React from 'react'
import Heart from './heart.inline.svg'
import Bubble from './msg.inline.svg'
import Save from './save.inline.svg'
import Share from './share.inline.svg'
import Quotes from './quotes.inline.svg'


const InstaCard = () => {
  const name = "Jessica and others"
  const disc = "At 805 Cash and Dash, our customers are at the heart of everything we do."
  const date = "Wed, 26 January 2021"
  const img = "https://via.placeholder.com/700x800"
  return (
    <div className="bg-white rounded-2xl border overflow-hidden p-2.5 space-y-3 text-left w-fit" style={{ boxShadow: '2px 6px 15px 0px rgba(0, 0, 0, 0.12)', }}>
      <img className="w-96 h-72 object-cover rounded-2xl mx-auto" src={img} alt="Card Image" />
      <div className="space-y-3 px-2">
        <h2 className="text-md text-gray-800">Liked by <span className="font-semibold">{name}</span></h2>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Heart />
          <Bubble />
          <Share />
        </div>
        <Save />
      </div>
      <div className="flex">
        <Quotes className="m-1"/>
        <div className="space-y-3">
          <p className="text-md w-72">{disc}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InstaCard