import React from "react";

import Card from "../components/Card";
import revault from '../img/revault.png'
import accion from '../img/accion.png'
import hairlines from '../img/hairlines.png'
import peerplanner from '../img/peerplanner.png'
import agfxpos from '../img/pos.png'
import metro from '../img/metro.png'
import lookback from '../img/lookback24.png'
import SplitText from "../components/reactbits/SplitText";
import BlurText from "../components/reactbits/BlurText";
import CountUp from "../components/reactbits/CountUp";

function ProjectPage() {
    return (
        <>
        <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 h-auto text-white">
            <div className="flex flex-col justify-around items-center pt-32 px-10 gap-14">
                <div className="flex justify-center items-center">
                    <BlurText text="Recent Projects" duration={0.2} className="text-4xl md:text-7xl font-bold text-mustard" />
                </div>

                <div className="flex flex-col border-2 border-neutral-700 rounded-lg p-4 w-full md:w-5/6 align-middle justify-center items-center">
                        <CountUp
                        from={0}
                        to={7}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-6xl font-bold"
                        />
                        <p className="text-lg font-mono">Total Projects</p>
                </div>
                <div className="flex flex-wrap items-center align-middle justify-center gap-7">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"> */}
                    <Card 
                        img={revault} 
                        name="ReVault" 
                        description="A cloud repository for archiving research papers of PLM CISTM Students" 
                        tags={["Website", "Research"]}                        
                        link="https://revault.vercel.app" target="_blank"/>

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
                        tags={["Concept", "Website", "Branding"]}                        
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
                        tags={["Concept", "App", "UI/UX"]}                        
                        link="https://www.behance.net/gallery/150317913/Metro"/>

                    <Card 
                        img={agfxpos} 
                        name="AGFX POS System" 
                        description="A point-of-sale system with print functionality and built-in dashboard" 
                        tags={["Website", "Design"]}                        
                        link="https://www.behance.net/gallery/188504893/AGFX-Point-of-Sale-System"/>
                    
                </div>
            </div>
        </section>      
        </>
    )
}

export default ProjectPage

