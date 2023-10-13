"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useMenuStore } from "@/app/hooks/useMenuStore"
import { carouselAnimationProps, carouselSlideAnimationProps } from "./animation"

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isMenuVisible } = useMenuStore();

  function switchRight() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function switchLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <>
      {!isMenuVisible && (
        <AnimatePresence>
          <motion.div className="carousel" {...carouselAnimationProps}>
            <div className="left-switch" onClick={switchLeft}>{"<"}</div> 
            <div className="carousel-img-container">
              <motion.img src={pictures[currentIndex]} {...carouselSlideAnimationProps} key={currentIndex}/>
            </div>
            <div className="right-switch" onClick={switchRight}>{">"}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
