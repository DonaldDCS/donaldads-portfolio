import React from "react";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection
        title="Featured Projects"
        description="A selection of my work showcasing modern web development with React
          and Next.js"
        limit={2}
        showAllButton
      />
      <ContactSection />
    </>
  );
}
