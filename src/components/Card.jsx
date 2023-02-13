import React from 'react'

const Card = (props) => {
  return (
    <div className=' bg-neutral-800 rounded-lg overflow-hidden w-auto h-auto'>
        <img src={props.img} alt="Project 1"  className='card-img object-cover'/>
        <div className='p-4'>
            <h3 className='text-wood text-xl font-bold'>{props.name}</h3>
            <p className='text-white text-md'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card