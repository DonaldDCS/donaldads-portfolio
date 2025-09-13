"use client";

import Animated from "@/app/components/ui/Animated";
import { projects } from "@/app/data/projects";
import { staggerFadeInUp } from "@/app/lib/motionVariants";
import { useState } from "react";

export default function Test() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const limit = 3;

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const visibleProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12 py-12"
      >
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
          <Animated as="button" variants={staggerFadeInUp.child}
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTag === tag
                ? "bg-primary text-white"
                : "bg-card text-foreground"
            }`}
          >
            {tag}
          </Animated>
        ))}
      </div>
    </>
  );
}
