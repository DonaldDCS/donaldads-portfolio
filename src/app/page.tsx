import React from "react";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Animated from "./components/ui/Animated";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <div id="projectSection" className="text-center py-14 px-6 md:px-12 lg:px-24 bg-oklch-primarytoaccent scroll-mt-18">
        <Animated
          as="h1"
          className="text-4xl font-heading font-bold mb-8 text-primary"
        >
          Featured Projects
        </Animated>
        <Animated
          as="p"
          className="text-lg md:text-xl font-body text-foreground mx-auto max-w-2/3"
        >
          A selection of my work showcasing modern web development with React
          and Next.js
        </Animated>
      </div>
      <ProjectsSection limit={2} showAllButton />
      <ContactSection />
    </>
  );
}