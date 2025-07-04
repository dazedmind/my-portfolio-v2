import React from 'react';
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaPython, FaFigma, FaNpm, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiGnubash, SiAdobephotoshop, SiAdobeillustrator, SiCplusplus, SiMicrosoftoffice, SiObsstudio, SiVite, SiCanva, SiNotion, SiJirasoftware, SiNextdotjs, SiPrisma} from "react-icons/si";
import SkillTags from './SkillTags'

function Skills () {
    return (
    <div className='bg-midnight p-8 w-5/6 md:w-3/4 rounded-lg border-2 border-neutral-700'>
        <h1 className='text-3xl text-mustard font-bold'>Skills</h1>
        <div className='w-full h-px bg-neutral-700 my-4'></div>

        <ul className='flex flex-col text-white text-md md:text-lg gap-8'>
            <span className='flex items-center flex-wrap gap-2'>
                <h1 className=' text-wood font-bold'>Technology</h1>
                <SkillTags icon={<FaHtml5 />} name="HTML5" />
                <SkillTags icon={<SiTailwindcss />} name="CSS/Tailwind CSS" />
                <SkillTags icon={<FaJs />} name="JavaScript" />
                <SkillTags icon={<FaPhp />} name="PHP" />
                <SkillTags icon={<FaReact />} name="React" />
                <SkillTags icon={<SiGnubash />} name="Bash" />
                <SkillTags icon={<FaGitAlt />} name="Git" />
                <SkillTags icon={<FaPython />} name="Python" />
                <SkillTags icon={<SiCplusplus />} name="C++" />
                <SkillTags icon={<FaNpm />} name="npm" />
                <SkillTags icon={<FaNodeJs />} name="NodeJs" />
                <SkillTags icon={<SiVite />} name="Vite" />
                <SkillTags icon={<SiNextdotjs />} name="Next.js" />
                <SkillTags icon={<SiPrisma />} name="Prisma" />
               
            </span>

            <span className='flex items-center flex-wrap gap-2'>
                <h1 className=' text-wood font-bold'>Designing</h1>
                <SkillTags icon={<SiAdobephotoshop />} name="Photoshop" />
                <SkillTags icon={<SiAdobeillustrator />} name="Illustrator" />
                <SkillTags icon={<FaFigma />} name="Figma" />
                <SkillTags icon={<SiCanva />} name="Canva" />
       
            </span>

            <span className='flex items-center flex-wrap gap-2'>
                <h1 className=' text-wood font-bold'>Tools/Others</h1>
                <SkillTags icon={<SiMicrosoftoffice />} name="MS Office" />
                <SkillTags icon={<SiObsstudio />} name="OBS Studio" />
                <SkillTags icon={<SiNotion />} name="Notion" />
                <SkillTags icon={<SiJirasoftware />} name="Jira" />
            </span>

        </ul>
    </div>
    )
}

export default Skills