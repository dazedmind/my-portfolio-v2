import React from 'react'
import { FiLink2, FiExternalLink } from 'react-icons/fi'

const tagColors = {
  Website: "bg-gradient-to-r from-blue-500 to-blue-600",
  Design: "bg-gradient-to-r from-purple-500 to-purple-600",
  "UI/UX": "bg-gradient-to-r from-emerald-500 to-emerald-600",
  Branding: "bg-gradient-to-r from-orange-500 to-orange-600",
  Research: "bg-gradient-to-r from-amber-500 to-amber-600",
  App: "bg-gradient-to-r from-indigo-500 to-indigo-600",
  // Add more tags as needed
};

const Card = (props) => {
  return (
    <div className='group bg-midnight shadow-xl hover:shadow-2xl rounded-md overflow-hidden w-auto xl:w-96 h-auto transform hover:-translate-y-2 transition-all duration-300 ease-out border border-neutral-700'>
      
      {/* Image Section with Overlay */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-neutral-800/60 via-transparent to-transparent z-10 opacity-0 transition-opacity duration-300'></div>
        
        <img 
          src={props.img} 
          alt={props.name}  
          className='w-full h-48 lg:h-56 object-cover transition-transform duration-500 ease-out'
        />
        
        {/* Floating Link Button */}
        <a 
          href={props.link}
          className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30'
        >
          <FiExternalLink className='text-lg' />
        </a>
        
        {/* Gradient Overlay at Bottom */}
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-midnight to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='p-6 space-y-4'>
        
        {/* Title */}
        <div className='flex items-center justify-between'>
          <h3 className='text-gray-900 dark:text-white text-xl font-bold tracking-tight'>
            {props.name}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {props.tags && props.tags.length > 0 ? (
            props.tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm ${
                  tagColors[tag] || "bg-gradient-to-r from-gray-500 to-gray-600"
                }`}
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-sm italic">No tags available</span>
          )}
        </div>

        {/* Description */}
        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
          {props.description}
        </p>

        {/* Bottom Action */}
        <div className='pt-2'>
          <a 
            href={props.link}
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium group-hover:gap-3 transition-all duration-300'
          >
            View Project
            <FiExternalLink className='text-xs' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card