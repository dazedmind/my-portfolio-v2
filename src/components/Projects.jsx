import React from 'react'
import Card from './Card'
import scoreboard from '/src/img/scoreboard.png'
import agfxpos from '/src/img/pos.png'
import metro from '/src/img/metro.png'

function Projects() {

  function gotoLink() {
    window.location.href = "https://www.behance.net/johnallenvalena"
  }
  return (
    <div className='bg-neutral-900 p-8 rounded-xl cursor-pointer'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/projects</h1>
        <div className='flex flex-col lg:flex-col xl:flex-row gap-5 justify-center'>
            <Card img={scoreboard} name="Online Scoreboard" description="A simple online basketball scoring mechanic" link="https://scorebored.netlify.app/"/>
            <Card img={agfxpos} name="AGFX POS System" description="Revolutionizing small printing business with this customized Point of Sale System." link="https://www.behance.net/gallery/188504893/AGFX-Point-of-Sale-System"/>
            <Card img={metro} name="Metro" description="A mockup user interface for an online metrocard train system" link="https://www.behance.net/gallery/150317913/Metro"/>
        </div>
        <span className='flex flex-col text-center items-center align-middle'>
          <button onClick={gotoLink} className='bg-mustard px-3 py-1 rounded-md mt-6 font-bold text-black'>
            Show More
          </button>
        </span>
    </div>
  )
}

export default Projects