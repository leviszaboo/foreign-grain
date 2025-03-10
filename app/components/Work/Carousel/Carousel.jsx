"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "rooks";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import Image from "next/image";
import {
  carouselAnimationProps,
  carouselSlideAnimationProps,
  subTitleAnimationProps,
  titleAnimationProps,
} from "./animation";

export default function Carousel({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const { isMenuVisible } = useMenuStore();
  const { innerWidth, innerHeight } = useWindowSize();

  function switchRight() {
    console.log("switching right");
    if (currentIndex === post.imageUrls.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function switchLeft() {
    console.log("switching left");
    if (currentIndex === 0) {
      setCurrentIndex(post.imageUrls.length - 1);
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
            {aspectRatio > 1.2 && (
              <div className="left-switch" onClick={switchLeft}>
                {"<"}
              </div>
            )}
            <motion.div
              className="carousel-item"
              {...carouselSlideAnimationProps}
              key={currentIndex}
            >
              <div className="carousel-img-container" key={post.imageUrls[0]}>
                <Image
                  className="carousel-img"
                  src={post.imageUrls[currentIndex]}
                  width={400}
                  height={400}
                  alt=""
                  placeholder="blur"
                  blurDataURL={post.base64[currentIndex]}
                />
              </div>
              {aspectRatio > 1.2 && (
                <motion.div
                  className="carousel-info"
                  {...carouselSlideAnimationProps}
                  key={currentIndex}
                >
                  <h3 {...titleAnimationProps} key={post.title}>
                    {post.title}
                  </h3>
                  <h3
                    className="carousel-subtitle"
                    {...subTitleAnimationProps}
                    key={post.subTitle}
                  >
                    {post.subTitle}
                  </h3>
                </motion.div>
              )}
            </motion.div>
            {aspectRatio < 1.2 && (
              <motion.div
                className="carousel-info"
                {...carouselSlideAnimationProps}
              >
                <h3 {...titleAnimationProps}>{post.title}</h3>
                <h3 className="carousel-subtitle" {...subTitleAnimationProps}>
                  {post.subTitle}
                </h3>
              </motion.div>
            )}
            {aspectRatio < 1.2 && (
              <div className="switcher">
                <span onClick={switchLeft}>{"<"}</span>
                <span>&nbsp;</span>
                <span onClick={switchRight}>{">"}</span>
              </div>
            )}
            {aspectRatio > 1.2 && (
              <div className="right-switch" onClick={switchRight}>
                {">"}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
