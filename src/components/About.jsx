import React from 'react'
import Education from './Education'
import { MdArrowDropDown } from 'react-icons/md'

function About() {
  const [showResults, setshowResults] = React.useState(false)
  const viewEducation = () => setshowResults(current => !current)

  return (
    <div className='bg-neutral-900 p-8 mx-5 sm:mx-20 lg:mx-32 xl:mx-42 2xl:mx-96 rounded-md'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/background</h1>
        <p className='text-lg sm:text-xl xl:text-xl'>I like to create and design web applications. I have a passion in creating seamless design that appeals to the eyes of the viewers. Technology empowers me and in return, uses it to empower people.</p>
    </div>
  )
}

export default About