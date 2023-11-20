import React from 'react'

const Form = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      {/* Card Image */}
      <img className="w-full h-40 object-cover" src="https://via.placeholder.com/400x200" alt="Card Image" />

      {/* Card Content */}
      <div className="p-6">
        {/* Card Title */}
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>

        {/* Card Text */}
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam et tortor porttitor fringilla.</p>
      </div>
    </div>
  )
}

export default Form