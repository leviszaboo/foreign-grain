export const fadeInAnimationProps = {
  initial: {
    opacity: 0,
    y: 9
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeInOut",
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }
};

export const textBlockAnimationProps = {
  initial: {
    opacity: 0,
    y: 14
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 1.1,
    ease: "easeInOut",
  },
  exit: {
    opacity: 0,
    y: 9,
    transition: {
      duration: 0.45,
    },
  }
};