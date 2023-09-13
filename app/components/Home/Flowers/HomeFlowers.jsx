"use client"

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useMenuStore } from '@/app/hooks/useMenuStore';
import { useStartButtonStore } from '@/app/hooks/useStartButtonStore';
import { useSlideshowStore } from '@/app/hooks/useSlideShowStore';

import FlowerContainer from '../../FlowerContainer';
import { homeFlowerContainerProps } from './animation';

export default function HomeFlowers() {
  const { isMenuVisible } = useMenuStore();
  const { isButtonClicked } = useStartButtonStore();
  const { currentSlide, setCurrentSlide } = useSlideshowStore();

  const handleClick = (event) => {
    const flowerId = event.currentTarget.id;
    console.log(event.currentTarget, event.currentTarget.id)
    setCurrentSlide(parseInt(flowerId));
  };

  const flowerRefs = [useRef(), useRef(), useRef()];

  const [activeFlower, setActiveFlower] = useState(0);

  useEffect(() => {
    if (!isMenuVisible && !isButtonClicked) {
      flowerRefs.forEach((flowerRef, index) => {
        flowerRef.current.classList.remove('active');
        if (index === currentSlide) {
          flowerRef.current.classList.add('active');
          setActiveFlower(index);
        }
      });
    }
  }, [currentSlide, flowerRefs]);

  return (
    <AnimatePresence>
      {!isMenuVisible && !isButtonClicked && (
        //activeflower animations still needs fixing
        <>
          <FlowerContainer {...homeFlowerContainerProps.flower1} animate={{ scale: activeFlower === 2 ? 1.11 : 1, opacity: 1 }} onClick={handleClick} forwardedRef={flowerRefs[2]} />
          <FlowerContainer {...homeFlowerContainerProps.flower2} animate={{ scale: activeFlower === 0 ? 1.11 : 1, opacity: 1 }} onClick={handleClick} forwardedRef={flowerRefs[0]} />
          <FlowerContainer {...homeFlowerContainerProps.flower3} animate={{ scale: activeFlower === 1 ? 1.11 : 1, opacity: 1 }} onClick={handleClick} forwardedRef={flowerRefs[1]} />
          <FlowerContainer {...homeFlowerContainerProps.flower4} />
        </>
      )}
    </AnimatePresence>
  );
}
