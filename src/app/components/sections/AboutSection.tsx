"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface AboutSectionProps {
  heading?: string;
  text?: string;
  imageSrc?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection({
  heading = "About Me",
  text = "I'm Donald ADS, a front-end developer in the making who is passionate about creating beautiful, modular, and functional web applications. I love combining design and technology to build experiences that users enjoy. My goal is to develop solutions that are both scalable and maintainable.",
  imageSrc,
}: AboutSectionProps) {
  return (
    <section className="py-16 px-8 text-foreground">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="flex-1 space-y-4" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="leading-relaxed text-lg mb-6">{text}</p>

          <motion.div className="flex space-x-6" variants={itemVariants}>
            <a
              href="https://github.com/donalddcs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale hover-primary transition transform duration-300"
            >
              <SiGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/dadstooks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale hover-primary transition transform duration-300"
            >
              <SiLinkedin size={28} />
            </a>
            <a
              href="mailto:donald.stooks@gmail.com"
              className="hover-scale hover-primary transition transform duration-300"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>

        
          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <Image
              src="/images/DS_CV.jpg"
              alt="About me image"
              width={300}
              height={300}
              className="rounded-full border-4 border-primary shadow-lg hover:scale-110 transition transform duration-300"
            />
          </motion.div>
      </motion.div>
    </section>
  );
}
