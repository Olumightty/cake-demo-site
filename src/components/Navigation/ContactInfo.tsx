import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'

const ContactInfo = () => {
  return (
    <ul className='flex gap-2 md:gap-4 items-center text-xs md:text-sm'>
          <li className='flex items-center gap-2'>
            <PiPhone size={15} />
            <span>+234 813 123 4567</span>
          </li>
          |
          <li className='flex items-center gap-2'>
            <FaRegClock size={15} />
            <span>Mon - Fri 9:00 - 17:00</span>
          </li>
          |
          <li className='flex items-center gap-2'>
            <MdMailOutline size={15} />
            <span>info@bakery.com</span>
          </li>
      </ul>
  )
}

export default ContactInfo