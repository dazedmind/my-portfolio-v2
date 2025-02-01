import React from 'react'
import Card from './Card'
import accion from '/src/img/accion.png'
import hairlines from '/src/img/hairlines.png'
import metro from '/src/img/metro.png'

function Projects() {

  function gotoLink() {
    window.location.href = "https://www.behance.net/johnallenvalena"
  }
  return (

    <div className='bg-neutral-900 p-4 lg:p-8 rounded-xl cursor-pointer w-auto'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/projects</h1>
        <div className='flex flex-col lg:flex-col xl:flex-row gap-5 justify-center'>
          <Card 
              img={accion} 
              name="Accion" 
              description="AI-Powered Accident Report System using OpenStreetMaps and CloudVision API" 
              tags={["Research", "Design", "UI/UX"]}                        
              link="https://www.behance.net/gallery/214783583/Accion"/>

          <Card 
              img={hairlines} 
              name="Haribon Airlines" 
              description="A branding for Haribon Airlines, an airticket reservation website. " 
              tags={["Branding", "Website", "Design"]}                        
              link="https://www.behance.net/gallery/212814497/Haribon-Airlines"/>

           <Card 
              img={metro} 
              name="Metro" 
              description="A mockup user interface for an online metrocard train system" 
              tags={["App", "Design", "UI/UX"]}                        
              link="https://www.behance.net/gallery/150317913/Metro"/>
        </div>
        <span className='flex flex-col text-center items-center align-middle'>
          <button onClick={Projects} className='bg-mustard px-3 py-1 rounded-md mt-6 font-bold text-black text-lg'>
            Show More
          </button>
        </span>
    </div>
  )
}

export default Projects