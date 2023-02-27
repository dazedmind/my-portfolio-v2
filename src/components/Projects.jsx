import React from 'react'
import Card from './Card'
import scoreboard from '/src/img/scoreboard.png'
import retrofy from '/src/img/retrofy.png'
import metro from '/src/img/metro.png'

function Projects() {
  return (
    <div className='bg-neutral-900 p-8 mx-5 sm:mx-20 lg:mx-32 xl:mx-42 2xl:mx-72 rounded-md cursor-pointer'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/projects</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center'>
            <Card img={scoreboard} name="Online Scoreboard" description="A simple online basketball scoring mechanic" link="https://scorebored.netlify.app/"/>
            <Card img={retrofy} name="Retrofy" description="A collection of modern logo turned into its retrofied version" link="https://www.behance.net/gallery/146907081/Retrofy-2022"/>
            <Card img={metro} name="Metro" description="A mockup user interface for an online metrocard train system" link="https://www.behance.net/gallery/150317913/Metro"/>
        </div>
        <span className='flex flex-col text-center items-center align-middle'>
          <button className='bg-mustard px-3 py-1 rounded-md mt-6'>
            Show More
          </button>
        </span>
    </div>
  )
}

export default Projects