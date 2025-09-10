export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    link: "/projects/portfolio",
    image: "/images/preview.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    featured: true,
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
