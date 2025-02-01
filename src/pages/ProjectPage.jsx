import React from "react";

import Card from "../components/Card";
import scoreboard from '/src/img/scoreboard.png'
import accion from '/src/img/accion.png'
import hairlines from '/src/img/hairlines.png'
import peerplanner from '/src/img/peerplanner.png'
import agfxpos from '/src/img/pos.png'
import metro from '/src/img/metro.png'
import lookback from '/src/img/lookback24.png'

function ProjectPage() {
    return (
        <>
        <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 h-auto text-white">
            <div className="flex flex-col justify-around pt-40 px-10 gap-14">
            <h1 className='text-4xl pb-4 text-mustard mx-2 lg:mx-24 font-bold'>/here's the list of my cool projects!</h1>
                <div className="flex flex-wrap items-center align-middle justify-center gap-7">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"> */}
                    <Card 
                        img={lookback} 
                        name="2024 LOOK BACK" 
                        description="My creations throughout January - December 2024" 
                        tags={["Portfolio"]}                        
                        link="https://www.behance.net/gallery/216485021/2024-LOOK-BACK"/>

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
                        tags={["Website", "Design", "Branding"]}                        
                        link="https://www.behance.net/gallery/212814497/Haribon-Airlines"/>

                    <Card 
                        img={peerplanner} 
                        name="PeerPlanner" 
                        description="A peer-to-peer social planner and reservation system using Java" 
                        tags={["Website", "UI/UX"]}                        
                        link="https://www.behance.net/gallery/190456457/PeerPlanner"/>

                    <Card 
                        img={metro} 
                        name="Metro" 
                        description="A mockup user interface for an online metrocard train system" 
                        tags={["App", "Design", "UI/UX"]}                        
                        link="https://www.behance.net/gallery/150317913/Metro"/>

                    <Card 
                        img={agfxpos} 
                        name="AGFX POS System" 
                        description="A point-of-sale system with print functionality and built-in dashboard" 
                        tags={["Website", "Design", "UI/UX"]}                        
                        link="https://www.behance.net/gallery/188504893/AGFX-Point-of-Sale-System"/>
                    
                </div>
            </div>
        </section>      
        </>
    )
}

export default ProjectPage

