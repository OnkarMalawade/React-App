import React from 'react'

function Card(props) {

  return (
    
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-600 p-4">
    <img className="w-full rounded-lg shadow-lg" src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.location}</div>
    <p className="text-white text-base">
    {props.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  </div>

  )
}

export default Card