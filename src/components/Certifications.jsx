import React, { useEffect, useState } from 'react'
import Stack from './reactbits/Stack'
import dictCert from '../img/DICT-Certificate.png'
import awsCert from '../img/aws-certificate.png'
import achieverCert from '../img/achiever-certificate.png'
import cyberCert from '../img/cybersecurity-certificate.png'

const images = [
    { id: 1, img: cyberCert },
    { id: 2, img: dictCert },
    { id: 3, img: awsCert },
    { id: 4, img: achieverCert }
  ];

function useResponsiveCardDimensions() {
  const [dimensions, setDimensions] = useState({ width: 340, height: 250 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setDimensions({ width: 600, height: 400 });
      } else {
        setDimensions({ width: 340, height: 250 });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}

function Certifications() {
  const cardDimensions = useResponsiveCardDimensions();

  return (
    <div className=' p-8 rounded-xl w-3/4 justify-center items-center flex flex-col mb-10'>

        <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={cardDimensions}
            cardsData={images}
            className='mt-10 '
        />
    </div>
  )
}

export default Certifications