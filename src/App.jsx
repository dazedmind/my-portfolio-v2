import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import avatar from './img/profile-av.jpg'
import headerImg from './img/agfx-chr.png'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { FaBars } from 'react-icons/fa'
import Skills from './components/Skills'
import { RxDoubleArrowDown } from 'react-icons/rx'

function App() {  

  return (
    <div className="App font-chakra bg-neutral-800">

      <nav className="flex justify-between items-center p-8 sm:px-16 bg-neutral-900 text-white fixed top-0 w-full z-10">
        <span className='flex items-center gap-3'>
          <img src={headerImg} alt="" className='w-10' />
          <h1 className=" text-2xl md:text-3xl font-bold">Allen GFX</h1>
        </span>

        <ul className="hidden md:flex gap-11 text-xl items-center">
          <li>
            <a href="#about" className=' hover:text-mustard hover:underline underline-offset-8'>about</a>
          </li>
          <li>
            <a href="#projects" className=' hover:text-mustard hover:underline underline-offset-8'>projects</a>
          </li>
        </ul>
        <FaBars className='text-2xl md:hidden'/>
      </nav>

      <section className=" bg-gradient-to-b from-neutral-900 to-neutral-800 h-screen lg:mt-10 xl:mt-12 text-white">
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center pt-64 lg:pt-80 px-10 gap-14'>
          <div>
            <h3 className='text-2xl lg:text-4xl'>I am</h3>
            <h1 className='text-4xl lg:text-6xl text-mustard font-bold'>Allen GFX</h1>
            <p className='text-md sm:text-lg lg:text-2xl text-neutral-500'>Front-end Developer and GFX designer</p>
          </div>

          <img src={avatar} alt="av" className=' rounded-full w-44'/>
        </div>
        <span className='flex justify-center mt-32 md:mt-36 lg:mt-32 items-center'>
          <RxDoubleArrowDown className='text-3xl animate-bounce z-0'/>
        </span>
      </section>

      <section id='about' className='text-neutral-300 flex flex-col justify-start align-center items-center mx-5 sm:mx-20 md:mx-20 lg:mx-52 2xl:mx-40r gap-10'>
        <About />
        <Skills/>
        <section id="projects">
          <Projects/>
        </section>
      </section>

      <footer className=' bg-gradient-to-t from-neutral-900 to-neutral-800'>
        <div className='flex flex-col px-4 sm:px-5 lg:px-72 py-32 gap-4'>
          <h1 className='text-4xl md:text-5xl text-white text-center'>Thank you for <span className='font-bold'>visiting</span>!</h1>
          <span className='flex justify-between text-neutral-400'>
            <p>© 2023 Allen GFX</p>
            <ul className='flex gap-4'>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Service</a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
