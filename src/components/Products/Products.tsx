import React from 'react'
import HorizontalDivider from '../Elements/HorizontalDivider'
import ProductLinks from './ProductLinks'
import { bakeryProducts } from '@/lib/constants'
import ProductCard from './ProductCard'
import Animation from './Animation'

const Products = ({ currentCategory }: { currentCategory: string}) => {

  const filteredProducts = bakeryProducts.filter(product => product.category === currentCategory || currentCategory === 'All')
  return (
    <section id='products' className='px-10 md:px-40 py-10 flex flex-col gap-10 bg-gray-50'>
      <header className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold text-center'>WHAT WE OFFER FOR YOU</h2>
        <HorizontalDivider/>
        <ProductLinks/>
      </header>
      <div className='grid grid-cols-2 gap-4'>
        {
          /* products */
          filteredProducts.map((product) => ( <ProductCard key={product.id} product={product} /> ))
        }
        <Animation/>
      </div>
      <button className='self-center text-(--secondary-color) py-2 px-4 rounded-md cursor-pointer transition-all hover:text-white font-semibold hover:bg-(--secondary-color) border-2 border-(--secondary-color)'>View All Products →</button>
    </section>
  )
}

export default Products