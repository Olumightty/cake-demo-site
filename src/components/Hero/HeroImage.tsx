import React from 'react'

const HeroImage = ({src}: {src: string}) => {
  return (
    <div className='w-full h-[80vh] flex justify-center relative'>
        {/* <img loading='lazy' src={src} alt="" className='w-full h-full -z-10' /> */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/40'/>
        <div className='w-full h-full relative -z-10' style={{backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-black/40'/> */}
    </div>
  )
}

export default HeroImage