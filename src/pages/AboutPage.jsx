import React, { useEffect } from "react";

import avatar from "../img/profile-av.jpg";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { RxDoubleArrowDown } from "react-icons/rx";
import BlurText from "../components/reactbits/BlurText";
import AnimatedContent from "../components/AnimatedContent";
import DecryptedText from "../components/reactbits/DecryptedText";
import Certifications from "../components/Certifications";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import CircularText from "../components/reactbits/CircularText";
import Education from "../components/Education";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

function AboutPage() {
    return (
        <>
            <section className="bg-midnight h-screen text-white">
                <div className="flex flex-col-reverse lg:flex-row justify-around items-center pt-64 2xl:pt-64  px-10 gap-14">
                    <div className="z-10">
            
                        <DecryptedText
                            text="My name is"
                            animateOn="view"
                            revealDirection="center"
                            delay={200}
                            className="text-2xl md:text-4xl"
                        />
                        <BlurText
                            text="John Allen Valeña"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-4xl md:text-7xl font-bold text-mustard"
                        />
                        <p className="text-md sm:text-lg lg:text-2xl text-neutral-500">
                        Software Developer and UI/UX Designer
                        </p>
                    </div>

                    <img src={avatar} alt="av" className="rounded-full w-44 lg:w-56 z-10" />
                </div>

                <span className="flex justify-center mt-32 md:mt-36 lg:mt-32 items-center">
                    <RxDoubleArrowDown className="text-3xl animate-bounce z-0" />
                </span>
                <div 
                    className="absolute inset-0 -z-0 bg-[url('./img/line-bg.png')] bg-no-repeat bg-cover bg-top opacity-5"
                    style={{
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, white 90%, white 90%, transparent)",
                        maskImage: "linear-gradient(to bottom, transparent, white 70%, white 10%, transparent)"
                    }}
                    >
                </div>
 
            </section>

            <section id="about" className="text-neutral-300 flex flex-col justify-start items-center w-auto mt-36 mb-10 gap-14">
                <div className="flex flex-col md:flex-row justify-center items-start w-4/5 gap-16">
                    <CircularText
                        text="ABOUT ME * ABOUT ME *"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />
                    <div className="flex flex-col gap-4 w-full">
                        <About />
                        <Education />   
                    </div>
                </div>
        
                <Skills />
                
                <Projects />
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-mustard">Certifications</h1>
                    <Certifications />                
                </div>
                
                {/* <div className="w-full">
                    <ScrollVelocity 
                        texts={['Software Developer', 'UI/UX Designer']}
                    />
                </div> */}
                
            </section>
           
        </>
    )
}

export default AboutPage