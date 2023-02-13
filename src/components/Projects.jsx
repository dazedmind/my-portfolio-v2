import React from 'react'
import Card from './Card'
import scoreboard from '/src/img/scoreboard.png'
import retrofy from '/src/img/retrofy.png'
import metro from '/src/img/metro.png'

function Projects() {
  return (
    <div className='bg-neutral-900 p-8 mx-5 sm:mx-20 lg:mx-32 xl:mx-42 2xl:mx-72 rounded-md'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/projects</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center'>
            <Card img={scoreboard} name="Online Scoreboard" description="A simple online basketball scoring mechanic"/>
            <Card img={retrofy} name="Retrofy" description="A collection of modern logo turned into its retrofied version"/>
            <Card img={metro} name="Metro" description="A mockup user interface for an online metrocard train system"/>
        </div>
    </div>
  )
}

export default Projects