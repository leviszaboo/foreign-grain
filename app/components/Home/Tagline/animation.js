export const taglineAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
  transition: {
    duration: 0.45,
    delay: 0.22,
    ease: "easeInOut",
  },
};