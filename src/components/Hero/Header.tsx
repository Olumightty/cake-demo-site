import React from 'react'

const Header = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>
        <h1 className='text-6xl font-bold text-center text-white '>{children}</h1>
    </div>
    
  )
}

export default Header