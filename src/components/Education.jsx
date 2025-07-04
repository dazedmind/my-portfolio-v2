import React from 'react'

const Education = () => {

    return (
        <div className='relative'>
            <div className='ml-8 mt-5 flex flex-col gap-10 relative'>
                <div className='h-44 md:h-32 w-1 bg-neutral-800 absolute left-2 top-14 md:top-8 z-10'></div>
                <div className='flex justify-start  items-center gap-6'>
                    <div className="w-5 h-5 z-50 bg-mustard rounded-full flex-shrink-0 border-4 border-neutral-700"></div>
                    <span>
                        <h1 className='text-xl font-bold text-wood'>Pamantasan ng Lungsod ng Maynila</h1>
                        <p className=' text-neutral-400'>2022 - Present</p>
                        <p className=' italic text-neutral-600'>Bachelor of Science in Information Technology</p>
                    </span>
                
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-5 h-5 z-50 bg-neutral-800 rounded-full flex-shrink-0'></div>
                    <span>
                        <h1 className='text-xl font-bold text-wood'>Chinese General Hospital Colleges</h1>
                        <p className=' text-neutral-400'>2020 - 2022</p>
                        <p className=' italic text-neutral-600'>Science, Technology, Engineering and Mathematics</p>
                    </span>
                </div>
            
            </div>
            {/* <button onClick={""} className='m-3 bg-neutral-800 p-1 px-2 rounded-lg'>View CV</button> */}
        </div>
    )
}

export default Education