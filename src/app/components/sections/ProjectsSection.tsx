"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Animated from "../../components/ui/Animated";
import { staggerFadeInUp } from "../../lib/motionVariants";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import MotionLink from "../ui/MotionLink";

interface ProjectsSectionProps {
  title: string;
  description?: string;
  limit?: number;
  canFilter?: boolean;
  showAllButton?: boolean;
  buttonHref?: string;
}

export default function ProjectsSection({
  title,
  description,
  limit,
  canFilter,
  showAllButton,
  buttonHref = "/projects",
}: ProjectsSectionProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const visibleProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

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
      <Animated
        as="div"
        variants={staggerFadeInUp.container}
        className="max-w-6xl mx-auto text-center"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Animated
          as="h2"
          variants={staggerFadeInUp.child}
          className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary"
        >
          {title}
        </Animated>
        <Animated
          as="p"
          className="text-lg md:text-xl font-body text-foreground mb-12"
          variants={staggerFadeInUp.child}
        >
          {description}
        </Animated>

        {/* Tag filters */}
        {canFilter && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTag(null)}
              className={`w-20 px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTag === null
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-foreground"
              }`}
            >
              {activeTag === null ? "All" : "Clear"}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTag === tag
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <Animated
          as="div"
          variants={staggerFadeInUp.container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Animated>
      </Animated>
      {showAllButton && (
        <Animated
          className="mt-12 text-center"
          variants={staggerFadeInUp.child}
          viewport={{ once: true }}
        >
          <MotionLink
            href={buttonHref}
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-accentSecondary"
          >
            View All Projects
          </MotionLink>
        </Animated>
      )}
    </section>
  );
}
