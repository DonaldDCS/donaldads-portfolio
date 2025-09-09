"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    link: "/projects/portfolio",
    image: "/images/preview.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "A tool for the journey",
    description:
      "A dashboard prototype to assist in the journey with API integration.",
    link: "/projects/api-project",
    image: "/images/preview.png",
    tags: ["React", "API", "Data Visualization"],
  },
  {
    title: "An app guide of the destination",
    description: "A mock visitor app showcasing interesting destinations.",
    link: "/projects/tourism-guide",
    image: "/images/preview.png",
    tags: ["Next.js", "i18n", "Responsive Design"],
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-accentPrimary/70 via-primary/70 to-accentSecondary/70"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary"
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.p
        className="text-lg md:text-xl font-body text-foreground mb-12"
        variants={itemVariants}       
        >
          A selection of my work showcasing modern web development with React
          and Next.js
        </motion.p>
        <motion.div 
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        >
            {projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <ProjectCard {...project} />
                </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
