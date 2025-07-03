import React from 'react'

const Education = () => {

    return (
        <div>
            <ul id='education' className='ml-10 flex flex-col gap-10'>
                <li>
                    <h1 className='text-xl font-bold text-wood'>Pamantasan ng Lungsod ng Maynila</h1>
                    <p className=' text-neutral-400'>2022 - Present</p>
                    <p className=' italic text-neutral-600'>Bachelor of Science in Information Technology</p>
                </li>
                <li>
                    <h1 className='text-xl font-bold text-wood'>Chinese General Hospital Colleges</h1>
                    <p className=' text-neutral-400'>2020 - 2022</p>
                    <p className=' italic text-neutral-600'>Science, Technology, Engineering and Mathematics</p>
                </li>
            
            </ul>
            {/* <button onClick={""} className='m-3 bg-neutral-800 p-1 px-2 rounded-lg'>View CV</button> */}
        </div>
    )
}

export default Education