"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import { useSlideshowStore } from "@/app/hooks/useSlideShowStore";

import { backgroundAnimationProps, slideAnimationProps } from "./animation";
import Image from "../../Image";
import { ASPECT_RATIO, IMAGE_DIMENSIONS } from "@/app/utils/constants";

export default function Slideshow({ verticalUrls, horizontalUrls }) {
  const animationTime = 7500;
  const { isMenuVisible } = useMenuStore();
  const { currentSlide, setCurrentSlide } = useSlideshowStore();
  const [aspectRatio, setAspectRatio] = useState(0);

  const checkAspectRatio = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width / height;
  };

  useEffect(() => {
    const handleResize = () => {
      const newAspectRatio = checkAspectRatio();
      setAspectRatio(newAspectRatio);
    };

    handleResize();
    const totalSlides =
      aspectRatio > ASPECT_RATIO.PORTRAIT_THRESHOLD
        ? horizontalUrls.length
        : verticalUrls.length;

    const interval = setInterval(() => {
      setCurrentSlide(totalSlides === 0 ? 0 : (currentSlide + 1) % totalSlides);
    }, animationTime);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide, horizontalUrls, verticalUrls]);

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
          <motion.div className="background" {...backgroundAnimationProps}>
            <motion.div
              className="slide-wrapper"
              {...slideAnimationProps}
              key={currentSlide}
            >
              <Image
                src={
                  aspectRatio > ASPECT_RATIO.PORTRAIT_THRESHOLD
                    ? horizontalUrls[currentSlide]
                    : verticalUrls[currentSlide]
                }
                className="slide"
                width={
                  aspectRatio > ASPECT_RATIO.PORTRAIT_THRESHOLD
                    ? IMAGE_DIMENSIONS.HORIZONTAL.WIDTH
                    : IMAGE_DIMENSIONS.VERTICAL.WIDTH
                }
                height={
                  aspectRatio > ASPECT_RATIO.PORTRAIT_THRESHOLD
                    ? IMAGE_DIMENSIONS.HORIZONTAL.HEIGHT
                    : IMAGE_DIMENSIONS.VERTICAL.HEIGHT
                }
                alt=""
                loading="eager"
                lqip={{ active: true, quality: 5, blur: 10 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
