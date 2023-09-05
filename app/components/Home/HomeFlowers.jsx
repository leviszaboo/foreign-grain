"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useMenuStore } from '@/app/hooks/UseMenu';
import { useStartButtonStore } from '@/app/hooks/UseStartButton';
import { useSlideshowStore } from '@/app/hooks/UseSlideshow';

export default function HomeFlowers() {

  const { isMenuVisible } = useMenuStore();
  const { isButtonClicked } = useStartButtonStore();
  const { currentSlide, setCurrentSlide } = useSlideshowStore();

  const handleClick = (event) => {
    const flowerId = event.currentTarget.id
    setCurrentSlide(parseInt(flowerId));
  }

  const flowerRefs = [
    useRef(),
    useRef(),
    useRef()
  ];

  const [activeFlower, setActiveFlower] = useState(0);

  useEffect(() => {
    if (!isMenuVisible && !isButtonClicked) {
        flowerRefs.forEach((flowerRef, index) => {
            flowerRef.current.classList.remove('active')
            if (index === currentSlide) {
                flowerRef.current.classList.add('active')
                setActiveFlower(index);
            } 
          });
    }}, [currentSlide, flowerRefs]
  )

  return (
    <AnimatePresence>
        {!isMenuVisible && !isButtonClicked && (
            <>
                <motion.div 
                    className="flower-container-1"
                    ref={flowerRefs[2]}
                    initial={{
                        scale: 0.65,
                        opacity: 0
                    }}
                    animate={{
                        scale: activeFlower === 2 ? 1.11 : 1,
                        opacity: 1,
                        }}
                    exit={{
                        scale: 0.5, 
                        opacity: 0, 
                        transition: {
                            duration: 0.25,
                            delay: 0.35,
                            ease: "easeInOut" 
                            }
                        }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                        ease: "easeOut"
                    }}
                >
                    <img 
                        className="flower flower-1" 
                        id="2" 
                        src="/Media/flowers/flower.png"
                        onClick={handleClick}
                    />
                </motion.div>
                <motion.div 
                    className="flower-container-2"
                    ref={flowerRefs[0]}
                    initial={{
                        scale: 0.65,
                        opacity: 0
                    }}
                    animate={{
                        scale: activeFlower === 0 ? 1.11 : 1,
                        opacity: 1,
                    }}
                    exit={{
                        scale: 0.5, 
                        opacity: 0, 
                        transition: {
                            duration: 0.25,
                            delay: 0.05,
                            ease: "easeInOut" 
                        }
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: "easeOut"
                    }}
                >
                    <img 
                        className="flower flower-1" 
                        id="0" 
                        src="/Media/flowers/flower.png"
                        onClick={handleClick}
                    />
                </motion.div>
                <motion.div 
                    className="flower-container-3"
                    ref={flowerRefs[1]}
                    initial={{
                        scale: 0.65,
                        opacity: 0
                    }}
                    animate={{
                        scale: activeFlower === 1 ? 1.11 : 1,
                        opacity: 1,
                    }}
                    exit={{
                        scale: 0.5, 
                        opacity: 0, 
                        transition: {
                            duration: 0.3,
                            delay: 0.17,
                            ease: "easeInOut" 
                        }
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                        ease: "easeOut"
                    }}
                >
                    <img 
                        className="flower flower-3" 
                        id="1" 
                        src="/Media/flowers/flower-3.png"
                        onClick={handleClick}
                    />
                </motion.div>
                <motion.div 
                    className="flower-container-4"
                    initial={{
                        scale: 0.65,
                        opacity: 0
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    exit={{
                        scale: 0.5, 
                        opacity: 0, 
                        transition: {
                            duration: 0.25,
                            delay: 0.25,
                            ease: "easeInOut" 
                        }
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: "easeOut"
                    }}
                >
                    <img 
                        className="flower-4" 
                        src="/Media/flowers/flower-3.png"
                    />
                </motion.div>
            </>
        )}
    </AnimatePresence>
  )
}