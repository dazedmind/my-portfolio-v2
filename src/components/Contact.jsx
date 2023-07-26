import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaDiscord, FaFacebook } from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-neutral-900 p-8 rounded-md flex flex-col md:flex-row items-center justify-around mx-5 sm:mx-20 lg:mx-32 xl:mx-72 2xl:mx-100 gap-8'>
        {/* <h1 className='text-3xl pb-4 text-mustard font-bold'>/hmu</h1> */}
        <div className='flex flex-col text-center py-2'>
            <form name='contact' method="POST" data-netlify="true" className='flex flex-col gap-4 align-middle'>
                <h1 className='text-xl sm:text-2xl text-white'>Suggestions? Feedback? Collaboration?</h1>
                <input type="text" placeholder='Name' name="name" id="name" className='p-3 rounded-md outline-none bg-neutral-800 text-white'/>
                <input type="text" placeholder='Email'name="email" id="email" className='p-3 rounded-md outline-none bg-neutral-800 text-white'/>
                <textarea name="message" id="message" cols="10" rows="5" placeholder='Tell me about it...' className='p-3 rounded-md outline-none bg-neutral-800 text-white'></textarea>
                
            
                <span className='flex flex-col items-center'>
                    <button type="submit" className='bg-mustard rounded-md  px-4 py-1 cursor-pointer font-bold'>Send</button>
                </span>
            </form>
        </div>

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

export default Contact