import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaDiscord, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-neutral-900 p-8 w-auto lg:w-half rounded-md text-white'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/connect</h1>
        <div className='flex flex-col'>
          <div className='text-white flex items-center gap-4 bg-neutral-800 p-4 rounded-lg mb-4'>
            <FaDiscord className='text-2xl'/>
            <p>kyro #1104</p>
          </div>
          <div className='text-white flex items-center gap-4 bg-neutral-800 p-4 rounded-lg mb-4'>
            <FaFacebook className='text-2xl'/>
            <p>Allen GFX</p>
          </div>
          <div className='text-white flex items-center gap-4 bg-neutral-800 p-4 rounded-lg mb-4'>
            <FaBehance className='text-2xl'/>
            <p>Allen GFX</p>
          </div>

          <span className='flex gap-11 mx-auto mt-10'>
                  <a href="https://github.com/dazedmind">
                      <FaGithub className='text-4xl text-white'/>
                  </a>
                  <a href="">
                      <FaLinkedin className='text-4xl text-white'/>
                  </a>
                  <a href="">
                      <FaTwitter className='text-4xl text-white'/>
                  </a>
          </span>
        </div>
    </div>
  )
}

export default Footer