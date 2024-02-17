"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "rooks";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import {
  carouselAnimationProps,
  carouselSlideAnimationProps,
  subTitleAnimationProps,
  titleAnimationProps,
} from "./animation";

export default function Carousel({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const { isMenuVisible } = useMenuStore();
  const { innerWidth, innerHeight } = useWindowSize();

  function switchRight() {
    if (currentIndex === posts.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function switchLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(posts.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  useEffect(() => {
    setAspectRatio(innerWidth / innerHeight);
  }, [innerWidth, innerHeight]);

  return (
    <>
      {!isMenuVisible && (
        <AnimatePresence>
          <motion.div className="carousel" {...carouselAnimationProps}>
            <div className="left-switch" onClick={switchLeft}>
              {"<"}
            </div>
            <motion.div
              className="carousel-item"
              {...carouselSlideAnimationProps}
              key={currentIndex}
            >
              <div className="carousel-img-container">
                <img src={posts[currentIndex].imageUrls[0]} />
              </div>
              {aspectRatio > 1.2 && (
              <motion.div
                className="carousel-info"
                {...carouselSlideAnimationProps}
                key={currentIndex}
              >
                <h3 {...titleAnimationProps}>
                  {posts[currentIndex].title}
                </h3>
                <h3
                  className="carousel-subtitle"
                  {...subTitleAnimationProps}
                >
                  {posts[currentIndex].subTitle}
                </h3>
              </motion.div>
            )}
            </motion.div>
            {aspectRatio < 1.2 && (
              <motion.div
                className="carousel-info"
                {...carouselSlideAnimationProps}
              >
                <h3 {...titleAnimationProps}>
                  {posts[currentIndex].title}
                </h3>
                <h3
                  className="carousel-subtitle"
                  {...subTitleAnimationProps}
                >
                  {posts[currentIndex].subTitle}
                </h3>
              </motion.div>
            )}
            <div className="right-switch" onClick={switchRight}>
              {">"}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
