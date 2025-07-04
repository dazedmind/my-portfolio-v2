import React from 'react'
import Education from './Education'
import { MdArrowDropDown } from 'react-icons/md'

function About() {
  const [showResults, setshowResults] = React.useState(false)
  const viewEducation = () => setshowResults(current => !current)

  return (
    <div className='bg-midnight p-8 w-full rounded-lg z-30 border-2 border-neutral-700'>
        <h1 className='text-3xl text-mustard font-bold'>Background</h1>
        <div className='w-full h-px bg-neutral-700 my-4'></div>

        <p className='text-lg sm:text-xl xl:text-xl'>I am a 4th Year Bachelor of Science in Information Technology student at <span className='text-mustard font-bold'>Pamantasan ng Lungsod ng Maynila (PLM)</span>, with a strong passion for building and designing web applications. I specialize in crafting seamless, visually appealing user interfaces that not only look good but also enhance the overall user experience.</p>
    </div>
  )
}

export default About