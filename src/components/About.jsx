import React from 'react'
import Education from './Education'
import { MdArrowDropDown } from 'react-icons/md'
import SpotlightCard from './reactbits/SpotlightCard'

function About() {
  const [showResults, setshowResults] = React.useState(false)
  const viewEducation = () => setshowResults(current => !current)

  return (
    // <div className='bg-midnight p-6 w-full rounded-xl z-30 border-2 border-neutral-800'>
    <SpotlightCard
    className='bg-midnight p-6 w-full rounded-xl z-30 border-2 border-neutral-800'
    spotlightColor='rgba(54, 93, 56, 0.4)'
    >
        <h1 className='text-3xl text-mustard font-bold'>Background</h1>
        <div className='w-full h-px bg-neutral-800 my-4'></div>

        <p className='text-md md:text-lg'>
          I started learning how to code websites when I was 12, and since then, I&apos;ve been building front-end projects and recently diving deeper into full-stack development. My passion for design stems from my love for art and creativity, which naturally blends into how I approach user interfaces.

          <br/>
          <br/>
          Beyond web development and design, I&apos;m also interested in cybersecurity. I&apos;m currently learning about Information Security to stay updated with the latest security trends and prepare for future certifications.
          
          <br/> <br/>Currently, I&apos;m a 4th-year BS Information Technology student at <span className='text-mustard font-bold'>Pamantasan ng Lungsod ng Maynila (PLM)</span>, driven by a strong passion for creating and designing web applications. I focus on building clean, user-friendly interfaces that not only look great but also enhance the overall experience.</p>
    </SpotlightCard>
    // {/* </div> */}
  )
}

export default About