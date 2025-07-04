import React from 'react'
import Contact from '../components/Contact'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa'
import SplitText from "../components/reactbits/SplitText";
import BlurText from '../components/reactbits/BlurText';
import TrueFocus from '../components/reactbits/TrueFocus';

function ContactPage() {
  return (
    <>
        <section className="bg-midnight h-screen text-white flex flex-col justify-center items-center gap-6 mb-20">
            <div className='flex flex-col justify-center items-center pt-32 px-10 mt-40 gap-10'>
                <TrueFocus 
                sentence="Connect with me!"
                manualMode={false}
                blurAmount={5}
                borderColor="orange"
                animationDuration={0.4}
                pauseBetweenAnimations={1}
                />

                <Contact />
            </div>

            <div className='flex flex-col p-4 mb-20'>
                <span className='flex gap-11 mx-auto'>
                        <a href="https://github.com/dazedmind" target="_blank">
                            <FaGithub className='text-4xl text-white hover:text-mustard transition-all duration-300'/>
                        </a>
                        <a href="https://www.linkedin.com/in/johnallenvalena/" target="_blank">
                            <FaLinkedin className='text-4xl text-white hover:text-mustard transition-all duration-300'/>
                        </a>

                        <a href="https://www.behance.net/johnallenvalena" target="_blank">
                        <FaBehance className='text-4xl text-white hover:text-mustard transition-all duration-300'/>
                        </a>
                </span>
            </div>
        </section>
    </>
  )
}

export default ContactPage