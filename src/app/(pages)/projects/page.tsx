import ProjectsSection from "@/app/components/sections/ProjectsSection";
import HeaderSection from "@/app/components/sections/PageTitle";
import PageTitle from "@/app/components/sections/PageTitle";

export default function Projeccts() {
  return (
    <>
      <PageTitle
        title="Projects"
        description="Here’s a collection of my work — from portfolio experiments to real-world projects. I focus on clean code, modular design, and responsive, user-friendly interfaces."
        bgClass="bg-gradient-to-r from-accentPrimary/70 via-primary/70 to-accentSecondary/70"
      />
      <ProjectsSection canFilter />
    </>
  );
}
