import avatar from './img/profile-av.jpg'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaBars } from 'react-icons/fa'
import Skills from './components/Skills'
import { RxDoubleArrowDown } from 'react-icons/rx'

function App() {  

  return (
    <div className="App font-jost bg-neutral-800">
      <nav className="flex justify-between items-center p-8 sm:px-16 bg-neutral-900 text-white fixed top-0 w-full z-10">
        <span className='flex items-center gap-3'>
          <img src="src/img/agfx-chr.png" alt="" className='w-10' />
          <h1 className=" text-2xl md:text-3xl font-bold">Allen GFX</h1>
        </span>
        
        <ul className="hidden md:flex gap-11 text-xl items-center">
          <li>
            <a href="/" className=' hover:text-mustard hover:underline underline-offset-4'>about</a>
          </li>
          <li>
            <a href="/" className=' hover:text-mustard hover:underline underline-offset-4'>projects</a>
          </li>
          <li>
            <a href="/" className=' hover:text-mustard hover:underline underline-offset-4'>contact</a>
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

      <section className='text-neutral-300 py-10' data-aos="zoom-in-up">
        <h1 className=' text-center text-4xl font-bold pb-10'>#About me</h1>
        <About />
      </section>

      <section className='pb-10'>
        <h1 className=' text-neutral-300 text-center text-4xl font-bold pb-10'>#My Skills</h1>
        <Skills/>
      </section>

      <section className='pb-10'>
      <h1 className=' text-neutral-300 text-center text-4xl font-bold pb-10 '>#My Projects</h1>
        <Projects/>
      </section>

      <h1 className=' text-neutral-300 text-center text-4xl font-bold pb-10'>#Connect</h1>

      <section className='flex flex-col lg:flex-row pb-10 mx-5 sm:mx-20 lg:mx-32 xl:mx-42 2xl:mx-72 gap-10'>
        <Contact />
        <Footer />
      </section>

      <footer>
        <div className='flex flex-col px-4 sm:px-5 lg:px-72 py-32 gap-4'>
          <h1 className='text-4xl md:text-5xl text-white text-center'>Thank you for <span className='font-bold'>visting</span>!</h1>
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
