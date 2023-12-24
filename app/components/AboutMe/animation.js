
export const fadeInAnimationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};