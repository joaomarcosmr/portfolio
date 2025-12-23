import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Stagger container animation
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// Scale animation
export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
      },
    },
  };
};

// Slide in animation
export const slideIn = (direction: "left" | "right" | "up" | "down", delay: number = 0): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay,
      },
    },
  };
};

// Rotate animation
export const rotateIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
      },
    },
  };
};

// Text variant animation
export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Hover scale animation
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};



