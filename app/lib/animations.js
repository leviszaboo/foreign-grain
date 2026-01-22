/**
 * Centralized Framer Motion animation configurations
 * Consolidates all animation variants for consistent motion design
 */

// Base fade animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Fade with configurable duration
export const createFade = (duration = 0.6, delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration, delay, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: duration * 0.5 } },
});

// Fade with scale effect
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3 } },
  transition: { duration: 0.6, ease: "easeInOut" },
};

// Slide up animation
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Slide down animation
export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Menu animations
export const menuAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const menuItemAnimation = (index = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
});

export const backdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export const dividerAnimation = {
  initial: { opacity: 0, scaleY: 0 },
  animate: { opacity: 1, scaleY: 1 },
  exit: { opacity: 0, scaleY: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// Contact form animations
export const contactFormAnimation = {
  initial: { opacity: 0, scale: 0.96, x: 18 },
  animate: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.96, x: 18, transition: { duration: 0.7, ease: "easeInOut" } },
  transition: { duration: 0.7, ease: "easeInOut" },
};

export const infoBoxAnimation = {
  initial: { opacity: 0, scale: 0.93, y: -8, x: -15 },
  animate: { opacity: 1, scale: 1, y: 0, x: 0 },
  exit: { opacity: 0, scale: 0.93, y: -8, x: -15, transition: { duration: 0.6, ease: "easeInOut" } },
  transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 },
};

// Slideshow animations
export const slideshowAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
};

// Header animation
export const headerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8 },
};

// Gallery/Grid animations
export const galleryItemAnimation = (index = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.05, ease: "easeOut" },
  },
});

export const carouselAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

// Tagline/text animations
export const taglineAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Flower animations
export const flowerAnimation = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 0.65,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

// Start button animations
export const startButtonAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// About page animations
export const aboutTextAnimation = (index = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
  },
});

// Content switcher animation
export const contentSwitcherAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Stagger children helper
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
