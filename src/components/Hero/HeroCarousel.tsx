import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import HeroImage from './HeroImage'


const HeroCarousel = () => {
  return (
    <Carousel>
        <CarouselContent>
            <CarouselItem>
              <HeroImage src='/images/hero-1.jpeg'/>
            </CarouselItem>
            <CarouselItem>
              <HeroImage src='/images/hero-2.jpeg'/>
            </CarouselItem>
            <CarouselItem>
              <HeroImage src='/images/hero-3.jpeg'/>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default HeroCarousel