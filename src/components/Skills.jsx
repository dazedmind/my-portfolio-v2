import React, { useState, useEffect } from 'react';
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaPython, FaFigma, FaNpm, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiGnubash, SiAdobephotoshop, SiAdobeillustrator, SiCplusplus, SiMicrosoftoffice, SiObsstudio, SiVite, SiCanva, SiNotion, SiJirasoftware, SiNextdotjs, SiPrisma, SiPostgresql} from "react-icons/si";
import SkillTags from './SkillTags';


function Skills() {
    const [activeFilter, setActiveFilter] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const skills = [
        { icon: <FaHtml5 />, name: "HTML5", categories: ['Frontend'] },
        { icon: <SiTailwindcss />, name: "CSS/Tailwind CSS", categories: ['Frontend'] },
        { icon: <FaJs />, name: "JavaScript", categories: ['Frontend', 'Backend'] },
        { icon: <FaPhp />, name: "PHP", categories: ['Backend'] },
        { icon: <FaReact />, name: "React", categories: ['Frontend'] },
        { icon: <SiGnubash />, name: "Bash", categories: ['⚙️'] },
        { icon: <FaGitAlt />, name: "Git", categories: ['⚙️'] },
        { icon: <FaPython />, name: "Python", categories: ['Backend'] },
        { icon: <SiCplusplus />, name: "C++", categories: ['Backend'] },
        { icon: <FaNpm />, name: "npm", categories: ['⚙️'] },
        { icon: <FaNodeJs />, name: "NodeJs", categories: ['Backend'] },
        { icon: <SiVite />, name: "Vite", categories: ['Frontend'] },
        { icon: <SiNextdotjs />, name: "Next.js", categories: ['Frontend'] },
        { icon: <SiPrisma />, name: "Prisma", categories: ['Backend'] },
        { icon: <SiAdobephotoshop />, name: "Photoshop", categories: ['⚙️'] },
        { icon: <SiAdobeillustrator />, name: "Illustrator", categories: ['⚙️'] },
        { icon: <FaFigma />, name: "Figma", categories: ['Frontend'] },
        { icon: <SiCanva />, name: "Canva", categories: ['⚙️'] },
        { icon: <SiMicrosoftoffice />, name: "MS Office", categories: ['⚙️'] },
        { icon: <SiPostgresql />, name: "PostgreSQL", categories: ['Backend'] },
        { icon: <SiNotion />, name: "Notion", categories: ['⚙️'] },
        { icon: <SiJirasoftware />, name: "Jira", categories: ['⚙️'] },
    ];

    const filters = ['All', 'Frontend', 'Backend', '⚙️'];

    const onpageload = () => {
        setActiveFilter('All');
        setIsPageLoaded(true);
    }

    useEffect(() => {
        onpageload();
    }, []);

   

    const handleFilterChange = (filter) => {
        if (filter === activeFilter) return;
        
        setIsAnimating(true);
        setTimeout(() => {
            setActiveFilter(filter);
            setIsAnimating(false);
        }, 10);
    };

    const isSkillHighlighted = (skill) => {
        return skill.categories.includes(activeFilter);
    };

    const getArrangedSkills = () => {
        if (activeFilter === 'All') return skills;
        
        const highlighted = skills.filter(skill => skill.categories.includes(activeFilter));
        const others = skills.filter(skill => !skill.categories.includes(activeFilter));
        
        return [...highlighted, ...others];
    };

    return (
        <div className='bg-midnight p-6 w-5/6 md:w-3/4 rounded-xl border-2 border-neutral-800'>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }
                
                .skills-container {
                    opacity: 1;
                    transition: opacity 0.3s ease-out;
                }
                
                .skills-container.animating {
                    opacity: 0.7;
                }
            `}</style>
            
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center align-middle'>
                <h1 className='text-3xl text-mustard font-bold'>Skills</h1>

                {/* Filter Buttons */}
                <div className='flex flex-nowrap gap-2 items-center justify-center'>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === filter
                                    ? 'bg-mustard text-midnight shadow-lg scale-105'
                                    : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className='w-full h-px bg-neutral-800 my-4'></div>
            

            {/* Skills Grid */}
            <div className={`flex flex-wrap gap-3 skills-container ${isAnimating ? 'animating' : ''}`}>
                {getArrangedSkills().map((skill, index) => (
                    <SkillTags
                        key={`${skill.name}-${activeFilter}`}
                        icon={skill.icon}
                        name={skill.name}
                        isHighlighted={isSkillHighlighted(skill)}
                        delay={index * 30}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;