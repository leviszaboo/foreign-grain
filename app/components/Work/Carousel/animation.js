export const carouselAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: -8
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  transition: {
    duration: 0.8,
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

export const titleAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.97,
    x: 7,
    y: -5
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  transition: {
    duration: 0.73,
    delay: 0.15,
  },
   exit: {
    opacity: 0,
    transition: {
      duration: 0.54,
    },
  },
};

export const subTitleAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.97,
    x: -6,
    y: -5
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  transition: {
    duration: 0.76,
    delay: 0.15,
  },
   exit: {
    opacity: 0,
    transition: {
      duration: 0.57,
    },
  },
};

export const descriptionAnimationProps = {
  initial: {
    opacity: 0,
    scale: 0.97,
    x: -7,
    y: -5
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  transition: {
    duration: 0.73,
    delay: 0.15,
  },
   exit: {
    opacity: 0,
    transition: {
      duration: 0.54,
    },
  },
};