"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient animate-gradient">
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
          variants={itemVariants}
        >
          Hi, I&apos;m Donald ADS
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-body text-white/90 mb-8"
          variants={itemVariants}
        >
          IT Specialist & Front-End Developer in Progress
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(99, 74, 132, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 font-body border-2 border-accentSecondary bg-accentSecondary text-white shadow-lg rounded-md scroll-smooth"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(99, 74, 132, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 font-body border-2 border-white text-white shadow-lg rounded-md"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};