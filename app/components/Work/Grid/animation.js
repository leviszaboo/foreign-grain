export const gridItemAnimationProps = (index) => ({
  initial: {
    opacity: 0,
    y: 10 + index * 1.3,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: index * 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
});
