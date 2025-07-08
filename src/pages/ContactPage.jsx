import React from 'react'
import Contact from '../components/Contact'
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa'
import TrueFocus from '../components/reactbits/TrueFocus';
import { GoLinkExternal } from 'react-icons/go';

function ContactPage() {
  return (
    <>
        <section className="bg-midnight min-h-screen text-white flex flex-col md:flex-row justify-center items-center gap-4 mb-20">
            
     
            <div className='flex flex-col justify-center items-center pt-40 md:pt-32 px-6 my-15 gap-2'>
                <TrueFocus 
                    sentence="Connect with me!"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#CFF49E"
                    animationDuration={0.4}
                    pauseBetweenAnimations={1}
                    className='px-10'
                />
                <div className='flex flex-col-reverse md:flex-row gap-2'>
                    <div className=' md:mt-10'>
                        <Contact />
                    </div>

                    <div className='flex flex-col gap-2 mt-8 md:mt-10'>
                        <div className='flex w-full flex-row justify-start items-center border-2 border-neutral-800 rounded-md p-4 gap-2'>
                            <a href="https://www.github.com/dazedmind" target="_blank" className='flex w-full'>
                                <span className='flex flex-row justify-between w-full items-center gap-2'>
                                    <p className='text-neutral-400 text-sm flex gap-3 items-center'>
                                        <FaGithub className ='text-2xl text-white hover:text-mustard transition-all duration-300'/>

                                        @dazedmind
                                    </p>
                                    <GoLinkExternal className='text-end'/>
                                </span>
                            </a>
                        </div>
                        <div className='flex w-full flex-row justify-start items-center border-2 border-neutral-800 rounded-md p-4 gap-2'>
                            <a href="https://www.instagram.com/gtfo.allen" target="_blank" className='flex w-full'>
                                <span className='flex flex-row justify-between w-full items-center gap-2'>
                                    <p className='text-neutral-400 text-sm flex gap-3 items-center'>
                                        <FaInstagram className='text-2xl text-white hover:text-mustard transition-all duration-300'/>

                                        @gtfo.allen
                                    </p>
                                    <GoLinkExternal className='text-end'/>
                                </span>
                            </a>
                        </div>
                        <div className='flex w-full flex-row justify-start items-center border-2 border-neutral-800 rounded-md p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/johnallenvalena/" target="_blank" className='flex w-full'>
                                <span className='flex flex-row justify-between w-full items-center gap-2'>
                                    <p className='text-neutral-400 text-sm flex gap-3 items-center'>
                                        <FaLinkedin className='text-2xl text-white hover:text-mustard transition-all duration-300'/>

                                        John Allen Valeña
                                    </p>
                                    <GoLinkExternal className='text-end'/>
                                </span>
                            </a>
                        </div>
                        <div className='flex w-full flex-row justify-start items-center border-2 border-neutral-800 rounded-md p-4 gap-2'>
                            <a href="https://www.behance.net/johnallenvalena" target="_blank" className='flex w-full'>
                                <span className='flex flex-row justify-between w-full items-center gap-1'>
                                    <p className='text-neutral-400 text-sm flex gap-3 items-center'>
                                        <FaBehance className='text-2xl text-white hover:text-mustard transition-all duration-300'/>

                                        Allen GFX
                                    </p>
                                    <GoLinkExternal className='text-end'/>
                                </span>
                            </a>
                        </div>
                    </div>
      
                </div>
             
            </div>
          
        </section>
    </>
  )
}

export default ContactPage