export const dividerAnimationProps = {
  initial: {
    height: 0,
  },
  animate: {
    height: '60vh',
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  transition: {
    duration: 0.55,
    ease: "easeOut",
  },
};