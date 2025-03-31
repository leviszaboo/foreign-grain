"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "rooks";
import { useMenuStore } from "@/app/hooks/useMenuStore";
import Image from "../../Image";
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
    if (currentIndex === post.imageUrls.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function switchLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(post.imageUrls.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  useEffect(() => {
    setAspectRatio(innerWidth / innerHeight);
  }, [innerWidth, innerHeight]);

  useEffect(() => {
    post.imageUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, [post.imageUrls]);

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
                  width={3000}
                  height={3000 / post.imageAspectRatios[currentIndex]}
                  alt=""
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={post.base64[currentIndex]}
                  priority={true}
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
