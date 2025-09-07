import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack }) => {
    return (
        <div className="border rounded-lg p-4 text-left shadow-sm">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
            <div className="mt-2 text-sm text-gray-500">{techStack.join(", ")}</div>
        </div>
    )
}

export default ProjectCard;