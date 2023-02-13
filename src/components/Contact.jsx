import React from 'react'

function Contact() {
  return (
    <div className='bg-neutral-900 p-8 lg:w-half rounded-md'>
        <h1 className='text-3xl pb-4 text-mustard font-bold'>/hmu</h1>
        <div className='flex flex-col text-center py-2'>
            <form action="/" className='flex flex-col sm:px-12 lg:px-1 xl:px-12 gap-4 align-middle'>
                <h1 className='text-xl sm:text-2xl text-white'>Suggestions? Feedback? Collaboration?</h1>
                <input type="text" placeholder='Name' name="name" id="name" className='p-3 rounded-md outline-none bg-neutral-800 text-white'/>
                <input type="text" placeholder='Email'name="email" id="email" className='p-3 rounded-md outline-none bg-neutral-800 text-white'/>
                <textarea name="message" id="message" cols="10" rows="5" placeholder='Tell me about it...' className='p-3 rounded-md outline-none bg-neutral-800 text-white'></textarea>
                
            
                <span className='flex flex-col items-center'>
                    <input type="button" value="Send" className='bg-mustard rounded-md px-6 py-2 cursor-pointer'/>
                </span>
            </form>
        </div>
    </div>
  )
}

export default Contact