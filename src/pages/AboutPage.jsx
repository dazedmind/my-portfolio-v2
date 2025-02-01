import React from "react";

import avatar from "../img/profile-av.jpg";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { RxDoubleArrowDown } from "react-icons/rx";

function AboutPage() {
    return (
        <>
            <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 h-full mt-0 xl:mt-12 text-white">
                <div className="flex flex-col-reverse lg:flex-row justify-around items-center pt-64 2xl:pt-64  px-10 gap-14">
                <div className="z-10">
                    <h3 className="text-2xl lg:text-4xl">I am</h3>
                    <h1 className="text-4xl lg:text-6xl text-mustard font-bold">
                    Allen GFX
                    </h1>
                    <p className="text-md sm:text-lg lg:text-2xl text-neutral-500">
                    Software Developer and UI/UX designer
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

            <section id="about" className="text-neutral-300 flex flex-col justify-start align-center items-center mt-36 mx-5 sm:mx-20 md:mx-20 lg:mx-52 2xl:mx-40r gap-10">
                <About />
                <Skills />
                <Projects />
            </section>
            </>
    )
}

export default AboutPage