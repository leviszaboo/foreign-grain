export const homeFlowerContainerProps = {
  flower1: {
    className: "flower-container-1",
    imageClassName: "flower-1",
    imageSrc: "/Media/flowers/flower.png",
    id: "2",
    initial: {
      scale: 0.65,
      opacity: 0,
    },
    exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
        duration: 0.25,
        delay: 0.35,
        ease: 'easeInOut',
      },
    },
    transition: {
    duration: 0.7,
    delay: 0.15,
    ease: 'easeOut',
    },
  },
  flower2: {
    className: "flower-container-2",
    imageClassName: "flower-2",
    imageSrc: "/Media/flowers/flower.png",
    id: "0",
    initial: {
      scale: 0.65,
      opacity: 0,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.05,
        ease: 'easeInOut',
      },
    },
    transition: {
      duration: 0.7,
      delay: 0.05,
      ease: 'easeOut',
    },
  },
  flower3: {
    className: "flower-container-3",
    imageClassName: "flower-3",
    imageSrc: "/Media/flowers/flower-3.png",
    id: "1",
    initial: {
      scale: 0.65,
      opacity: 0,
    },
    exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.17,
      ease: 'easeInOut',
    },
    },
    transition: {
    duration: 0.7,
    delay: 0.25,
    ease: 'easeOut',
    },
  },
  flower4: {
    className: "flower-container-4",
    imageSrc: "/Media/flowers/flower-3.png",
    imageClassName: "flower-4",
    id: "1",
    initial: {
    scale: 0.65,
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
      ease: 'easeInOut',
    },
    },
    transition: {
    duration: 0.7,
    delay: 0.35,
    ease: 'easeOut',
    },
  },
};
  