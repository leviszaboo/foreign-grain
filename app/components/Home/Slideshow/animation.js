

export const backgroundAnimationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.55,
    },
  },
  transition: {
    duration: 0.8,
  },
};
  
export const slideAnimationProps = {
  //key: currentSlide,
  initial: {
    opacity: 0,
    scale: 1.08,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  transition: {
    opacity: {
      duration: 1,
    },
    scale: {
      duration: 8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

  