import ProjectsSection from "@components/sections/ProjectsSection";
import PageTitle from "@components/sections/PageTitle";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Projeccts() {
  return (
    <>
      <PageTitle
        title="Projects"
        description="Here’s a collection of my work — from portfolio experiments to real-world projects. I focus on clean code, modular design, and responsive, user-friendly interfaces."
        bgClass="bg-oklch-primarytoaccent"
      />
      <ProjectsSection canFilter />
      <ContactSection />
    </>
  );
}
