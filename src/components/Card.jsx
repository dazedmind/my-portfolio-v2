import React from 'react'
import { FiLink2 } from 'react-icons/fi'

const tagColors = {
  Website: "bg-yale-blue",
  Design: "bg-russian-violet",
  "UI\u002FUX": "bg-pine-green",
  Branding: "bg-auburn",
  Research: "bg-orange-800",
  App: "bg-berk-blue",
  // Add more tags as needed
};

const Card = (props) => {
  return (
    // <div className=' bg-neutral-800 shadow-lg rounded-lg overflow-hidden w-80 lg:w-96 h-auto'>

    <div className=' bg-neutral-800 shadow-lg rounded-lg overflow-hidden w-auto xl:w-96 h-auto'>
        <div className='ext-link relative'>
          <a href={props.link}>
            <img src={props.img} alt="Project 1"  className='card-img object-cover h-44 lg:h-56 hover:blur-sm hover:grayscale ease-in-out duration-300 z-10'/>
          </a>
          <span className='arrow-link absolute top-1/2 left-1/2 -translate-x-1/2 invisible'>
              <FiLink2 className=' text-3xl text-white z-0'/>
          </span>
        </div>

        <div className='flex flex-col p-4 items-start'>
            <h3 className='text-mustard text-xl font-bold'>{props.name}</h3>
            <p className='text-white text-md'>{props.description}</p>
            <div className="flex gap-2 flex-wrap overflow-hidden mt-2">
              {/* Mapping over tags */}
              {props.tags && props.tags.length > 0 ? (
                props.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`flex text-white text-md rounded-md w-auto p-1 px-2 ${
                      tagColors[tag] || "bg-gray-500" // Default to gray if no color found
                    }`}
                  >
                    {tag}
                  </p>
                ))
              ) : (
                <p className="text-white text-md italic">No tags available</p>
              )}
            </div>
        </div>
    </div>
  )
}

export default Card