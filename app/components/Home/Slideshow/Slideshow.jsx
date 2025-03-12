"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMenuStore } from "@/app/hooks/useMenuStore";
import { useSlideshowStore } from "@/app/hooks/useSlideShowStore";

import { backgroundAnimationProps, slideAnimationProps } from "./animation";
import Image from "../../Image";

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
      aspectRatio > 0.85 ? horizontalUrls.length : verticalUrls.length;

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
                  aspectRatio > 0.85
                    ? horizontalUrls[currentSlide]
                    : verticalUrls[currentSlide]
                }
                className="slide"
                width={1920}
                height={1080}
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
