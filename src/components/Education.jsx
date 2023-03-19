import React from 'react'

const Education = () => {
    function downloadCV() {
        window.location.href = "https://drive.google.com/file/d/1mR89yDt76Ukc18SOz4Vdyhp8RD-X-YFb/view?usp=sharing"
    }
    return (
        <div>
            <ul id='education' className='ml-3'>
                <li>
                    <h1 className='text-xl font-bold text-wood'>Chinese General Hospital Colleges</h1>
                    <p className=' text-neutral-400'>2020 - 2022</p>
                    <p className=' italic text-neutral-600'>Science, Technology, Engineering and Mathematics</p>
                </li>
                <li>
                    <h1 className='text-xl font-bold text-wood'>Pamantasan ng Lungsod ng Maynila</h1>
                    <p className=' text-neutral-400'>2022 - Present</p>
                    <p className=' italic text-neutral-600'>Bachelor of Science in Information Technology</p>
                </li>
            </ul>
            <button onClick={downloadCV} className='m-3 bg-neutral-800 p-1 px-2 rounded-lg'>View CV</button>
        </div>
    )
}

export default Education