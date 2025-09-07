import React from "react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack }) => {
    return (
        <div className="border rounded-lg p-4 text-left shadow-sm">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-2">{description}</p>
            <div className="mt-2 text-sm text-gray-500">{techStack.join(", ")}</div>
            <Link href="/projects" className="mt-4 inline-block text-accentPrimary hover:text-accentSecondary">View Details</Link>
        </div>
    )
}

export default ProjectCard;