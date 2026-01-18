export const homeFlowerContainerProps = {
  flower1: {
    className: "fixed top-12 right-12 w-20 md:w-24 lg:w-28 z-10",
    imageSrc: "/images/galleries/flower.png",
    floatDelay: 0,
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.35,
        ease: "easeInOut",
      },
    },
    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: "easeOut",
    },
  },
  flower2: {
    className: "fixed bottom-32 left-8 w-16 md:w-20 lg:w-24 z-10",
    imageSrc: "/images/galleries/flower.png",
    floatDelay: 0.5,
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.05,
        ease: "easeInOut",
      },
    },
    transition: {
      duration: 0.7,
      delay: 0.05,
      ease: "easeOut",
    },
  },
  flower3: {
    className: "fixed top-1/3 left-6 w-14 md:w-18 lg:w-20 z-10",
    imageSrc: "/images/galleries/flower-3.png",
    floatDelay: 1,
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.17,
        ease: "easeInOut",
      },
    },
    transition: {
      duration: 0.7,
      delay: 0.25,
      ease: "easeOut",
    },
  },
  flower4: {
    className: "fixed bottom-24 right-16 w-14 md:w-16 lg:w-20 z-10",
    imageSrc: "/images/galleries/flower-3.png",
    floatDelay: 1.5,
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.25,
        ease: "easeInOut",
      },
    },
    transition: {
      duration: 0.7,
      delay: 0.35,
      ease: "easeOut",
    },
  },
};
