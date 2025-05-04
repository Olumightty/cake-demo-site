'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroImage from './HeroImage';
import Header from './Header';
import { heroText } from '@/lib/constants';

const Slider = () => {
  const [currentHero, setCurrentHero] = React.useState(heroText[0])
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => {
        setCurrentHero(heroText[swiper.realIndex])
      }}
    >
      <SwiperSlide>
        <HeroImage src='/images/hero-1.jpeg'/>
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage src='/images/hero-2.jpeg'/>
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage src='/images/hero-3.jpeg'/>
      </SwiperSlide>
      <Header>{currentHero}</Header>
    </Swiper>
  )
}

export default Slider