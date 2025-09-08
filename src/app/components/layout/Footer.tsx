"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="py-8 px-6 text-[var(--foreground)] animate-gradient"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div variants={itemVariants} className="mb-4 md:mb-0">
          <p>© 2025 Donald AD Stooks. All rights reserved.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex space-x-6">
          <a
            href="https://github.com/DonaldDCS"
            target="_blank"
            rel="noreferrer"
            className="hover-scale hover-primary transition-transform duration-300"
          >
            <SiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/dadstooks/"
            target="_blank"
            rel="noreferrer"
            className="hover-scale hover-primary transition-transform duration-300"
          >
            <SiLinkedin size={28} />
          </a>
          <a
            href="mailto:donald.stooks@gmail.com"
            className="hover-scale hover-primary transition-transform duration-300"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
