import React from 'react'
import Card from './Card'
import accion from '../img/accion.png'
import hairlines from '../img/hairlines.png'
import metro from '../img/metro.png'
import revault from '../img/revault.png'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Projects() {

  return (

    <div className='bg-midnight cursor-pointer w-5/6 md:w-3/4 rounded-lg'>
        <h1 className='text-3xl text-mustard font-bold'>Recent Projects</h1>

        <div className='w-full h-px bg-neutral-700 my-4'></div>

        <div className='flex flex-col lg:flex-col xl:flex-row gap-5 justify-center'>
          <Card 
              img={revault} 
              name="ReVault" 
              description="A cloud repository for archiving research papers of PLM CISTM Students" 
              tags={["Website", "Research"]}                        
              link="https://revault.vercel.app"/>

          <Card 
              img={accion} 
              name="Accion" 
              description="AI-Powered Accident Report System using OpenStreetMaps and CloudVision API" 
              tags={["Research", "App", "Design", "UI/UX"]}                        
              link="https://www.behance.net/gallery/214783583/Accion"/>

          <Card 
              img={hairlines} 
              name="Haribon Airlines" 
              description="A branding for Haribon Airlines, an airticket reservation website. " 
              tags={["Concept", "Website", "Branding"]}                        
              link="https://www.behance.net/gallery/212814497/Haribon-Airlines"/>

        </div>
        <span className='flex flex-col text-center items-center align-middle'>
          <Link to="/projects">
            <button className='text-mustard hover:bg-mustard/20 rounded-full transition-all duration-300 px-4 py-2 mt-6 text-lg flex items-center gap-2'>
              Show More <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
        </span>
    </div>
  )
}

export default Projects