import React, { useEffect } from "react";

import avatar from "../img/profile-av.jpg";
import avatar2 from "../img/profile-portrait.jpg";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { RxDoubleArrowDown } from "react-icons/rx";
import BlurText from "../components/reactbits/BlurText";
import AnimatedContent from "../components/AnimatedContent";
import Certifications from "../components/Certifications";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import Education from "../components/Education";
import ExpCard from "../components/ExpCard";
import RotatingText from "../components/reactbits/RotatingText";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ChromaGrid from "../components/reactbits/ChromaGrid";
import ShinyText
 from "../components/reactbits/ShinyText";
const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const items = [
    {
      image: avatar2,
      title: "John Allen Valeña",
      subtitle: "Full Stack Developer and UI/UX Designer",
      handle: "@gtfo.allen",
      borderColor: "#CFF49E",
      gradient: "linear-gradient(145deg, #CFF49E, #000)",
    //   url: "https://github.com/dazedmind"
    },
  ];

function AboutPage() {
    return (
        <>
            <section className="bg-midnight h-screen text-white">
                <div className="flex flex-col-reverse lg:flex-row justify-around items-center pt-56 2xl:pt-64 px-6 gap-14">
                    <div className="z-10 flex flex-col md:justify-start md:items-start justify-center items-center">
                        <BlurText
                            text="John Allen Valeña"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-4xl md:text-7xl text-mustard font-general-sans-semibold"
                        />
                        <ShinyText text="Full Stack Developer and UI/UX Designer" disabled={false} speed={5} className='text-md sm:text-lg lg:text-2xl mt-2' />
                        {/* <p className="text-md sm:text-lg lg:text-2xl text-neutral-500">
                            Full Stack Developer and UI/UX Designer
                        </p> */}
                        
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            duration={1.1}
                            ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                        >   
                            <Link to="/projects">  
                                <button className="flex items-center gap-1 text-wood px-4 py-3 rounded-full mt-4 bg-mustard/10 hover:bg-mustard/20 hover:text-mustard transition-all duration-200 ease-linear">
                                    View Projects 
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                            
                        </AnimatedContent>
                        
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
                <div className="flex flex-col md:flex-row justify-center items-start w-4/5 gap-8">
         
                    <div className="flex flex-col justify-center items-center">
                        {/* <img src={avatar} alt="av" className="rounded-md w-80 z-10" /> */}
                        <ChromaGrid 
                            items={items}
                            radius={300}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"
                            className="backdrop-opacity-0"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <About />
                        <Education />   
                    </div>
                </div>
        
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.95}
                    threshold={0.2}
                    delay={0.1}
                    className="w-full flex justify-center items-center"
                >
                {/* Skills */}
                    <Skills />
                </AnimatedContent>

                {/* Projects */}
                 
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.95}
                    threshold={0.2}
                    delay={0.1}
                    className="w-full flex justify-center items-center"
                >
                    <Projects />
                </AnimatedContent>

                {/* Certificates */}
                 
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.95}
                    threshold={0.2}
                    delay={0.1}
                    className="flex flex-col md:flex-row my-12 justify-center items-center align-middle"
                >
                        <h1 className="text-4xl md:text-5xl font-bold text-mustard">Certificates</h1>
                        <Certifications />     
          
                </AnimatedContent>
                
           

                {/* Student Leadership Experience */}
                <div className="flex flex-col gap-2 items-center justify-center w-4/5">
                 
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.95}
                    threshold={0.2}
                    delay={0.1}
                    className="w-full flex-col justify-center items-center"
                >
                    <h1 className="text-4xl  font-bold text-mustard mb-6 text-center">Work and Leadership Experience</h1>
                    <div className=" flex flex-col justify-center items-center md:flex-row gap-4">
                        <ExpCard
                            number="01"
                            organization="Microsoft Student Community - PLM"
                            position="Creative Designer"
                            duration="2024 - Present"
                            description="Responsible for creating and designing the visual identity of the community."
                        />
                        <ExpCard
                            number="02"
                            organization="AWS Clouds Club - Haribon"
                            position="Layout Editor and UI/UX Designer"
                            duration="2024 - Present"
                            description="Participated in workshops, webinars, and hands-on labs to stay updated with the latest advancements in cloud 
                            computing and AWS offerings."
                        />
                        <ExpCard
                            number="03"
                            organization="PLM Google Developer Student’s Club"
                            position="Noogler"
                            duration="2022 - Present"
                            description="Collaborated with other co-developer students about learning about developing websites and programs."
                        />                    
                    </div>
                </AnimatedContent>
                </div>

        
                {/* Connect with me */}
                <div className="my-20 flex flex-col gap-8 items-center justify-center">
                    <span className="flex items-center gap-2">
                        <p className="text-3xl md:text-7xl font-bold text-white">Ready to</p>
                        <RotatingText
                            texts={['connect?', 'create?', 'innovate?']}
                            className="text-3xl md:text-7xl font-bold bg-mustard/30 rounded-full px-4 py-2"
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
                    <Link to="/contact">
                        <button className="hover:underline transition-all duration-300 ease-linear text-lg underline-offset-8 flex items-center gap-2">
                            Let's Do It <ChevronRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
           
                <div className="w-full">
                    <ScrollVelocity 
                        texts={['Full Stack Developer', 'UI/UX Designer']}
                    />
                </div>
            </section>
           
        </>
    )
}

export default AboutPage