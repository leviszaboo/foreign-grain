export const buttonAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.8,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: "-50%",
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    x: "-50%",
    transition: {
      duration: 0.5,
    },
  },
  transition: {
    duration: 0.6,
    delay: 0.3,
    ease: "easeInOut",
  },
};