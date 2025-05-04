'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Animation = () => {
    
    const currentCategory = useSearchParams().get('category')

    useGSAP(() => {
        const cards = gsap.utils.toArray("#productCard") as HTMLDivElement[]
        
        gsap.set(cards, { clearProps: "all" });
        
        cards.forEach(card => {
            // Random values with smaller ranges for quicker animation
            const randomRotationY = gsap.utils.random(-30, 30);
            const randomRotationX = gsap.utils.random(-15, 15);
            const randomZ = gsap.utils.random(-100, -130);
            const randomX = gsap.utils.random(-100, 150);
            const randomY = gsap.utils.random(-130, 130);
            
            // Faster timing values
            const randomDelay = gsap.utils.random(0, 0.3); // Shorter max delay
            const randomDuration = gsap.utils.random(0.1, 0.3); // Faster animation

            gsap.registerPlugin(ScrollTrigger);
            
            gsap.fromTo(card, {
                opacity: 0,
                scale: gsap.utils.random(0.7, 0.9), // Less extreme scale change for speed
                rotationY: randomRotationY,
                rotationX: randomRotationX,
                x: randomX,
                y: randomY,
                z: randomZ,
                transformPerspective: 800,
            }, {
                scrollTrigger:{
                    trigger: card,
                    start: "top bottom",
                    end: "top center",
                },
                opacity: 1,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                x: 0,
                y: 0,
                z: 0,
                delay: randomDelay,
                duration: randomDuration,
                ease: "sine.inOut",
            });
        });
    }, [currentCategory])
  return (
    null
  )
}

export default Animation