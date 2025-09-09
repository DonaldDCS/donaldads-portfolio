import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  image,
  tags,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow:hidden hover:shadow-xl transition-shadow duration-300 flex flex-col p-4">
        <div className="overflow-hidden rounded-md">
            <img
                src={image}
                alt={title}
                className="w-[calc(100%-1rem)] mx-auto h-auto object-cover rounded-md border border-gray-300 dark:border-gray-600"
            />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-sm text-foreground flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
                <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-accentPrimary text-white">
                    {tag}
                </span>
            ))}
        </div>
        <Link
          href={link}
          className="mt-6 inline-block px-4 py-2 rounded-md bg-accentSecondary text-white font-bobdy text-sm font-medium hover:bg-accentPrimary transition-colours duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
