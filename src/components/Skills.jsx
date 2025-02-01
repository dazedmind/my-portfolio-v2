import React from 'react';
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaPython, FaFigma, FaNpm, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiGnubash, SiAdobephotoshop, SiAdobeillustrator, SiCplusplus, SiMicrosoftoffice, SiObsstudio, SiVite, SiCanva, SiNotion} from "react-icons/si";

function Skills () {
    return (
    <div className='bg-neutral-900 p-8 rounded-xl w-auto'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/skills</h1>
        <ul className='flex flex-col text-white text-md md:text-lg gap-8'>
            <span className='flex items-center flex-wrap gap-4'>
                <h1 className=' text-wood font-bold'>Technology</h1>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaHtml5 />
                    <p>HTML</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiTailwindcss />
                    <p>CSS/Tailwind CSS</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaJs />
                    <p>JavaScript</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaPhp />
                    <p>PHP</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaReact />
                    <p>React</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiGnubash />
                    <p>Bash</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaGitAlt />
                    <p>Git</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaPython />
                    <p>Python</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiCplusplus />
                    <p>C++</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaNpm />
                    <p>npm</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaNodeJs />
                    <p>NodeJs</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiVite />
                    <p>Vite</p>
                </li>
            </span>

            <span className='flex items-center flex-wrap gap-4'>
                <h1 className=' text-wood font-bold'>Designing</h1>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiAdobephotoshop />
                    <p>Photoshop</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiAdobeillustrator/>
                    <p>Illustrator</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <FaFigma />
                    <p>Figma</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiCanva />
                    <p>Canva</p>
                </li>
            </span>

            <span className='flex items-center flex-wrap gap-4'>
                <h1 className=' text-wood font-bold'>Tools/Others</h1>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiMicrosoftoffice />
                    <p>MS Office</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiObsstudio/>
                    <p>OBS Studio</p>
                </li>
                <li className=' bg-neutral-800 rounded-md p-2 flex items-center gap-2'>
                    <SiNotion/>
                    <p>Notion</p>
                </li>
            </span>

        </ul>
    </div>
    )
}

export default Skills