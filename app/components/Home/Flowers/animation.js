export const homeFlowerContainerProps = {
  flower1: {
    className: "fixed top-28 right-12 w-12 md:w-14 lg:w-16 z-10",
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
    className: "fixed bottom-32 left-8 w-10 md:w-12 lg:w-14 z-10",
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
    className: "fixed top-1/3 left-6 w-8 md:w-10 lg:w-12 z-10",
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
    className: "fixed bottom-24 right-16 w-8 md:w-10 lg:w-12 z-10",
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
