import React, { useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha';

function Contact() {
  const [token, setToken] = useState(null);
  const [ekey, setEkey] = useState(null);

  const handleVerificationSuccess = (token, ekey) => {
    setToken(token);
    setEkey(ekey);
  };

  const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
  console.log(token, ekey);

  return (
    <div className='bg-midnight p-4 rounded-lg border-2 border-neutral-800 justify-center w-auto'>
        <div className='flex flex-col justify-center text-center items-center'>
          <div className='flex flex-col text-center'>
            <h1 className='text-lg text-white p-3'>Got Ideas? Feedback? Collaboration?</h1>
              <form name='contact' method="POST" data-netlify="true" netlify-honeypot="bot-field" className='flex flex-col justify-center gap-4 align-middle p-2'>
                  {/* Hidden input for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  
                  <input type="text" placeholder='Name' name="name" id="name" className='p-3 w-auto md:w-96 rounded-md outline-none bg-midnight border-2 border-neutral-700 text-white' required/>
                  <input type="email" placeholder='Email' name="email" id="email" className='p-3 w-auto md:w-96 rounded-md outline-none bg-midnight border-2 border-neutral-700 text-white' required/>
                  <textarea name="message" id="message" cols="10" rows="5" placeholder='Tell me about it...' className='p-3 rounded-md outline-none bg-midnight border-2 border-neutral-700 text-white' required></textarea>
                  <HCaptcha
                    sitekey={siteKey}
                    onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
                    theme='dark'
              
                  />
                  <span className='flex flex-col items-center'>
                      <button type="submit" className='bg-mustard/20 hover:bg-mustard/40 transition-all duration-300 rounded-full text-lg px-8 py-2 cursor-pointer font-bold text-mustard'>Send</button>
                  </span>
           
              </form>
          </div>
        </div>

  
    </div>
  )
}

export default Contact