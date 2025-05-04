'use client'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagram} from 'react-icons/fa'
import ContactInfo from './ContactInfo'
import { SlSocialFacebook } from 'react-icons/sl'
import Image from 'next/image'
import NavLink from './NavLink'
import { FaCartShopping } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  const [showSearch, setShowSearch] = React.useState(false)
  const {contextSafe} = useGSAP(() => {
    gsap.from('nav', {
      y: -100,
      duration: 1,
      opacity: 0,
    })

    // gsap.from('#search', {
    //   display: 'none',
    //   width: 0,
    //   duration: 1,
    //   opacity: 0,
    // })
  })

  const toggleSearch = contextSafe(() => {
    if(!showSearch) {
      gsap.fromTo('#search', {
        display: 'none',
        width: '0',
        duration: .5,
        opacity: 0,
      },{
        display: 'block',
        width: '200px',
        duration: .5,
        opacity: 1,
        onComplete: () => {
          setShowSearch(true)
        }
      })
    }
      

      
  })

  return (
    <nav className='z-30 relative'>
      <UpperNav/>

      <div className='hidden md:flex justify-center items-center bg-(--primary-color) py-3 relative'>
        <ul className='flex gap-6 items-center'>
          <NavLink>HOME</NavLink>
          |
          <NavLink isDropdown>PAGES</NavLink>
          |
          <NavLink isDropdown>PRODUCTS</NavLink>
        </ul>
        <div className='mx-6'>
          <Image 
            src='/images/logo.svg' 
            alt='logo' 
            width={100} 
            height={100} 
          />
        </div>
        
        <div className='flex gap-6 items-center'>
          <ul className='flex gap-6 items-center'>
            <NavLink>BLOG</NavLink>
            |
            <NavLink>SHOP NOW!</NavLink>
          </ul>
          <div className='flex items-center gap-2'>
            <input id='search' type="text" placeholder='Search' className={`border-2 border-black px-2 rounded-full hidden`} />
            <IoSearch className='cursor-pointer' onClick={toggleSearch} size={25} />
          </div>
          <div className='relative w-fit'>
            <FaCartShopping size={25} />
            <div className='w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0'/>
          </div>
        </div>
      </div>

      <MobileNav toggleSearch={toggleSearch} />
    </nav>
  )
}

const UpperNav = () => {
  return (
    <div id='upper-nav' className='w-full flex flex-wrap items-center gap-5 justify-center md:justify-around bg-black text-white py-2'>
      <ContactInfo/>
      <ul className='flex gap-6 items-center'>
        <Social><SlSocialFacebook size={10} /></Social>
        <Social><BsTwitterX size={10} /></Social>
        <Social><FaInstagram size={10} /></Social>
      </ul>
    </div>
  )
}

const Social = ({children} : {children: React.ReactNode}) => {
  return (
      <li className='p-2 rounded-full border-2 border-white hover:bg-white hover:text-black cursor-pointer transition-all'>{children}</li>
      
  )
}

const MobileNav = ({toggleSearch}: {toggleSearch: () => void}) => {
  return (
    <div className='flex px-10 justify-between items-center bg-(--primary-color) py-10 md:hidden'>
        <div className='relative w-fit'>
            <FaCartShopping size={25} />
            <div className='w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0'/>
        </div>
        <div className='mx-6'>
          <Image 
            src='https://preview.milingona.co/themes/bakery/catalog/wp-content/uploads/2017/12/bakery-catalog-logo-dark-2.png' 
            alt='logo' 
            width={100} 
            height={100} 
          />
        </div>
        
        <div className='flex gap-6 items-center'>
          <div className='flex items-center gap-2'>
            <input id='search' type="text" placeholder='Search' className={`border-2 border-black px-2 rounded-full hidden`} />
            <IoSearch className='cursor-pointer' onClick={toggleSearch} size={25} />
          </div>
          <GiHamburgerMenu cursor={'pointer'} size={25}/>
        </div>
      </div>
  )
}

export default NavBar