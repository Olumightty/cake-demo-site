import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React from 'react'


const Header = ({children} : {children: React.ReactNode}) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitHeading = new SplitText('h1', {
      type: "chars,words,lines", 
      charsClass: "char",
      wordsClass: "word",
      linesClass: "line"
    });
    
    // Make sure opacity is 0 initially
    gsap.set(splitHeading.chars, { 
      opacity: 0,
      y: 20,
      
    });
    
    // Create the animation timeline
    const tl = gsap.timeline();
    
    // Animate each character
    tl.to(splitHeading.chars, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.03, // Time between each character animation
      ease: "power4.out",
      onComplete: () => {
        // Optional: If you want to revert the split when animation is done
        // splitHeading.revert();
      }
    });

    gsap.to(splitHeading.words, {
      scrollTrigger: {
        trigger: '.h1',
        start: "top top", // Start when the top of the heading is 80% down the viewport
        once: false, // Will trigger every time it enters the viewport
        toggleActions: "play none none reverse" // Play when entering, reverse when leaving
      },
      duration: .3,
      opacity: 0,
      y: -1000,
      stagger: 0.1, // Time between each word animation
      ease: "sine.inOut",
      onComplete: () => {
        // Optional: If you want to revert the split when animation is done
        // splitHeading.revert();
      }
    })
  
  }, [children])
  return (
    <div className='h1 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>
        <h1 dangerouslySetInnerHTML={{ __html: children as string }} className='text-4xl md:text-6xl font-bold text-center text-gray-200 '></h1>
    </div>
    
  )
}

export default Header