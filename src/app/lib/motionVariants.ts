import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/* Stagger container + items with fade in */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const fadeInChild: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const staggerFadeInUp = {
    container: staggerContainer,
    child: fadeInChild,
};

/* Link interaction */
export const linkMotion = {
  whileHover: { scale: 1.05, boxShadow: "0px 0px 12px rgba(99,74,132,0.6)" },
  whileTap: { scale: 0.95 },
};

export const buttonMotion = {
  whileHover: { scale: 1.05, boxShadow: "0px 0px 12px rgba(99,74,132,0.6)" },
  whileTap: { scale: 0.95 },
};