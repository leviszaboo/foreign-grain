export const frameAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.96,
    x: 18,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    x: 18,
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

export const descriptionAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.93,
    y: -8,
    x: -15
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    y: -8,
    x: -15,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1
    },
  },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
    delay: 0.1
  },
};