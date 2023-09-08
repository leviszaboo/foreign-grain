export const characterContainerAnimationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  transition: {
    duration: 1.2,
    ease: "easeInOut",
  },
};