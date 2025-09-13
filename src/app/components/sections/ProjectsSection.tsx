"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Animated from "../../components/ui/Animated";
import { fadeInUp, staggerFadeInUp } from "../../lib/motionVariants";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import MotionLink from "../ui/MotionLink";

interface ProjectsSectionProps {
  limit?: number;
  canFilter?: boolean;
  showAllButton?: boolean;
  buttonHref?: string;
}

export default function ProjectsSection({
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

  return (
    <section
      id="projects"
      className="pb-14 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-accentPrimary/70 via-primary/70 to-accentSecondary/70"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag filters */}
        {canFilter && (
          <div        
          className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTag(null)}
              className={`w-20 px-4 py-2 rounded-full text-sm font-medium transition ${
                activeTag === null
                  ? "bg-primary text-white"
                  : "bg-error-hover text-white"
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
                    : "bg-card text-foreground"
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
          className={`grid ${ limit ? "grid-cols-" + limit : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} gap-8`}
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
      </div>
      {showAllButton && (
        <Animated
          className="mt-12 text-center"
          variants={staggerFadeInUp.child}
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
