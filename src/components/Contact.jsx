import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaDiscord, FaFacebook } from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-neutral-900 p-4 rounded-xl justify-center w-auto'>
        <div className='flex flex-col justify-center text-center items-center'>
          <div className='flex flex-col text-center'>
            <h1 className='text-lg text-white p-3'>Got Ideas? Feedback? Collaboration?</h1>
              <form name='contact' method="POST" data-netlify="true" className='flex flex-col justify-center gap-4 align-middle p-4'>
                  <input type="text" placeholder='Email'name="email" id="email" className='p-3 w-auto md:w-96 rounded-md outline-none bg-neutral-800 text-white'/>
                  <textarea name="message" id="message" cols="10" rows="5" placeholder='Tell me about it...' className='p-3 rounded-md outline-none bg-neutral-800 text-white'></textarea>
                  
                  <span className='flex flex-col items-center'>
                      <button type="submit" className='bg-mustard/20 hover:bg-mustard/40 transition-all duration-300 rounded-full text-lg px-8 py-2 cursor-pointer font-bold text-mustard'>Send</button>
                  </span>
              </form>
          </div>
        </div>

  
    </div>
  )
}

export default Contact