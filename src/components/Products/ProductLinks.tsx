'use client'
import { productCategories } from '@/lib/constants'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import React, { useCallback } from 'react'

const ProductLinks = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category')


    const createQueryString = useCallback(
        (name= 'category', value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const handleClick = (product: string) => {
        router.push(`${pathname}?${createQueryString('category', product)}#products`)
    } 
  return (
    <ul className='flex justify-center flex-wrap gap-4 mt-10'>
     {
        productCategories.map((category, index) => (
            <ul key={index} className='flex gap-4 items-center'>
                <li className={`hover:text-(--alternate-color) hover:opacity-100 opacity-60 cursor-pointer font-semibold transition-all ${currentCategory === category ? 'text-(--alternate-color)' : 'text(--secondary-color)'}`} onClick={() => handleClick(category)}>{category}</li>
                {index !== productCategories.length - 1 && <div className='bg-(--secondary-color) rounded-full w-2 h-2 opacity-60'/>}
            </ul>
            
        ))
     }
    </ul>
  )
}

export default ProductLinks