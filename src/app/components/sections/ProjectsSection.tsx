import React from "react";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 text-center">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="mt-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <ProjectCard title="Portfolio Website" description="Coming soon" techStack={["React", "Next.js", "TailWind"]}></ProjectCard>
                <ProjectCard title="TBD" description="Coming soon" techStack={["TBD"]}></ProjectCard>
                <ProjectCard title="TBD" description="Coming soon" techStack={["TBD"]}></ProjectCard>
            </div>
        </section>
    );
};