import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="bg-card rounded-xl shadow-lg overflow:hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full p-4 items-center">
      <div className="w-full relative overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="object-cover"
        />
      </div>
        <h3 className="text-xl font-semibold mt-4 text-primary">
          {title}
        </h3>
        <p className="text-sm text-foreground flex-1 mt-2 line-clamp-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-accentPrimary text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={link}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(99, 74, 132, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-4 py-2 rounded-md bg-accentSecondary text-white font-bobdy text-sm font-medium hover:bg-accentPrimary w-3/4"
        >
          Learn More
        </motion.a>
    </div>
  );
};

export default ProjectCard;
