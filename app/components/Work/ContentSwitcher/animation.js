export const contentSwitcherAnimationProps = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
    x: -5
  },
  animate: { 
    opacity: 1,
    scale: 1,
    x: 0
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    x: -5,
    transition: {
      duration: 0.5
    }
  },
  transition:{ 
    delay: 0.1,
    duration: 0.55,
    ease: "easeIn"
  }
}