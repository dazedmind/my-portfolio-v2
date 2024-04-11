import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaDiscord, FaFacebook } from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-neutral-900 p-8 rounded-xl justify-center w-20r'>
        <h1 className='text-3xl text-mustard font-bold'>/contact</h1>

        <div className='flex flex-col justify-center text-center items-center'>
          <div className='flex flex-col text-center py-2 my-2 p-0 lg:p-8'>
              <form name='contact' method="POST" data-netlify="true" className='flex flex-col justify-center gap-4 align-middle w-20 sm:w-50 lg:w-30r'>
                  <h1 className='text-xl sm:text-2xl text-white'>Suggestions? Feedback? Collaboration?</h1>
                  <input type="text" placeholder='Email'name="email" id="email" className='p-3 rounded-md outline-none bg-neutral-800 text-white'/>
                  <textarea name="message" id="message" cols="10" rows="5" placeholder='Tell me about it...' className='p-3 rounded-md outline-none bg-neutral-800 text-white'></textarea>
                  
                  <span className='flex flex-col items-center'>
                      <button type="submit" className='bg-mustard rounded-md  px-4 py-1 cursor-pointer font-bold text-black'>Send</button>
                  </span>
              </form>
          </div>

          <div className='flex flex-col'>
            <span className='flex gap-11 mx-auto'>
                    <a href="https://github.com/dazedmind">
                        <FaGithub className='text-4xl text-white'/>
                    </a>
                    <a href="">
                        <FaLinkedin className='text-4xl text-white'/>
                    </a>

                    <a href="https://www.behance.net/johnallenvalena">
                      <FaBehance className='text-4xl text-white'/>
                    </a>
            </span>
          </div>
        </div>

    </div>
  )
}

export default Contact