"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useMenuStore } from "@/app/hooks/useMenuStore"
import { 
  carouselAnimationProps, 
  carouselSlideAnimationProps, 
  subTitleAnimationProps, 
  titleAnimationProps 
} from "./animation"

export default function Carousel({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isMenuVisible } = useMenuStore();

  function switchRight() {
    if (currentIndex === posts.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function switchLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(posts.length - 1)
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
            <motion.div className="carousel-item" {...carouselSlideAnimationProps} key={currentIndex}>
              <div className="carousel-img-container">
                <img src={posts[currentIndex].imageUrls[0]}/>
              </div>
              <div className="carousel-info">
                <motion.h3 {...titleAnimationProps}>{posts[currentIndex].title}</motion.h3>
                <motion.h3 {...subTitleAnimationProps} key={currentIndex}>{posts[currentIndex].subTitle}</motion.h3>
              </div>
            </motion.div>
            <div className="right-switch" onClick={switchRight}>{">"}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
