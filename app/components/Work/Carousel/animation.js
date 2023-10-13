export const carouselAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: -6
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -6,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  transition: {
    duration: 0.7,
    ease: "easeInOut",
  },
};

export const carouselSlideAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    opacity: {
      duration: 0.7,
    },
    scale: {
      duration: 0.7,
    },
  },
   exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};