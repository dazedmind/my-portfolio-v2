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
import ExpCard from "../components/ExpCard";
import RotatingText from "../components/reactbits/RotatingText";
import { ChevronRight, MoveRight } from "lucide-react";

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
        
                {/* Skills */}
                <Skills />
                
                {/* Projects */}
                <Projects />

                {/* Certificates */}
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-mustard">Certificates</h1>
                    <Certifications />                
                </div>
                
                {/* <div className="w-full">
                    <ScrollVelocity 
                        texts={['Software Developer', 'UI/UX Designer']}
                    />
                </div> */}

                {/* Student Leadership Experience */}
                <div className="flex flex-col gap-2 items-center justify-center w-4/5">
                    <h1 className="text-4xl  font-bold text-mustard mb-6 text-center">Student Leadership Experience</h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <ExpCard
                            organization="Microsoft Student Community - PLM"
                            position="Creative Designer"
                            duration="2024 - Present"
                            description="Responsible for creating and designing the visual identity of the community."
                        />
                        <ExpCard
                            organization="AWS Clouds Club - Haribon"
                            position="Layout Editor and UI/UX Designer"
                            duration="2024 - Present"
                            description="Participated in workshops, webinars, and hands-on labs to stay updated with the latest advancements in cloud 
    computing and AWS offerings."
                        />
                        <ExpCard
                            organization="PLM Google Developer Student’s Club"
                            position="Noogler"
                            duration="2024 - Present"
                            description="Collaborated with other co-developer students about learning about developing websites and programs."
                        />
                    </div>
                </div>


                {/* Connect with me */}
                <div className="my-20 flex flex-col gap-8 items-center justify-center">
                    <span className="flex items-center gap-2">
                        <p className="text-3xl md:text-7xl font-bold text-white">Ready to</p>
                        <RotatingText
                            texts={['connect?', 'collaborate?', 'create?']}
                            className="text-3xl md:text-7xl font-bold bg-yale-blue/30 rounded-full px-4 py-2"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </span>

                    <button onClick={() => window.location.href = "/contact"} className="hover:underline transition-all duration-300 ease-linear text-lg underline-offset-8 flex items-center gap-2">
                        Let's Go <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
           
                
            </section>
           
        </>
    )
}

export default AboutPage