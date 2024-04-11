import React from 'react'
import { FiLink2 } from 'react-icons/fi'

const Card = (props) => {
  return (
    <div className=' bg-neutral-800 rounded-lg overflow-hidden w-auto h-auto'>
        <div className='ext-link relative'>
          <a href={props.link}>
            <img src={props.img} alt="Project 1"  className='card-img object-cover h-44 hover:blur-sm hover:grayscale ease-in-out duration-300 z-10'/>
          </a>
          <span className='arrow-link absolute top-1/2 left-1/2 -translate-x-1/2 invisible'>
              <FiLink2 className=' text-3xl text-white z-0'/>
          </span>
        </div>

        <div className='p-4'>
            <h3 className='text-wood text-xl font-bold'>{props.name}</h3>
            <p className='text-white text-md'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card