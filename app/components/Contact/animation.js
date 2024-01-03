export const contactFormAnimationProps = {
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
  
  export const infoBoxAnimationProps = {
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
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.1
    },
  };

  export const fadeInScaleAnimationProps = {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
      },
    },
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  };

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