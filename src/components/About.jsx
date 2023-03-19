import React from 'react'
import Education from './Education'
import { MdArrowDropDown } from 'react-icons/md'

function About() {
  const [showResults, setshowResults] = React.useState(false)
  const viewEducation = () => setshowResults(current => !current)

  return (
    <div className='bg-neutral-900 p-8 mx-5 sm:mx-20 lg:mx-32 xl:mx-42 2xl:mx-96 rounded-md'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/background</h1>
        <p className='text-lg sm:text-xl xl:text-2xl'>Hello world! I am John Allen Valena, a self taught web-developer and graphic designer, 18 years old from Manila, Philippines. I like to create and design web applications.</p>
      <div className='pt-5'>
        <h1 className='text-3xl pb-4 text-mustard font-bold flex align-center'>
          /education
          <button onClick={viewEducation}>
          <MdArrowDropDown className='text-4xl'/>
          </button>
        </h1>

        { showResults ? <Education /> : null}
        
        <ul id='education' className='ml-3 hidden'>
          <li>
            <h1 className='text-xl font-bold text-wood'>Chinese General Hospital Colleges</h1>
            <p className=' text-neutral-400'>2020 - 2022</p>
            <p className=' italic text-neutral-600'>Science, Technology, Engineering and Mathematics</p>
          </li>
          <li>
            <h1 className='text-xl font-bold text-wood'>Pamantasan ng Lungsod ng Maynila</h1>
            <p className=' text-neutral-400'>2022 - Present</p>
            <p className=' italic text-neutral-600'>Bachelor of Science in Information Technology</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About