"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
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
import { ASPECT_RATIO } from "@/app/utils/constants";

export default function Carousel({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const { isMenuVisible } = useMenuStore();
  const { innerWidth, innerHeight } = useWindowSize();
  const isWideLayout = aspectRatio > ASPECT_RATIO.LANDSCAPE_THRESHOLD;

  const switchRight = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === post.imageUrls.length - 1 ? 0 : prev + 1,
    );
  }, [post.imageUrls.length]);

  const switchLeft = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? post.imageUrls.length - 1 : prev - 1,
    );
  }, [post.imageUrls.length]);

  useEffect(() => {
    setAspectRatio(innerWidth / innerHeight);
  }, [innerWidth, innerHeight]);

  // Preload next and previous images only (not all)
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % post.imageUrls.length;
    const prevIndex =
      currentIndex === 0 ? post.imageUrls.length - 1 : currentIndex - 1;

    const preloadImage = (url) => {
      const img = new window.Image();
      img.src = url;
    };

    if (post.imageUrls[nextIndex]) {
      preloadImage(post.imageUrls[nextIndex]);
    }
    if (post.imageUrls[prevIndex] && prevIndex !== nextIndex) {
      preloadImage(post.imageUrls[prevIndex]);
    }
  }, [currentIndex, post.imageUrls]);

  return (
    <>
      {!isMenuVisible && (
        <AnimatePresence>
          <motion.div className="carousel" {...carouselAnimationProps}>
            {isWideLayout && (
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
              {isWideLayout && (
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
            {!isWideLayout && (
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
            {!isWideLayout && (
              <div className="switcher">
                <span onClick={switchLeft}>{"<"}</span>
                <span>&nbsp;</span>
                <span onClick={switchRight}>{">"}</span>
              </div>
            )}
            {isWideLayout && (
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
