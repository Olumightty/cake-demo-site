import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const NavLink = ({children, isDropdown}: {children: React.ReactNode, isDropdown?: boolean}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      {isDropdown ?
        <DropdownMenu onOpenChange={(open) => setOpen(open)}>
          <DropdownMenuTrigger  className='flex gap-2 items-center cursor-pointer font-semibold border-none border-0 hover:border-0'>{children} <IoIosArrowDown style={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)'}} className='transition-all'/></DropdownMenuTrigger>
          <DropdownMenuContent id='sublinks' className=' bg-gray-100 mt-[42px] rounded-t-none shadow-lg border-0'>
            <DropdownMenuLabel>SubLinks</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
              <DropdownMenuItem><Link href={'#'}>Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'#'}>Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'#'}>Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={'#'}>Dashboard</Link></DropdownMenuItem>
            </div>
            
          </DropdownMenuContent>
        </DropdownMenu>
        :
        <li  className='flex gap-2 items-center cursor-pointer font-semibold'>
          {children}
        </li>
      }
    </div>
    
  )
}

export default NavLink