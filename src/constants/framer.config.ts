import { Variants } from "framer-motion"

//click animations
export const largeClickAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1 },
};
export const midClickAnimation = {
  whileHover: { scale: 1.06 },
  whileTap: { scale: 1 },
};
export const smallClickAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 1 },
};

export const linkClickAnimation = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 1 },
};

//tap animations
export const tapAnimation = {
  whileTap: { scale: 0.97 },
}

//opacity animations
export const exitAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  exit:{ opacity: 0 },
  transition:{ duration: 0.7, ease: "easeInOut" },
}
export const midExitAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  exit:{ opacity: 0 },
  transition:{ duration: 0.4, ease: "easeInOut" },
}
export const fastExitAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  exit:{ opacity: 0 },
  transition:{ duration: 0.25, ease: "easeInOut" },
}
export const vFastExitAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  exit:{ opacity: 0 },
  transition:{ duration: 0.05, ease: "easeInOut" },
}

export const enterAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  transition:{ duration: 1.4, ease: "easeInOut" },
}

export const midEnterAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  transition:{ duration: 0.7, ease: "easeInOut" },
}
export const fastEnterAnimation = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  transition:{ duration: 0.3, ease: "easeInOut" },
}

export const scaleExitAnimation = {
  initial:{ opacity: 0, scale: 1 },
  animate:{ opacity: 1, scale: 1 },
  exit:{ opacity: 0, scale: 1 },
  transition:{ duration: 0.4, ease: "easeInOut" },
}
//variants
export const arrowVariants: Variants = {
  start: {
    rotate: 0,
    transition: {
      duration: 0.4,
    },
  },
  end: {
    rotate: 180,
    transition: {
      duration: 0.4,
    },
  },
};


//background
export const backgroundAnimations = {
  whileHover: { backgroundColor: "#f87171" },
  whileTap: { backgroundColor: "#f87171", },
  transition:{ duration: 0.4, ease: "easeInOut" },
}

//dropdown 
export const dropdownAnimations: Variants = {
  hidden: { y: -25, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
}
export const dropdownItemsAnimations = {
  hidden: {  opacity: 1 },
  show: { opacity: 1 },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 300,
    damping: 24,
  },
}

export const fadeVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  open: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

